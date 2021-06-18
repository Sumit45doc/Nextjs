import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps(props) {
  const postData = await getPostData(props.params.identifier)
  return {
    props: {
      postData
    }
  }
}


export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}