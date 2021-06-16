import Link from "next/link"
function firstpost() {
    return (
        <>
            <h1>
                First post
            </h1>
            <h2>
                <Link href="/">
                   <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}

export default firstpost
