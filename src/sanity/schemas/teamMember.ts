import { defineField, defineType } from 'sanity';

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'credentials', title: 'Credentials', type: 'string', placeholder: 'B.Engr, M.Sc, PhD' }),
    defineField({
      name: 'detailedCredentials',
      title: 'Detailed Credentials (Sidebar)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title (e.g. Ph.D, Biometrics...)', type: 'string' }),
            defineField({ name: 'institution', title: 'Institution / Subtitle', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'bio', title: 'Bio', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'linkedIn', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'expertise', title: 'Expertise (simple tags — legacy)', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({
      name: 'detailedExpertise',
      title: 'Detailed Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'area', title: 'Area / Title', type: 'string', validation: r => r.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'area', subtitle: 'description' } },
        },
      ],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
