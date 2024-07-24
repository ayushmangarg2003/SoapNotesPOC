import { Feature, FeatureProps } from "./Feature";
import { Section } from "../atoms/Section/Section";

const featuresList: Omit<FeatureProps, "showCta">[] = [
  {
    category: "Productivity",
    title: "After Visit Summary",
    description:
      "Written in your style and ready the moment the visit is over. Just hand it over to your patient.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    category: "Leads generation",
    title: "SOAP Note",
    description:
      "Generated based on medical guidelines and best practice templates. Review and approve.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    category: "Leads generation",
    title: "Self Learning",
    description:
      "With every edit, Freed learns your style, format, and templates. Like a human scribe would.",
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
