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
            Rule.required().custom((image) => {
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainHeadingSecondLine',
      title: 'Main Heading Second Line',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainSubheading',
      title: 'Main Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
