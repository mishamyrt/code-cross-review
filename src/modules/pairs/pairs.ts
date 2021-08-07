import type { Pair } from '.'
import { getDays, msToDays } from '../dates'

/**
 * Some fixed date for offset
 */
const INITIAL_DAY = msToDays(1603712237980)

const calculateShift = (date: Date, limit: number): number =>
  ((getDays(date) - INITIAL_DAY) % (limit - 1)) + 1

export function buildPairs(employees: string[], date: Date): Pair[] {
  const shift = calculateShift(date, employees.length)
  const pairs = []
  let offset
  for (let i = 0; i < employees.length; i++) {
    offset = shift + i
    if (offset >= employees.length) {
      offset -= employees.length
    }
    pairs.push([employees[i], employees[offset]])
  }
  return pairs
}
