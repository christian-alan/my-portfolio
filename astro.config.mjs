import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import vercelServerless from '@astrojs/vercel/serverless';
import yaml from '@rollup/plugin-yaml';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  integrations: [tailwind(), mdx(), react()],
  devToolbar: {
    enabled: false,
  },
  output:'server',
  adapter:vercelServerless(),
  env:{
    schema:{
      BLOB_READ_WRITE_TOKEN: envField.string({context:'server',access:'secret'})
    }
  }
});