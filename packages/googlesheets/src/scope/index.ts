import { sheets_v4 as googleSheets } from 'googleapis'
import addScope from './add'
import SheetsCommands from '../helpers/SheetsCommands'

class Scope extends SheetsCommands {
  constructor(sheets: googleSheets.Sheets, spreadsheetId: string) {
    super(sheets, spreadsheetId)
  }

  add = async (scopeName: string, scopeDescription?: string): Promise<void> => {
    await addScope(this._apiSheetsData, {
      scopeName,
      scopeDescription,
    })
  }
}

export default Scope
