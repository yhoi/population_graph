import Head from 'next/head'
import {useState} from "react"
import Header from '../components/molecule/Header'
import AreaButtonList from '../components/molecule/AreaButtonList';
import PopulationGraph from '../components/molecule/PopulationGrapth';

const apikey = process.env.NEXT_PUBLIC_RESASAPI

function Home({ json }) {
  const [populationDataList, setPopulationDataList ] = useState([])

  return (
    <div>
      <Head>
        <title>Population Chart</title>
        <meta name="description" content="都道府県別の総人口推移グラフ" />
      </Head>
      <Header />
      <AreaButtonList 
        json={json} 
        apikey={apikey}
        populationDataList={populationDataList}
        setPopulationDataList={setPopulationDataList}
      />

      <PopulationGraph populationDataList={populationDataList} />
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
