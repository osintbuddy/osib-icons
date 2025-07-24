import { PostHogProvider } from "@/components/PostHogProvider"
import { Footer } from "@/components/footer"
import { HeaderWrapper } from "@/components/header-wrapper"
import { LicenseNotice } from "@/components/license-notice"
import { BASE_URL, WEB_URL, getDescription, websiteTitle } from "@/constants"
import { getTotalIcons } from "@/lib/api"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import { ThemeProvider } from "./theme-provider"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: "#ffffff",
	viewportFit: "cover",
}

export async function generateMetadata(): Promise<Metadata> {
	const { totalIcons } = await getTotalIcons()

	return {
		metadataBase: new URL(WEB_URL),
		title: websiteTitle,
		description: getDescription(totalIcons),
		keywords: ["dashboard icons", "service icons", "application icons", "tool icons", "web dashboard", "app directory"],
		robots: {
			index: true,
			follow: true,
			googleBot: "index, follow",
		},
		openGraph: {
			siteName: WEB_URL,
			title: websiteTitle,
			url: BASE_URL,
			description: getDescription(totalIcons),
			images: [
				{
					url: "/og-image.png",
					width: 1200,
					height: 630,
					alt: "Dashboard Icons - Dashboard icons for self hosted services",
					type: "image/png",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: WEB_URL,
			description: getDescription(totalIcons),
			images: ["/og-image.png"],
		},
		applicationName: WEB_URL,
		alternates: {
			canonical: BASE_URL,
		},

		appleWebApp: {
			title: "Dashboard Icons",
			statusBarStyle: "default",
			capable: true,
		},
		icons: {
			icon: [
				{ url: "/favicon.ico", sizes: "any" },
				{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
				{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			],
			apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
		},
		manifest: "/site.webmanifest",
	}
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} antialiased bg-background flex flex-col min-h-screen`}>
				<PostHogProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<HeaderWrapper />
						<main className="flex-grow">{children}</main>
						<Footer />
						<Toaster />
						<LicenseNotice />
					</ThemeProvider>
				</PostHogProvider>
			</body>
		</html>
	)
}
