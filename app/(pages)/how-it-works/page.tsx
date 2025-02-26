import PageWrapper from "@/components/wrapper/page-wrapper";
import { ArrowRight, BadgeDollarSign, CheckCircle, Clock, Search, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata = {
  title: "How It Works | Maiker.Ai",
  description: "Learn how Maiker.Ai helps you find, purchase, and grow affordable micro SaaS businesses.",
};

export default function HowItWorksPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-800 to-blue-900 dark:from-white dark:via-green-300 dark:to-blue-300">
            How Maiker.Ai Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your journey to digital entrepreneurship made simple, affordable, and accessible.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">The Maiker.Ai Process</h2>
          
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Browse Business Opportunities</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Explore our marketplace of digital businesses at various stages of development. From early-stage ideas to revenue-generating ventures, filter by price, category, and required skills to find the perfect match for your goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Transparent pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Detailed descriptions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Skill requirements</span>
                </div>
              </div>
              <Link href="/business-stages">
                <Button variant="outline" className="rounded-full">
                  Explore Business Stages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 aspect-video flex items-center justify-center">
              <Search className="h-24 w-24 text-gray-400" />
              {/* Placeholder for actual screenshot or illustration */}
              {/* <Image src="/images/browse-businesses.png" alt="Browse businesses" width={600} height={400} className="rounded-lg" /> */}
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 aspect-video flex items-center justify-center">
              <BadgeDollarSign className="h-24 w-24 text-gray-400" />
              {/* Placeholder for actual screenshot or illustration */}
              {/* <Image src="/images/purchase-business.png" alt="Purchase a business" width={600} height={400} className="rounded-lg" /> */}
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Purchase Your Business</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Once you've found the right opportunity, purchasing is simple and secure. Each business comes with comprehensive documentation, code repositories (where applicable), and all the resources you need to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Secure transactions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Complete documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Immediate access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Launch & Grow</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                With your business acquired, it's time to launch and grow. Leverage our community, resources, and AI-powered tools to help you overcome challenges, implement improvements, and scale your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Community support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Growth resources</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">AI-powered assistance</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 aspect-video flex items-center justify-center">
              <Clock className="h-24 w-24 text-gray-400" />
              {/* Placeholder for actual screenshot or illustration */}
              {/* <Image src="/images/launch-grow.png" alt="Launch and grow" width={600} height={400} className="rounded-lg" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Why Choose Maiker.Ai</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 mb-6">
                <BadgeDollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Affordable Entry</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Start your entrepreneurial journey with as little as $100. Our tiered pricing model means you can find opportunities that match your budget, whether you're just starting out or looking to invest in a more established business.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reduced Risk</h3>
              <p className="text-gray-600 dark:text-gray-300">
                By purchasing a pre-vetted business concept or established venture, you significantly reduce the risk compared to starting from scratch. Our thorough documentation and transparent listings help you make informed decisions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a community of like-minded entrepreneurs who are on similar journeys. Share experiences, get advice, and collaborate with others who understand the challenges and opportunities of digital entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-3">Do I need technical skills?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Not necessarily. We offer businesses suitable for various skill levels. Each listing clearly indicates the technical requirements, and our community can help bridge skill gaps.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">How much time will I need to invest?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                This varies by business stage. Early-stage concepts might require more development time, while established businesses may need less initial setup but more ongoing management.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">What happens after purchase?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You'll receive immediate access to all business assets, documentation, and our community resources. Our team is also available to help with any questions during the transition.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Can I sell my business later?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! As you grow your business, you may choose to sell it on our marketplace, potentially at a profit, creating a cycle of entrepreneurship and opportunity.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/#faq">
              <Button variant="outline" className="rounded-full">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Entrepreneurial Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Register your interest today and be the first to know when we launch. Early registrants will receive special offers and priority access.
          </p>
          <Link href="/register-interest">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
              Register Your Interest
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
} 