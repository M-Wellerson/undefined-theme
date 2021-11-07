import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Menu from '../components/menu'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen primary">
      <Head>
        <title>Undefined Corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>

      <HeroSection></HeroSection>
    </div>
  )
}
