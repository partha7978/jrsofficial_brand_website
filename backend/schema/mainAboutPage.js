import {getExtension} from '@sanity/asset-utils'
import {validation} from 'sanity'

export default {
  name: 'mainAboutPage',
  title: 'Main About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'About Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'About Description',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(280).error('Description should be less than 280 characters.'),
    },
    {
      name: 'logoName',
      title: 'Logo Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logoDesc',
      title: 'Logo Description - this will appear in the card section top',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(280).error('Description should be less than 280 characters.'),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image For About Page',
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
      name: 'subscribeText',
      title: 'Subscribe Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'views',
      title: 'Total Reach',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'impressions',
      title: 'Impression Count',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'clients',
      title: 'Views',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hosts',
      title: 'Number of Episodes',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'youtubeLink',
      title: 'Youtube Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'highlights',
      title: 'Highlights Section',
      // will be an array of 2 things text and image
      type: 'array',
      of: [
        {
          title: 'Highlight',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Text (Write about 150 words)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
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
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
  ],
}
