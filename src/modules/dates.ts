/**
 * Names of the months of the year
 */
const MONTHS_NAMES = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]

/**
 * Converts JS timestamp to days
 * @param time - timestamp in milliseconds
 */
export function msToDays(time: number): number {
  return Math.floor(time / 1000 / 60 / 60 / 24)
}

/**
 * Returns days count from the beginning
 * @param date - Target date
 */
export function getDays(date: Date): number {
  return msToDays(date.getTime())
}

/**
 * Returns current day object
 */
export function getToday(): Date {
  const today = new Date()
  today.setHours(0)
  return today
}

/**
 * Formats date string
 * @param date
 */
export function formatDate(date: Date): string {
  const today = getToday()
  if (msToDays(date.getTime()) === msToDays(today.getTime())) {
    return 'сегодня'
  }
  return `${date.getDate()} ${MONTHS_NAMES[date.getMonth()]}`
}
