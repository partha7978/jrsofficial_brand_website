import {getExtension} from '@sanity/asset-utils'

export default {
  name: 'homepageCourse',
  title: 'Homepage Course',
  type: 'document',
  fields: [
    {
      name: 'coursePage',
      title: 'Course Page Cta',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Main Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(200).error('Description should be less than 200 characters.'),
            },
            {
              name: 'courseBanner',
              title: 'Course Banner (Sky Blue Theme)',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().custom((image) => {
                  if (!image || !image.asset) return true
                  const extension = getExtension(image.asset._ref)
                  return extension === 'webp' ? true : 'Only .webp format images are allowed.'
                }),
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'productionPage',
      title: 'Production Page Cta',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Main Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(200).error('Description should be less than 200 characters.'),
            },
            {
              name: 'courseBanner',
              title: 'Course Banner (Sky Blue Theme)',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().custom((image) => {
                  if (!image || !image.asset) return true
                  const extension = getExtension(image.asset._ref)
                  return extension === 'webp' ? true : 'Only .webp format images are allowed.'
                }),
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
  ],
  // validation: (Rule) => Rule.required().max(1),
}
