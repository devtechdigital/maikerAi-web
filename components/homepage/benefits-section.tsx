"use client";
import { motion } from "motion/react";
import { 
  BadgeDollarSign, 
  Shield, 
  Clock, 
  Users, 
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    title: "Affordable Entry",
    description: "Start your entrepreneurial journey with as little as $100. Choose from a variety of price points that fit your budget.",
    icon: <BadgeDollarSign className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Reduced Risk",
    description: "Get pre-vetted listings, thorough documentation, and established business models to minimize your entrepreneurial risk.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Quick Launch",
    description: "Skip months of development and planning. Get to market faster with ready-to-implement business blueprints.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Community Support",
    description: "Join a supportive community of like-minded entrepreneurs for guidance, networking, and collaboration.",
    icon: <Users className="h-6 w-6" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Maiker.Ai?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're democratizing entrepreneurship by making it accessible, affordable, and less risky.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/about-us"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Learn more about our mission
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 