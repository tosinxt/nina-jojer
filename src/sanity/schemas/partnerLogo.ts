import { defineField, defineType } from 'sanity';

export const partnerLogoType = defineType({
  name: 'partnerLogo',
  title: 'Partner Logo',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Partner Name', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'SVG or PNG with transparent background works best.',
      validation: r => r.required(),
    }),
    defineField({
      name: 'height',
      title: 'Display Height (px)',
      type: 'number',
      description: 'Optional. Defaults to 48px; width scales automatically.',
    }),
    defineField({
      name: 'width',
      title: 'Display Width (px)',
      type: 'number',
      description: 'Optional. Leave blank to scale automatically from the height.',
    }),
    defineField({
      name: 'fullColor',
      title: 'Show in Original Colors',
      type: 'boolean',
      description: 'Off: the logo is rendered black to match the marquee style. On: original colors are kept.',
      initialValue: false,
    }),
    defineField({
      name: 'darkBackground',
      title: 'Display on Dark Tile',
      type: 'boolean',
      description: 'Turn on for white logos that would be invisible on the light background.',
      initialValue: false,
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
