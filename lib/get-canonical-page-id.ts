import { ExtendedRecordMap } from 'notion-types'
import {
  parsePageId,
  getCanonicalPageId as getCanonicalPageIdImpl
} from 'notion-utils'
import { inversePageUrlOverrides } from './config'

export const normalizeTitle = (title: string | null): string => {
  return (
    (title || '')
      .replace(/ /g, '-')
      // [한글주소지원] 대/소문자 영문/숫자가 아닌 경우 문자열 제거됨
      // .replace(/[^a-zA-Z0-9-]/g, '')
      .replace(/--/g, '-')
      .replace(/-$/, '')
      .replace(/^-/, '')
      .trim()
  )
}
export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false })
  if (!cleanPageId) {
    return null
  }

  const override = inversePageUrlOverrides[normalizeTitle(cleanPageId)]
  if (override) {
    return override
  } else {
    return getCanonicalPageIdImpl(pageId, recordMap, {
      uuid
    })
  }
}
