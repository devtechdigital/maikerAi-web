'use client';

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { PageHeaderHeading } from "@/components/ui/page-header-heading";
import { PageHeaderDescription } from "@/components/ui/page-header-description";
import Footer from "@/components/wrapper/footer";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = useQuery(api.blog.getPostBySlug, { 
    slug: slug as string 
  });

  return (
    <PageWrapper>
      <div className="relative min-h-screen flex flex-col">
        <PageHeader>
          <div className="flex flex-col gap-6">
            <Link href="/blog">
              <Button variant="ghost" className="pl-0 hover:pl-2 transition-all group">
                <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Button>
            </Link>

            {post && (
              <div className="flex flex-col space-y-3">
                <PageHeaderHeading>{post.title}</PageHeaderHeading>
                <div className="flex items-center text-sm text-muted-foreground">
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
              </div>
            )}
          </div>
        </PageHeader>

        <main className="w-full flex-grow py-8">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              {post ? (
                <>
                  {post.featuredImage && (
                    <div className="aspect-video w-full mb-8 overflow-hidden rounded-lg">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <article className="prose prose-green dark:prose-invert max-w-none mb-16">
                    <PageHeaderDescription className="text-xl mb-8 text-left">
                      {post.metaDescription}
                    </PageHeaderDescription>
                    
                    <div 
                      className="text-left"
                      dangerouslySetInnerHTML={{ 
                        __html: JSON.parse(post.content).content
                          .map((block: any) => {
                            if (block.type === 'paragraph') {
                              return `<p class="text-left">${block.content.map((content: any) => content.text).join('')}</p>`;
                            }
                            return '';
                          })
                          .join('\n')
                      }} 
                    />
                  </article>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto"></div>
                  </div>
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