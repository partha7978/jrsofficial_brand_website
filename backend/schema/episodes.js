import {getExtension} from '@sanity/asset-utils'

export default {
  name: 'episodes',
  title: 'Episodes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'relatedTags',
      title: 'relatedTags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'speakerName',
      title: 'Speaker Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'episodeDate',
      title: 'Episode Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'episodeImage',
      title: 'Episode Image For Main Page Thumbnail (Instagram Format)',
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
      name: 'episodeMainImage',
      title: 'Episode Main Image (Youtube Format)',
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
      name: 'episodeAudio',
      title: 'Episode Audio',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description For Showing On Card',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
