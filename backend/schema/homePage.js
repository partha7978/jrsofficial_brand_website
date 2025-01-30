import {getExtension} from '@sanity/asset-utils'

export default {
  name: 'homepage',
  title: 'HomePage',
  type: 'document',
  fields: [
    {
      name: 'mainBackgroundImages',
      title: 'Main Background Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Enable image cropping/positioning
          },
          validation: (Rule) =>
            Rule.custom((image) => {
              if (!image || !image.asset) return true
              const extension = getExtension(image.asset._ref)
              return extension === 'webp' ? true : 'Only .webp format images are allowed.'
            }),
        },
      ],
      // validation: (Rule) => Rule.max(3).error('You can only add up to 3 images.'),
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
