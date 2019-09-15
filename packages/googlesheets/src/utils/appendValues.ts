import { sheets_v4 as googleSheets } from 'googleapis'
import { RowData } from '../helpers/sheets'

const appendValues = async (sheets: googleSheets.Sheets, range: string, values: RowData[]): Promise<void> => {
  try {
    await sheets.spreadsheets.values.append({
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })
  } catch (error) {
    throw new Error(error)
  }
}

export default appendValues
