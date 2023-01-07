import CMSClient from '../client'

export const getOneBlog = async ({ id }: { id: string }) => {
  return await CMSClient.getByUID('blogs', id)
}

export const getManyBlog = async ({ page }: { page: number }) => {
  return await CMSClient.getByType('blogs', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    page: page,
    pageSize: 20, //TODO サイズは検討
  })
}

export const getAllBlog = async () => {
  return await CMSClient.getAllByType('blogs', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.last_publication_date',
      direction: 'desc',
    },
  })
}
