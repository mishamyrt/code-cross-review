export const toDays = (time: number): number => 
    Math.floor(time / 1000 / 60 / 60 / 24)

const months = [
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

export function getToday (): Date {
    const today = new Date()
    today.setHours(0)
    return today
}

export function formatDate (date: Date) {
    const today = getToday()
    if (toDays(date.getTime()) === toDays(today.getTime())) {
        return 'сегодня'
    }
    return `${date.getDate()} ${months[date.getMonth()]}`
}