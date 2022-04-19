import React from "react";
import Layout  from "../components/layout";
import {graphql, Link} from "gatsby";

const BlogPost = ({data}) =>{
    return(
    <Layout>
    <div style={{margin:'20px'}}>
        <h1>Latest Pots</h1>
        {data.allMarkdownRemark.edges.map(post =>(
            <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted By: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br></br>
                <br></br>
                <Link to={post.node.frontmatter.path} > Read More</Link>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        ))}
    </div>
    </Layout>
    )

}

export const PageQuery = graphql `
    query blogIndexQuery{
        allMarkdownRemark{
            edges{
                node{
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
`

export default BlogPost;