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
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
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
    },
    {
      name: 'speakerName',
      title: 'Speaker Name',
      type: 'string',
    },
    {
      name: 'episodeDate',
      title: 'Episode Date',
      type: 'datetime',
    },
    {
      name: 'episodeImage',
      title: 'Episode Image',
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
      name: 'episodeAudio',
      title: 'Episode Audio',
      type: 'file',
    },
    {
      name: 'shortDescription',
      title: 'Short Description For Showing On Card',
      type: 'string',
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
    },
  ],
}
