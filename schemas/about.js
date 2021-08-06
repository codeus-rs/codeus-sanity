export default {
    name:'about',
    title:'about',
    type:'document',
    fields: [
        {
            name:'img1',
            title:'Main Image',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'img2',
            title:'Small Image Left',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'img3',
            title:'Small Image Right',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'badge1',
            title:'Badge 1',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'badge2',
            title:'Badge 2',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'subtitle',
            title: 'subtitle',
            type: 'string'
          },
          {
            name: 'heading1',
            title: 'heading-1',
            type: 'string'
          },
          {
            name: 'description1',
            title: 'description-1',
            type: 'string'
          },
          {
            name: 'heading2',
            title: 'heading-2',
            type: 'string'
          },
          {
            name: 'description2',
            title: 'description-2',
            type: 'string'
          },
          {
            name: 'key',
            title: 'key-differentiator',
            type: 'array',
            of: [{type: 'string'}],
          },
          {
            name: 'keyDescription',
            title: 'key-differentiator-description',
            type: 'array',
            of: [{type: 'string'}],
          },
    ]
    
}