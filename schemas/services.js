export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'heading',
            title: 'Heading-text',
            type: 'string',
        },
        {
            name: 'devImg',
            title: 'Developers-images',
            type: 'array',
            of:[{type:'image'}]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'devDescription',
            title: 'Developers-description',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'servicesTitle',
            title: 'Services-title',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'servicesDescription',
            title: 'Services-description',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'processTitle',
            title: 'Process-title',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'processDescription',
            title: 'Process-description',
            type: 'array',
            of: [{type: 'string'}],
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}