import { sheets_v4 as googleSheets } from 'googleapis'
import { Credentials } from 'google-auth-library'
import getSpreadsheet from './utils/getSpreadsheet'
import { LingoSheet, SheetsData } from './helpers/sheets'
import getSheetsData from './utils/getSheetsData'
import addScope from './scope/add'

export class LingoSheets {
  private readonly _sheets: googleSheets.Sheets
  private readonly _spreadsheetId: string

  constructor(sheets: googleSheets.Sheets, spreadsheetId: string) {
    this._sheets = sheets
    this._spreadsheetId = spreadsheetId
  }

  getSheetsData = async <T extends LingoSheet[]>(lingoSheets: T): Promise<SheetsData<T>> => {
    return await getSheetsData(this._sheets, this._spreadsheetId, lingoSheets)
  }

  scope = {
    add: async (scopeName: string, scopeDescription?: string): Promise<void> => {
      await addScope(this._sheets, this._spreadsheetId, scopeName, scopeDescription)
    },
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
