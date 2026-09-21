import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { TalentProgramsSection } from "@/components/portfolio/sections/talent-programs-section";
import { content } from "@/content/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/talent-training-design")({
  head: () =>
    pageHead({
      title: `${content.en.talentPrograms.pageTitle} | Mahrad Moslem`,
      description: content.en.talentPrograms.intro,
      path: "/talent-training-design",
      image: `https://mahrad-moslem.vercel.app/talenttraining/${encodeURIComponent("IMG_9495.JPG")}`,
      keywords:
        "climbing talent identification, rock climbing training design, coach Rasht, Mahrad Moslem, استعدادیابی سنگنوردی",
    }),
  component: TalentProgramsPage,
});

function TalentProgramsPage() {
  return (
    <SiteShell>
      <PageLayout>
        <TalentProgramsSection />
      </PageLayout>
    </SiteShell>
  );
}
