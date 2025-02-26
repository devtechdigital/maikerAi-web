"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "motion/react"

const faqItems = [
    {
        question: "What is Maiker.Ai?",
        answer: "Maiker.Ai is a marketplace for affordable micro SaaS businesses at various stages of development. We connect aspiring entrepreneurs with digital business opportunities that start from as little as $100, providing tools, guidance, and community support to help you succeed."
    },
    {
        question: "How do business stages work?",
        answer: "We categorize businesses into five stages: Problem Identification (early ideas), Early Concept (blueprints), MVP (minimum viable product), Growth Stage (early revenue), and Mature Business (established income). Each stage represents a different level of development, risk, and price point, allowing you to choose according to your skills and investment capacity."
    },
    {
        question: "Why should I buy a business through Maiker.Ai?",
        answer: "Maiker.Ai reduces the risk, time, and technical barriers to starting an online business. We provide pre-vetted listings, thorough documentation, AI-powered assistance, and a supportive community. This means you can launch faster, with lower risk, and with ongoing support compared to starting from scratch."
    },
    {
        question: "What's included when I purchase a business?",
        answer: "Depending on the business stage, you'll receive some combination of business blueprints, market research, technical documentation, code repositories, existing customers (for later stages), and ongoing support through our community. Each listing will clearly specify what's included."
    },
    {
        question: "Do I need technical skills to run these businesses?",
        answer: "Not necessarily. We offer businesses suitable for various skill levels. Early-stage concepts might require more technical implementation, while mature businesses often have established processes that require less technical involvement. We also provide resources and community support to help bridge skill gaps."
    },
    {
        question: "How do I get started?",
        answer: "Register your interest on our website, and we'll keep you updated as we launch. Once live, you'll be able to browse businesses by stage, choose one that fits your goals and budget, purchase it, and access our support tools and community to help you launch and grow."
    }
]

export function AccordionComponent() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index + 1}`}
                            className="border border-gray-200 dark:border-gray-800 rounded-lg mb-4 px-2"
                        >
                            <AccordionTrigger className="hover:no-underline py-4 px-2">
                                <span className="font-medium text-left text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {item.question}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-2 pb-4">
                                <p className="text-gray-600 dark:text-gray-300">
                                    {item.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    );
}
