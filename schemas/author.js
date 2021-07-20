export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(80)
    },
    {
      name: 'slug',
      title: 'Unique author text (hidden)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200) + Math.floor(Math.random() * 100000)
      },
      validation: Rule => Rule.required().custom(name => {
        if (name.current.includes(' ')) {
          return 'Text cannot contain white space';
        } else {
          return true;
        }
      })
    },
    {
      name: 'image',
      title: 'Portfolio image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
