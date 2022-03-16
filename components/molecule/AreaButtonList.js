import AreaButton from "../atom/AreaButton";
import styles from './AreaButtonList.module.css'

export default function AreaButtonList(props){
    const {json} = props;
    let displayingArea = []
    json.result.forEach(element => {
        console.log(element.prefName)
        displayingArea.push(<AreaButton areaName={element.prefName} /> )
    });

    return(
      <div className={styles.checkBoxAreaList}>
        {displayingArea}  
      </div>
    )
}
