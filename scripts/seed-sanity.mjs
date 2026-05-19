/**
 * Seed Sanity with the hardcoded fallback data from the site.
 * Usage: node scripts/seed-sanity.mjs
 *
 * Requires SANITY_API_TOKEN in .env.local with Editor permissions.
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually
const envPath = resolve(__dirname, '../.env.local');
const envVars = {};
try {
  readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) envVars[key.trim()] = rest.join('=').trim();
  });
} catch {
  console.error('Could not read .env.local');
  process.exit(1);
}

const projectId = envVars['NEXT_PUBLIC_SANITY_PROJECT_ID'];
const dataset = envVars['NEXT_PUBLIC_SANITY_DATASET'] ?? 'production';
const token = envVars['SANITY_API_TOKEN'];

if (!projectId) { console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID'); process.exit(1); }
if (!token || token === 'your-write-token-here') {
  console.error('Missing SANITY_API_TOKEN — add your Editor token to .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false });

const transaction = client.transaction();

/* ── INSIGHTS ── */
const insights = [
  { title: "A Review of Nigeria's National Blockchain Policy", category: 'Tech & Innovations', author: 'EBERE OJADUA', publishedAt: '2026-05-05', readTime: '5 mins read', excerpt: "Nigeria has displayed a growing interest in blockchain technology and cryptocurrencies, recognising their potential benefits in areas such as financial inclusion, transparency, and corruption reduction.", slug: 'nigeria-blockchain-policy' },
  { title: 'Boosting Trade Development Across West Africa', category: 'Policy Analysis', author: 'DEJI MACAULAY', publishedAt: '2026-05-05', readTime: '5 mins read', excerpt: 'Trade blocs play a pivotal role in promoting economic integration and cooperation among countries, fostering regional growth and prosperity.', slug: 'boosting-trade-west-africa' },
  { title: 'A Review of the Data Protection Act 2020: Strengths and Weaknesses', category: 'Tech & Innovation', author: 'CHINWE OHANELE', publishedAt: '2026-05-05', readTime: '5 mins read', excerpt: 'Executive Summary This Policy Brief reviews the Data Protection Act 2020 (the Act), which protects individual privacy rights across digital platforms.', slug: 'data-protection-act-2020' },
  { title: 'How Big Data Enables and Constrains AI Development in Africa', category: 'Policy Analysis', author: 'CHINWE OHANELE', publishedAt: '2026-05-05', readTime: '5 mins read', excerpt: 'The report discusses the opportunities and challenges of using big data and AI for sustainable development in Africa and offers recommendations for policymakers, businesses, and researchers.', slug: 'big-data-ai-africa' },
];

for (const insight of insights) {
  transaction.createIfNotExists({
    _type: 'insight',
    _id: `insight-${insight.slug}`,
    title: insight.title,
    slug: { _type: 'slug', current: insight.slug },
    category: insight.category,
    author: insight.author,
    publishedAt: insight.publishedAt,
    readTime: insight.readTime,
    excerpt: insight.excerpt,
  });
}

/* ── CASE STUDIES ── */
const caseStudies = [
  { title: 'Enhancing National Security through E-Borders Infrastructure Modernization', slug: 'e-borders', category: 'Technology solutions', excerpt: 'A government border agency successfully modernized its E-Borders infrastructure through strategic leadership, secure networks, and virtualization, enhancing national security and operational efficiency.' },
  { title: 'Strategic Network Transformation and Security Enhancement for Global Financial Institutions', slug: 'financial-network', category: 'Corporate Solutions', excerpt: 'A global financial provider successfully deployed a secure IP-VPN across 5000 sites, achieving enhanced network security, major cost savings, and smooth merger integration.' },
  { title: "A Review of Nigeria's National Blockchain Policy", slug: 'nigeria-blockchain-policy', category: 'Policy & Advocacy Solutions', excerpt: 'We help businesses navigate and shape Africa\'s regulatory and political landscape.' },
  { title: 'Building a Sustainable Digital Economy Framework', slug: 'digital-economy-framework', category: 'Technology solutions', excerpt: 'We help businesses navigate and shape Africa\'s regulatory and political landscape.' },
  { title: 'Strategic Communications for Regional Policy Reform', slug: 'regional-policy-reform', category: 'Strategic Communications', excerpt: 'We help businesses navigate and shape Africa\'s regulatory and political landscape.' },
];

for (const cs of caseStudies) {
  transaction.createIfNotExists({
    _type: 'caseStudy',
    _id: `case-study-${cs.slug}`,
    title: cs.title,
    slug: { _type: 'slug', current: cs.slug },
    category: cs.category,
    excerpt: cs.excerpt,
  });
}

/* ── EVENTS ── */
const events = [
  {
    _id: 'event-stisa-2034',
    title: 'SHAPING STISA 2034 FROM STRATEGY TO EXECUTION',
    slug: 'shaping-stisa-2034',
    description: 'This dialogue brings together policymakers, development partners, and industry leaders to confront a critical question:\nHow do we move from ambitious STI frameworks to coordinated, bankable, and scalable implementation across African economies?',
    category: 'Corporate',
    date: '2024-02-09',
    time: '8:00 am',
    location: 'Addis Ababa, Ethiopia',
    isPast: false,
    speakers: [{ _key: 'sp1', name: 'Hon Chukwuemeka Ujam, PHD, MNI' }],
  },
  {
    _id: 'event-galvanizing-transformation',
    title: 'GALVANIZING TRANSFORMATION-INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH',
    slug: 'galvanizing-transformation',
    description: 'This event will be the first to focus on Agriculture, and its importance is timely and relevant.',
    category: 'Corporate',
    date: '2024-02-09',
    time: '8:00 am',
    location: 'Addis Ababa, Ethiopia',
    isPast: false,
    speakers: [{ _key: 'sp1', name: 'Hon Chukwuemeka Ujam, PHD, MNI' }],
  },
  {
    _id: 'event-past-1',
    title: 'GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH',
    slug: 'galvanising-transformation-past',
    excerpt: 'A conversation on regional commerce and economic cooperation',
    category: 'Tech',
    date: '2024-02-08',
    location: 'Accra',
    isPast: true,
  },
  {
    _id: 'event-past-2',
    title: 'GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH',
    slug: 'galvanising-transformation-past-2',
    excerpt: 'A conversation on regional commerce and economic cooperation',
    category: 'Tech',
    date: '2024-02-08',
    location: 'Accra',
    isPast: true,
  },
  {
    _id: 'event-past-3',
    title: 'GALVANISING TRANSFORMATION - INTEGRATING AGRICULTURE, INDUSTRY AND MARKETS FOR SUSTAINABLE GROWTH',
    slug: 'galvanising-transformation-past-3',
    excerpt: 'A conversation on regional commerce and economic cooperation',
    category: 'Tech',
    date: '2024-02-08',
    location: 'Accra',
    isPast: true,
  },
];

for (const event of events) {
  const doc = {
    _type: 'event',
    _id: event._id,
    title: event.title,
    slug: { _type: 'slug', current: event.slug },
    category: event.category,
    date: event.date,
    isPast: event.isPast,
    ...(event.time && { time: event.time }),
    ...(event.location && { location: event.location }),
    ...(event.description && { description: event.description }),
    ...(event.excerpt && { excerpt: event.excerpt }),
    ...(event.speakers && { speakers: event.speakers }),
  };
  transaction.createIfNotExists(doc);
}

/* ── TEAM MEMBERS ── */
const team = [
  { _id: 'team-ujam', name: 'Hon. Chukwuemeka Ujam,', credentials: 'B.Engr, M.Sc, PhD, FNSE, mni', role: 'Managing Partner', order: 1 },
  { _id: 'team-member-2', name: 'Hon. Chukwuemeka Ujam,', credentials: 'B.Engr, M.Sc, PhD, FNSE, mni', role: 'Managing Partner', order: 2 },
  { _id: 'team-member-3', name: 'Hon. Chukwuemeka Ujam,', credentials: 'B.Engr, M.Sc, PhD, FNSE, mni', role: 'Managing Partner', order: 3 },
  { _id: 'team-member-4', name: 'Hon. Chukwuemeka Ujam,', credentials: 'B.Engr, M.Sc, PhD, FNSE, mni', role: 'Managing Partner', order: 4 },
  { _id: 'team-member-5', name: 'Hon. Chukwuemeka Ujam,', credentials: 'B.Engr, M.Sc, PhD, FNSE, mni', role: 'Managing Partner', order: 5 },
  { _id: 'team-member-6', name: 'Hon. Chukwuemeka Ujam,', credentials: 'B.Engr, M.Sc, PhD, FNSE, mni', role: 'Managing Partner', order: 6 },
];

for (const member of team) {
  transaction.createIfNotExists({
    _type: 'teamMember',
    _id: member._id,
    name: member.name,
    credentials: member.credentials,
    role: member.role,
    order: member.order,
  });
}

/* ── FAQs ── */
const faqs = [
  /* Policy */
  { _id: 'faq-policy-1', service: 'policy', order: 1, question: 'Can you share examples of advocacy outcomes you have achieved?', answer: "Given the confidential nature of our mandates, we do not disclose client identities. What we can say is that our work has resulted in the stoppage of adverse legislation, the removal of tax provisions targeting digital companies, and the incorporation of client positions into finalised legislation in multiple jurisdictions." },
  { _id: 'faq-policy-2', service: 'policy', order: 2, question: 'Do you work with both private sector clients and governments?', answer: "Yes. We advise multinational corporations, trade associations, and development organisations seeking to engage the government — and we work with government ministries and regulatory agencies seeking technical advisory support." },
  { _id: 'faq-policy-3', service: 'policy', order: 3, question: 'How do you maintain effectiveness across multiple African markets simultaneously?', answer: "Through a combination of in-country presence, embedded relationships built over years of engagement, and a monitoring infrastructure that tracks policy developments in real time." },
  { _id: 'faq-policy-4', service: 'policy', order: 4, question: 'How quickly can you mobilise on a regulatory issue?', answer: "Where we have an active retainer relationship, immediately. For new engagements, we can typically be operational within two weeks." },
  /* Corporate */
  { _id: 'faq-corporate-1', service: 'corporate', order: 1, question: 'How do you approach market entry for first-time entrants into Africa?', answer: "We start with a structured market assessment — analysing the regulatory environment, competitive landscape, key institutional players, and on-the-ground realities that don't appear in public data." },
  { _id: 'faq-corporate-2', service: 'corporate', order: 2, question: 'What makes your market intelligence different from third-party research providers?', answer: "Our intelligence is relationship-based and real-time. We have embedded networks across government, the private sector, and civil society in our core markets." },
  { _id: 'faq-corporate-3', service: 'corporate', order: 3, question: 'Do you work with businesses that are already operating in Africa but facing growth challenges?', answer: "Yes, a significant share of our work is with clients who are already on the ground but navigating an inflection point." },
  { _id: 'faq-corporate-4', service: 'corporate', order: 4, question: 'Can you support both strategy and execution?', answer: "We do both, and we believe the distinction between strategy and execution is often a false one. A strategy that cannot be executed is not a strategy — it is a document." },
  /* Technology */
  { _id: 'faq-tech-1', service: 'technology', order: 1, question: 'What scale of technology programmes have you delivered?', answer: "In the UK and Nigeria combined, we have executed technology programmes valued at over £500 million." },
  { _id: 'faq-tech-2', service: 'technology', order: 2, question: "How does the Technology practice connect to NJA's advisory work?", answer: "The connection is deliberate. Technology deployments in African contexts succeed or fail based on institutional relationships, regulatory alignment, and political buy-in." },
  { _id: 'faq-tech-3', service: 'technology', order: 3, question: 'Do you work with governments directly or through implementing partners?', answer: "Both. We have worked as primary contractor, security technical architect, and as advisory partner to other implementers." },
  { _id: 'faq-tech-4', service: 'technology', order: 4, question: 'Can you support private sector companies on technology regulatory matters?', answer: "Yes. Particularly in telecoms, fintech, and data-intensive sectors, we provide regulatory intelligence, engagement support with the relevant agencies (NCC, NITDA, CBN), and technical advisory on compliance frameworks." },
  /* Communications */
  { _id: 'faq-comms-1', service: 'communications', order: 1, question: 'How is your communications offering different from a public relations firm?', answer: "We do not manage media campaigns or brand visibility. Our communications work is embedded in our policy and advisory practice." },
  { _id: 'faq-comms-2', service: 'communications', order: 2, question: 'Can you manage communications across multiple African markets simultaneously?', answer: "Yes. We have developed country-specific communication strategies and institutional messaging for clients operating across Nigeria, Kenya, South Africa, Ghana, and Sierra Leone simultaneously." },
  { _id: 'faq-comms-3', service: 'communications', order: 3, question: 'Do you support crisis communications?', answer: "Yes. We provide rapid-response advisory when a client faces a regulatory challenge, adverse legislative proposal, or reputational risk event." },
  { _id: 'faq-comms-4', service: 'communications', order: 4, question: 'Can you produce the actual communications materials, or only the strategy?', answer: "Both. We develop strategy and produce the deliverables — from detailed briefing documents and position papers to executive speeches and public consultation frameworks." },
];

for (const faq of faqs) {
  transaction.createIfNotExists({
    _type: 'faq',
    _id: faq._id,
    question: faq.question,
    answer: faq.answer,
    service: faq.service,
    order: faq.order,
  });
}

console.log('Pushing data to Sanity...');
try {
  const result = await transaction.commit();
  console.log(`✓ Done! Created/updated ${result.results.length} documents.`);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
