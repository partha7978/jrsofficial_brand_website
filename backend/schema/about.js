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
    },
    {
      name: 'description',
      title: 'About Description',
      type: 'string',
      validation: (Rule) => Rule.max(280).error('Description should be less than 200 characters.'),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image For About Page',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.custom((image) => {
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
        Rule.custom((image) => {
          if (!image || !image.asset) return true
          const extension = getExtension(image.asset._ref)
          return extension === 'webp' ? true : 'Only .webp format images are allowed.'
        }),
    },
    {
      name: 'featuredList',
      title: 'Featured List',
      type: 'array',
      of: [
        {
          name: 'listItem',
          title: 'List Item',
          type: 'string',
        },
      ],
    },
  ],
}
