import type { CareerDocument } from '@/types/prismic'

export const sortCareer = (careers: Array<CareerDocument>): Array<CareerDocument> => {
  return careers.sort((a, b) => {
    const dateA = new Date(a.data.date as string).getTime()
    const dateB = new Date(b.data.date as string).getTime()

    return dateA - dateB
  })
}
