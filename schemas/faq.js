export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: Rule => Rule.required().min(10).max(1000)
        },
        {
            name: 'slug',
            title: 'Unique faq text (hidden)',
            type: 'slug',
            options: {
                source: 'question',
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
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [
                {
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                ]
                }
            ],
            validation: Rule => Rule.required() 
        },
    ],
    orderings: [
        {
            title: 'Question',
            name: 'questionAsc',
            by: [
              {field: 'question', direction: 'asc'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'answer',
        },
    },
}

