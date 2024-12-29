import { type StyleName } from "@/lib/config";
import { formatHue } from "@/lib/utils";

export async function GET(request: Request) {
    const url = request.url
    const slug = url.split("/").pop()

    const theme = slug?.split("-")
    if (theme?.[0] && theme[0]?.length > 3) {
        return Response.json({ error: "Invalid theme" }, { status: 400 })
    }
    const hue = theme?.[0]
    const style = theme?.[1] as StyleName
    const variables = formatHue(Number(hue), style, "colorful")

    if (!variables) return Response.json({ error: "Could not generate variables" }, { status: 400 })
    if (!slug) return Response.json({ error: "Could not generate slug" }, { status: 400 })
    if (!hue) return Response.json({ error: "Could not generate hue" }, { status: 400 })
    return Response.json({
        name: slug,
        type: "registry:theme",
        cssVars: variables,
    })
}
