'use client';

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";

export default function SeedBlog() {
  const seedCategories = useMutation(api.blog_seed.seedBlogCategories);
  const seedPosts = useMutation(api.blog_seed.seedBlogPosts);
  const [result, setResult] = useState<string>("");

  const handleSeedCategories = async () => {
    try {
      const result = await seedCategories();
      setResult(JSON.stringify(result, null, 2));
    } catch (error) {
      setResult(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleSeedPosts = async () => {
    try {
      const result = await seedPosts();
      setResult(JSON.stringify(result, null, 2));
    } catch (error) {
      setResult(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleSeedAll = async () => {
    try {
      const categoriesResult = await seedCategories();
      const postsResult = await seedPosts();
      setResult(JSON.stringify({ categories: categoriesResult, posts: postsResult }, null, 2));
    } catch (error) {
      setResult(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Seeder</h1>
      <div className="space-x-4 mb-4">
        <button
          onClick={handleSeedCategories}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Seed Categories
        </button>
        <button
          onClick={handleSeedPosts}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Seed Posts
        </button>
        <button
          onClick={handleSeedAll}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Seed All
        </button>
      </div>
      {result && (
        <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto max-h-96">
          {result}
        </pre>
      )}
    </div>
  );
} 