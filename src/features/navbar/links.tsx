import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Lock } from "lucide-react";
import { Link } from "next-view-transitions";
const links = [
  {
    icon: <Icons.GitHub />,
    label: "Source code",
    href: "https://github.com/jvxz/gloss",
  },
  {
    icon: <Lock />,
    label: "Privacy policy",
    href: "/privacy",
  },
];

export default function Links() {
  return (
    <section className="flex gap-2">
      {links.map((link) => (
        <Button variant="link" className="gap-2" key={link.label} asChild>
          <Link
            href={link.href}
            target={link.label === "Privacy policy" ? "_self" : "_blank"}
          >
            {link.icon}
            <p className="hidden xl:block">{link.label}</p>
          </Link>
        </Button>
      ))}
    </section>
  );
}
