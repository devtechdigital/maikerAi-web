import PageWrapper from "@/components/wrapper/page-wrapper";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <PageWrapper >
            <div className="flex min-w-screen justify-center py-16 px-4 min-h-[calc(100vh-8rem)]">
                <SignIn fallbackRedirectUrl="/" signUpFallbackRedirectUrl="/dashboard" />
            </div>
        </PageWrapper>
    );
}