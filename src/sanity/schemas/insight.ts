import { defineField, defineType } from 'sanity';

export const insightType = defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: r => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Type any category or pick a common one from the suggestions',
      options: {
        list: [
          { title: 'Tech & Innovation', value: 'Tech & Innovation' },
          { title: 'Policy Analysis', value: 'Policy Analysis' },
          { title: 'Economics', value: 'Economics' },
          { title: 'Governance', value: 'Governance' },
          { title: 'Trade & Investment', value: 'Trade & Investment' },
        ],
        layout: 'dropdown',
      },
      validation: r => r.required(),
    }),
    defineField({ name: 'excerpt', title: 'Excerpt (short teaser)', type: 'text', rows: 3 }),
    defineField({ name: 'author', title: 'Author Name', type: 'string' }),
    defineField({
      name: 'authorImage',
      title: 'Author Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      options: { dateFormat: 'MMMM Do YYYY', timeFormat: 'HH:mm', timeStep: 15 },
    }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string', placeholder: '5 mins read' }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Keywords/topics for this article (e.g. African policy, Governance reform)',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  orderings: [{ title: 'Published Date, New', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
});
