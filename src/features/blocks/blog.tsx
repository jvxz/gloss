import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact02Page = () => (
  <div className="flex min-h-full items-center justify-center bg-background py-16">
    <div className="mx-auto w-full max-w-screen-xl px-6 xl:px-0">
      <b className="text-secondary">Contact Us</b>
      <h2 className="mt-3 text-2xl font-black tracking-tight md:text-4xl">
        Chat to our friendly team
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        We&apos;d love to hear from you. Please fill out this form or shoot us
        an email.
      </p>
      <div className="mt-24 grid gap-16 md:gap-10 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <MailIcon />
            </div>
            <h3 className="mt-6 text-xl font-bold">Email</h3>
            <p className="my-2.5 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link
              className="font-bold tracking-tight text-secondary"
              href="mailto:akashmoradiya3444@gmail.com"
            >
              akashmoradiya3444@gmail.com
            </Link>
          </div>
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <MessageCircle />
            </div>
            <h3 className="mt-6 text-xl font-bold">Live chat</h3>
            <p className="my-2.5 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link className="font-bold tracking-tight text-secondary" href="#">
              Start new chat
            </Link>
          </div>
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 text-xl font-bold">Office</h3>
            <p className="my-2.5 text-muted-foreground">
              Come say hello at our office HQ.
            </p>
            <Link
              className="font-bold tracking-tight text-secondary"
              href="https://map.google.com"
              target="_blank"
            >
              100 Smith Street Collingwood <br /> VIC 3066 AU
            </Link>
          </div>
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 text-xl font-bold">Phone</h3>
            <p className="my-2.5 text-muted-foreground">
              Mon-Fri from 8am to 5pm.
            </p>
            <Link
              className="font-bold tracking-tight text-secondary"
              href="tel:akashmoradiya3444@gmail.com"
            >
              +1 (555) 000-0000
            </Link>
          </div>
        </div>

        {/* Form */}
        <Card className="bg-secondary/10 shadow-none">
          <CardContent className="p-6 md:p-10">
            <form>
              <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-1 h-11 bg-white"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-1 h-11 bg-white"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-1 h-11 bg-white"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-1 bg-white"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" />
                  <Label htmlFor="acceptTerms">
                    You agree to our{" "}
                    <Link href="#" className="underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
