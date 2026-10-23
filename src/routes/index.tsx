import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, Intro, Services, HowItWorks, WhoWeHelp, Approach, Costs } from "@/components/site/Sections";
import { Contact, Footer, MobileCta } from "@/components/site/Contact";
import { useSiteMotion } from "@/components/site/motion";

const title = "Sea & Stay Hosting | Holiday Let Management in East Sussex";
const description =
  "Professional holiday let management across East Sussex. Sea & Stay Hosting supports property owners with bookings, guest communication and the coordination of property services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  useSiteMotion();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:p-3">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <HowItWorks />
        <WhoWeHelp />
        <Approach />
        <Costs />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
