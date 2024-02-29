import { ClerkProvider } from "@clerk/nextjs";

export default function platformLayout({children}:{children:React.ReactNode}){

    return (
        <ClerkProvider>{children}</ClerkProvider>
    )

}