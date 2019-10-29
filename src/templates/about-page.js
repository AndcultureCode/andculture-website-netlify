import React, { Fragment }      from 'react'
import PropTypes                from 'prop-types'
import { graphql }              from 'gatsby'
import Layout                   from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Talk                     from '../components/molecules/Talk'
import Header                   from '../components/organisms/Header'
import AboutHeader from '../components/organisms/about/AboutHeader'
import DepartmentList from "../components/organisms/about/DepartmentList"

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Fragment>
      <Header />
      <AboutHeader />
      <DepartmentList />
      <Talk message="Now, you've learned a lot about us, time for you to us about yourself." />
    </Fragment>
  )
}

AboutPageTemplate.propTypes = {
  title:            PropTypes.string.isRequired,
  content:          PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent = {HTMLContent}
        title            = {post.frontmatter.title}
        content          = {post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
