import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      initialValue: "SMB Solutions",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroAudience",
      title: "Hero Audience",
      type: "string",
      initialValue: "Small to mid-sized businesses",
    }),
    defineField({
      name: "primaryCtaText",
      title: "Primary CTA Text",
      type: "string",
      initialValue: "Talk to us",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA Link",
      type: "string",
      initialValue: "/contact",
      description: "Use internal paths like /contact",
    }),
    defineField({
      name: "servicesCtaLabel",
      title: "Services CTA Label",
      type: "string",
      initialValue: "Request a Quote",
    }),
    defineField({
      name: "servicesCtaHref",
      title: "Services CTA Link",
      type: "string",
      initialValue: "/contact",
      description: "Use internal paths like /contact",
    }),
    defineField({
      name: "servicesCtaSupportingLine",
      title: "Services CTA Supporting Line",
      type: "string",
      initialValue: "Share your goals and timeline to get a tailored delivery plan.",
    }),
    defineField({
      name: "heroServiceFocus",
      title: "Hero Service Focus",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      description: "Services highlighted as tags in the hero section.",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "contactWhatsapp",
      title: "WhatsApp",
      type: "string",
    }),
    defineField({
      name: "responseTimeNote",
      title: "Response Time Note",
      type: "string",
      initialValue: "Replies within 24 hours",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
