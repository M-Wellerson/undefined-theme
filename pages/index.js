import Head from 'next/head'
import Menu from '../components/menu'

export default function Home() {
  return (
    <div className="flex min-h-screen primary">
      <Head>
        <title>Undefined Corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>
    </div>
  )
}
