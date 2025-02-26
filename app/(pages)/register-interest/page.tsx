"use client";

import PageWrapper from "@/components/wrapper/page-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, BadgeDollarSign, CheckCircle, ShieldCheck, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  businessInterest: z.string({
    required_error: "Please select what type of business you're interested in.",
  }),
  businessAreas: z.array(z.string()).min(1, {
    message: "Please select at least one business area.",
  }),
  budget: z.string({
    required_error: "Please select your budget range.",
  }),
  experience: z.string().optional(),
  updates: z.boolean().default(true),
});

// Business areas options
const businessAreas = [
  { value: "saas", label: "SaaS / Software" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "content", label: "Content & Media" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "marketplace", label: "Marketplace" },
  { value: "ai", label: "AI / Machine Learning" },
  { value: "web3", label: "Web3 / Blockchain" },
  { value: "automation", label: "Automation Tools" },
  { value: "education", label: "Education / E-learning" },
  { value: "other", label: "Other" },
] as const;

export default function RegisterInterestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const saveRegistration = useMutation(api.register.saveRegistration);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessAreas: [],
      experience: "",
      updates: true,
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      await saveRegistration(values);
      setIsSuccess(true);
      toast.success("Registration successful! We'll be in touch soon.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-800 to-blue-900 dark:from-white dark:via-green-300 dark:to-blue-300">
            Register Your Interest
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be the first to know when we launch. Early registrants will receive special offers and priority access.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {isSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for registering your interest in Maiker.Ai. We'll keep you updated on our launch and send you exclusive offers.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    In the meantime, feel free to explore our website to learn more about our business stages and how our platform works.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="businessInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select what type of business you're interested in" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="problem-identification">Problem Identification (Early Ideas)</SelectItem>
                                <SelectItem value="early-concept">Early Concept (Blueprints)</SelectItem>
                                <SelectItem value="mvp">MVP (Working Product)</SelectItem>
                                <SelectItem value="growth">Growth Stage (Early Revenue)</SelectItem>
                                <SelectItem value="mature">Mature Business (Established Income)</SelectItem>
                                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="businessAreas"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Areas of Interest</FormLabel>
                            <FormDescription>
                              Select all areas that you have experience in or are interested in pursuing.
                            </FormDescription>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              {businessAreas.map((area) => (
                                <FormField
                                  key={area.value}
                                  control={form.control}
                                  name="businessAreas"
                                  render={({ field }) => (
                                    <FormItem
                                      key={area.value}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(area.value)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, area.value])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== area.value
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {area.label}
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="100-300">$100 - $300</SelectItem>
                                <SelectItem value="300-1000">$300 - $1,000</SelectItem>
                                <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                                <SelectItem value="5000-20000">$5,000 - $20,000</SelectItem>
                                <SelectItem value="20000+">$20,000+</SelectItem>
                                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Entrepreneurial Experience (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your background and what you're looking to achieve."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This helps us understand your needs better.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="updates"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Keep me updated about Maiker.Ai
                              </FormLabel>
                              <FormDescription>
                                You can unsubscribe at any time.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-green-600 hover:bg-green-500 text-white rounded-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Register Interest"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
            
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Register?</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <BadgeDollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Early Access Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Be the first to access our marketplace with exclusive discounts and special offers only available to early registrants.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Priority Selection</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get first pick of the most promising business opportunities before they're available to the general public.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Based on your interests and budget, we'll curate a selection of businesses that match your entrepreneurial goals.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/30 p-6 rounded-xl mt-8">
                  <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                  <ol className="space-y-3 list-decimal pl-5">
                    <li className="text-gray-600 dark:text-gray-300">
                      You'll receive a confirmation email with more information about Maiker.Ai.
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      We'll keep you updated on our launch timeline and development progress.
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      Prior to launch, you'll get early access to browse our marketplace.
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      When we launch, you'll receive your exclusive early registrant benefits.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Early Testers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The concept of buying a business at various stages is brilliant. It makes entrepreneurship accessible to everyone, regardless of technical skills or capital."
              </p>
              <p className="font-semibold">Sarah J.</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Digital Marketer</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "I've always wanted to run my own SaaS business but didn't have the technical skills to build one from scratch. Maiker.Ai solves this problem perfectly."
              </p>
              <p className="font-semibold">Michael T.</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Business Consultant</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The range of business stages means I can start small and work my way up as I gain experience. It's like an entrepreneurship ladder that anyone can climb."
              </p>
              <p className="font-semibold">Elena R.</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Freelance Designer</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
} 