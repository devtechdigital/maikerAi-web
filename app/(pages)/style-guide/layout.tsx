import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide | Maiker.Ai",
  description: "Design system and style guide for Maiker.Ai",
};

export default function StyleGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 