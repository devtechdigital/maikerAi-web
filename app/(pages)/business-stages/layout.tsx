import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Stages | Maiker.Ai",
  description: "Explore businesses at every stage of development - from ideas to revenue-generating ventures.",
};

export default function BusinessStagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 