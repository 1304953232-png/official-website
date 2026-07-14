import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui-card";
import { activityPrograms } from "@/lib/site-data";

type ActivityCasePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return activityPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ActivityCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = activityPrograms.find((item) => item.slug === slug);

  if (!program) {
    return {};
  }

  return {
    title: `${program.title} | YAN VENTURES`,
    description: program.text
  };
}

export default async function ActivityCasePage({ params }: ActivityCasePageProps) {
  const { slug } = await params;
  const programIndex = activityPrograms.findIndex((item) => item.slug === slug);

  if (programIndex === -1) {
    notFound();
  }

  const program = activityPrograms[programIndex];
  const ProgramIcon = program.icon;
  const previousProgram = activityPrograms[(programIndex - 1 + activityPrograms.length) % activityPrograms.length];
  const nextProgram = activityPrograms[(programIndex + 1) % activityPrograms.length];
  const gallery = program.gallery.filter((image) => image !== program.cover);

  return (
    <>
      <AnimatedSection className="overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
        <div className="grid-mask absolute inset-0 opacity-45" aria-hidden />
        <div className="container-shell relative">
          <Link
            href="/case-studies"
            className="focus-ring interactive-target mb-10 inline-flex items-center gap-2 rounded-sm text-sm text-muted transition hover:text-foreground"
          >
            <ArrowLeft size={16} aria-hidden />
            All Case Studies
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
            <div>
              <p className="eyebrow mb-6">{program.tag}</p>
              <h1 className="max-w-5xl text-[clamp(48px,8vw,112px)] font-semibold leading-[0.9] text-balance">
                {program.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl">{program.text}</p>
            </div>
            <div className="grid gap-4 border-l border-line pl-5 text-sm">
              <div className="flex items-center gap-3 text-muted">
                <MapPin size={16} className="text-gold" aria-hidden />
                {program.location}
              </div>
              <div className="flex items-center gap-3 text-muted">
                <ProgramIcon size={16} className="text-gold" aria-hidden />
                {program.format}
              </div>
              <div className="text-muted">{program.gallery.length} 张活动现场图片</div>
            </div>
          </div>

          <div className="relative mt-12 aspect-[16/9] min-h-[320px] overflow-hidden rounded-[8px] border border-line bg-background-soft md:mt-16">
            <Image
              src={program.cover}
              alt={`${program.title}活动现场主图`}
              fill
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" aria-hidden />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <div className="grid gap-3 md:grid-cols-3">
            {program.metrics.map((metric, index) => (
              <Card key={metric} className="min-h-36 p-5 md:p-6">
                <div className="text-xs text-gold">{String(index + 1).padStart(2, "0")}</div>
                <div className="mt-8 text-xl font-semibold leading-tight md:text-2xl">{metric}</div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(76px,10vw,130px)] text-ink">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div data-reveal-left>
            <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Program Overview</p>
            <h2 className="mt-5 text-[clamp(38px,5vw,70px)] font-semibold leading-[0.95]">从活动现场到长期生态连接</h2>
          </div>
          <div data-reveal-right className="grid gap-10">
            <div>
              <h3 className="text-sm uppercase tracking-[0.14em] text-[#76633e]">活动概览</h3>
              <p className="mt-4 text-lg leading-8 text-ink/70">{program.detail}</p>
            </div>
            <div className="border-t border-black/10 pt-8">
              <h3 className="text-sm uppercase tracking-[0.14em] text-[#76633e]">YAN VENTURES Role</h3>
              <p className="mt-4 text-lg leading-8 text-ink/70">{program.role}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <SectionHeading eyebrow="Key Outcomes" title="活动成果与生态价值" className="mb-0" />
          <div className="grid gap-3">
            {program.outcomes.map((outcome, index) => (
              <Card key={outcome} className="grid grid-cols-[48px_1fr] gap-4 p-5 md:p-6">
                <span className="text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base leading-7 text-muted md:text-lg">{outcome}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Event Gallery"
            title="活动现场"
            text="来自活动资料的真实现场记录。点击图片可查看完整尺寸。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {gallery.map((image, index) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group relative aspect-[16/10] overflow-hidden rounded-[8px] border border-line bg-black/20"
                data-reveal-item
                aria-label={`查看${program.title}现场图片 ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${program.title}活动现场 ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <span className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-sm transition group-hover:border-white/40 group-hover:bg-black/55">
                  <ArrowUpRight size={16} aria-hidden />
                </span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-20">
        <div className="container-shell grid gap-3 md:grid-cols-2">
          <Link
            href={`/case-studies/${previousProgram.slug}`}
            className="focus-ring group rounded-[8px] border border-line p-5 transition hover:border-gold/60 hover:bg-white/[0.035] md:p-6"
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted">
              <ArrowLeft size={15} aria-hidden /> Previous Case
            </span>
            <span className="mt-4 block text-xl font-semibold">{previousProgram.title}</span>
          </Link>
          <Link
            href={`/case-studies/${nextProgram.slug}`}
            className="focus-ring group rounded-[8px] border border-line p-5 text-right transition hover:border-gold/60 hover:bg-white/[0.035] md:p-6"
          >
            <span className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.16em] text-muted">
              Next Case <ArrowRight size={15} aria-hidden />
            </span>
            <span className="mt-4 block text-xl font-semibold">{nextProgram.title}</span>
          </Link>
        </div>
      </AnimatedSection>

      <CTASection
        title="Bring the Next Frontier Project to YAN VENTURES"
        text="如果你正在推进 AI 或前沿科技项目，欢迎提交项目资料，与我们建立联系。"
      />
    </>
  );
}
