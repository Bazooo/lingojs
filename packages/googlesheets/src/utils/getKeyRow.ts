import { sheets_v4 as googleSheets } from 'googleapis'
import { LingoSheet, LingoSheetRanges, RowData } from '../helpers/sheets'

interface KeyRow {
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

const getKeyRow = async (
  sheets: googleSheets.Sheets,
  spreadsheetId: string,
  key: string,
  lingoSheet: LingoSheet,
): Promise<KeyRow> => {
  const range = LingoSheetRanges[lingoSheet]

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
      valueRenderOption: 'UNFORMATTED_VALUE',
    })

    if (response.data.values) {
      const values = response.data.values as RowData[]

      const index = values.findIndex(([valueKey]) => {
        return valueKey === key
      })

      const data = index !== -1 ? values[index].slice(1) : []

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
