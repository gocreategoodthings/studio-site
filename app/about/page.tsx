// app/about/page.tsx

export default function About() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-24 text-neutral-50">
      <h2 className="mb-6 text-sm tracking-widest text-neutral-400">ABOUT</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT — TEXT */}
        <div>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight">
            Go Create Good Things.
          </h1>

          <p className="mb-6 leading-relaxed text-neutral-300">
            GCGT is shaped by the belief that every person carries the{" "}
            <em>imago dei</em>, the image of God. That truth fuels how I see
            people and how I create.
          </p>

          <p className="mb-6 leading-relaxed text-neutral-300">
            I'm a designer, editor, and videographer/photographer. Most of what I make
            comes from wanting visuals that feel honest, intentional, and well crafted.
            I’m learning more about filmmaking because I want to move toward telling
            longer stories and blending together the design, video, and photo work I
            already do.
          </p>

          <p className="mb-10 leading-relaxed text-neutral-300">
            If you want creative that looks sharp, feels thoughtful, and tells the
            truth about who you are, I'd love to make something together.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6">
            <a
              href="/portfolio"
              className="text-sm text-neutral-300 hover:text-neutral-50 transition underline-offset-4 hover:underline"
            >
              View portfolio →
            </a>

            <a
              href="/contact"
              className="text-sm text-neutral-300 hover:text-neutral-50 transition underline-offset-4 hover:underline"
            >
              Contact →
            </a>
          </div>
        </div>

        {/* RIGHT — PORTRAIT */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/about-portrait.jpg"
            alt="Portrait"
            className="w-full max-w-sm rounded-xl object-cover shadow-lg shadow-black/20"
          />
        </div>
      </div>
    </main>
  );
}
