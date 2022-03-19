import AreaButton from "../atom/AreaButton";
import styles from './AreaButtonList.module.css'

export default function AreaButtonList(props){
  const {areaNameJson,populationDataList,setPopulationDataList,apikey } = props;
  let displayingArea = []
  
  areaNameJson.result.forEach(element => {
    displayingArea.push(<AreaButton 
      areaName={element.prefName} 
      areaNum={element.prefCode}
      populationDataList={populationDataList}
      setPopulationDataList={setPopulationDataList}
      apikey={apikey}
    /> 
    )
  });

  return(
    <div className={styles.checkBoxAreaList}>
      {displayingArea}  
    </div>
  )
}
