import React from 'react'
import ReactDOM from 'react-dom'
// import { ApolloClient, ApolloProvider } from 'react-apollo'

import Main from './pages/main/index.jsx'

// const client = new ApolloClient()

ReactDOM.render(
  // <ApolloProvider client={client}>
    <Main />
  // </ApolloProvider>
  ,
  document.getElementById('app')
)
