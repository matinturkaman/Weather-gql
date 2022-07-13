import { gql } from '@apollo/client'

export const GET_WEATHER = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      country
      name
      weather {
        temperature {
          actual
          feelsLike
        }
        wind {
          speed
          deg
        }
        clouds {
          visibility
          humidity
        }
        timestamp
        summary {
          title
          description
          icon
        }
      }
    }
  }
`
