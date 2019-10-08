import { ApiFunc } from '../helpers/functions'
import { LingoSheet } from '../helpers/sheets'
import getKeyRow from './getKeyRow'

export interface UpdateKeyArgs {
  key: string
  newKey: string
  lingoSheet: LingoSheet
}

const updateKey: ApiFunc<UpdateKeyArgs> = async (googleSheetsData, { key, newKey, lingoSheet }) => {
  try {
    const { index } = await getKeyRow(googleSheetsData, {
      key,
      lingoSheet,
    })

    if (index !== -1) {
      const { sheets, spreadsheetId } = googleSheetsData

      const range = `B${index}:B${index}`

      await sheets.spreadsheets.values.update({
        range,
        spreadsheetId,
        responseValueRenderOption: 'FORMULA',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[newKey]],
        },
      })
    } else {
      throw new Error(`Key ${key} does not exist in sheet ${lingoSheet}`)
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default updateKey
