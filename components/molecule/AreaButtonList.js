import AreaButton from "../atom/AreaButton";
import styles from './AreaButtonList.module.css'

export default function AreaButtonList(props){
  const {json,setSelectNum,selectNum} = props;
  let displayingArea = []
  json.result.forEach(element => {
    displayingArea.push(<AreaButton 
      areaName={element.prefName} 
      areaNum={element.prefCode} 
      setSelectNum={setSelectNum} 
      selectNum={selectNum}/> 
    )
  });

  return(
    <div className={styles.checkBoxAreaList}>
      {displayingArea}  
    </div>
  )
}
