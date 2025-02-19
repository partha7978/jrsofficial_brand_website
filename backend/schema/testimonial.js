import {getExtension} from '@sanity/asset-utils'

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Testimonial Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field cannot be empty'),
    },
    {
      name: 'description',
      title: 'Testimonial Description',
      type: 'string',
      validation: (Rule) => Rule.required().error('Description field cannot be empty'),
    },
    {
      name: 'name',
      title: 'Testimonial User',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name field cannot be empty'),
    },
    {
      name: 'occupation',
      title: 'Testimonial Author Occupation',
      type: 'string',
      validation: (Rule) => Rule.required().error('Occupation field cannot be empty'),
    },
    {
      name: 'image',
      title: 'Testimonial Image ( Make Sure It is 1:1 )',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required()
          .error('Image field cannot be empty')
          .custom((image) => {
            if (!image || !image.asset) return true
            const extension = getExtension(image.asset._ref)
            return extension === 'webp' ? true : 'Only .webp format images are allowed.'
          }),
    },
  ],
}
