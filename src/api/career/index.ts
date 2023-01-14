import CMSClient from '../client'

export const getCareerList = async () => {
  return await CMSClient.getAllByType('career', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.date',
      direction: 'desc',
    },
  })
}
