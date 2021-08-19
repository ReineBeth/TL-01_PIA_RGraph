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
            colors: ['rgba(115, 2, 12, 0.5)', 'rgba(4, 135, 217, 0.5)'], // filer des formes
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
    labels = ['Monday','Tuesday','Wednesday'];

    bipolar = new RGraph.SVG.Bipolar({
        id: 'bipolar_chart',
        left: [[8,5],[6,3],[4,8]],
        right: [[1,2],[8,2],[6,5]],
        //left: [4,8,6],
        //right: [4,8,5],
        options: {
            backgroundGridHlines: false,
            backgroundGridBorder: false,
            title: 'A Bipolar chart',
            titleSubtitle: 'A subtitle for the chart that was generated on Sunday',
            titleSubtitleItalic: true,
            marginTop: 50,
            colors: ['red','black'],
            yaxisLabels: '%{global:labels[%{index}]}',
            yaxisTextBold: true,
            yaxisTextItalic: true,
            xaxis: false,
            yaxisColor: '#aaa',
            shadow: true,
            tooltips: 'Results:%{key}',
            tooltipsFormattedUnitsPre: '$',
            tooltipsFormattedUnitsPost: '',
            tooltipsFormattedDecimals: 2,
            tooltipsFormattedKeyLabels: ['Berty','Charles'],
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
        }
    }).draw().responsive([
        {maxWidth: 700, width: 400, height: 200,options: {textSize: 8, marginInner: 4}},
        {maxWidth: 950, width: 600, height: 250,options: {textSize: 12, marginInner: 3}},
        {maxWidth: null, width: 700, height: 350,options: {textSize: 16, marginInner: 5}}
    ]);
}

const dessinerHorsesShoes = () => {
    horseshoe = new RGraph.SVG.Horseshoe({
        id: 'horses_shoes',
        min: 0,
        max: 100,
        value: 63,
        options: {
            labelsCenterDecimals: 1,
            labelsCenterUnitsPost: '%'
        }
    }).grow();
    
    var d = 2500; setTimeout(f = function ()
    {
        horseshoe.value = horseshoe.value + RGraph.SVG.random({min: -7, max: 5});
        horseshoe.grow();
        
        setTimeout(f, d);
    }, d);
}

const dessinerDonutChart = () => {
    activity = new RGraph.Activity({
        id: 'donut_chart',
        min: 0,
        max: 100,
        value: [67,57,46],
        options: {
            icons: [
                '../images/activityMeter-arrowright.png',
                '../images/activityMeter-arrowup.png',
                '../images/activityMeter-arrowdown.png'
            ],
            width: 50,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5
        }
    }).grow().responsive([
        {maxWidth: null, width: 450, height: 450, options: {width: null}, css: {'float':'right'}},
        {maxWidth: 650,  width: 250, height: 250, options: {width: 25}, css: {'float':'none'}}
    ]);
}

const dessinerLineChart = () => { 
        // Some data that is to be shown on the bar chart. For multiple
    // lines it can also be an array of arrays
    // data = [280,45,133,152,278,221,56];
    
    // An example of the data used by multiple dataset Line charts
    data = [
        [1,9,8,4,6,5,3],
        [1,6,5,3,3,8,6]
    ];

    new RGraph.SVG.Line({
        id: 'line_chart',
        data: data,
        options: {
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            xaxis: false,
            yaxis: false,
            xaxisLabels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            tooltips: '<b>%{property:days[%{index}]}: %{value}%</b>',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            },
            linewidth: 3,
            marginTop: 45,
            marginLeft: 25,
            spline: true,
            filled: true,
            filledOpacity: 0.5,
            filledAccumulative: true,
            linewidth: 0,
            title: 'A Line chart showing dual datasets',
            titleSubtitle: 'The datasets don\'t show anything particularly interesting'
        }
    }).draw();
}

const dessinerDonut3D = () => {
    labels = ['Mavis','Kevin','Luis','June','Olga','Luis','Pete','Bridget'];

    // Create the Pie chart, set the donut variant and the rest of the
    // configuration. The variant property is what sets the chart to
    // be a Donut chart instead of a regular Pie chart.
    new RGraph.Pie({
        id: 'donut_3d_chart',
        data: [4,8,6,3,5,2,5],
        options: {
            shadow: true,
            shadowOffsetx: 0,
            shadowOffsety: 5,
            shadowColor: '#aaa',
            variant: 'donut3d',
            labels: labels,
            labelsSticksLength: 15,
            labelsSticksLinewidth: 2,
            textAccessible: false,
            colorsStroke: 'transparent'
        }
    }).draw().responsive([
        {maxWidth: null,width:600,height:350,options:{radius: 100,labelsList: true, labels:labels,title:'',tooltips:null}},
        {maxWidth: 900,width:400,height:250,options:{radius: 90,labels: null,title: '(Click for labels)',tooltips:labels}}
    ]);
}


const main = () => {
    dessinerRadarChartCanva(); 
    dessinerHorizontalBarChartSVG();
    dessinerHorsesShoes();
    dessinerDonutChart();
    dessinerLineChart(); 
    dessinerDonut3D();
}

main(); 