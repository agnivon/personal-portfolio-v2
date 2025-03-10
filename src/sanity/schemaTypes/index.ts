import { type SchemaTypeDefinition } from "sanity";
import job from "./job";
import project from "./project";
import profile from "./profile";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, job, project],
};
