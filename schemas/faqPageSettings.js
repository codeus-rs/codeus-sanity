export default {
    name: 'faqPageSettings',
    title: 'FAQ Page Settings',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(10).max(1000)
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string',
            validation: Rule => Rule.required().min(10)
        },
    ],
}

