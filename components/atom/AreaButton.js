import styles from './AreaButton.module.css'

const apikey = process.env.NEXT_PUBLIC_RESASAPI
export default function AreaButton(props){
  const {areaName,areaNum,populationDataList,setPopulationDataList,apikey } = props;
  async function setAreaNum(checked){
    if(checked){
      //グラフに追加する値の要素追加
      let populationData ={areaName:areaName }
      let url="https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode="+String(areaNum)
      const res = await fetch(url,{
        headers: { "X-API-KEY": apikey }
      })
      const json = await res.json()

      populationData.population=json.result.data[0]
      setPopulationDataList([...populationDataList,populationData])  
    }else{
      //グラフに使わない値の削除
      const filterList = populationDataList.filter(item => item.areaName != areaName)
      setPopulationDataList(filterList) 
    }
  }

  return(
    <>
    <div className={styles.areaCheck}>
      <label >{areaName}</label>  
      <input 
        type="checkbox"
        onChange={ (e) => setAreaNum(e.target.checked)} 
      />
    </div>
    </>
  )
}