// @ts-check
import { get } from 'https'
import { writeFile } from 'fs/promises'

const pageUrl =
  'https://raw.githubusercontent.com' +
  '/wiki/mishamyrt/cross-code-review/Team.md'

const vacationKeyword = '(on vacation)'
const filePath = '.team-list.json'

/**
 * Grabs page from https
 * @param {string} url
 */
const getPage = url =>
  new Promise((resolve, reject) => {
    let data = ''
    get(url, resp => {
      resp.on('data', chunk => { data += chunk })
      resp.on('end', () => resolve(data))
    }).on('error', err => reject(err.message))
  })

/**
 * Parses markdown list item
 * @param {string} line
 * @returns {string}
 */
const parseLine = line =>
  line
    .split('*')[1]
    .trim()

/**
 * Parses markdown list
 * @param {string} mdList
 * @returns {string[]}
 */
const parseList = mdList =>
  mdList
    .split('\n')
    .filter(line => !line.includes(vacationKeyword))
    .map(parseLine)

getPage(pageUrl)
  .then(parseList)
  .then(JSON.stringify)
  .then(d => writeFile(filePath, d))
