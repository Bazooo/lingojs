import { sheets_v4 as googleSheets } from 'googleapis'

export interface ApiSheetsData {
  sheets: googleSheets.Sheets
  spreadsheetId: string
}

export type ApiFunc<T, K = Promise<void>> = (googleSheetsData: ApiSheetsData, args: T) => K
