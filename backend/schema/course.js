import {getExtension} from '@sanity/asset-utils'
import {validation} from 'sanity'

export default {
  name: 'course',
  title: 'Course',
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
      name: 'mainTitle',
      title: 'Course Page Title (Main Title + Pink Line)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'pinkLine',
              title: 'Pink Line',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'coursePageVideo',
      title: 'Course Page Main Video',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
      name: 'miniForm',
      title: 'Mini Form Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'miniFormImage',
              title: 'Image to be displayed',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'miniFormTitle',
              title: 'Mini Form Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'miniFormDescription',
              title: 'Mini Form Description',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(100).error('Description should be less than 100 characters.'),
            },
            {
              name: 'miniFormAdditionalDescription',
              title: 'Mini Form Additional Description (eg: No Credit Card Required)',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(30).error('Description should be less than 30 characters.'),
            },
            {
              name: 'miniFormNoticeText',
              title: 'Mini Form Notice Text (terms and conditions)',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(300).error('Description should be less than 300 characters.'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'aboutCard',
      title: 'About Card Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'aboutCardImage',
              title: 'Background Image (Make sure its a blue theme image)',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'aboutCardTitle',
              title: 'About Card Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'aboutCardDescription',
              title: 'About Card Description',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(500).error('Description should be less than 500 characters.'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'featuredPodcast',
      title: 'Featured Podcast',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'podcastImage',
              title: 'Main Form Image (Make sure its a Yellow theme image)',
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
              name: 'podcastTitle',
              title: 'Main Form Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'podcastVideo',
              title: 'Main Form Video Section',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'podcastVideo',
                      title: 'Main Form Section Main Video',
                      type: 'file',
                      options: {
                        accept: 'video/*',
                      },
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'podcastBackgroundVideo',
                      title:
                        'Main Form Section Background Video (will be played in the background and should be around 8-10secs long) (Also Yellow Theme is preferred)',
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
              name: 'podcastForm',
              title: 'Main Form Section',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'podcastFormTitle',
                      title: 'Main Form Section Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'podcastFormDescription',
                      title: 'Main Form Section Description',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.required()
                          .max(250)
                          .error('Description should be less than 250 characters.'),
                    },
                    {
                      name: 'podcastFormHighlights',
                      title:
                        'Main Form Section Highlights [The achievents will show like(81%People got their Niche Clarity',
                      type: 'array',
                      of: [
                        {
                          title: 'Highlight',
                          type: 'object',
                          fields: [
                            {
                              name: 'highlightPercentage',
                              title: 'Highlight Percentage',
                              type: 'number',
                              validation: (Rule) => Rule.required(),
                            },
                            {
                              name: 'highlightPercentageName',
                              title: 'Highlight Percentage Name',
                              type: 'string',
                              validation: (Rule) =>
                                Rule.required()
                                  .max(70)
                                  .error('Description should be less than 70 characters.'),
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
              title: 'Membership Section Item (3 types of memberships)',
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
                      name: 'membershipItemBadge',
                      title: 'Membership Section Item Badge (Like Bestseller, Great to start, etc)',
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
                      name: 'membershipItemList',
                      title: 'Membership Section Item List',
                      type: 'array',
                      of: [{type: 'string'}],
                      validation: (Rule) => Rule.required().max(10),
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
              validation: (Rule) => Rule.required().max(3),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'whoIsThisFor',
      title: 'Who Is This For Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'whoIsThisForTitle',
              title: 'Who Is This For Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'whoIsThisForItems',
              title: 'Who Is This For Section Items (Like content creators, business owners, etc)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'whoIsThisForItemTitle',
                      title: 'Who Is This For Section Item Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'whoIsThisForItemImage',
                      title: 'Who Is This For Section Item Icon',
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
              validation: (Rule) => Rule.required().max(10),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'whyDifferent',
      title: 'Why Different Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'whyDifferentTitle',
              title: 'Why Different Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'whyDifferentText',
              title: 'Why Different Section Text',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(1000).error('Description should be less than 1000 characters.'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'faq',
      title: 'FAQ Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'faqTitle',
              title: 'FAQ Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'faqItems',
              title: 'FAQ Section Items (Like content creators, business owners, etc)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'faqItemTitle',
                      title: 'FAQ Section Item Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'faqItemImage',
                      title: 'FAQ Section Item Icon',
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
                    {
                      name: 'faqItemText',
                      title: 'FAQ Section Item Text',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.required()
                          .max(1000)
                          .error('Description should be less than 1000 characters.'),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().max(15),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'imageCTA',
      title: 'Image CTA Section (image with a link to register',
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
              title: 'Image CTA Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'imageCTAText',
              title: 'Image CTA Additional Text (e.g. Join the free Masterclass)',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(200).error('Description should be less than 200 characters.'),
            },
            {
              name: 'imageCTASubText',
              title: 'Image CTA Sub Text (e.g. Limited Seats Available)',
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
              title: 'Link to be opened when image is clicked',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'imageGalleryImage',
              title:
                'Image to be displayed in the gallery ( make sure to add more reel format images and less youtube format images)',
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
      validation: (Rule) => Rule.required()
    },
  ],
}
