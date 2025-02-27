"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Dialog } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { BadgeDollarSign, Menu, Users, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import ModeToggle from "../mode-toggle";
import { Button } from "../ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { UserProfile } from "../user-profile";

const navLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Business Stages",
    href: "/business-stages",
    description: "Explore businesses at every stage of development.",
  },
  {
    title: "How It Works",
    href: "/how-it-works",
    description: "Learn about our process and platform.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Insights and guides on AI development and technology.",
  },
  {
    title: "About Us",
    href: "/about-us",
    description: "Our mission, story, and values.",
  },
];

export default function NavBar() {
  const { userId } = useAuth();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md bg-white/80 dark:bg-black/80"
    >
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo - Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <Dialog>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader className="pb-6 border-b">
                <SheetTitle className="flex items-center gap-2">
                  <BadgeDollarSign className="h-5 w-5 text-green-600" />
                  <span>Maiker.Ai</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 mt-6">
                <div className="px-2 pb-4">
                  <h2 className="text-sm font-medium text-muted-foreground mb-2">
                    Navigation
                  </h2>
                  {navLinks.map((item) => (
                    <Link key={item.href} href={item.href} prefetch={true}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-base font-normal h-11 border border-muted/40 mb-2 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/50 dark:hover:text-green-400 transition-colors"
                      >
                        {item.title}
                      </Button>
                    </Link>
                  ))}
                </div>

                <div className="px-2 py-4 border-t">
                  <h2 className="text-sm font-medium text-muted-foreground mb-2">
                    Why Maiker.Ai?
                  </h2>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-normal h-11 border border-muted/40 mb-2 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/50 dark:hover:text-green-400 transition-colors"
                  >
                    <BadgeDollarSign className="h-4 w-4 mr-2" />
                    Affordable Entry
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-normal h-11 border border-muted/40 mb-2 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/50 dark:hover:text-green-400 transition-colors"
                  >
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    Reduced Risk
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-normal h-11 border border-muted/40 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/50 dark:hover:text-green-400 transition-colors"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Quick Launch
                  </Button>
                </div>

                {!userId && (
                  <div className="px-2 py-4 border-t mt-auto">
                    <Link href="/register-interest" prefetch={true}>
                      <Button className="w-full bg-green-600 hover:bg-green-500">
                        Register Your Interest
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Dialog>
          <Link href="/" prefetch={true} className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5 text-green-600" />
            <span className="font-semibold">Maiker.Ai</span>
          </Link>
        </div>

        {/* Logo - Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/" prefetch={true} className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5 text-green-600" />
            <span className="font-semibold">Maiker.Ai</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Business Stages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      title="Problem Identification"
                      href="/business-stages#problem-identification"
                    >
                      Early-stage ideas identifying problems worth solving. Start with minimal investment.
                    </ListItem>
                    <ListItem
                      title="Early Concept"
                      href="/business-stages#early-concept"
                    >
                      Blueprints and initial plans ready for execution. Validated ideas with clear roadmaps.
                    </ListItem>
                    <ListItem
                      title="MVP"
                      href="/business-stages#mvp"
                    >
                      Minimum viable products with basic functionality. Ready to launch and gather feedback.
                    </ListItem>
                    <ListItem
                      title="Growth Stage"
                      href="/business-stages#growth"
                    >
                      Early revenue businesses with proven demand. Established customer base ready to scale.
                    </ListItem>
                    <ListItem
                      title="Mature Business"
                      href="/business-stages#mature"
                    >
                      Established income streams with stable customer base. Optimized operations and proven models.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/how-it-works" prefetch={true}>
            <Button variant="ghost">How It Works</Button>
          </Link>
          <Link href="/blog" prefetch={true}>
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="/about-us" prefetch={true}>
            <Button variant="ghost">About Us</Button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          {!userId && (
            <Link href="/register-interest" prefetch={true}>
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-500 text-white"
              >
                Register Interest
              </Button>
            </Link>
          )}
          {userId && <UserProfile />}
        </div>
      </div>
    </motion.div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
