import { createFileRoute, Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/site/motion";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sea & Stay Hosting" },
      { name: "description", content: "How Sea & Stay Hosting uses the details you share when you enquire about holiday let management." },
      { property: "og:title", content: "Privacy Policy | Sea & Stay Hosting" },
      { property: "og:description", content: "How Sea & Stay Hosting uses the details you share when you enquire." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <Link to="/" aria-label="Back to home"><Wordmark /></Link>
      <h1 className="mt-14 text-5xl">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>When you contact Sea &amp; Stay Hosting by email, telephone or through our enquiry form, we use the details you provide only to respond to your enquiry and discuss the management of your property.</p>
        <p>We do not sell your personal information. You may ask us to update or delete the details we hold about you at any time by emailing <a className="text-primary underline" href="mailto:info@seaandstayhosting.co.uk">info@seaandstayhosting.co.uk</a>.</p>
        <p>This website does not use advertising or tracking cookies.</p>
      </div>
      <Link to="/" className="mt-12 inline-block font-semibold text-primary underline-offset-4 hover:underline">← Back to home</Link>
    </main>
  );
}
