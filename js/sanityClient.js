// js/sanityClient.js

import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'dt8ist7c', // Replace with your project ID
  dataset: 'production',         // Usually 'production'
  useCdn: true,                  // `false` if you want to ensure fresh data
  apiVersion: '2024-09-13',      // Use a recent date
})