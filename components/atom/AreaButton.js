import styles from './AreaButton.module.css'

export default function AreaButton(props){
  const {areaName,areaNum,setSelectNum,selectNum} = props;
  let checked = false

  function setAreaNum(checked){
    if(checked){
      //グラフに追加する値の要素追加
      setSelectNum([...selectNum,String(areaNum)])
    }else if(selectNum.indexOf(String(areaNum)!=-1)){
      //グラフに使わない値の削除
      let selectList = selectNum.filter((item) => item != String(areaNum))
      setSelectNum(selectList)
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