import Image from "next/image";

export default function AGIFOriginsStory() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 pt-28 pb-32 text-white">

      {/* Header */}
      <div className="mb-14 max-w-[800px]">
        <p className="text-xs uppercase tracking-[0.14em] text-neutral-500 mb-4">
          2026 · Production · Edit · Brand
        </p>

        <h1 className="text-[44px] leading-[1.1] font-light mb-6 font-serif">
          AGIF Origins Story
        </h1>

        <p className="text-neutral-400 text-[16px] leading-relaxed mb-8">
          Part I of a brand series supporting the public launch of
          Ashton Gray Capital. I provided creative direction to the production
          crew, structured the interview narrative, prepared all interview
          questions, and completed the full edit and finishing.
        </p>

        {/* Primary Live Site CTA */}
        <a
          href="https://ashtongraycapital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm uppercase tracking-[0.14em] border-b border-white/40 hover:border-white transition"
        >
          Visit Live Website ↗
        </a>
      </div>

      {/* Vimeo Video */}
      <div className="relative w-full aspect-video mb-20 rounded-md overflow-hidden border border-white/10">
        <iframe
          src="https://player.vimeo.com/video/1174215419?badge=0&autopause=0&player_id=0&app_id=58479"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="AGIF Origins Story"
        />
      </div>

      {/* Project Detail */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Column */}
        <div className="md:col-span-2 text-neutral-400 space-y-6 leading-relaxed text-[15px]">
          <p>
            The production involved hours of interview and supporting B-roll
            footage. My role centered on defining narrative clarity before
            filming began, ensuring each conversation served the larger brand
            story.
          </p>

          <p>
            This clip is the first from a broader series that will be used across
            multiple pieces of content, including social media. My work focused
            on helping shape the narrative and introducing the Ashton Gray
            Capital brand.
          </p>
        </div>

        {/* Right Column Meta */}
        <div className="text-sm text-neutral-500 space-y-6">
          <div>
            <p className="uppercase tracking-[0.12em] mb-2">Role</p>
            <p>Creative Direction</p>
            <p>Interview Structuring</p>
            <p>Editorial & Finishing</p>
          </div>

          <div>
            <p className="uppercase tracking-[0.12em] mb-2">Platform</p>
            <a
              href="https://ashtongraycapital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-white uppercase tracking-[0.12em] border-b border-white/40 hover:border-white transition"
            >
              ashtongraycapital.com ↗
            </a>
          </div>
        </div>

      </div>

    </main>
  );
}