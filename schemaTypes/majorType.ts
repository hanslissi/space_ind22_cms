import { defineType } from "sanity"

export const majorType = defineType({
    title: 'Major',
    name: 'major',
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
                source: 'title'
            }
        }
    ]
})