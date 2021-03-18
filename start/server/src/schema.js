import { gql } from 'apollo-server'

// uses schema definition language (SDL)
const typeDefs = gql`
  type Launch {
    id: ID!
    site: String
    mission: missionrocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
    token: String
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`

export default typeDefs
