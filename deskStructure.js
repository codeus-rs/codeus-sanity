import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('FAQ Settings')
        .child(
          S.document()
            .schemaType('faqPageSettings')
            .documentId('faqPageSettings')
        ),
      ...S.documentTypeListItems().filter(listItem => !['faqPageSettings'].includes(listItem.getId()))
    ])