import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function PopulationGraph(props) {
  const { populationDataList } = props;
  console.log(populationDataList)
  let graphDataList = []
  populationDataList.forEach(element => {
    let graphData = {}
    console.log(element)
    graphData.name = element.areaName
    let elementList = []
    element.population.data.forEach(element =>
      elementList.push(element.value)
    )
    graphData.data = elementList
    graphDataList.push(graphData)
  });
  console.log(graphDataList)

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
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}