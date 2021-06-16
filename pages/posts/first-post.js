import Link from "next/link"
import Head from "next/head"
function firstpost() {
    return (
        <>
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
            <style jsx>{`.first{color: blue}`}</style>
        </>
    )
}

export default firstpost
