"use client"
import PageWrapper from "@/components/wrapper/page-wrapper";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
    return (
        <PageWrapper >
            <div className="flex items-center justify-center py-16 px-4 min-h-[calc(100vh-8rem)]">
                <UserProfile path="/user-profile" routing="path" />
            </div>
        </PageWrapper>
    )
}


export default UserProfilePage;