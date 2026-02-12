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

        <p className="text-neutral-400 text-[16px] leading-relaxed">
          Part I of a cinematic brand series supporting the public launch of
          Ashton Gray Capital. I provided creative direction to the production
          crew, structured the interview narrative, prepared all interview
          questions, and completed the full edit and finishing.
        </p>
      </div>

      {/* Video */}
      <div className="relative w-full aspect-video mb-20 rounded-md overflow-hidden border border-white/10">
        <video
          controls
          poster="/images/agif-origins-thumb.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/video/agif-origins-story.mp4" type="video/mp4" />
        </video>
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
            In post-production, I shaped the narrative arc, refined pacing,
            balanced tonal contrast, integrated brand visuals, and delivered
            the final cinematic cut.
          </p>

          <p>
            This project reflects my ability to collaborate alongside creative
            production teams while leading strategic brand storytelling and
            editorial execution.
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
              className="text-white hover:underline"
            >
              ashtongraycapital.com ↗
            </a>
          </div>
        </div>

      </div>

    </main>
  );
}
