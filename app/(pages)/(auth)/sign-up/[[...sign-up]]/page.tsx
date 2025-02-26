"use client"
import PageWrapper from "@/components/wrapper/page-wrapper";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <PageWrapper >
            <div className="flex min-w-screen justify-center py-16 px-4 min-h-[calc(100vh-8rem)]">
                <SignUp fallbackRedirectUrl="/" signInFallbackRedirectUrl="/dashboard" />
            </div>
        </PageWrapper>
    );
}