import { graph, config, auth } from '@grafbase/sdk'

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone()

// Data Sources - https://grafbase.com/docs/connectors
//
// const pg = connector.Postgres('pg', { url: g.env('DATABASE_URL') })
// g.datasource(pg)

// Resolvers - https://grafbase.com/docs/resolvers
//
// g.query('helloWorld', {
//   returns: g.string(),
//   resolver: 'hello-world',
// })

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret:  g.env('NEXTAUTH_SECRET')
})

export default config({
  graph: g,
  // Authentication - https://grafbase.com/docs/auth
  auth: {
    providers: [jwt],
    rules: (rules) => {
      rules.private()
    },
  },

})
