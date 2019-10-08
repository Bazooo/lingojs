import { ApiSheetsData } from './functions'
import { sheets_v4 as googleSheets } from 'googleapis'

class SheetsCommands {
  protected readonly _apiSheetsData: ApiSheetsData

  constructor(sheets: googleSheets.Sheets, spreadsheetId: string) {
    this._apiSheetsData = {
      sheets,
      spreadsheetId,
    }
  }
}

export default SheetsCommands
