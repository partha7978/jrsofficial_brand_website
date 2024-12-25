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
      name: 'mainHeadingFirstLine',
      title: 'Main Heading First Line',
      type: 'string',
    },
    {
      name: 'mainHeadingSecondLine',
      title: 'Main Heading Second Line',
      type: 'string',
    },
    {
      name: 'mainSubheading',
      title: 'Main Subheading',
      type: 'string',
    },
    {
      name: 'mainLink',
      title: 'Main Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'linkItem',
          title: 'Link Item',
          fields: [
            {
              name: 'icon',
              title: 'Log Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'name',
              title: 'Logo Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
