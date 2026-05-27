import type { Metadata } from "next";
import { ServiceShell } from "@/components/ServiceShell";
import { getService } from "@/data/services";

const service = getService("business-trusts")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/services/${service.slug}/` },
};

export default function Page() {
  return <ServiceShell service={service} />;
}
