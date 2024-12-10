export default {
  name: 'homepage',
  title: 'HomePage',
  type: 'document',
  fields: [
    {
      name: 'mainBackgroundImage',
      title: 'Main Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
  ],
}
