"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { ArrowRight, BadgeDollarSign, Lightbulb, Rocket, BarChart, Building, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Metadata needs to be moved to a separate layout file when using client components
// export const metadata = {
//   title: "Business Stages | Maiker.Ai",
//   description: "Explore businesses at every stage of development - from ideas to revenue-generating ventures.",
// };

// Create a client-side wrapper component for animations
function BusinessStagesContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-800 to-blue-900 dark:from-white dark:via-green-300 dark:to-blue-300">
            Business Stages
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find the perfect entry point for your entrepreneurial journey, from early-stage ideas to established businesses.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Choose Your Starting Point</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              At Maiker.Ai, we understand that entrepreneurs have different skills, resources, and risk tolerances. That's why we offer businesses at various stages of development, allowing you to find the perfect match for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Stage 1: Problem Identification */}
      <section id="problem-identification" className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900">Stage 1</Badge>
              <h2 className="text-3xl font-bold mb-4">Problem Identification</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Early-stage ideas identifying problems worth solving. These are validated problem spaces with market research and initial concept exploration.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full">
                    <BadgeDollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Investment: $100-$300</h3>
                    <p className="text-gray-600 dark:text-gray-300">The most affordable entry point for aspiring entrepreneurs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full">
                    <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Risk Level: Higher</h3>
                    <p className="text-gray-600 dark:text-gray-300">These ideas require more validation and development work.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full">
                    <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Perfect For:</h3>
                    <p className="text-gray-600 dark:text-gray-300">Visionaries who want to shape a business from its earliest stages.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">What's Included:</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Comprehensive market research</li>
                  <li>Problem validation documentation</li>
                  <li>Initial customer personas</li>
                  <li>Competitive analysis</li>
                  <li>Potential solution directions</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Lightbulb className="h-24 w-24 text-blue-500 dark:text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Example Businesses</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>AI-powered content calendar tool</li>
                  <li>Freelancer client management system</li>
                  <li>Niche community platform</li>
                  <li>Specialized productivity tracker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 2: Early Concept */}
      <section id="early-concept" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Rocket className="h-24 w-24 text-green-500 dark:text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Example Businesses</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>SaaS dashboard template with business logic</li>
                  <li>E-commerce platform for digital products</li>
                  <li>API-based service with documentation</li>
                  <li>Mobile app concept with wireframes</li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900">Stage 2</Badge>
              <h2 className="text-3xl font-bold mb-4">Early Concept</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Blueprints and initial plans ready for execution. These are validated ideas with clear roadmaps and initial design work.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
                    <BadgeDollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Investment: $300-$1,000</h3>
                    <p className="text-gray-600 dark:text-gray-300">A moderate investment for a more developed concept.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
                    <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Risk Level: Moderate</h3>
                    <p className="text-gray-600 dark:text-gray-300">More validation has been done, but implementation is still needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
                    <Rocket className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Perfect For:</h3>
                    <p className="text-gray-600 dark:text-gray-300">Builders who want a clear plan but still want to influence the implementation.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">What's Included:</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Detailed business plan</li>
                  <li>Wireframes and design mockups</li>
                  <li>Technical architecture</li>
                  <li>Feature roadmap</li>
                  <li>Initial marketing strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: MVP */}
      <section id="mvp" className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900">Stage 3</Badge>
              <h2 className="text-3xl font-bold mb-4">Minimum Viable Product</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Functional products with basic features ready to launch and gather feedback. These businesses have working code and can be deployed immediately.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-full">
                    <BadgeDollarSign className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Investment: $1,000-$5,000</h3>
                    <p className="text-gray-600 dark:text-gray-300">A significant investment for a working product.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-full">
                    <ShieldCheck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Risk Level: Moderate to Low</h3>
                    <p className="text-gray-600 dark:text-gray-300">The product works, but market fit may still need refinement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-full">
                    <Rocket className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Perfect For:</h3>
                    <p className="text-gray-600 dark:text-gray-300">Entrepreneurs who want to skip development and focus on marketing and growth.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">What's Included:</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Functional codebase</li>
                  <li>Deployment instructions</li>
                  <li>User documentation</li>
                  <li>Initial user feedback</li>
                  <li>Growth strategy recommendations</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Rocket className="h-24 w-24 text-purple-500 dark:text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Example Businesses</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Working SaaS application with core features</li>
                  <li>Mobile app with basic functionality</li>
                  <li>E-commerce store with initial product listings</li>
                  <li>Membership site with content framework</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 4: Growth Stage */}
      <section id="growth" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart className="h-24 w-24 text-orange-500 dark:text-orange-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Example Businesses</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>SaaS with paying customers and growth trajectory</li>
                  <li>Content site with established traffic and monetization</li>
                  <li>E-commerce store with consistent monthly sales</li>
                  <li>Membership community with active subscribers</li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900">Stage 4</Badge>
              <h2 className="text-3xl font-bold mb-4">Growth Stage</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Early revenue businesses with proven demand. These ventures have established a customer base and are ready to scale.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-1.5 rounded-full">
                    <BadgeDollarSign className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Investment: $5,000-$20,000</h3>
                    <p className="text-gray-600 dark:text-gray-300">A substantial investment for a business with proven revenue.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-1.5 rounded-full">
                    <ShieldCheck className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Risk Level: Low</h3>
                    <p className="text-gray-600 dark:text-gray-300">These businesses have proven market fit and revenue streams.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-1.5 rounded-full">
                    <BarChart className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Perfect For:</h3>
                    <p className="text-gray-600 dark:text-gray-300">Growth-focused entrepreneurs who want to scale an already successful business.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">What's Included:</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Established customer base</li>
                  <li>Revenue history and projections</li>
                  <li>Marketing channels and analytics</li>
                  <li>Complete codebase and infrastructure</li>
                  <li>Operational documentation and processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 5: Mature Business */}
      <section id="mature" className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900">Stage 5</Badge>
              <h2 className="text-3xl font-bold mb-4">Mature Business</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Established income streams with stable customer base. These businesses have optimized operations and proven models.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-1.5 rounded-full">
                    <BadgeDollarSign className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Investment: $20,000+</h3>
                    <p className="text-gray-600 dark:text-gray-300">A significant investment for a fully established business.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-1.5 rounded-full">
                    <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Risk Level: Very Low</h3>
                    <p className="text-gray-600 dark:text-gray-300">These businesses have consistent revenue and established processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-1.5 rounded-full">
                    <Building className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Perfect For:</h3>
                    <p className="text-gray-600 dark:text-gray-300">Experienced entrepreneurs or investors looking for stable returns.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">What's Included:</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Loyal customer base</li>
                  <li>Consistent revenue history</li>
                  <li>Established brand and market position</li>
                  <li>Complete business operations</li>
                  <li>Growth opportunities and expansion plans</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Building className="h-24 w-24 text-red-500 dark:text-red-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Example Businesses</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Established SaaS with consistent MRR</li>
                  <li>Content business with diversified revenue streams</li>
                  <li>E-commerce brand with loyal customer base</li>
                  <li>Digital product suite with established distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect Business</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Register your interest today to be notified when our marketplace launches. Early registrants will receive special offers and priority access.
          </p>
          <Link href="/register-interest">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
              Register Your Interest
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

// Main page component
export default function BusinessStagesPage() {
  return (
    <PageWrapper>
      <BusinessStagesContent />
    </PageWrapper>
  );
} 