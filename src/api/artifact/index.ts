import CMSClient from '../client'

export const getArtifactList = async () => {
  return await CMSClient.getAllByType('artifact', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.date',
      direction: 'desc',
    },
    pageSize: 5,
  })
}
