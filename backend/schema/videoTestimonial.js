export default {
  name: 'videoTestimonial',
  title: 'Video Testimonial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Testimonial Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field cannot be empty'),
    },
    {
      name: 'name',
      title: 'Testimonial User',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name field cannot be empty'),
    },
    // {
    //   name: 'occupation',
    //   title: 'Testimonial Author Occupation',
    //   type: 'string',
    //   validation: (Rule) => Rule.required().error('Occupation field cannot be empty'),
    // },
    {
      name: 'video',
      title: 'Testimonial Video ( Make Sure It is insta reel format )',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
