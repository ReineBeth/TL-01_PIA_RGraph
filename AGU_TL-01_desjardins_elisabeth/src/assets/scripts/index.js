const dessinerRadarChartCanva = () => {

	// https://www.rgraph.net/canvas/radar.html#properties (liens pour avoir les propriétés des radars chart)
    new RGraph.Radar({
        id: 'radar_chart',
        data: [
            [5, 5, 10, 8, 5, 8],
            [3, 2, 8, 3, 7, 5],
        ],
        options: {
            backgroundCirclesPoly: true,
            backgroundCirclesSpacing: 30,
            colors: ['rgba(115, 2, 12, 0.5)', 'rgba(4, 135, 217, 0.5)'], // filer des forme
            axesColor: 'transparent', //couleur de la croix en background
            highlights: true, //mettre ou pas un croix
            colorsStroke: ['#73020c', '#0487d9'],
            linewidth: 3,
            labels: ['Maintenance', 'Rapidité', 'Fiabilité','Complexité','Efficacité','Prix'],
            // labelsAxes: '', Si ou veux mettre des valeurs numéral dans le graphique
            textSize: 14,
			
        }
    }).trace().responsive([
        {maxWidth: null, width: 500, height: 400,css:{'float':'right'}},
        {maxWidth: 600,  width: 300, height: 300,css:{'float':'none'}}
    ]);
}

const dessinerHorizontalBarChartSVG = () => {
	 // Some data that is to be shown on the Horizontal Bar chart. To show a stacked or grouped chart
    // each number should instead be an array of numbers (as shown below).
    // data = [280,45,133,152,278,221,56];
    
    // An example of the data used by stacked and grouped charts
    // data = [[1,5,6], [4,5,3], [7,8,9], [4,7,7], [9,6,5], [5,2,3], [4,8,6]]
    
    data = [[542,623],[453,646],[756,688]];
    days = ['Monday','Tuesday','Wednesday'];
    
    function getTotal (index)
    {
        return RGraph.SVG.numberFormat({num: RGraph.arraySum(data[index])});
    }
    
    hbar = new RGraph.SVG.HBar({
        id: 'horizontal_bar_chart',
        data: data,
        options: {
            xaxis: false,
            xaxisScaleUnitsPost: 'k',
            yaxisLabels: '%{global:days[%{index}]} (%{function:getTotal(%{index})})',
            yaxisLabelsBold: true,
            yaxisTickmarks: false,
            colors:['orange','#1F77B4'],
            backgroundGridHlines: false,
            backgroundGridBorder: false,
            marginTop: 50,
            marginInner: 10,
            marginInnerGrouped: 5,
            grouping: 'grouped',
            title: 'A Horizontal Bar chart showing three days of sales',
            titleSubtitle: 'Sales are confirmed and cards have been charged',
            tooltips: '<i style="font-size: 16pt">Results for <b>%{property:yaxisLabels[%{dataset}]}</b></i>%{key}',
            tooltipsFormattedKeyLabels: ['David','Richard'],
            tooltipsFormattedUnitsPre: '$',
            tooltipsFormattedUnitsPost: ',000',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
        }
    }).draw();
}


dessinerRadarChartCanva(); 

dessinerHorizontalBarChartSVG();