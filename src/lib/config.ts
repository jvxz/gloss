import { Bird, Eclipse, Flower, Snowflake } from "lucide-react"

export type StyleType = {
    name: string,
    icon: typeof Eclipse
}

export type StyleName = typeof styles[number]["name"]

export type BlockType = typeof blocks[number]

export const styles = [
    {
        name: "Charm",
        icon: Snowflake
    },
    {
        name: "Eclipse",
        icon: Eclipse
    },
    {
        name: "Flocon",
        icon: Flower
    },
    {
        name: "Oasis",
        icon: Bird
    },
] as const

export const blocks = ["Cards", "Pricing", "Features", "Login"] as const

export const presetCardColor = (hue: string) => {
    return `hsl(${hue}, 50%, 50%)`
}