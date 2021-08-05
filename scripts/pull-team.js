// @ts-check
import { get } from 'https'
import { writeFile } from 'fs/promises'

const USERNAME = 'mishamyrt'

// Internal
const PAGE_URL =
  'https://raw.githubusercontent.com' +
  `/wiki/${USERNAME}/code-cross-review/Team.md`
const VACATION_KEYWORD = '(on vacation)'
const RESULT_PATH = '.team-list.json'

/**
 * Grabs page from https
 * @param {string} url
 * @returns {Promise<string>}
 */
const getPage = url =>
  new Promise((resolve, reject) => {
    let data = ''
    get(url, response => {
      response.on('data', chunk => { data += chunk })
      response.on('end', () => resolve(data))
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
 * @param {string} list
 * @returns {string[]}
 */
const parseList = list =>
  list
    .split('\n')
    .filter(line => !line.includes(VACATION_KEYWORD))
    .map(parseLine)

getPage(PAGE_URL)
  .then(parseList)
  .then(JSON.stringify)
  .then(d => writeFile(RESULT_PATH, d))
