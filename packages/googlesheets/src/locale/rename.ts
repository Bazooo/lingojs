import { ApiFunc } from '../helpers/functions'
import getKeyRow from '../utils/getKeyRow'
import updateKey from '../utils/updateKey'

export interface RenameLocaleArgs {
  localeName: string
  newLocaleName: string
}

const renameLocale: ApiFunc<RenameLocaleArgs> = async (googleSheetsData, { localeName, newLocaleName }) => {
  // Check if locale exists
  const localeRow = await getKeyRow(googleSheetsData, {
    lingoSheet: 'locales',
    key: localeName,
  })

  if (localeRow.index !== -1) {
    await updateKey(googleSheetsData, {
      key: localeName,
      newKey: newLocaleName,
      lingoSheet: 'locales',
    })
  } else {
    throw new Error(`Locale ${localeName} does not exist`)
  }
}

export default renameLocale
