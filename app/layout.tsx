import type { Metadata } from "next";
import { Theme } from "@yakad/ui";

export const metadata: Metadata = {
    title: "Yakad",
    description: "React/Next based UI/UX framework",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Theme mode="system">{children}</Theme>
            </body>
        </html>
    );
}
