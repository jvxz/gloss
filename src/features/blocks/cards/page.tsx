import Image from "next/image";

import { cn } from "@/lib/utils";

import { DemoCookieSettings } from "./components/cookie-settings";
import { DemoCreateAccount } from "./components/create-account";
import { DemoDatePicker } from "./components/date-picker";
import { DemoGithub } from "./components/github-card";
import { DemoNotifications } from "./components/notifications";
import { DemoPaymentMethod } from "./components/payment-method";
import { DemoReportAnIssue } from "./components/report-an-issue";
import { DemoShareDocument } from "./components/share-document";
import { DemoTeamMembers } from "./components/team-members";

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className,
      )}
      {...props}
    />
  );
}

const container = "flex flex-col gap-6";

export default function Cards() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/cards-light.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="block dark:hidden"
        />
        <Image
          src="/examples/cards-dark.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="hidden dark:block"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 bg-background p-8 xl:grid-cols-2 2xl:grid-cols-3">
        {/* <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-1 xl:col-span-2 xl:grid-cols-2 2xl:col-span-3 2xl:grid-cols-3"> */}
        {/* <div className="col-span-2 grid items-start gap-6 lg:col-span-1"> */}
        <div className={container}>
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className={container}>
          {/* <div className="col-span-2 grid items-start gap-6 lg:col-span-1"> */}
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        {/* <div className="col-span-2 grid gap-6 lg:col-span-1 lg:grid-cols-1 xl:col-span-2 xl:grid-cols-2 xl:items-start 2xl:col-span-3 2xl:grid-cols-3"> */}
        <div className={container}>
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </>
  );
}
