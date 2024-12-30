import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";

const Blog = () => {
  return (
    <section className="bg-background">
      <div className="mx-6 px-6 py-16 xl:px-0">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-black tracking-tight">Posts</h2>
          <Select defaultValue="recommended">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Card key={i} className="overflow-hidden rounded-md shadow-none">
              <CardHeader className="p-0">
                <div className="aspect-video w-full border-b bg-muted" />
              </CardHeader>
              <CardContent className="py-6">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">
                    Technology
                  </Badge>
                  <span className="text-sm font-semibold text-muted-foreground">
                    5 min read
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  A beginner&apos;s guide to blackchain for engineers
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>

                <Button className="mt-6 shadow-none">
                  Read more <ChevronRight />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
