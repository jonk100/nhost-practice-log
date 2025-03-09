(async () => {
    // Dynamically import the 'graphql-request' package
    const { request, gql } = await import('graphql-request');
  
    const endpoint = 'https://your-project-id.nhost.app/v1/graphql'; // Replace with your Nhost GraphQL endpoint
  
    const introspectionQuery = gql`
      query IntrospectionQuery {
        __schema {
          types {
            name
            kind
            fields {
              name
            }
          }
        }
      }
    `;
  
    try {
      // Fetch the schema
      const data = await request(endpoint, introspectionQuery);
      
      // Save schema to a JSON file
      const fs = require('fs');
      fs.writeFileSync('graphql.schema.json', JSON.stringify(data, null, 2));
      console.log('Schema saved to graphql.schema.json');
    } catch (error) {
      console.error('Error fetching schema:', error);
    }
  })();
  