export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Visible heading and main title for the article',
            validation: Rule => Rule.required().min(3).max(80)
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'This text is not visible on the article itself, but used as a link to the article',
            options: {
                source: 'heading',
                maxLength: 96,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/\?/g, '')
                    .slice(0, 200) + Math.floor(Math.random() * 100000)
            },
            validation: Rule => Rule.required().custom(name => {
                if (name.current.includes(' ') || name.current.includes('?')) {
                    return 'Text cannot contain white space or question mark';
                } else {
                    return true;
                }
            })
        },
        {
            name: 'featured',
            title: 'Highlight as a "featured"?',
            description: 'Only one article can be marked as "featured" at a time',
            default: false,
            type: 'boolean'
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
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required().min(3).max(200)
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
                        {title: 'Title', value: 'h2'},
                        {title: 'Heading', value: 'h3'},
                        {title: 'Highlighted text', value: 'h5'},
                        {title: 'Normal text', value: 'normal'},
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
            ],
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'heading',
        },
    },
}
