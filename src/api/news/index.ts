import CMSClient from '../client'

export const getOneNews = async ({ id }: { id: string }) => {
  return await CMSClient.getByUID('news', id)
}

export const getManyNews = async () => {
  return await CMSClient.getByType('news', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    pageSize: 1, //TODO サイズは検討
  })
}

export const getTopNews = async () => {
  return await CMSClient.getByType('news', {
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    page: 1,
    pageSize: 3,
  })
}

export const getAllNews = async () => {
  return await CMSClient.getAllByType('news', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.last_publication_date',
      direction: 'desc',
    },
  })
}
