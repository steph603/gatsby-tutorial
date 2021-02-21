import React from "react"
import { graphql } from "gatsby"
import SliceZone from '../components/slicezone'
import Layout from "../components/layout"
import Hero from "../components/hero"

export const query = graphql`
  {
    prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              primary {
                hero_content
                hero_title
                background_image
              }
            }
          }
        }
      }
    }
  }
  }`

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )

}

export default IndexPage
