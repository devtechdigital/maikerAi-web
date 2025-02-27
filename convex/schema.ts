import { defineSchema, defineTable } from "convex/server"
import { Infer, v } from "convex/values"

export const INTERVALS = {
    MONTH: "month",
    YEAR: "year",
} as const;

export const intervalValidator = v.union(
    v.literal(INTERVALS.MONTH),
    v.literal(INTERVALS.YEAR),
);

export type Interval = Infer<typeof intervalValidator>;

// Define a price object structure that matches your data
const priceValidator = v.object({
    amount: v.number(),
    polarId: v.string(),
});

// Define a prices object structure for a specific interval
const intervalPricesValidator = v.object({
    usd: priceValidator,
});

// Blog post status options
export const BLOG_POST_STATUS = {
    DRAFT: "draft",
    PUBLISHED: "published",
} as const;

export const blogPostStatusValidator = v.union(
    v.literal(BLOG_POST_STATUS.DRAFT),
    v.literal(BLOG_POST_STATUS.PUBLISHED),
);

export default defineSchema({
    users: defineTable({
        createdAt: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        image: v.optional(v.string()),
        userId: v.string(),
        subscription: v.optional(v.string()),
        credits: v.optional(v.string()),
        tokenIdentifier: v.string(),
    }).index("by_token", ["tokenIdentifier"]),
    plans: defineTable({
        key: v.string(),
        name: v.string(),
        description: v.string(),
        polarProductId: v.string(),
        prices: v.object({
            month: v.optional(intervalPricesValidator),
            year: v.optional(intervalPricesValidator),
        }),
    })
        .index("key", ["key"])
        .index("polarProductId", ["polarProductId"]),
    subscriptions: defineTable({
        userId: v.optional(v.string()),
        polarId: v.optional(v.string()),
        polarPriceId: v.optional(v.string()),
        currency: v.optional(v.string()),
        interval: v.optional(v.string()),
        status: v.optional(v.string()),
        currentPeriodStart: v.optional(v.number()),
        currentPeriodEnd: v.optional(v.number()),
        cancelAtPeriodEnd: v.optional(v.boolean()),
        amount: v.optional(v.number()),
        startedAt: v.optional(v.number()),
        endsAt: v.optional(v.number()),
        endedAt: v.optional(v.number()),
        canceledAt: v.optional(v.number()),
        customerCancellationReason: v.optional(v.string()),
        customerCancellationComment: v.optional(v.string()),
        metadata: v.optional(v.any()),
        customFieldData: v.optional(v.any()),
        customerId: v.optional(v.string()),
    })
        .index("userId", ["userId"])
        .index("polarId", ["polarId"]),
    webhookEvents: defineTable({
        type: v.string(),
        polarEventId: v.string(),
        createdAt: v.string(),
        modifiedAt: v.string(),
        data: v.any(),
    })
        .index("type", ["type"])
        .index("polarEventId", ["polarEventId"]),
    images: defineTable({
        storageId: v.string(),
        name: v.string(),
        type: v.string(),
        size: v.number(),
        description: v.optional(v.string()),
        uploadedBy: v.string(),
        uploadedAt: v.number(),
        url: v.optional(v.string()),
    })
        .index("by_uploader", ["uploadedBy"])
        .index("by_storage_id", ["storageId"]),
    registrations: defineTable({
        name: v.string(),
        email: v.string(),
        businessInterest: v.string(),
        businessAreas: v.array(v.string()),
        budget: v.string(),
        experience: v.optional(v.string()),
        updates: v.boolean(),
        createdAt: v.string(),
        status: v.string(),
    }),
    blogCategories: defineTable({
        name: v.string(),
        slug: v.string(),
        description: v.optional(v.string()),
        order: v.number(),
        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_slug", ["slug"]),
    blogPosts: defineTable({
        title: v.string(),
        slug: v.string(),
        content: v.string(), // Rich text content stored as JSON string
        categoryId: v.id("blogCategories"),
        authorId: v.string(), // User ID of the author
        authorName: v.string(), // Denormalized author name
        featuredImage: v.optional(v.string()), // Storage ID for the image
        metaDescription: v.optional(v.string()),
        status: blogPostStatusValidator,
        publishedAt: v.optional(v.number()),
        createdAt: v.number(),
        updatedAt: v.number(),
        tags: v.array(v.string()),
        readingTimeMinutes: v.number(),
    })
        .index("by_slug", ["slug"])
        .index("by_category", ["categoryId"])
        .index("by_status", ["status"])
        .index("by_status_and_date", ["status", "publishedAt"]),
})