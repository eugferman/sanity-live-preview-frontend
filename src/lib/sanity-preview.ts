// ./src/lib/sanity.preview.ts

import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from './sanity.client'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}
export const usePreview = definePreview({projectId: 'a6tvpb9h', dataset: 'production', onPublicAccessOnly})