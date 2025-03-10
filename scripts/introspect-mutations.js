// Script to introspect GraphQL schema mutations
import { request, gql } from 'graphql-request';

// Replace with your actual GraphQL endpoint
const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:8080/v1/graphql';

const introspectionQuery = gql`
  {
    __schema {
      mutationType {
        fields {
          name
          description
        }
      }
    }
  }
`;

async function main() {
  try {
    console.log(`Querying endpoint: ${endpoint}`);
    const data = await request(endpoint, introspectionQuery);
    
    console.log('\nAvailable Mutations:');
    const mutations = data.__schema.mutationType.fields;
    
    mutations.forEach(mutation => {
      console.log(`- ${mutation.name}${mutation.description ? `: ${mutation.description}` : ''}`);
    });
    
    // Look specifically for song-related mutations
    console.log('\nSong-related Mutations:');
    const songMutations = mutations.filter(m => 
      m.name.toLowerCase().includes('song') || 
      (m.description && m.description.toLowerCase().includes('song'))
    );
    
    if (songMutations.length > 0) {
      songMutations.forEach(mutation => {
        console.log(`- ${mutation.name}${mutation.description ? `: ${mutation.description}` : ''}`);
      });
    } else {
      console.log('No song-specific mutations found.');
      
      // Look for insert mutations
      console.log('\nInsert Mutations:');
      const insertMutations = mutations.filter(m => m.name.toLowerCase().includes('insert'));
      
      if (insertMutations.length > 0) {
        insertMutations.forEach(mutation => {
          console.log(`- ${mutation.name}${mutation.description ? `: ${mutation.description}` : ''}`);
        });
      } else {
        console.log('No insert mutations found.');
      }
    }
  } catch (error) {
    console.error('Error executing introspection query:', error);
  }
}

main();
