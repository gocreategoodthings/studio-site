// app/contact/page.tsx
import Link from "next/link";

export default function Contact() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-20 pt-24 text-neutral-50">

      {/* Header */}
      <header className="mb-10 space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          Contact
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Let&apos;s make something.
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
          I help with drone videography & photography, edit-only projects, and
          branding & design. Tell me what you need and when you need it, and
          I&apos;ll follow up with next steps.
        </p>
      </header>

      {/* Form */}
      <form className="space-y-6">

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            What do you need?
          </label>
          <input
            type="text"
            placeholder="Drone shoot, edit-only, branding, or something else."
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Project details
          </label>
          <textarea
            rows={4}
            placeholder="Timeline, location, deliverables, links, and anything else that would be helpful."
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-500"
          />
        </div>

        <button
          type="button"
          className="mt-2 rounded-full border border-neutral-700 bg-neutral-50/0 px-6 py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-100 transition hover:bg-neutral-100 hover:text-black"
        >
          Send Inquiry
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 space-y-2 text-xs text-neutral-500">
        <p>
          Prefer email? Reach out at{" "}
          <a
            href="mailto:gocreatgoodthings@gmail.com"
            className="underline underline-offset-4 hover:text-neutral-200"
          >
            gocreatgoodthings@gmail.com
          </a>
          .
        </p>

        <p>
          Want to see more work?{" "}
          <Link
            href="/portfolio"
            className="underline underline-offset-4 text-neutral-300 hover:text-white"
          >
            View portfolio →
          </Link>
        </p>
      </div>

    </main>
  );
}
