import { graphql } from 'gatsby';
import React from 'react';
import Contacts from '../components/Contacts';
import Hero from '../components/Hero';
import LastEvents from '../components/LastEvents';
import LastNews from '../components/LastNews';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = ({ data }) => (
  <>
    <Seo title='Home' />
    <Layout>
      <h1 className='hidden'>
        Донецкий политехнический колледж, отделение Программирование в
        компьютерных системах
      </h1>
      <Hero sliderImg={data} />
      <LastNews />
      <LastEvents />
      <Contacts />
    </Layout>
  </>
);

export const data = graphql`
  query HeroSliderQuery {
    markdownRemark(frontmatter: { page: { eq: "index" } }) {
      frontmatter {
        sliderImages {
          childImageSharp {
            gatsbyImageData(
              width: 1280
              height: 785
              placeholder: BLURRED
              formats: [AVIF, WEBP, JPG]
            )
          }
        }
        sliderImagesAlt
      }
    }
  }
`;

export default IndexPage;
