import { defineField, defineType } from 'sanity';

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'overview', title: 'Overview' },
    { name: 'detail', title: 'Detail Page' },
  ],
  fields: [
    /* ── Overview (list page) ── */
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required(), group: 'overview' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: r => r.required(),
      group: 'overview',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'caseStudyCategory' }],
      group: 'overview',
    }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, group: 'overview' }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      group: 'overview',
    }),

    /* ── Detail Page ── */
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'Short tagline shown below the title in the hero',
      group: 'detail',
    }),
    defineField({
      name: 'aboutClient',
      title: 'About the Client',
      type: 'text',
      rows: 4,
      group: 'detail',
    }),
    defineField({
      name: 'clientMission',
      title: "Client's Mission",
      type: 'text',
      rows: 4,
      group: 'detail',
    }),
    defineField({
      name: 'servicesRendered',
      title: 'Services Rendered',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add one bullet point per service',
      group: 'detail',
    }),
    defineField({
      name: 'results',
      title: 'The Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Result Headline', type: 'string' }),
            defineField({ name: 'body', title: 'Result Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
      group: 'detail',
    }),
  ],
});
