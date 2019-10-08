import { ApiFunc } from '../helpers/functions'
import { RowData, LingoSheet } from '../helpers/sheets'
import getKeyRow from './getKeyRow'

export interface UpdateKeyRowArgs {
  key: string
  rowValues: RowData
  lingoSheet: LingoSheet
}

const updateKeyRow: ApiFunc<UpdateKeyRowArgs> = async (googleSheetsData, { key, rowValues, lingoSheet }) => {
  try {
    const { index } = await getKeyRow(googleSheetsData, {
      key,
      lingoSheet,
    })

    if (index !== -1) {
      const { sheets, spreadsheetId } = googleSheetsData

      const range = `B${index}:ZZZ${index}`

      await sheets.spreadsheets.values.update({
        range,
        spreadsheetId,
        responseValueRenderOption: 'FORMULA',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowValues],
        },
      })
    } else {
      throw new Error(`Key ${key} does not exist in sheet ${lingoSheet}`)
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default updateKeyRow
