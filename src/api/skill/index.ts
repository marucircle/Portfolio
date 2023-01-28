import * as prismic from '@prismicio/client'
import CMSClient from '../client'

export const getSkillList = async ({ tags }: { tags: Array<string> }) => {
  return await CMSClient.getAllByType('skill', {
    orderings: {
      field: 'document.level',
      direction: 'desc',
    },
    predicates: [
      prismic.predicate.at('document.tags', tags), //タグの絞り込み
    ],
  })
}
