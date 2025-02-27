import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { BLOG_POST_STATUS } from "./schema";
import { Id } from "./_generated/dataModel";

// Category Functions
export const createCategory = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const category = {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    return await ctx.db.insert("blogCategories", category);
  },
});

export const listCategories = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("blogCategories")
      .collect();
  },
});

// Blog Post Functions
export const createPost = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    categoryId: v.id("blogCategories"),
    authorId: v.string(),
    authorName: v.string(),
    featuredImage: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
    tags: v.array(v.string()),
    readingTimeMinutes: v.number(),
  },
  handler: async (ctx, args) => {
    const post = {
      ...args,
      status: BLOG_POST_STATUS.DRAFT,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    return await ctx.db.insert("blogPosts", post);
  },
});

export const publishPost = mutation({
  args: {
    id: v.id("blogPosts"),
  },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) throw new Error("Post not found");
    
    return await ctx.db.patch(args.id, {
      status: BLOG_POST_STATUS.PUBLISHED,
      publishedAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

export const getPublishedPosts = query({
  args: {
    categoryId: v.optional(v.id("blogCategories")),
  },
  handler: async (ctx, { categoryId }) => {
    let q = ctx.db
      .query("blogPosts")
      .withIndex("by_status_and_date", (q) => 
        q.eq("status", BLOG_POST_STATUS.PUBLISHED)
      );

    if (categoryId) {
      q = q.filter((q) => q.eq(q.field("categoryId"), categoryId));
    }

    return await q.collect();
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blogPosts")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();

    if (!post) {
      return null;
    }

    return post;
  },
}); 