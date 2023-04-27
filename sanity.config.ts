import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { codeInput } from '@sanity/code-input';

const config = defineConfig({
  projectId: "1uj8q4ja",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool(), vercelDeployTool(), codeInput()],
  schema: { types: schemas }
})

export default config