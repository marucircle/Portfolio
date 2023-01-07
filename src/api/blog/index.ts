import CMSClient from '../client'

export const getOneBlog = async ({ id }: { id: string }) => {
  return await CMSClient.getByUID('blog', id)
}

export const getManyBlog = async ({ page }: { page: number }) => {
  return await CMSClient.getByType('blog', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    page: page,
    pageSize: 20, //TODO サイズは検討
  })
}

export const getTopBlog = async () => {
  return await CMSClient.getByType('blog', {
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    page: 1,
    pageSize: 3,
  })
}

export const getAllBlog = async () => {
  return await CMSClient.getAllByType('blog', {
    orderings: {
      //TODO 並び替えについて検討
      field: 'document.last_publication_date',
      direction: 'desc',
    },
  })
}
