"use client";

import { Accordion, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Section } from "../atoms/Section/Section";
import { FAQQuestionProps, FAQquestion } from "./FAQquestion";
import { brandName, supportEmail } from "@/config";
import { useColorModeValues } from "@/hooks/useColorModeValues";

const faqs: FAQQuestionProps[] = [
  {
    question: "What is Genesis Scribe?",
    answer: `Genesis Scribe is a CareOps Automation solution that automates documentation, provides session intelligence, and offers leadership reporting for behavioral health organizations.`,
  },
  {
    question: "How does Genesis Scribe reduce documentation time?",
    answer: "Genesis Scribe generates 70% of progress note content within minutes, reducing documentation time by over 50%.",
  },
  {
    question: "Is Genesis Scribe compatible with existing EHR systems?",
    answer: "Yes, Genesis Scribe embeds seamlessly within existing electronic health record (EHR) workflows for both in-person and telehealth sessions.",
  },
  {
    question: "What kind of analytics does Genesis Scribe provide?",
    answer: "Genesis Scribe offers user-friendly session analytics to help providers assess their performance and identify areas for improvement.",
  },
  {
    question: "How does Genesis Scribe benefit leadership?",
    answer: "It provides detailed dashboards that give leaders unprecedented visibility into staff activity, caseloads, and performance metrics.",
  },
  {
    question: "Is Genesis Scribe secure and compliant?",
    answer: "Yes, Genesis Health has multiple security certifications including HITRUST CSF, HIPAA, SOC 2, and ISO 27001.",
  },
  {
    question: "How does Genesis Scribe impact client care?",
    answer: "Studies show that clients of providers using Scribe were two times more engaged in care and achieved three to four times better symptom improvement compared to treatment as usual.",
  },
  {
    question: "Can Genesis Scribe be used for group sessions?",
    answer: "Yes, Genesis Scribe supports both individual and group session formats.",
  },
];

export const FAQ = () => {
  const { primaryTextColor } = useColorModeValues();
  return (
    <Section>
      <Flex
        bgColor="blackAlpha.50"
        w="90%"
        maxW="1000px"
        alignItems="center"
        justifyContent="center"
        p={["0", "16px", "40px", "54px"]}
        borderRadius="16px"
        flexDir="column"
      >
        <VStack maxW="800px">
          <Heading alignItems="center" textAlign="center" my="16px">
            Frequently asked questions
          </Heading>

          <Text color={primaryTextColor} textAlign="center">
            More questions? Email us at{" "}
            <Link
              href={`mailto:${supportEmail}`}
              fontWeight="bold"
              color="brand.500"
            >
              {supportEmail}
            </Link>{" "}
          </Text>
        </VStack>

        <Accordion mt="40px" w="100%" borderColor="blackAlpha.300" allowToggle>
          {faqs.map((faq, index) => {
            return (
              <FAQquestion
                question={faq.question}
                answer={faq.answer}
                key={index}
              />
            );
          })}
        </Accordion>
      </Flex>
    </Section>
  );
};
