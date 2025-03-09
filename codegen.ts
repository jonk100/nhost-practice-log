
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://zlixtwkeibnpivlrfpld.hasura.ap-southeast-1.nhost.run/v1/graphql",
  documents: "lib/graphql/**.ts",
  generates: {
    "lib/graphql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
