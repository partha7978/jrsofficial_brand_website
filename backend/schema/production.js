import {getExtension} from '@sanity/asset-utils'
import {validation} from 'sanity'

export default {
  name: 'production',
  title: 'Production',
  type: 'document',
  fields: [
    {
      name: 'title',
      title:
        'Title (IGNORE: this will not be visible and this is for BE Configuration purpose) Just add Our Membership',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'firstPage',
      title: 'Production First page',
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
              name: 'shortTitle',
              title: 'Short Title will be appeared on top of main title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'mainImage',
              title: 'Main Image',
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
              name: 'smallImage',
              title: 'Small Image (will appear on top of the main image)',
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
            {
              name: 'buttonRedirect',
              title: 'Button Redirect Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'secondPage',
      title: 'Second Page',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'mainVideo',
              title: 'Course Page Main Video',
              type: 'file',
              options: {
                accept: 'video/*',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'mainBackgroundVideo',
              title:
                'Main Background Video (will be played in the background and should be around 8-10secs long)',
              type: 'file',
              options: {
                accept: 'video/*',
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },

    {
      name: 'thirdPage',
      title: 'Third Page ( Dynamic Section )',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'thirdPageTitle',
              title: 'Third Page Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'dynamicSection',
              title: 'Dynamic Section (maximum 5-6 items allowed)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'sectionHeading',
                      title: 'Section Heading',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'sectionDescription',
                      title: 'Section Description',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'sectionImage',
                      title: 'Section Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                      validation: (Rule) =>
                        Rule.required().custom((image) => {
                          if (!image || !image.asset) return true
                          const extension = getExtension(image.asset._ref)
                          return extension === 'webp'
                            ? true
                            : 'Only .webp format images are allowed.'
                        }),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().max(3),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'membership',
      title: 'Membership Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'membershipTitle',
              title: 'Membership Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'membershipDescription',
              title: 'Membership Section Description',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(250).error('Description should be less than 250 characters.'),
            },
            {
              name: 'membershipItem',
              title: 'Membership Section Item (2 types of memberships)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'membershipItemTitle',
                      title: 'Membership Section Item Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'membershipItemPrice',
                      title: 'Membership Section Item Price',
                      type: 'number',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'membershipItemPriceTime',
                      title: 'type of price (monthly or yearly)',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'membershipItemList',
                      title: 'Membership Section Item List',
                      type: 'array',
                      of: [{type: 'string'}],
                      validation: (Rule) => Rule.required().max(10),
                    },
                    {
                      name: 'membershipItemButton',
                      title: 'Membership Section Item Button Name',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'membershipItemButtonRedirect',
                      title:
                        'Membership Section Item Button Redirect(Share your tagmango direct price link)',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().max(2),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'bottomImageCTA',
      title: 'Bottom Image CTA Section (image with a link to register)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'imageCTAImage',
              title: 'Image to be displayed',
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
              name: 'imageCTATitle',
              title: 'Image CTA Title (e.g. Make this your groundbreaking year)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'imageCTADescription',
              title: 'Image CTA Additional Text',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(200).error('Description should be less than 200 characters.'),
            },
            {
              name: 'imageCTAButton',
              title: 'Image CTA Button Text(e.g. Register Now)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'imageCTALink',
              title: 'Link to be opened when button is clicked',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
  ],
}
