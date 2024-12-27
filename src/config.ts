import { Bird, Eclipse, Flower, Radar } from "lucide-react"

export type StyleType = {
    name: string,
    icon: typeof Eclipse
}

export type StyleName = typeof styles[number]["name"]

export type BlockType = typeof blocks[number]

export const styles = [
    {
        name: "Eclipse",
        icon: Eclipse
    },
    {
        name: "Oasis",
        icon: Bird
    },
    {
        name: "Azure",
        icon: Flower
    },
    {
        name: "Echo",
        icon: Radar
    }
] as const

export const blocks = ["Dashboard", "Pricing", "Features", "Login"] as const