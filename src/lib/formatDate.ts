const ORDINALS = ['th','st','nd','rd'];

function ordinal(n: number): string {
  const v = n % 100;
  return n + (ORDINALS[(v - 20) % 10] ?? ORDINALS[v] ?? ORDINALS[0]);
}

const MONTHS = [
  'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
  'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.',
];

const MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatInsightDate(iso: string | null | undefined, includeTime = false): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;

  const day = ordinal(d.getDate());
  const month = includeTime ? MONTHS[d.getMonth()] : MONTHS_LONG[d.getMonth()];
  const year = d.getFullYear();

  if (!includeTime) return `${day} ${month} ${year}`;

  const hours = d.getHours();
  const minutes = d.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const h12 = hours % 12 || 12;
  return `${day} ${month} ${year}, ${h12}:${minutes} ${ampm}`;
}
