/* ── Insights ── */
export const insightsQuery = `*[_type == "insight"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  excerpt,
  author,
  "authorImage": authorImage.asset->url,
  publishedAt,
  "updatedAt": _updatedAt,
  readTime,
  tags,
  "image": image.asset->url,
}`;

export const featuredInsightsQuery = `*[_type == "insight"] | order(publishedAt desc) [0...4] {
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  excerpt,
  author,
  "authorImage": authorImage.asset->url,
  publishedAt,
  "updatedAt": _updatedAt,
  readTime,
  tags,
  "image": image.asset->url,
}`;

export const insightBySlugQuery = (slug: string) =>
  `*[_type == "insight" && slug.current == "${slug}"][0] {
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  excerpt,
  author,
  "authorImage": authorImage.asset->url,
  publishedAt,
  readTime,
  tags,
  "image": image.asset->url,
  body,
}`;

/* ── Case Studies ── */
export const caseStudiesQuery = `*[_type == "caseStudy"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  excerpt,
  "image": image.asset->url,
}`;

export const featuredCaseStudiesQuery = `*[_type == "caseStudy"] | order(_createdAt desc) [0...2] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": image.asset->url,
}`;

export const caseStudiesByCategoryQuery = (category: string) =>
  `*[_type == "caseStudy" && category->title == "${category}"] | order(_createdAt desc) [0...2] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": image.asset->url,
}`;

export const caseStudyBySlugQuery = (slug: string) =>
  `*[_type == "caseStudy" && slug.current == "${slug}"][0] {
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  excerpt,
  heroSubtitle,
  aboutClient,
  clientMission,
  servicesRendered,
  results[] { title, body },
  "image": image.asset->url,
}`;

/* ── Events ── */
export const upcomingEventsQuery = `*[_type == "event" && isPast != true] | order(date asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  "category": category->title,
  date,
  time,
  location,
  registerLink,
  "image": image.asset->url,
  speakers[] {
    name,
    "avatar": avatar.asset->url,
  },
}`;

export const pastEventsQuery = `*[_type == "event" && isPast == true] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  "youtubeLink": youtubeLink,
  excerpt,
  "category": category->title,
  date,
  location,
  "image": image.asset->url,
}`;

/* ── Team Members ── */
export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  credentials,
  role,
  bio,
  linkedIn,
  "photo": photo.asset->url,
}`;

export const eventBySlugQuery = (slug: string) =>
  `*[_type == "event" && slug.current == "${slug}"][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  body,
  "category": category->title,
  date,
  time,
  location,
  registerLink,
  "image": image.asset->url,
  speakers[] {
    name,
    "avatar": avatar.asset->url,
  },
}`;

export const teamMemberBySlugQuery = (slug: string) =>
  `*[_type == "teamMember" && slug.current == "${slug}"][0] {
  _id,
  name,
  "slug": slug.current,
  credentials,
  detailedCredentials[] { title, institution },
  role,
  bio,
  expertise,
  linkedIn,
  "photo": photo.asset->url,
}`;

/* ── Job Openings ── */
export const jobOpeningsQuery = `*[_type == "jobOpening" && isOpen == true] | order(postedAt desc) {
  _id,
  title,
  department,
  location,
  type,
  description,
  applyLink,
  postedAt,
}`;

/* ── FAQs by service ── */
export const faqsByServiceQuery = (service: string) =>
  `*[_type == "faq" && service == "${service}"] | order(order asc) {
  _id,
  question,
  answer,
}`;
