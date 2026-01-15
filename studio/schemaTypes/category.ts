export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "key",
      title: "Internal Key",
      type: "string",
      description: "Used internally (e.g. lattaffa)",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
    
