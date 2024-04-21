export const formatCurrency = (amount: number, locale: string = 'de-DE', currency: string = 'EUR'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
