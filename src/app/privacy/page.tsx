import GoBackButton from "@/components/ui/go-back-button";
import { Link } from "next-view-transitions";

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-40">
      <GoBackButton />
      <div className="prose prose-neutral min-w-full dark:prose-invert">
        <h1 className="font-serif">Privacy policy</h1>

        <h2>TL;DR</h2>
        <p>
          Your provider passwords are never seen by anyone involved with gloss.
          There are no (and will never be) any intentions of stealing your data.
          Feel free to read{" "}
          <Link href="https://github.com/jvxz/gloss" target="_blank">
            the source code
          </Link>
          .
        </p>

        <h2>How your data is handled</h2>
        <p>
          When developing gloss, providing a secure method of authentication,
          while making it as simple as possible for the developer and the user,
          was of utmost importance. This service uses{" "}
          <Link href="https://oauth.net/2/" target="_blank">
            OAuth 2.0
          </Link>{" "}
          to authenticate users, allowing for a simple sign-in process with
          their provider of choice.
        </p>

        <p>
          When you sign in, a token is generated from the third-party provider
          that is specific to your account, meaning none of your credentials are
          sent to the server. This token is used to authenticate you when you
          sign in. The token, along with a unique id for your account, is then
          stored on a PostgreSQL database hosted on{" "}
          <Link href="https://neon.tech" target="_blank">
            Neon
          </Link>
          . These tokens are specific for usage on gloss and cannot be used to
          access your account on the provider.
        </p>

        <p>
          At any point you decide to delete your account, all associated data
          will be deleted from the database.
        </p>

        <h2>Data stored</h2>
        <ul>
          <li>Authentication tokens from OAuth providers</li>
          <li>Your email address (provided by OAuth)</li>
          <li>Your username (provided by OAuth)</li>
          <li>Your saved theme presets</li>
        </ul>

        <h2>Third-party services</h2>
        <ul>
          <li>
            <strong>
              <Link href="https://neon.tech" target="_blank">
                Neon
              </Link>
            </strong>{" "}
            - Database hosting
          </li>
          <li>
            <strong>
              <Link href="https://better-auth.com" target="_blank">
                better-auth
              </Link>
            </strong>{" "}
            - Authentication library
          </li>
          <li>
            <strong>
              <Link href="https://github.com" target="_blank">
                GitHub
              </Link>{" "}
            </strong>{" "}
            /{" "}
            <strong>
              <Link href="https://discord.com" target="_blank">
                Discord
              </Link>{" "}
            </strong>
            - OAuth providers
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy or how your data
          is handled, please open an issue on{" "}
          <Link href="https://github.com/jvxz/gloss/issues/new" target="_blank">
            GitHub
          </Link>
          .
        </p>

        <hr />

        <p className="pb-12 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
