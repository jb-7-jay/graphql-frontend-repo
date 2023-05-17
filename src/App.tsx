import './App.css';
import { UserList } from './Components/UserList';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <UserList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
