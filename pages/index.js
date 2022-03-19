import Head from 'next/head'
import {useState} from "react"
import Header from '../components/molecule/Header'
import AreaButtonList from '../components/molecule/AreaButtonList';
import PopulationGraph from '../components/molecule/PopulationGraph';

const apikey = process.env.NEXT_PUBLIC_RESASAPI

function Home({ areaNameJson }) {
  const [populationDataList, setPopulationDataList ] = useState([])

  return (
    <div>
      <Head>
        <title>Population Chart</title>
        <meta name="description" content="都道府県別の総人口推移グラフ" />
      </Head>
      <Header />
      <h3 className=''>都道府県</h3>
      <AreaButtonList 
        areaNameJson={areaNameJson} 
        apikey={apikey}
        populationDataList={populationDataList}
        setPopulationDataList={setPopulationDataList}
      />
      <h3>都道府県別の総人口推移グラフ </h3>
      <PopulationGraph populationDataList={populationDataList} />
    </div>
  )
}

Home.getInitialProps = async({req}) =>{
  const res = await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
    headers: { "X-API-KEY": apikey },
  })
  const areaNameJson = await res.json()
  return {
    areaNameJson: areaNameJson
  };
}

export default Home
