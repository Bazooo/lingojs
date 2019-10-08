import { ApiFunc } from '../helpers/functions'
import updateKeyRow from '../utils/updateKeyRow'

export interface DescribeScopeArgs {
  scopeName: string
  scopeDescription: string
}

const describeScope: ApiFunc<DescribeScopeArgs> = async (googleSheetsData, { scopeName, scopeDescription }) => {
  await updateKeyRow(googleSheetsData, {
    key: scopeName,
    lingoSheet: 'scopes',
    rowValues: [scopeDescription],
  })
}

export default describeScope
