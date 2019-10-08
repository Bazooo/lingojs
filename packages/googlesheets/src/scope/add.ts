import getKeyRow from '../utils/getKeyRow'
import appendValues from '../utils/appendValues'
import { LingoSheetRanges } from '../helpers/sheets'
import { ApiFunc } from '../helpers/functions'

export interface AddScopeArgs {
  scopeName: string
  scopeDescription?: string
}

const addScope: ApiFunc<AddScopeArgs> = async (googleSheetsData, { scopeName, scopeDescription = '' }) => {
  // Check if scope exists
  const scopeRow = await getKeyRow(googleSheetsData, {
    lingoSheet: 'scopes',
    key: scopeName,
  })

  if (scopeRow.index === -1) {
    await appendValues(googleSheetsData, {
      range: LingoSheetRanges.scopes,
      values: [[scopeName, scopeDescription]],
    })
  } else {
    throw new Error(`Scope ${scopeName} already exist`)
  }
}

export default addScope
