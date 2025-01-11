import { PlayIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const vimeoUrl = defineType({
  title: 'Vimeo URL',
  name: 'vimeoUrl',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
    }),
  ],
})
