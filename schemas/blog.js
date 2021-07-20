export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'mainHeading',
            title: 'main-heading',
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
            name: 'mainDate',
            title: 'main-date',
            type: 'string',
        },
        {
            name: 'mainDescription',
            title: 'main-description',
            type: 'string'
        },
        {
            name: 'mainImage',
            title: 'main-image',
            type: 'image'
        },
        {
            name: 'blogImage',
            title: 'blog-image',
            type: 'image'
        },
        {
            name: 'mainJob',
            title: 'Main job',
            default: false,
            type: 'boolean'
        },
       
        {
            name: 'heading1',
            title: 'Heading1',
            type: 'string',
        },
        {
            name: 'heading2',
            title: 'Heading2',
            type: 'string'
        },
        {
            name: 'description1',
            title: 'Description1',
            type: 'string'
        },
        {
            name: 'blogImage3',
            title: 'blog-image3',
            type: 'image'
        },
        {
            name: 'blogImage2',
            title: 'blog-image2',
            type: 'image'
        },
        {
            name: 'blogImage1',
            title: 'blog-image1',
            type: 'image'
        },
        {
            name: 'miniHeading1',
            title: 'mini-heading1',
            type: 'string'
        },
        {
            name: 'description2',
            title: 'description2',
            type: 'string'
        },
        {
            name: 'imgCaption1',
            title: 'imgCaption1',
            type: 'string'
        },
        {
            name: 'imgCaption2',
            title: 'imgCaption2',
            type: 'string'
        },
        {
            name: 'miniHeading2',
            title: 'mini-heading2',
            type: 'string'
        },
        {
            name: 'description3',
            title: 'description3',
            type: 'string'
        },
        {
            name: 'description4',
            title: 'description4',
            type: 'string'
        },
        {
            name: 'date',
            title: 'date',
            type: 'string'
        },
        {
            name: 'blogDescription',
            title: 'blog-description',
            type: 'string'
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}