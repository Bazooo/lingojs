import { RowData } from '../helpers/sheets'
import { ApiFunc } from '../helpers/functions'

export interface AppendValuesArgs {
  range: string
  values: RowData[]
}

const appendValues: ApiFunc<AppendValuesArgs> = async ({ sheets, spreadsheetId }, { range, values }): Promise<void> => {
  try {
    await sheets.spreadsheets.values.append({
      range,
      spreadsheetId,
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
