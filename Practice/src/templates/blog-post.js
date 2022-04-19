import React from "react";
import Layout from "../components/layout";
import {graphql, Link} from "gatsby"


const BlogTemplate = ({data}) =>{
    const post = data.markdownRemark
    return(
        <Layout>
        <div style={{textAlign:"center"}}>
            
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted By {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{__html:post.html}}/>
            <hr></hr>
        </div>
        <Link to="/blog">Go Back</Link>
        </Layout>
    )
}

export const postQuery= graphql` 
    query blogPostByPath($path:String!){
        markdownRemark(frontmatter:{ path:{ eq: $path}}){
            html
            frontmatter{
                path
                title
                author
                date
            }
        }
    }
`
export default BlogTemplate;
