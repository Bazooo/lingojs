import { ApiFunc } from '../helpers/functions'
import { LingoSheet, LingoSheetRanges } from '../helpers/sheets'
import getKeyRow from '../utils/getKeyRow'
import appendValues from '../utils/appendValues'

export interface DeprecateArgs {
  lingoSheet: LingoSheet
  key: string
}

const deprecateKey: ApiFunc<DeprecateArgs> = async (googleSheetsData, { lingoSheet, key }) => {
  const { index } = await getKeyRow(googleSheetsData, {
    lingoSheet,
    key,
  })

  if (index !== -1) {
    const values = [[key, lingoSheet]]

    await appendValues(googleSheetsData, {
      range: LingoSheetRanges[lingoSheet],
      values,
    })
  } else {
    throw new Error(`Key ${key} does not exist in sheet ${lingoSheet}`)
  }
}

export default deprecateKey
