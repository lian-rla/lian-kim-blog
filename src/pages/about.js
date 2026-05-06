import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import Information from '../components/information';
import BioInfo from '../components/bio-info';
import CareerSection from '../components/career-section';
import ActivitySection from '../components/activity-section';
import ProjectSection from '../components/project-section';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { career, activity, projects } = about;
  return (
    <Layout>
      <Seo title="About" />
      <Bio author={author} language={language} />
      <Information author={author} />
      <BioInfo bio={author.bio} />
      <CareerSection career={career} />
      <ActivitySection activity={activity} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
            email
            residence
            bachelorDegree
          }
          social {
            github
            linkedIn
            email
            resume
            legacyBlog
          }
        }

        about {
          career {
            title
            date
            description
          }

          activity {
            title
            date
            description
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
