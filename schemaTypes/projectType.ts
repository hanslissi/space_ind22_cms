import {defineType} from 'sanity'

export const projectType = defineType({
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      title: 'Major',
      name: 'major',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: [{type: 'major'}],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}, {type: 'vimeoUrl'}],
    },
    {
      title: 'Contributors',
      name: 'contributors',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seoType',
    },
  ],
})
