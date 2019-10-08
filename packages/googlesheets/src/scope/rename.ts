import { ApiFunc } from '../helpers/functions'
import getKeyRow from '../utils/getKeyRow'
import updateKey from '../utils/updateKey'

export interface RenameScopeArgs {
  scopeName: string
  newScopeName: string
}

const renameScope: ApiFunc<RenameScopeArgs> = async (googleSheetsData, { scopeName, newScopeName }) => {
  // Check if scope exists
  const scopeRow = await getKeyRow(googleSheetsData, {
    lingoSheet: 'scopes',
    key: scopeName,
  })

  if (scopeRow.index !== -1) {
    await updateKey(googleSheetsData, {
      key: scopeName,
      newKey: newScopeName,
      lingoSheet: 'scopes',
    })
  } else {
    throw new Error(`Scope ${scopeName} does not exist`)
  }
}

export default renameScope
