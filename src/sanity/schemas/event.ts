import { defineField, defineType } from 'sanity';

export const eventType = defineType({
  name: 'event',
  title: 'Event',
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
    defineField({ name: 'description', title: 'Description (short summary / teaser)', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body (full event details)', type: 'text', rows: 8 }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Corporate', 'Tech', 'Policy', 'Other'] },
    }),
    defineField({ name: 'date', title: 'Date', type: 'date', validation: r => r.required() }),
    defineField({ name: 'time', title: 'Time', type: 'string', placeholder: '8:00 am' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
          ],
        },
      ],
    }),
    defineField({
      name: 'isPast',
      title: 'Is Past Event?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'excerpt', title: 'Excerpt (for past events list)', type: 'text', rows: 2 }),
    defineField({ name: 'registerLink', title: 'Registration Link', type: 'url' }),
  ],
  orderings: [{ title: 'Date, Newest', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
});
