import styles from './AreaButton.module.css'

export default function AreaButton(props){
  const {areaName} = props;
  console.log(areaName)
  return(
    <>
    <div className={styles.areaCheck}>
      <label >{areaName}</label>  
      <input type="checkbox" />
    </div>
    </>
  )
}