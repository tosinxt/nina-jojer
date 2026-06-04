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
      type: 'reference',
      to: [{ type: 'insightCategory' }],
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
    defineField({
      name: 'attachment',
      title: 'Downloadable Document',
      type: 'file',
      description: 'Upload a PDF or document that visitors can download from the insight card.',
      options: { accept: '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx' },
    }),
  ],
  orderings: [{ title: 'Published Date, New', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
});
