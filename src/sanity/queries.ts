export const insightsQuery = `*[_type == "insight"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  author,
  publishedAt,
  readTime,
  "image": image.asset->url,
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  "image": image.asset->url,
}`;

export const upcomingEventsQuery = `*[_type == "event" && isPast != true] | order(date asc) {
  _id,
  title,
  slug,
  description,
  category,
  date,
  time,
  location,
  "image": image.asset->url,
  speakers[] {
    name,
    "avatar": avatar.asset->url,
  },
}`;

export const pastEventsQuery = `*[_type == "event" && isPast == true] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  date,
  location,
  "image": image.asset->url,
}`;
