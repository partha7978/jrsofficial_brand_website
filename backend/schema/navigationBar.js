export default {
  name: 'navigationBar',
  title: 'NavigationBar',
  type: 'document',
  fields: [
    {
      name: 'redirectButtonName',
      title: 'Redirect Button Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'redirectLink',
      title: 'Redirect Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
