import * as prismic from '@prismicio/client'

const endpoint = prismic.getRepositoryEndpoint(`${import.meta.env.PUBLIC_CMS_REPOSITORY}`)

const accessToken = `${import.meta.env.PUBLIC_CMS_ACCESS_TOKEN}`
const routes = [{ type: 'blogs', path: '/:uid' }]

const CMSClient = prismic.createClient(endpoint, { routes, accessToken })

export default CMSClient
