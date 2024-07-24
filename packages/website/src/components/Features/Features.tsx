import { Feature, FeatureProps } from "./Feature";
import { Section } from "../atoms/Section/Section";

const featuresList: Omit<FeatureProps, "showCta">[] = [
  {
    category: "Productivity",
    title: "Documentation Automation",
    description:
      "1. Scribe generates 70% of progress note content within minutes, reducing documentation time by over 50%.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    category: "Leads generation",
    title: "Session Intelligence",
    description:
      "User-friendly analytics help providers assess their performance and improve care quality.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    category: "Leads generation",
    title: "Leadership Reporting",
    description:
      "Detailed dashboards provide unprecedented visibility into staff activity, caseloads, and performance metrics.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    category: "Productivity",
    title: "Seamless Integration",
    description:
      "Embeds directly into existing EHR workflows for both in-person and telehealth sessions.",
    imageUrl: "https://placehold.co/600x400",
  },
];

type FeaturesProps = {
  showCta?: boolean;
};

export const Features = ({ showCta = true }: FeaturesProps) => {
  return (
    <Section flexDir="column">
      {featuresList.map((feature, index) => {
        return (
          <Feature
            key={index}
            category={feature.category}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
            showCta={showCta}
          />
        );
      })}
    </Section>
  );
};
