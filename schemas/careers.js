export default {
    name:'careers',
    title:'careers',
    type:'document',
    fields: [
        {
            name:'img1',
            title:'Top Right Image',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'img2',
            title:'Image Left',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'img3',
            title:'Image Right',
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
            name: 'subtitle1',
            title: 'subtitle-1',
            type: 'string'
          },
          {
            name: 'subtitle2',
            title: 'subtitle-2',
            type: 'string'
          },
          {
            name: 'quote',
            title: 'quote',
            type: 'string'
          },
          {
            name: 'name',
            title: 'name',
            type: 'string'
          },
          {
            name: 'position',
            title: 'position',
            type: 'string'
          },
          {
            name: 'heading',
            title: 'heading',
            type: 'string'
          },
          {
            name: 'benefit',
            title: 'benefit',
            type: 'array',
            of: [{type: 'string'}],
          },
          {
            name: 'benefitDescription',
            title: 'benefit-description',
            type: 'array',
            of: [{type: 'string'}],
          },
    ]
    
}