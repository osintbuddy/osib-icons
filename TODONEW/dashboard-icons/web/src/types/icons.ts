export type IconAuthor = {
	id: number
	name?: string
}

export type IconUpdate = {
	timestamp: string
	author: IconAuthor
}

export type IconColors = {
	dark?: string
	light?: string
}

export type Icon = {
	base: string | "svg" | "png" | "webp"
	aliases: string[]
	categories: string[]
	update: IconUpdate
	colors?: IconColors
}

export type IconFile = {
	[key: string]: Icon
}

export type IconWithName = {
	name: string
	data: Icon
}

export type IconSearchProps = {
	icons: IconWithName[]
	initialQuery?: string
}

export type AuthorData = {
	id: number
	name?: string
	login: string
	avatar_url: string
	html_url: string
}
