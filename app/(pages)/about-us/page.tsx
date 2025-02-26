import PageWrapper from "@/components/wrapper/page-wrapper";
import { Clock, Heart, LightbulbIcon, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Maiker.Ai",
  description: "Learn about Maiker.Ai's vision to democratize entrepreneurship with affordable micro SaaS businesses.",
};

export default function AboutUsPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-800 to-blue-900 dark:from-white dark:via-green-300 dark:to-blue-300">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Democratizing entrepreneurship by making digital businesses accessible to everyone, regardless of technical skills or capital.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At Maiker.Ai, we envision a world where entrepreneurship is accessible to everyone. We believe that the traditional barriers to starting a business—large capital requirements, extensive technical knowledge, and high risk—shouldn't prevent talented individuals from pursuing their entrepreneurial dreams.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our platform is designed to level the playing field, offering businesses at various stages of development and price points, allowing everyone from complete beginners to experienced entrepreneurs to find opportunities that match their skills and budget.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 mb-4">
                  <LightbulbIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">Using AI and modern tools to simplify business acquisition and growth.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-300">Building a supportive network of like-minded entrepreneurs.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600 dark:text-gray-300">Reducing time-to-market through ready-to-implement business models.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300 mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-gray-600 dark:text-gray-300">Helping people build businesses they truly care about.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Maiker.Ai was born from a simple observation: there's an enormous gap between having an entrepreneurial spirit and successfully launching a digital business. Our founders experienced firsthand the challenges of starting online ventures—from technical hurdles to market validation and everything in between.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We realized that many great business ideas never make it to market because of these barriers. At the same time, we saw successful micro-SaaS businesses that were undervalued or underutilized because their founders had moved on to other projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              By creating a marketplace that connects these businesses with aspiring entrepreneurs—and providing the tools, resources, and community support to help them succeed—we're building a new pathway to digital entrepreneurship that's more accessible, affordable, and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe entrepreneurship should be accessible to everyone, regardless of technical background or financial resources. Our platform offers entry points for all skill levels and budgets.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide clear, honest information about each business listing, including its stage of development, potential, and limitations. No surprises, just informed decisions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We don't just sell businesses; we provide the tools, resources, and community support to help entrepreneurs succeed. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Maiker.Ai Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Be part of our journey to democratize entrepreneurship. Register your interest today and be the first to know when we launch.
          </p>
          <Link href="/register-interest">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
              Register Your Interest
            </Button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
} 