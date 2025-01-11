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
      title: 'Area',
      name: 'major',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: '📰 Communication Design', value: 'communication-design'},
          {title: '🚀 Interaction Design', value: 'interaction-design'},
          {title: '🎬 Media Design', value: 'media-design'},
        ],
        layout: 'radio',
      },
      initialValue: 'communication-design',
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
