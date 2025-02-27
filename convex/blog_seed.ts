import { mutation } from "./_generated/server";
import { BLOG_POST_STATUS } from "./schema";
import { Id } from "./_generated/dataModel";

export const seedBlogCategories = mutation({
  handler: async (ctx) => {
    // Delete existing categories
    const existingCategories = await ctx.db.query("blogCategories").collect();
    await Promise.all(
      existingCategories.map(category => ctx.db.delete(category._id))
    );

    const categories = [
      {
        name: "AI Development",
        slug: "ai-development",
        description: "Insights and guides about artificial intelligence development, machine learning, and neural networks",
        order: 1,
      },
      {
        name: "Developer Tools",
        slug: "developer-tools",
        description: "Reviews and tutorials about development tools, IDEs, and productivity enhancers",
        order: 2,
      },
      {
        name: "Coding Best Practices",
        slug: "coding-best-practices",
        description: "Tips, tricks, and standards for writing better code and improving development workflows",
        order: 3,
      },
      {
        name: "AI Tools & Applications",
        slug: "ai-tools-applications",
        description: "Exploring practical applications of AI in various tools and software solutions",
        order: 4,
      },
      {
        name: "Product Development",
        slug: "product-development",
        description: "Insights into building and scaling software products with AI integration",
        order: 5,
      },
      {
        name: "Tech Innovation",
        slug: "tech-innovation",
        description: "Latest trends and innovations in technology and artificial intelligence",
        order: 6,
      },
      {
        name: "Developer Experience",
        slug: "developer-experience",
        description: "Improving the development experience and workflow optimization",
        order: 7,
      },
      {
        name: "AI Ethics & Safety",
        slug: "ai-ethics-safety",
        description: "Discussions about responsible AI development and ethical considerations",
        order: 8,
      },
      {
        name: "Software Architecture",
        slug: "software-architecture",
        description: "Best practices in designing and structuring software applications",
        order: 9,
      },
      {
        name: "AI Business Solutions",
        slug: "ai-business-solutions",
        description: "How businesses can leverage AI to improve their operations and products",
        order: 10,
      },
      {
        name: "Development Tutorials",
        slug: "development-tutorials",
        description: "Step-by-step guides and tutorials for developers",
        order: 11,
      },
      {
        name: "Industry Insights",
        slug: "industry-insights",
        description: "Analysis and perspectives on the software and AI industry",
        order: 12,
      }
    ];

    const timestamp = Date.now();
    const results = await Promise.all(
      categories.map(category =>
        ctx.db.insert("blogCategories", {
          ...category,
          createdAt: timestamp,
          updatedAt: timestamp,
        })
      )
    );

    return {
      status: "success",
      message: "Categories seeded successfully (existing records were replaced)",
      count: results.length,
      categoryIds: results
    };
  },
});

export const seedBlogPosts = mutation({
  handler: async (ctx) => {
    // Delete existing posts
    const existingPosts = await ctx.db.query("blogPosts").collect();
    await Promise.all(
      existingPosts.map(post => ctx.db.delete(post._id))
    );

    // Get all categories
    const categories = await ctx.db.query("blogCategories").collect();
    if (categories.length === 0) {
      return { status: "error", message: "No categories found. Please seed categories first." };
    }

    // Helper function to find category ID by slug
    const getCategoryId = (slug: string): Id<"blogCategories"> => {
      const category = categories.find(c => c.slug === slug);
      if (!category) throw new Error(`Category not found: ${slug}`);
      return category._id;
    };

    const posts = [
      {
        title: "Getting Started with AI Development in 2024",
        slug: "getting-started-with-ai-development-2024",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "The landscape of AI development has evolved significantly in 2024. This guide will help you navigate the essential tools, frameworks, and best practices for getting started with AI development."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("ai-development"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "A comprehensive guide to starting AI development in 2024, covering essential tools, frameworks, and best practices.",
        tags: ["AI", "Machine Learning", "Getting Started", "Development"],
        readingTimeMinutes: 8,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "10 Must-Have Developer Tools for AI Projects",
        slug: "must-have-developer-tools-ai-projects",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Discover the essential developer tools that will supercharge your AI development workflow. From code editors to model training platforms, we've got you covered."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("developer-tools"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Explore the top 10 developer tools that are essential for AI project development and management.",
        tags: ["Tools", "AI", "Development", "Productivity"],
        readingTimeMinutes: 12,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "Clean Code Practices in AI Development",
        slug: "clean-code-practices-ai-development",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Learn how to write maintainable and efficient code for AI applications. We'll cover best practices, common pitfalls, and practical examples."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("coding-best-practices"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Essential clean code practices and patterns for AI development projects.",
        tags: ["Clean Code", "Best Practices", "AI", "Development"],
        readingTimeMinutes: 15,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "The Future of AI-Powered Development Tools",
        slug: "future-ai-powered-development-tools",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Explore upcoming trends and innovations in AI-powered development tools. What can we expect in the near future?"
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("tech-innovation"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "A deep dive into the future of AI-powered development tools and their impact on software development.",
        tags: ["AI", "Future Tech", "Innovation", "Tools"],
        readingTimeMinutes: 10,
        status: BLOG_POST_STATUS.DRAFT,
      },
      {
        title: "Building Ethical AI Systems: A Guide",
        slug: "building-ethical-ai-systems-guide",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Understanding the importance of ethics in AI development and implementing practical strategies for building responsible AI systems."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("ai-ethics-safety"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Learn about ethical considerations and best practices for developing responsible AI systems.",
        tags: ["AI Ethics", "Responsible AI", "Development", "Best Practices"],
        readingTimeMinutes: 18,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "Optimizing AI Model Performance: Best Practices",
        slug: "optimizing-ai-model-performance",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Learn advanced techniques for optimizing AI model performance and efficiency in production environments."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("ai-development"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Advanced techniques and strategies for optimizing AI model performance in production.",
        tags: ["AI", "Performance", "Optimization", "Machine Learning"],
        readingTimeMinutes: 14,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "AI Development Workflow Automation",
        slug: "ai-development-workflow-automation",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Discover how to automate your AI development workflow for increased productivity and efficiency."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("developer-tools"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "A comprehensive guide to automating your AI development workflow and improving productivity.",
        tags: ["Automation", "Workflow", "AI", "Productivity"],
        readingTimeMinutes: 10,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "Testing Strategies for AI Applications",
        slug: "testing-strategies-ai-applications",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Essential testing strategies and frameworks for ensuring reliability in AI applications."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("coding-best-practices"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Learn effective testing strategies and best practices for AI application development.",
        tags: ["Testing", "AI", "Quality Assurance", "Development"],
        readingTimeMinutes: 13,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "Scaling AI Systems: Architecture Guide",
        slug: "scaling-ai-systems-architecture",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "A comprehensive guide to designing scalable architectures for AI systems."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("software-architecture"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Learn how to design and implement scalable architectures for AI systems.",
        tags: ["Architecture", "Scaling", "AI", "System Design"],
        readingTimeMinutes: 16,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "AI Integration Patterns for Business",
        slug: "ai-integration-patterns-business",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Explore common patterns and strategies for integrating AI solutions into business applications."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("ai-business-solutions"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Discover effective patterns for integrating AI solutions into business applications.",
        tags: ["Business", "Integration", "AI", "Patterns"],
        readingTimeMinutes: 11,
        status: BLOG_POST_STATUS.PUBLISHED,
      },
      {
        title: "Security Best Practices in AI Development",
        slug: "security-best-practices-ai-development",
        content: JSON.stringify({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Essential security considerations and best practices for AI development and deployment."
                }
              ]
            }
          ]
        }),
        categoryId: getCategoryId("coding-best-practices"),
        authorId: "system",
        authorName: "Maiker Team",
        metaDescription: "Learn about security best practices and considerations in AI development.",
        tags: ["Security", "AI", "Best Practices", "Development"],
        readingTimeMinutes: 15,
        status: BLOG_POST_STATUS.PUBLISHED,
      }
    ];

    const timestamp = Date.now();
    const results = await Promise.all(
      posts.map(post =>
        ctx.db.insert("blogPosts", {
          ...post,
          publishedAt: post.status === BLOG_POST_STATUS.PUBLISHED ? timestamp : undefined,
          createdAt: timestamp,
          updatedAt: timestamp,
        })
      )
    );

    return {
      status: "success",
      message: "Posts seeded successfully (existing records were replaced)",
      count: results.length,
      postIds: results
    };
  },
}); 