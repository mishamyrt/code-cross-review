/**
 * Formats short day format to ISO
 * @param {string} day - day in DD.MM format
 * @returns {string} ISO8601 formatted date
 */
export function formatDayToISO (day) {
  const parts = day.split('.')
  return new Date(`2000-${parts[1]}-${parts[0]}`)
}
