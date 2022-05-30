import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout.js'

const FirstPost = () => (
  <Layout>
    <Head>
      <title>First post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href='/'>
        Back to home
      </Link>
    </h2>
  </Layout>
);

export default FirstPost;