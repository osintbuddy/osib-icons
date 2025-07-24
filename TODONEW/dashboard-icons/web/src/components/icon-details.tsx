"use client"

import { IconsGrid } from "@/components/icon-grid"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BASE_URL, REPO_PATH } from "@/constants"
import { formatIconName } from "@/lib/utils"
import type { AuthorData, Icon, IconFile } from "@/types/icons"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import { ArrowRight, Check, Copy, Download, FileType, Github, Moon, PaletteIcon, Sun } from "lucide-react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { toast } from "sonner"
import { Carbon } from "./carbon"
import { MagicCard } from "./magicui/magic-card"
import { Badge } from "./ui/badge"

export type IconDetailsProps = {
	icon: string
	iconData: Icon
	authorData: AuthorData
	allIcons: IconFile
}

export function IconDetails({ icon, iconData, authorData, allIcons }: IconDetailsProps) {
	const authorName = authorData.name || authorData.login || ""
	const iconColorVariants = iconData.colors
	const formattedDate = new Date(iconData.update.timestamp).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})
	const getAvailableFormats = () => {
		switch (iconData.base) {
			case "svg":
				return ["svg", "png", "webp"]
			case "png":
				return ["png", "webp"]
			default:
				return [iconData.base]
		}
	}

	const availableFormats = getAvailableFormats()
	const [copiedVariants, setCopiedVariants] = useState<Record<string, boolean>>({})

	// Launch confetti from the pointer position
	const launchConfetti = useCallback((originX?: number, originY?: number) => {
		const defaults = {
			startVelocity: 15,
			spread: 180,
			ticks: 50,
			zIndex: 20,
			disableForReducedMotion: true,
			colors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7"],
		}

		// If we have origin coordinates, use them
		if (originX !== undefined && originY !== undefined) {
			confetti({
				...defaults,
				particleCount: 50,
				origin: {
					x: originX / window.innerWidth,
					y: originY / window.innerHeight,
				},
			})
		} else {
			// Default to center of screen
			confetti({
				...defaults,
				particleCount: 50,
				origin: { x: 0.5, y: 0.5 },
			})
		}
	}, [])

	const handleCopy = (url: string, variantKey: string, event?: React.MouseEvent) => {
		navigator.clipboard.writeText(url)
		setCopiedVariants((prev) => ({
			...prev,
			[variantKey]: true,
		}))
		setTimeout(() => {
			setCopiedVariants((prev) => ({
				...prev,
				[variantKey]: false,
			}))
		}, 2000)

		// Launch confetti from click position or center of screen
		if (event) {
			launchConfetti(event.clientX, event.clientY)
		} else {
			launchConfetti()
		}

		toast.success("URL copied", {
			description: "The icon URL has been copied to your clipboard. Ready to use!",
		})
	}

	const handleDownload = async (event: React.MouseEvent, url: string, filename: string) => {
		event.preventDefault()

		// Launch confetti from download button position
		launchConfetti(event.clientX, event.clientY)

		try {
			// Show loading toast
			toast.loading("Preparing download...")

			// Fetch the file first as a blob
			const response = await fetch(url)
			const blob = await response.blob()

			// Create a blob URL and use it for download
			const blobUrl = URL.createObjectURL(blob)
			const link = document.createElement("a")
			link.href = blobUrl
			link.download = filename
			document.body.appendChild(link)
			link.click()

			// Clean up
			document.body.removeChild(link)
			setTimeout(() => URL.revokeObjectURL(blobUrl), 100)

			toast.dismiss()
			toast.success("Download started", {
				description: "Your icon file is being downloaded and will be saved to your device.",
			})
		} catch (error) {
			console.error("Download error:", error)
			toast.dismiss()
			toast.error("Download failed", {
				description: "There was an error downloading the file. Please try again.",
			})
		}
	}

	const renderVariant = (format: string, iconName: string, theme?: "light" | "dark") => {
		const variantName = theme && iconColorVariants?.[theme] ? iconColorVariants[theme] : iconName
		const imageUrl = `${BASE_URL}/${format}/${variantName}.${format}`
		const githubUrl = `${REPO_PATH}/tree/main/${format}/${iconName}.${format}`
		const variantKey = `${format}-${theme || "default"}`
		const isCopied = copiedVariants[variantKey] || false

		return (
			<TooltipProvider key={variantKey} delayDuration={500}>
				<MagicCard className="p-0 rounded-md">
					<div className="flex flex-col items-center p-4 transition-all">
						<Tooltip>
							<TooltipTrigger asChild>
								<motion.div
									className="relative w-28 h-28 mb-3 cursor-pointer rounded-xl overflow-hidden group"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={(e) => handleCopy(imageUrl, variantKey, e)}
									aria-label={`Copy ${format.toUpperCase()} URL for ${iconName}${theme ? ` (${theme} theme)` : ""}`}
								>
									<div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl z-10 transition-colors" />

									<motion.div
										className="absolute inset-0 bg-primary/10 flex items-center justify-center z-20 rounded-xl"
										initial={{ opacity: 0 }}
										animate={{ opacity: isCopied ? 1 : 0 }}
										transition={{ duration: 0.2 }}
									>
										<motion.div
											initial={{ scale: 0.5, opacity: 0 }}
											animate={{
												scale: isCopied ? 1 : 0.5,
												opacity: isCopied ? 1 : 0,
											}}
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 20,
											}}
										>
											<Check className="w-8 h-8 text-primary" />
										</motion.div>
									</motion.div>

									<Image
										src={imageUrl}
										alt={`${iconName} in ${format} format${theme ? ` (${theme} theme)` : ""}`}
										fill
										loading="eager"
										priority
										className="object-contain p-4"
									/>
								</motion.div>
							</TooltipTrigger>
							<TooltipContent>
								<p>Click to copy direct URL to clipboard</p>
							</TooltipContent>
						</Tooltip>

						<p className="text-sm font-medium">{format.toUpperCase()}</p>

						<div className="flex gap-2 mt-3 w-full justify-center">
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										size="icon"
										className="h-8 w-8 rounded-lg cursor-pointer"
										onClick={(e) => handleDownload(e, imageUrl, `${iconName}.${format}`)}
										aria-label={`Download ${iconName} in ${format} format${theme ? ` (${theme} theme)` : ""}`}
									>
										<Download className="w-4 h-4" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Download icon file</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										size="icon"
										className="h-8 w-8 rounded-lg cursor-pointer"
										onClick={(e) => handleCopy(imageUrl, `btn-${variantKey}`, e)}
										aria-label={`Copy URL for ${iconName} in ${format} format${theme ? ` (${theme} theme)` : ""}`}
									>
										{copiedVariants[`btn-${variantKey}`] ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Copy direct URL to clipboard</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="outline" size="icon" className="h-8 w-8 rounded-lg" asChild>
										<Link
											href={githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`View ${iconName} ${format} file on GitHub`}
										>
											<Github className="w-4 h-4" />
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>View on GitHub</p>
								</TooltipContent>
							</Tooltip>
						</div>
					</div>
				</MagicCard>
			</TooltipProvider>
		)
	}

	const formatedIconName = formatIconName(icon)

	return (
		<main className="container mx-auto pt-12 pb-14 px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				{/* Left Column: Icon Info and Author */}
				<div className="lg:col-span-1">
					<Card className="h-full bg-background/50 border shadow-lg">
						<CardHeader className="pb-4">
							<div className="flex flex-col items-center">
								<div className="relative w-32 h-32 rounded-xl overflow-hidden border flex items-center justify-center p-3">
									<Image
										src={`${BASE_URL}/${iconData.base}/${icon}.${iconData.base}`}
										priority
										width={96}
										height={96}
										placeholder="empty"
										alt={`High quality ${formatedIconName} icon in ${iconData.base.toUpperCase()} format`}
										className="w-full h-full object-contain"
									/>
								</div>
								<CardTitle className="text-2xl font-bold capitalize text-center mb-2">
									<h1>{formatedIconName}</h1>
								</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<p className="text-sm">
												<span className="font-medium">Updated on:</span> <time dateTime={iconData.update.timestamp}>{formattedDate}</time>
											</p>
										</div>
										<div className="flex items-center gap-2">
											<div className="flex items-center gap-2">
												<p className="text-sm font-medium">By:</p>
												<Avatar className="h-5 w-5 border">
													<AvatarImage src={authorData.avatar_url} alt={`${authorName}'s avatar`} />
													<AvatarFallback>{authorName ? authorName.slice(0, 2).toUpperCase() : "??"}</AvatarFallback>
												</Avatar>
												{authorData.html_url ? (
													<Link
														href={authorData.html_url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-primary hover:underline text-sm"
													>
														{authorName}
													</Link>
												) : (
													<span className="text-sm">{authorName}</span>
												)}
											</div>
										</div>
									</div>
								</div>

								{iconData.categories && iconData.categories.length > 0 && (
									<div>
										<h3 className="text-sm font-semibold text-muted-foreground mb-2">Categories</h3>
										<div className="flex flex-wrap gap-2">
											{iconData.categories.map((category) => (
												<Link key={category} href={`/icons?category=${encodeURIComponent(category)}`} className="cursor-pointer">
													<Badge
														variant="outline"
														className="inline-flex items-center border border-primary/20 hover:border-primary px-2.5 py-0.5 text-sm"
													>
														{category
															.split("-")
															.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
															.join(" ")}
													</Badge>
												</Link>
											))}
										</div>
									</div>
								)}

								{iconData.aliases && iconData.aliases.length > 0 && (
									<div>
										<h3 className="text-sm font-semibold text-muted-foreground mb-2">Aliases</h3>
										<div className="flex flex-wrap gap-2">
											{iconData.aliases.map((alias) => (
												<Badge
													variant="outline"
													key={alias}
													className="inline-flex items-center px-2.5 py-1 text-xs"
													title={`This icon can also be found by searching for "${alias}"`}
												>
													{alias}
												</Badge>
											))}
										</div>
									</div>
								)}

								<div>
									<h3 className="text-sm font-semibold text-muted-foreground mb-2">About this icon</h3>
									<div className="text-xs text-muted-foreground space-y-2">
										<p>
											Available in{" "}
											{availableFormats.length > 1
												? `${availableFormats.length} formats (${availableFormats.map((f) => f.toUpperCase()).join(", ")}) `
												: `${availableFormats[0].toUpperCase()} format `}
											with a base format of {iconData.base.toUpperCase()}.
											{iconData.colors && " Includes both light and dark theme variants for better integration with different UI designs."}
										</p>
										<p>
											Perfect for adding to dashboards, app directories, documentation, or anywhere you need the {formatIconName(icon)}{" "}
											logo.
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Middle Column: Icon variants */}
				<div className="lg:col-span-2">
					<Card className="h-full bg-background/50 shadow-lg">
						<CardHeader>
							<CardTitle>
								<h2>Icon variants</h2>
							</CardTitle>
							<CardDescription>Click on any icon to copy its URL to your clipboard</CardDescription>
						</CardHeader>
						<CardContent>
							{!iconData.colors ? (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
									{availableFormats.map((format) => renderVariant(format, icon))}
								</div>
							) : (
								<div className="space-y-10">
									<div>
										<h3 className="text-lg font-semibold  flex items-center gap-2">
											<Sun className="w-4 h-4 text-amber-500" />
											Light theme
										</h3>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 rounded-lg ">
											{availableFormats.map((format) => renderVariant(format, icon, "light"))}
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold  flex items-center gap-2">
											<Moon className="w-4 h-4 text-indigo-500" />
											Dark theme
										</h3>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 rounded-lg ">
											{availableFormats.map((format) => renderVariant(format, icon, "dark"))}
										</div>
									</div>
								</div>
							)}
						</CardContent>
					</Card>
				</div>

				{/* Right Column: Technical details */}
				<div className="lg:col-span-1">
					<Card className="h-full bg-background/50 border shadow-lg">
						<CardHeader>
							<CardTitle>Technical details</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								<div className="">
									<h3 className="text-sm font-semibold text-muted-foreground mb-2">Base format</h3>
									<div className="flex items-center gap-2">
										<FileType className="w-4 h-4 text-blue-500" />
										<div className="px-3 py-1.5  border border-border rounded-lg text-sm font-medium">{iconData.base.toUpperCase()}</div>
									</div>
								</div>

								<div className="">
									<h3 className="text-sm font-semibold text-muted-foreground mb-2">Available formats</h3>
									<div className="flex flex-wrap gap-2">
										{availableFormats.map((format) => (
											<div key={format} className="px-3 py-1.5  border border-border rounded-lg text-xs font-medium">
												{format.toUpperCase()}
											</div>
										))}
									</div>
								</div>

								{iconData.colors && (
									<div className="">
										<h3 className="text-sm font-semibold text-muted-foreground mb-2">Color variants</h3>
										<div className="space-y-2">
											{Object.entries(iconData.colors).map(([theme, variant]) => (
												<div key={theme} className="flex items-center gap-2">
													<PaletteIcon className="w-4 h-4 text-purple-500" />
													<span className="capitalize font-medium text-sm">{theme}:</span>
													<code className=" border border-border px-2 py-0.5 rounded-lg text-xs">{variant}</code>
												</div>
											))}
										</div>
									</div>
								)}

								<div className="">
									<h3 className="text-sm font-semibold text-muted-foreground mb-2">Source</h3>
									<Button variant="outline" className="w-full" asChild>
										<Link href={`${REPO_PATH}/blob/main/meta/${icon}.json`} target="_blank" rel="noopener noreferrer">
											<Github className="w-4 h-4 mr-2" />
											View on GitHub
										</Link>
									</Button>
								</div>
							</div>
						</CardContent>
						<Carbon />
					</Card>
				</div>
			</div>
			{iconData.categories &&
				iconData.categories.length > 0 &&
				(() => {
					const MAX_RELATED_ICONS = 16
					const currentCategories = iconData.categories || []

					const relatedIconsWithScore = Object.entries(allIcons)
						.map(([name, data]) => {
							if (name === icon) return null // Exclude the current icon

							const otherCategories = data.categories || []
							const commonCategories = currentCategories.filter((cat) => otherCategories.includes(cat))
							const score = commonCategories.length

							return score > 0 ? { name, data, score } : null
						})
						.filter((item): item is { name: string; data: Icon; score: number } => item !== null) // Type guard
						.sort((a, b) => b.score - a.score) // Sort by score DESC

					const topRelatedIcons = relatedIconsWithScore.slice(0, MAX_RELATED_ICONS)

					const viewMoreUrl = `/icons?${currentCategories.map((cat) => `category=${encodeURIComponent(cat)}`).join("&")}`

					if (topRelatedIcons.length === 0) return null

					return (
						<section className="container mx-auto mt-12" aria-labelledby="related-icons-title">
							<Card className="bg-background/50 border shadow-lg">
								<CardHeader>
									<CardTitle>
										<h2 id="related-icons-title">Related Icons</h2>
									</CardTitle>
									<CardDescription>
										Other icons from {currentCategories.map((cat) => cat.replace(/-/g, " ")).join(", ")} categories
									</CardDescription>
								</CardHeader>
								<CardContent>
									<IconsGrid filteredIcons={topRelatedIcons} matchedAliases={{}} />
									{relatedIconsWithScore.length > MAX_RELATED_ICONS && (
										<div className="mt-6 text-center">
											<Button
												asChild
												variant="link"
												className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:no-underline"
											>
												<Link href={viewMoreUrl} className="no-underline">
													View all related icons
													<ArrowRight className="ml-2 h-4 w-4" />
												</Link>
											</Button>
										</div>
									)}
								</CardContent>
							</Card>
						</section>
					)
				})()}
		</main>
	)
}
