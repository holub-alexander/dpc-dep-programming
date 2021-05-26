const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            page
            url
          }
        }
      }
    }
  `);

  console.log('data >>', data);
  data.allMarkdownRemark.nodes.forEach(node => {
    const { page, url } = node.frontmatter;
    let componentName = 'NewsArticle';

    if (page === 'events') {
      componentName = 'EventsArticle';
    }

    actions.createPage({
      path: `/${page}/${url}`,
      component: path.resolve(`./src/templates/${componentName}.js`),
      context: { url },
    });
  });
};
