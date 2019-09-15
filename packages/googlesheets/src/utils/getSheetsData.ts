import { sheets_v4 as googleSheets } from 'googleapis'
import { LingoSheet, LingoSheetRanges, SheetsData } from '../helpers/sheets'

const getSheetsData = async <T extends LingoSheet[]>(
  sheets: googleSheets.Sheets,
  spreadsheetId: string,
  lingoSheets: T,
): Promise<SheetsData<T>> => {
  const ranges = lingoSheets.map((lingoSheet: LingoSheet) => {
    return LingoSheetRanges[lingoSheet]
  })

  try {
    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId,
      ranges,
      valueRenderOption: 'UNFORMATTED_VALUE',
    })

    if (response.data.valueRanges) {
      const data = response.data.valueRanges.reduce(
        (result, value, index) => {
          const lingoSheet = lingoSheets[index]

          return {
            ...result,
            [lingoSheet]: value,
          }
        },
        {} as SheetsData<T>,
      )

      return data
    } else {
      throw new Error('Call to API returned with no value')
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default getSheetsData
