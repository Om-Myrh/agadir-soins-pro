import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/ar")({
  head: () => buildHead("ar"),
  component: ArabicHome,
});

function ArabicHome() {
  return <SitePage lang="ar" />;
}
