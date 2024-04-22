export const formatDate = (dateString: string, locale: string = 'de-DE', options?: Intl.DateTimeFormatOptions): string => {
  const date = new Date(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateFormat = new Intl.DateTimeFormat(locale, options || defaultOptions);
  return dateFormat.format(date);
}