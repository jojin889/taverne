import { defineField, defineType } from "sanity";

export default defineType({
  name: "entrees",
  title: "Entrées",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Prix",
      type: "string",
    }),
  ],
});
