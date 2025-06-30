export default {
  name: 'benefits',
  title: 'Benefits',
  type: 'document',
  fields: [
    {
      name: 'iconURL',
      title: 'imageURL',
      type: 'image',
      //options: {
      //  hotspot: true,
      //},
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'The description of the benefit',
      type: 'string',
    },
  ],
}
