import type { NewsDocument } from '@/types/prismic'
import dateFormat from './dateFormat'

export type List = {
  title: string | null
  link: string | null
  description: string | null
  date: string
}

export const convertNewsForList = (news: NewsDocument[]): List[] => {
  return news.map((el) => {
    return {
      title: el.data.title,
      link: el.data.link,
      description: el.data.description,
      date: dateFormat(el.last_publication_date),
    }
  })
}
