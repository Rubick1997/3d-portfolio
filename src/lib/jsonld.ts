import type { Graph, Thing, WithContext } from "schema-dts";
import { links, profile, site } from "@/data/profile";

export const personId = `${site.url}/#person`;
export const websiteId = `${site.url}/#website`;

export const serialize = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export function person(image: string) {
  return {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    url: `${site.url}/`,
    image,
    email: `mailto:${links.email}`,
    jobTitle: "Senior Software Engineer",
    worksFor: { "@type": "Organization", name: profile.worksFor, url: "https://qloo.com" },
    address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "KIMEP University" },
    description: profile.shortBio,
    knowsAbout: [...profile.knowsAbout],
    sameAs: [links.linkedin, links.medium, ...(links.showGithub ? [links.github] : [])],
  } as const;
}

export function profileGraph(path: string, image: string): Graph {
  const url = `${site.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#profilepage`,
        url,
        name: site.title,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": websiteId },
        inLanguage: "en-US",
      },
      person(image),
      { "@type": "WebSite", "@id": websiteId, url: `${site.url}/`, name: profile.name, publisher: { "@id": personId }, inLanguage: "en-US" },
    ],
  } as Graph;
}

export function breadcrumbs(items: { name: string; path: string }[]): WithContext<Thing> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  } as WithContext<Thing>;
}
