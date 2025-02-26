import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveRegistration = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    businessInterest: v.string(),
    businessAreas: v.array(v.string()),
    budget: v.string(),
    experience: v.optional(v.string()),
    updates: v.boolean(),
  },
  handler: async (ctx, args) => {
    const registrationId = await ctx.db.insert("registrations", {
      name: args.name,
      email: args.email,
      businessInterest: args.businessInterest,
      businessAreas: args.businessAreas,
      budget: args.budget,
      experience: args.experience,
      updates: args.updates,
      createdAt: new Date().toISOString(),
      status: "pending",
    });

    // Here you would typically integrate with your email service
    // For example, using Resend, SendGrid, etc.
    // await sendWelcomeEmail(args.email, args.name);

    return registrationId;
  },
}); 