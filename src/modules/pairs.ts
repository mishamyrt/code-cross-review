import { toDays } from "./dates"

const initialDay = toDays(1603712237980)

const calculateShift = (date: Date, limit: number): number =>
  ((toDays(date.getTime()) - initialDay) % (limit - 1)) + 1

export function buildPairs(employees: string[], date: Date): [string, string][] {
  const shift = calculateShift(date, employees.length)
  const pairs = []
  for (let i = 0; i < employees.length; i++) {
    let offset = shift + i
    if (offset >= employees.length) {
      offset -= employees.length
    }
    pairs.push([employees[i], employees[offset]])
  }
  return pairs
}
