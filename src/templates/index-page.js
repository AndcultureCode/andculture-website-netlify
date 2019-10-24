import React         from 'react'
import PropTypes     from 'prop-types'
import { graphql }   from 'gatsby'
import Layout        from '../components/Layout'
import Learn         from '../components/molecules/Learn';
import HomeHeader    from '../components/organisms/home/HomeHeader';
import HomeBlockList from '../components/organisms/home/HomeBlockList';
import Talk          from '../components/molecules/Talk';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
      <HomeHeader />
      <HomeBlockList />
      {/* <Learn message="Confident enough to not capitalize our name, evidently. 
          But friendly enough that you’ll be looking forward to our 
          meetings and wondering what we’ll come up with next." /> */}
      <Talk message="We’re looking for partners who are tired of what’s been 
          done and want the not even yet imagined."/>

    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    > */}
  </div>
)

IndexPageTemplate.propTypes = {
  image:       PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title:       PropTypes.string,
  heading:     PropTypes.string,
  subheading:  PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image       = {frontmatter.image}
        title       = {frontmatter.title}
        heading     = {frontmatter.heading}
        subheading  = {frontmatter.subheading}
        mainpitch   = {frontmatter.mainpitch}
        description = {frontmatter.description}
        intro       = {frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
