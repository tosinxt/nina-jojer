import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: r => r.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 5, validation: r => r.required() }),
    defineField({
      name: 'service',
      title: 'Service Page',
      type: 'string',
      options: {
        list: [
          { title: 'Policy & Advocacy', value: 'policy' },
          { title: 'Corporate Solutions', value: 'corporate' },
          { title: 'Technology Solutions', value: 'technology' },
          { title: 'Strategic Communications', value: 'communications' },
          { title: 'General', value: 'general' },
        ],
      },
      validation: r => r.required(),
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
