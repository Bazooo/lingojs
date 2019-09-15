export type LingoSheet = 'locales' | 'scopes' | 'variants' | 'deprecated' | 'config' | 'translations'

export type CellData = string | number | boolean

export type RowData = CellData[]

export type SheetsData<T extends LingoSheet[]> = Record<T[number], CellData>

export const LingoSheetRanges: Record<LingoSheet, string> = {
  locales: 'locales!A2:A',
  scopes: 'scopes!A2:B',
  variants: 'variants!A2:A',
  deprecated: 'deprecated!A2:B',
  config: 'config!A2:B',
  translations: 'translations!A2:ZZZ',
}
