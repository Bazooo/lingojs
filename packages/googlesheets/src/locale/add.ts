import getKeyRow from '../utils/getKeyRow'
import appendValues from '../utils/appendValues'
import { LingoSheetRanges } from '../helpers/sheets'
import { ApiFunc } from '../helpers/functions'

export interface AddLocaleArgs {
  localeName: string
  localeDescription?: string
}

const addLocale: ApiFunc<AddLocaleArgs> = async (googleSheetsData, { localeName, localeDescription = '' }) => {
  // Check if locale exists
  const localeRow = await getKeyRow(googleSheetsData, {
    lingoSheet: 'locales',
    key: localeName,
  })

  if (localeRow.index === -1) {
    await appendValues(googleSheetsData, {
      range: LingoSheetRanges.locales,
      values: [[localeName, localeDescription]],
    })
  } else {
    throw new Error(`Locale ${localeName} already exist`)
  }
}

export default addLocale
