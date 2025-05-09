import {getExtension} from '@sanity/asset-utils'
import {validation} from 'sanity'

export default {
  name: 'about',
  title: 'About',
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
        Rule.required().max(280).error('Description should be less than 200 characters.'),
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
      name: 'featuredImageForMobile',
      title: 'Featured Image For Mobile Device - 3 * 3 Format',
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
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .uri({scheme: ['http', 'https']})
          .error('Invalid URL format.'),
    },
    {
      name: 'youtubeLink',
      title: 'YouTube Link',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .uri({scheme: ['http', 'https']})
          .error('Invalid URL format.'),
    },
    {
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .uri({scheme: ['http', 'https']})
          .error('Invalid URL format.'),
    },
  ],
}
