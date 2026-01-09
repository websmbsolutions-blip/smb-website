import { defineField, defineType } from "sanity";

export default defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Mumbai / Remote",
    }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full_time" },
          { title: "Part-time", value: "part_time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
        ],
        layout: "radio",
      },
      initialValue: "full_time",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Open", value: "open" },
          { title: "Closed", value: "closed" },
        ],
        layout: "radio",
      },
      initialValue: "open",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    // Use Portable Text for rich job descriptions
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "applyUrl",
      title: "Apply URL",
      type: "url",
      description: "Link to Google Form, email, or ATS page",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "status",
    },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle === "open" ? "Open" : "Closed" };
    },
  },
});
