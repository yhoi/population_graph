import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from './PopulationGraph.module.css'

export default function PopulationGraph(props) {
  const { populationDataList } = props;
  console.log(populationDataList)
  
  let graphDataList = []
  //Highchartで使う形式に変換
  populationDataList.forEach(populationData => {
    let graphData = {}
    graphData.name = populationData.areaName

    let elementList = []
    populationData.population.data.forEach(element =>
      elementList.push(element.value)
    )
    graphData.data = elementList
    
    graphDataList.push(graphData)
  });

  const options = {
    title: {
      text: '人口増減表'
    },

    yAxis: {
      title: {
        text: '人口数'
      }
    },

    xAxis: {
      title: {
        text:'年度'
      }
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: true
        },
        pointStart: 1960,
        pointInterval:5
      }
    },

    series: graphDataList,
  }

  return (
    <div className={styles.graph}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}