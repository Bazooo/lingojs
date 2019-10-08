import { sheets_v4 as googleSheets } from 'googleapis'
import SheetsCommands from '../helpers/SheetsCommands'
import addLocale from './add'
import renameLocale from './rename'

class Locale extends SheetsCommands {
  constructor(sheets: googleSheets.Sheets, spreadsheetId: string) {
    super(sheets, spreadsheetId)
  }

  add = async (localeName: string, localeDescription?: string): Promise<void> => {
    await addLocale(this._apiSheetsData, {
      localeName,
      localeDescription,
    })
  }

  rename = async (localeName: string, newLocaleName: string): Promise<void> => {
    await renameLocale(this._apiSheetsData, {
      localeName,
      newLocaleName,
    })
  }
}

export default Locale
