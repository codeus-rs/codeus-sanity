export default {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'full_time',
            title: 'Full-time',
            type: 'boolean'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'person',
            title: 'What kind of person we are looking for',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'requirements',
            title: 'What you bring to the table',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'niceToHave',
            title: 'Nice to have',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'offer',
            title: 'What we can offer you',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'available',
            title: 'Available',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}
