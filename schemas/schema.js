// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import job from './job';
import services from './services';
import project from './project';
import blog from './blog';
import author from './author';
import testimonials from './testimonials';
import careers from './careers';
import about from './about';
import faq from './faq';
import faqPageSettings from './faqPageSettings';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
      job,
      project,
      services,
      blog,
      author,
      testimonials,
      careers,
      about,
      faq,
      faqPageSettings
  ]),
})
