import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Wordmark } from "./motion";

export const EMAIL = "info@seaandstayhosting.co.uk";

type Fields = { name: string; email: string; phone: string; location: string; count: string; support: string; message: string; consent: boolean };
const empty: Fields = { name: "", email: "", phone: "", location: "", count: "", support: "", message: "", consent: false };

export function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone && !/^[+\d\s()-]{7,}$/.test(f.phone)) e.phone = "Please enter a valid telephone number.";
  if (!f.location.trim()) e.location = "Please tell us where the property is.";
  if (!f.count) e.count = "Please choose the number of properties.";
  if (!f.support) e.support = "Please choose the support you are interested in.";
  if (f.message.trim().length < 10) e.message = "Please add a short message (at least 10 characters).";
  if (!f.consent) e.consent = "Please confirm you agree to the privacy policy.";
  return e;
}

const input = "mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-ring aria-[invalid=true]:border-destructive";

export function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<"idle" | "opened">("idle");
  const set = (k: keyof Fields) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: ev.target.type === "checkbox" ? (ev.target as HTMLInputElement).checked : ev.target.value });

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(`f-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    const body = [
      `Name: ${f.name}`, `Email: ${f.email}`, `Telephone: ${f.phone || "Not provided"}`,
      `Property location: ${f.location}`, `Number of properties: ${f.count}`, `Support interested in: ${f.support}`, "", f.message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Holiday let enquiry from ${f.name}`)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  };

  const err = (k: keyof Fields) =>
    errors[k] ? <p id={`e-${k}`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;
  const a = (k: keyof Fields) => ({ id: `f-${k}`, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p data-reveal className="eyebrow text-sand">Contact</p>
          <h2 data-reveal className="mt-6 text-4xl leading-tight text-primary-foreground md:text-6xl">Let's talk about your holiday let.</h2>
          <p data-reveal className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Tell us a little about your property and the support you are looking for. We would be pleased to discuss how
            Sea &amp; Stay Hosting could help.
          </p>
          <ul className="mt-10 space-y-5 text-lg">
            <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-sand" aria-hidden="true" /><span>Based in Hastings, East Sussex<br /><span className="text-primary-foreground/70">Coverage across East Sussex</span></span></li>
            <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-sand" aria-hidden="true" /><a href="tel:+442080586250" className="underline-offset-4 hover:underline">020 8058 6250</a></li>
            <li className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-sand" aria-hidden="true" /><a href={`mailto:${EMAIL}`} className="break-all underline-offset-4 hover:underline">{EMAIL}</a></li>
            <li className="flex gap-4"><Clock className="mt-1 h-5 w-5 shrink-0 text-sand" aria-hidden="true" /><span>Guest support: 24 hours a day</span></li>
          </ul>
        </div>

        <form noValidate onSubmit={onSubmit} className="bg-background p-6 text-foreground md:col-span-7 md:p-10" aria-describedby="form-note">
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="f-name" className="text-sm font-semibold">Name</label><input {...a("name")} autoComplete="name" className={input} value={f.name} onChange={set("name")} />{err("name")}</div>
            <div><label htmlFor="f-email" className="text-sm font-semibold">Email address</label><input {...a("email")} type="email" autoComplete="email" className={input} value={f.email} onChange={set("email")} />{err("email")}</div>
            <div><label htmlFor="f-phone" className="text-sm font-semibold">Telephone number <span className="font-normal text-muted-foreground">(optional)</span></label><input {...a("phone")} type="tel" autoComplete="tel" className={input} value={f.phone} onChange={set("phone")} />{err("phone")}</div>
            <div><label htmlFor="f-location" className="text-sm font-semibold">Property location</label><input {...a("location")} placeholder="e.g. Hastings Old Town" className={input} value={f.location} onChange={set("location")} />{err("location")}</div>
            <div><label htmlFor="f-count" className="text-sm font-semibold">Number of properties</label>
              <select {...a("count")} className={input} value={f.count} onChange={set("count")}>
                <option value="">Please select</option><option>1</option><option>2 to 3</option><option>4 or more</option>
              </select>{err("count")}</div>
            <div><label htmlFor="f-support" className="text-sm font-semibold">What support are you interested in?</label>
              <select {...a("support")} className={input} value={f.support} onChange={set("support")}>
                <option value="">Please select</option><option>Full holiday let management</option><option>Listing and booking management</option><option>Guest communication and support</option><option>Property services coordination</option><option>Pricing and performance support</option><option>Not sure yet</option>
              </select>{err("support")}</div>
            <div className="sm:col-span-2"><label htmlFor="f-message" className="text-sm font-semibold">Message</label><textarea {...a("message")} rows={5} className={input} value={f.message} onChange={set("message")} />{err("message")}</div>
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm">
                <input {...a("consent")} type="checkbox" checked={f.consent} onChange={set("consent")} className="mt-1 h-4 w-4 accent-primary" />
                <span>I agree to Sea &amp; Stay Hosting using these details to respond to my enquiry, as described in the <Link to="/privacy" className="font-semibold text-primary underline underline-offset-2">privacy policy</Link>.</span>
              </label>{err("consent")}
            </div>
          </div>
          <button type="submit" className="mt-8 w-full rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent sm:w-auto">Send Enquiry</button>
          <p id="form-note" className="mt-4 text-sm text-muted-foreground">
            Sending opens your email app with your enquiry ready to send to {EMAIL}. Nothing is sent until you press send in your email app.
          </p>
          <div aria-live="polite">
            {status === "opened" && (
              <p className="mt-4 border-l-2 border-accent bg-muted p-4 text-sm">
                Your email app should now be open with your enquiry. Please press send there to complete it. If nothing opened, email us directly at <a className="font-semibold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> or call <a className="font-semibold underline" href="tel:+442080586250">020 8058 6250</a>.
              </p>
            )}
            {Object.keys(errors).length > 0 && <p className="mt-4 text-sm text-destructive">Please check the highlighted fields.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-background pb-24 pt-16 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Wordmark className="h-22" />
          <p className="mt-5 max-w-sm text-muted-foreground">Professional holiday let management for property owners in Hastings and across East Sussex.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {[["#services", "Our Services"], ["#how-it-works", "How It Works"], ["#who-we-help", "Who We Help"], ["#costs", "Additional Costs"], ["#contact", "Contact"]].map(([h, l]) => (
              <li key={h}><a href={`/${h}`} className="hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm">
          <a href="tel:+442080586250" className="block hover:text-primary">020 8058 6250</a>
          <a href={`mailto:${EMAIL}`} className="block break-all hover:text-primary">{EMAIL}</a>
          <p className="text-muted-foreground">Covering Hastings and East Sussex</p>
          <Link to="/privacy" className="block pt-2 hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-muted-foreground md:px-10">© {new Date().getFullYear()} Sea &amp; Stay Hosting. All rights reserved.</p>
    </footer>
  );
}

export function MobileCta() {
  return (
    <a href="#contact" className="fixed inset-x-4 bottom-4 z-40 rounded-sm bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-lg sm:hidden">
      Enquire Now
    </a>
  );
}
