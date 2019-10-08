import { LingoSheet, LingoSheetRanges, RowData } from '../helpers/sheets'
import { ApiFunc } from '../helpers/functions'

export interface KeyRow {
  /**
   * The row index
   */
  index: number
  /**
   * The row key
   */
  key: string
  /**
   * Row data
   */
  data: RowData
}

export interface GetKeyRowArgs {
  lingoSheet: LingoSheet
  key: string
  formula?: boolean
}

const getKeyRow: ApiFunc<GetKeyRowArgs, Promise<KeyRow>> = async (
  { sheets, spreadsheetId },
  { lingoSheet, key, formula = false },
) => {
  const range = LingoSheetRanges[lingoSheet]

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
      valueRenderOption: formula ? 'FORMULA' : 'UNFORMATTED_VALUE',
    })

    if (response.data.values) {
      const values = response.data.values as RowData[]

      const arrayIndex = values.findIndex(([valueKey]) => {
        return valueKey === key
      })

      const index = arrayIndex !== -1 ? arrayIndex + 1 : arrayIndex
      const data = arrayIndex !== -1 ? values[arrayIndex].slice(1) : []

      return {
        index,
        key,
        data,
      }
    } else {
      throw new Error('The call to Google API came back with no results')
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default getKeyRow
