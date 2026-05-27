import { defineField, defineType } from 'sanity';

export const caseStudyCategoryType = defineType({
  name: 'caseStudyCategory',
  title: 'Case Study Category',
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
  ],
  preview: { select: { title: 'title' } },
});
