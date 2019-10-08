import { sheets_v4 as googleSheets } from 'googleapis'
import { Credentials } from 'google-auth-library'
import getSpreadsheet from './utils/getSpreadsheet'
import { LingoSheet, SheetsData } from './helpers/sheets'
import getSheetsData from './utils/getSheetsData'
import deprecateKey from './general/deprecate'
import SheetsCommands from './helpers/SheetsCommands'
import Scope from './scope'
import Locale from './locale'

export class LingoSheets extends SheetsCommands {
  public scope: Scope
  public locale: Locale

  constructor(sheets: googleSheets.Sheets, spreadsheetId: string) {
    super(sheets, spreadsheetId)

    this.scope = new Scope(sheets, spreadsheetId)
    this.locale = new Locale(sheets, spreadsheetId)
  }

  getSheetsData = async <T extends LingoSheet[]>(lingoSheets: T): Promise<SheetsData<T>> => {
    return await getSheetsData(this._apiSheetsData, lingoSheets)
  }

  deprecate = async (lingoSheet: LingoSheet, key: string): Promise<void> => {
    await deprecateKey(this._apiSheetsData, {
      lingoSheet,
      key,
    })
  }
}

const getLingoSheets = (
  clientSecret: string,
  clientId: string,
  tokenCredentials: Credentials,
  spreadsheetId: string,
): LingoSheets => {
  const sheets = getSpreadsheet(clientSecret, clientId, tokenCredentials)

  return new LingoSheets(sheets, spreadsheetId)
}

export default getLingoSheets
