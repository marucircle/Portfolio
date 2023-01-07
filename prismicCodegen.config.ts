import type { Config } from 'prismic-ts-codegen'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const config: Config = {
  output: './src/types/prismic.ts',
  repositoryName: process.env.PUBLIC_CMS_REPOSITORY,
  customTypesAPIToken: process.env.PUBLIC_CMS_CUSTOM_TYPE_ACCESS_TOKEN,
  models: {
    fetchFromRepository: true,
  },
}

export default config
