export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Visible heading and main title for the post'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'This text is not visible on the article itself, but used as a link to the article',
            options: {
                source: 'name',
                maxLength: 96,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200) + Math.floor(Math.random() * 100000)
            },
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'DD. MM. YYYY',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            },
            initialValue: ''
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'content',
            title: 'Content',
            description: 'Actual list of the paragraphs and images used in the article',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal text', value: 'normal'},
                        {title: 'Title', value: 'h2'},
                    ]
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Image alternative text',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'heading',
        },
    },
}
