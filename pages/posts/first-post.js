import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/Layout"
import Post from "../../secondaryComponent/Post"

function firstpost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1 className="first">
                First post
            </h1>
            <h2>
                <Link href="/">
                   <a>Back to home</a>
                </Link>
            </h2>
            <Post/>
            {/* <style jsx>{`.first{color: blue}`}</style> */}
        </Layout>
    )
}

export default firstpost
