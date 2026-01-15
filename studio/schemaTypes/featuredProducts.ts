export default {
  name: "featuredProduct",
  title: "Featured Product",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "notes", title: "Notes", type: "string" },
    { name: "price", title: "Price", type: "number" }, 
    { name: "image", title: "Image", type: "image" }, 
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
