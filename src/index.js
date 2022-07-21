import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CollectionProvider } from './context/CollectionContext';
import TabBar from './components/TabBar';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CollectionProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </CollectionProvider>
  </React.StrictMode>
);