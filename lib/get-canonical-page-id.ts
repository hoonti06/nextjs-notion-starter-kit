import { ExtendedRecordMap } from 'notion-types'
import { uuidToId, getBlockTitle } from 'notion-utils'

export const getCanonicalPageId = (
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null => {
  if (!pageId || !recordMap) return null

  const id = uuidToId(pageId)
  const block = recordMap.block[pageId]?.value

  if (block) {
    const title = normalizeTitle(getBlockTitle(block, recordMap))

    if (title) {
      if (uuid) {
        return `${title}-${id}`
      } else {
        return title
      }
    }
  }

  return id
}

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
    // [한글주소지원] 소문자화 불필요
    // .toLowerCase()
  )
}
