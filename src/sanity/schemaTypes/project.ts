import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
      validation: (rule) => rule.max(40).required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(80).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Project Logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "Github URL",
      type: "url",
    },
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      description: "Upload screenshots this project",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
      initialValue: [],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
      initialValue: [],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      description: "Add a list of technologies used in this project",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      description: "Add a list of keywords for this project",
      of: [{ type: "string" }],
    }),
  ],
};

export default project;
