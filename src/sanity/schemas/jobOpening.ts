import { defineField, defineType } from 'sanity';

export const jobOpeningType = defineType({
  name: 'jobOpening',
  title: 'Job Opening',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'department', title: 'Department', type: 'string' }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'Abuja, Nigeria · Remote',
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: { list: ['Full-time', 'Part-time', 'Contract', 'Internship'] },
      initialValue: 'Full-time',
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'applyLink', title: 'Application Link', type: 'url' }),
    defineField({ name: 'isOpen', title: 'Currently Open?', type: 'boolean', initialValue: true }),
    defineField({ name: 'postedAt', title: 'Posted Date', type: 'date' }),
  ],
  orderings: [{ title: 'Posted Date, Newest', name: 'postedDesc', by: [{ field: 'postedAt', direction: 'desc' }] }],
});
