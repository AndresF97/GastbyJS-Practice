exports.createPages = async ({ actions,graphql }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  const postPageTemplate = require.resolve("./src/templates/blog-post.js")

  return graphql(`
    {
      allMarkdownRemark{
        edges{
            node{
                html
                id
                frontmatter{
                    path
                    title
                    date
                    author
                }
                excerpt
              }
      }
    }
  }
  `)
  .then(res=>{
    if(res.errors){
      return Promise.reject()
    }
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path:node.frontmatter.path,
        component:postPageTemplate,
        context: {},
        defer: true,
        
      })
    });
  })
}
