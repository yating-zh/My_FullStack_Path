export default {
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'company',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'imageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      title: 'feedback',
      type: 'string',
    },
  ],
}
