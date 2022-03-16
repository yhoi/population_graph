import Head from 'next/head'
import Header from '../components/molecule/Header'
import AreaButtonList from '../components/molecule/AreaButtonList';

const apikey = process.env.NEXT_PUBLIC_RESASAPI

function Home({ json }) {
  console.log(json)
  return (
    <div>
      <Head>
        <title>Population Chart</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <AreaButtonList json={json} />
    </div>
  )
}

Home.getInitialProps = async({req}) =>{
  const res = await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
    headers: { "X-API-KEY": apikey },
  })
  const json = await res.json()
  return {
    json: json
  };
}

export default Home
