import {getExtension} from '@sanity/asset-utils'
import {validation} from 'sanity'

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Contact Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Contact Page Description',
      type: 'string',
      validation: (Rule) => Rule.required().max(280).error('Description should be less than 200 characters.'),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().max(10).error('Phone number should be 10 digits'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('Enter a valid email'),
    },
    {
      name: 'address',
      title: 'Address - Just City, State',
      type: 'string',
      validation: (Rule) => Rule.required().max(255).error('Address should be less than 255 characters.'),
    },
  ],
}
