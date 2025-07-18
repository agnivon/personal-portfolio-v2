import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
        }),
      ],
    }),
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "altBio1",
      title: "Alt Bio 1",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (rule) => rule.required().max(40),
        }),
        defineField({
          name: "description",
          title: "description",
          type: "array",
          of: [{ type: "block" }],
          validation: (rule) => rule.required().max(145),
        }),
      ],
    },
    {
      name: "altBio2",
      title: "Alt Bio 2",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "description",
          title: "description",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "altBio3",
      title: "Alt Bio 3",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "description",
          title: "description",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "altBio4",
      title: "Alt Bio 4",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (rule) => rule.required().max(145),
        }),
        defineField({
          name: "description",
          title: "description",
          type: "array",
          of: [{ type: "block" }],
          validation: (rule) => rule.required().max(160),
        }),
      ],
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          initialValue: "https://twitter.com/",
        },
        {
          name: "twitch",
          title: "Twitch URL",
          type: "url",
          initialValue: "https://twitch.com/",
        },
        {
          name: "blog",
          title: "Blog URL",
          type: "url",
          initialValue: "https://blog.agnivon.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    }),
    {
      name: "otherProfileLinks",
      title: "Other Profile Links",
      type: "array",
      description: "Add your other profile links:",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "logo",
              title: "Logo",
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
            {
              name: "link",
              title: "Link",
              type: "url",
            },
          ],
        },
      ],
    },
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    }),
  ],
};

export default profile;
