'use client';

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { PageHeaderHeading } from "@/components/ui/page-header-heading";
import { PageHeaderDescription } from "@/components/ui/page-header-description";
import Footer from "@/components/wrapper/footer";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const POSTS_PER_PAGE = 5;
const MAX_PAGE_NUMBERS = 5;

export default function BlogPage() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const [currentPage, setCurrentPage] = useState(1);
  
  const categories = useQuery(api.blog.listCategories);
  const selectedCategory = categories?.find(cat => cat.slug === categorySlug);
  const allPosts = useQuery(api.blog.getPublishedPosts, { 
    categoryId: selectedCategory?._id 
  });

  // Calculate pagination
  const totalPosts = allPosts?.length || 0;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = allPosts?.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers: number[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(MAX_PAGE_NUMBERS / 2));
    let endPage = Math.min(totalPages, startPage + MAX_PAGE_NUMBERS - 1);

    // Adjust start if we're near the end
    if (endPage - startPage + 1 < MAX_PAGE_NUMBERS) {
      startPage = Math.max(1, endPage - MAX_PAGE_NUMBERS + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen flex flex-col">
        <PageHeader>
          <div className="flex flex-col gap-6">
            <div>
              <PageHeaderHeading>Blog</PageHeaderHeading>
              <PageHeaderDescription>
                Explore our latest insights, guides, and stories about AI development and technology.
              </PageHeaderDescription>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <Link
                href="/blog"
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  !categorySlug 
                    ? 'bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400' 
                    : 'bg-gray-100 hover:bg-green-50 hover:text-green-600 dark:bg-gray-800 dark:hover:bg-green-950/50 dark:hover:text-green-400'
                }`}
              >
                All Posts
              </Link>
              {categories?.map((category) => (
                <Link
                  key={category._id}
                  href={`/blog?category=${category.slug}`}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    category.slug === categorySlug
                      ? 'bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400'
                      : 'bg-gray-100 hover:bg-green-50 hover:text-green-600 dark:bg-gray-800 dark:hover:bg-green-950/50 dark:hover:text-green-400'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </PageHeader>

        <main className="w-full flex-grow py-8">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              {/* Blog Posts */}
              <div className="space-y-8 mb-12">
                {posts?.map((post) => (
                  <article key={post._id} className="group relative border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all hover:border-green-500 dark:hover:border-green-500/50">
                    <Link href={`/blog/${post.slug}`} className="block">
                      {post.featuredImage && (
                        <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <h2 className="text-2xl font-bold mb-2 transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                        {post.title}
                      </h2>
                    </Link>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <span>{new Date(post.publishedAt!).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readingTimeMinutes} min read</span>
                      {post.authorName && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{post.authorName}</span>
                        </>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {post.metaDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 pb-16">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-1">
                    {currentPage > 2 && (
                      <>
                        <Button
                          variant="ghost"
                          onClick={() => handlePageChange(1)}
                          className="w-8 h-8 p-0"
                        >
                          1
                        </Button>
                        {currentPage > 3 && (
                          <span className="text-muted-foreground mx-1">...</span>
                        )}
                      </>
                    )}

                    {getPageNumbers().map((pageNum) => (
                      <Button
                        key={pageNum}
                        variant={pageNum === currentPage ? "default" : "ghost"}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-8 h-8 p-0 ${
                          pageNum === currentPage
                            ? "bg-green-600 hover:bg-green-500 text-white"
                            : ""
                        }`}
                      >
                        {pageNum}
                      </Button>
                    ))}

                    {currentPage < totalPages - 1 && (
                      <>
                        {currentPage < totalPages - 2 && (
                          <span className="text-muted-foreground mx-1">...</span>
                        )}
                        <Button
                          variant="ghost"
                          onClick={() => handlePageChange(totalPages)}
                          className="w-8 h-8 p-0"
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Loading State */}
              {!posts && (
                <div className="text-center py-12">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {posts?.length === 0 && (
                <div className="text-center py-12 mb-16">
                  <h3 className="text-xl text-muted-foreground">No blog posts found</h3>
                  {categorySlug && (
                    <p className="mt-2 text-muted-foreground">
                      Try selecting a different category or view all posts
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageWrapper>
  );
} 