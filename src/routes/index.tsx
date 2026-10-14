import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildHead("fr"),
  component: FrenchHome,
});

function FrenchHome() {
  return <SitePage lang="fr" />;
}
