import {defineType} from 'sanity'

export const seoType = defineType({
  title: 'SEO',
  name: 'seoType',
  type: 'object',
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      validation: (rule) => rule.required().min(15).max(70),
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      validation: (rule) => rule.required().min(15).max(160),
    },
    {
      title: 'Social Image',
      name: 'socialImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
