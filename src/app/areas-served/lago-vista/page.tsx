import type { Metadata } from "next";
import { AreaShell } from "@/components/AreaShell";
import { getArea } from "@/data/areas";

const area = getArea("lago-vista")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: { canonical: `/areas-served/${area.slug}/` },
};

export default function Page() {
  return <AreaShell area={area} />;
}
