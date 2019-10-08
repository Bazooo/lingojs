import { ApiFunc } from '../helpers/functions'
import getSheetsData from '../utils/getSheetsData'
import { CellData } from '../helpers/sheets'

export type ListScopesReturn = Promise<Record<'scopes', CellData>>

const listScopes: ApiFunc<void, ListScopesReturn> = async (googleSheetsData) => {
  return await getSheetsData(googleSheetsData, ['scopes'])
}

export default listScopes
