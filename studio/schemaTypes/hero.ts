export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "badge",
      title: "Badge Text",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: "titleLine1",
      media: "image",
    },
  },
};
