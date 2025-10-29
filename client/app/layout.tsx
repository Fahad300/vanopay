import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import "../styles/global.css";

/**
 * Root layout component for Next.js App Router
 * This is required for all Next.js applications using the App Router
 * Includes Ant Design ConfigProvider for consistent theming
 */
export const metadata: Metadata = {
    title: "VanoPay",
    description: "VanoPay Application",
};

/**
 * Root layout component that wraps all pages
 * Wraps application with Ant Design ConfigProvider for theming and configuration
 * @param children - The page content to be rendered
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ConfigProvider
                    theme={{
                        // Configure Ant Design theme here
                        // token: {
                        //   // Customize colors, spacing, etc.
                        // },
                    }}
                >
                    {children}
                </ConfigProvider>
            </body>
        </html>
    );
}

