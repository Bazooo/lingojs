import { sheets_v4 as googleSheets } from 'googleapis'
import SheetsCommands from '../helpers/SheetsCommands'
import addScope from './add'
import describeScope from './describe'
import renameScope from './rename'

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

  describe = async (scopeName: string, scopeDescription: string): Promise<void> => {
    await describeScope(this._apiSheetsData, {
      scopeName,
      scopeDescription,
    })
  }

  rename = async (scopeName: string, newScopeName: string): Promise<void> => {
    await renameScope(this._apiSheetsData, {
      scopeName,
      newScopeName,
    })
  }
}

export default Scope
