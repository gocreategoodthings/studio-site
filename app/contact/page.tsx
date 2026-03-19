"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xqeywrdj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          I focus on design, visual identity, and video editing. From
          full-scale creative direction to edit-only projects. Share what
          you&apos;re building and your timeline, and I&apos;ll follow up with
          next steps.
        </p>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
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
            name="email"
            required
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
            name="need"
            required
            placeholder="Design, branding, video editing, or something else."
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Project details
          </label>
          <textarea
            rows={4}
            name="details"
            required
            placeholder="Timeline, deliverables, references, links — anything helpful."
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 rounded-full border border-neutral-700 bg-neutral-50/0 px-6 py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-100 transition hover:bg-neutral-100 hover:text-black disabled:opacity-40"
        >
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>

        {status === "success" && (
          <p className="text-sm text-neutral-400">
            Got it. I will follow up soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Try emailing directly below.
          </p>
        )}

      </form>

      {/* Footer */}
      <div className="mt-8 text-xs text-neutral-500">
        <p>
          Prefer email? Reach out at <a href="mailto:gocreategoodthings@gmail.com" className="underline underline-offset-4 hover:text-neutral-200">gocreategoodthings@gmail.com</a>.
        </p>
      </div>

    </main>
  );
}