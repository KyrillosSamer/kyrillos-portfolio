export const formatDate = (
  date: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) => new Date(date).toLocaleDateString("en-US", options);

export const formatDateShort = (date: string) =>
  formatDate(date, { year: "numeric", month: "short", day: "numeric" });

export const timeAgo = (date: string) => {
  const diff = Date.now() - new Date(date).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);

  if (days > 30) return formatDateShort(date);
  if (days > 0)  return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (mins > 0)  return `${mins}m ago`;
  return "just now";
};