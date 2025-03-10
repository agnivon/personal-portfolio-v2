import { BiBriefcase } from "react-icons/bi";
import { defineField } from "sanity";

const job = {
  name: "job",
  title: "Job",
  type: "document",
  icon: BiBriefcase,
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Company Website",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
  ],
};

export default job;
