export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
          name: 'client',
          title: 'Client',
          type: 'string'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
          name: 'caseStudy',
          title: 'Has case study?',
          type: 'boolean'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'services',
            title: 'Services provided',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
          name: 'previewImage',
          title: 'Preview image',
          type: 'image',
          options: {
              hotspot: true
          }
        },
        {
            name: 'projectTitle',
            title: 'Project title',
            type: 'string'
        },
        {
            name: 'clientSubtitle',
            title: 'Client subtitle',
            type: 'string'
        },
        {
            name: 'headquarters',
            title: 'Headquarters location',
            type: 'string'
        },
        {
            name: 'aboutClient',
            title: 'About client',
            type: 'string'
        },
        {
            name: 'projectDescription',
            title: 'Project description',
            type: 'string'
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'projectImages',
            title: 'Project images',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'ourContribution',
            title: 'Our contribution',
            type: 'string'
        },
        {
            name: 'contributions',
            title: 'Contributions',
            type: 'array',
            of:[{type: 'string'}]
        },
        {
            name: 'projectImage',
            title: 'Project image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{title: 'testimonial', type: 'object', fields: [{type: 'string', name: 'author', title: 'Author'},{type: 'string', name: 'position', title: 'Position'},{type: 'string', name: 'testimonial', title: 'Testimonial'}]}]
        },
        {
            name: 'result',
            title: 'Result',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}
