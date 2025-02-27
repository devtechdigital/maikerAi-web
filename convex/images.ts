import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ConvexError } from "convex/values";
import { Id } from "./_generated/dataModel";

// Schema for image metadata
const imageMetadataSchema = {
  storageId: v.string(),
  name: v.string(),
  type: v.string(),
  size: v.number(),
  description: v.optional(v.string()),
  uploadedBy: v.string(),
  uploadedAt: v.number(),
};

// Generate a URL for uploading an image
export const generateUploadUrl = mutation(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new ConvexError("You must be logged in to upload images");
  }

  return await ctx.storage.generateUploadUrl();
});

// Save image metadata after upload
export const saveImage = mutation({
  args: {
    storageId: v.string(),
    name: v.string(),
    type: v.string(),
    size: v.number(),
    description: v.optional(v.string()),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("You must be logged in to save images");
    }

    const image = {
      storageId: args.storageId,
      name: args.name,
      type: args.type,
      size: args.size,
      description: args.description,
      uploadedBy: identity.subject,
      uploadedAt: Date.now(),
    };

    return await ctx.db.insert("images", image);
  },
});

// Get URL for serving an image
export const getImageUrl = query({
  args: { storageId: v.string() },
  async handler(ctx, args) {
    return await ctx.storage.getUrl(args.storageId);
  },
});

// List all images
export const listImages = query({
  args: {},
  async handler(ctx) {
    const images = await ctx.db
      .query("images")
      .order("desc")
      .collect();
    
    // Generate fresh URLs for each image
    const imagesWithUrls = await Promise.all(
      images.map(async (image) => ({
        ...image,
        url: await ctx.storage.getUrl(image.storageId)
      }))
    );
    
    return imagesWithUrls;
  },
});

// Delete an image
export const deleteImage = mutation({
  args: { imageId: v.id("images") },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("You must be logged in to delete images");
    }

    const image = await ctx.db.get(args.imageId);
    if (!image) {
      throw new ConvexError("Image not found");
    }

    if (image.uploadedBy !== identity.subject) {
      throw new ConvexError("You can only delete your own images");
    }

    await ctx.storage.delete(image.storageId);
    await ctx.db.delete(args.imageId);
  },
}); 