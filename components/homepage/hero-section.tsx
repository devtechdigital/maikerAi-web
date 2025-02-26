"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative flex flex-col items-center justify-center pt-32 pb-16 w-full">
        <div className="animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section
      className="relative flex flex-col items-center justify-center pt-32 pb-16 w-full"
      aria-label="Maiker.Ai Hero Section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 dark:bg-green-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="space-y-6 text-center max-w-4xl px-4">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-fit rounded-full border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/30 px-4 py-1 mb-6"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-green-900 dark:text-green-200">
            <Sparkles className="h-4 w-4" />
            <span>Affordable Micro SaaS Marketplace</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-800 to-blue-900 dark:from-white dark:via-green-300 dark:to-blue-300 animate-gradient-x pb-2"
        >
          Your Gateway to <br className="hidden sm:block" />
          Digital Entrepreneurship
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Start your online business journey with as little as $100. Choose from businesses at any stage - from ideas to revenue-generating ventures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 pt-4"
        >
          <Link href="/register-interest">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-500 text-white rounded-full px-8 h-12"
            >
              Register Your Interest
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/business-stages">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 border-2"
            >
              Explore Businesses
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
