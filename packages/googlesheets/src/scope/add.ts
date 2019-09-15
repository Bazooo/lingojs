import { sheets_v4 as googleSheets } from 'googleapis'
import getKeyRow from '../utils/getKeyRow'
import appendValues from '../utils/appendValues'
import { LingoSheetRanges } from '../helpers/sheets'

const addScope = async (
  sheets: googleSheets.Sheets,
  spreadsheetId: string,
  scopeName: string,
  scopeDescription = '',
): Promise<void> => {
  // Check if scope exists
  const scopeRow = await getKeyRow(sheets, spreadsheetId, scopeName, 'scopes')

  if (scopeRow.index === -1) {
    await appendValues(sheets, LingoSheetRanges.scopes, [[scopeName, scopeDescription]])
  } else {
    throw new Error(`Scope ${scopeName} already exist`)
  }
}

export default addScope
