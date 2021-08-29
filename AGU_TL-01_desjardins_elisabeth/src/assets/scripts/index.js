// COULEURS  
const jaune = getComputedStyle(document.documentElement).getPropertyValue('--jaune');

const vertPale = getComputedStyle(document.documentElement).getPropertyValue('--vert_pale');

const vertFonce = getComputedStyle(document.documentElement).getPropertyValue('--vert_fonce');

const bleuPale = getComputedStyle(document.documentElement).getPropertyValue('--bleu_pale');

const bleuFonce = getComputedStyle(document.documentElement).getPropertyValue('--bleu_fonce');

const mauvePale = getComputedStyle(document.documentElement).getPropertyValue('--mauve_pale');

const mauveFonce = getComputedStyle(document.documentElement).getPropertyValue('--mauve_fonce');

const rose = getComputedStyle(document.documentElement).getPropertyValue('--rose');

const rouge = getComputedStyle(document.documentElement).getPropertyValue('--rouge');

const orangeClair = getComputedStyle(document.documentElement).getPropertyValue('--orange_clair');

const orangeFonce = getComputedStyle(document.documentElement).getPropertyValue('--orange_fonce');

const blanc = getComputedStyle(document.documentElement).getPropertyValue('--blanc');

const noir = getComputedStyle(document.documentElement).getPropertyValue('--noir');

const dessinerHorizontalChart = () => {
        // The labels for the chart are not added by giving them to the
    // chart but manually adding text to the chart.
    let labels = ['Honolulu', 'Hawaii', 'Kauai', 'Maui' ];

    // Create the Horizontal Bar chart and configure it. With there
    // being no labels on the left-hand-side the margin autofit
    // will make the left margin zero
    new RGraph.HBar({
        id: 'horizontal_chart',
        data: [67, 16, 14, 3],
        options: {
            backgroundGrid: false,
            xaxis: false,
            yaxis: false,
            xaxisScale: false,
            labelsAbove: true,
            labelsAboveUnitsPost: '%',
            colors: [mauveFonce],
            shadow: true,
            shadowColor: '#ddd',
            shadowOffsetx: 2,
            shadowOffsety: 2,
            
            tooltips: '<i style="position: relative; top: -5px">Pourcentage de mariage dans l\'état d\'Hawaii :</i> <span style="font-size: 26pt; ">%{value}%</span>',
            tooltipsCss: {
                fontSize: '14pt'
            },
            highlightFill: 'Gradient(rgba(255,255,255,0):white)',
            highlightStroke: 'Gradient(rgba(255,255,255,0):white)'
        }
    
    // Use the draw event to add the labels on the left-hand-side
    }).on('draw', function (obj)
    {
        var coords = obj.coords;

        // Loop through the coordinates of the bars
        for (var i=0; i<coords.length; ++i) {
        
            // For each of the coordinates add a text label
            // on the left-hand-side of the bar
            RGraph.text({
                object: obj,
                text:   labels[i],
                x:      coords[i][0] + 10,
                y:      coords[i][1] + (coords[i][3] / 2),
                valign: 'center',
                bold:   true,
                color:  'white'
            });
        }
    }).grow().responsive([
        {maxWidth: null,width:600,height: 350,parentCss:{'float':'right'}},
        {maxWidth: 800,width:400,height: 300,parentCss:{'float':'none'}}
    ]);
}


const dessinerDonutChart = () => {

    // SÉRIEUX, OU SONT LES COULEURS ???

    let labels = ['Hamac', 'Hinking', 'Fishing', 'Surfing'];
    data = ['45%','62%','75%','85%'];

    activity = new RGraph.Activity({
        id: 'donut_chart',
        // backgroundColor: ['f26a1b', '5b3580', '4c7326', 'f5f5f5'],
        min: 0,
        max: 100,

        value: data,
        options: {
            backgroundColor: '#f9f9f9', //change le fond (noir)
            //backgroundRingsColors: ['red', 'blue', 'white', 'yellow'], //change la couleur derriere les valeurs
            colors : [orangeFonce, vertFonce, bleuPale, bleuFonce],

            // ON N'A PAS LES ICONES, ON SE TROUVE DES IMAGES ???
            // icons: [
            //     '../images/activityMeter-arrowright.png',
            //     '../images/activityMeter-arrowup.png',
            //     '../images/activityMeter-arrowdown.png'
            // ],
            labels: labels,
            labelsColor: '#000',
            tooltips: 'Results:<br />%{key}%',
            tooltipsFormattedKeyLabels: labels,
            tooltipsCss: {
                fontSize: '16pt',
                textAlign: 'left'
            },

            width: 50,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5
        }
    }).grow().responsive([

        // VERSION MOBILE
        {maxWidth: null, width: 450, height: 450, options: {width: null}, css: {'float':'none'}},

        // VERSION BUREAU
        {maxWidth: 650,  width: 250, height: 250, options: {width: 25}, css: {'float':'none'}}
    ]);
};







const dessinerDonut3D = () => {
    // J'ai pris les termes utilisé sur wikipédia. Je ne sais pas si utilisé les termes blancs et noirs c'est la bonne chose ou si ya un meilleur terme. 
    let labels = ['Asiatiques','Blancs','Océaniens','Noirs','Autres'];

    // Create the Pie chart, set the donut variant and the rest of the
    // configuration. The variant property is what sets the chart to
    // be a Donut chart instead of a regular Pie chart.
    new RGraph.Pie({
        id: 'donut_3d_chart',
        data: [38.60, 24.74, 9.96, 1.57, 25.13],
        options: {
            shadow: true,
            shadowOffsetx: 15,
            shadowOffsety: 15,
            shadowColor: '#aaa',
            variant: 'donut3d',
            labels: labels,
            labelsSticksLength: 15,
            labelsSticksLinewidth: 2,
            textAccessible: false,
            colorsStroke: 'transparent',
            colors : [orangeClair, vertFonce, bleuFonce, mauveFonce, bleuPale]
        }
    }).draw().responsive([
        {maxWidth: null,width:600,height:350,options:{radius: 100,labelsList: false, labels:labels,title:'',tooltips:null}},
        {maxWidth: 900,width:400,height:250,options:{radius: 100,labels: null,title: 'Population Hawaii',tooltips:labels}}
    ]);
};



const dessinerLineChartBlackWhite = () => {
    
    // This is the data for the Line chart. A simple JavaScript array.
    data = [500,600,800,720,900,1100];

    // Create the Line chart. Give it the data that's defined above.
    // There's nothing notable about the configuration.
    line = new RGraph.SVG.Line({
        id: 'bw_chart',
        data: data,
        options: {
            colors: ['#00AD4B'],
            backgroundGrid: false,
            xaxisLabels: ['Febuary','March','April','May','June','July'],
            xaxisTickmarks: false,
            yaxisTickmarks: false,
            backgroundGridColor: '#999',
            tickmarksStyle: 'circle',
            marginLeft: 75
        }
    }).responsive([
        {maxWidth:null,width:650,height:250,options:{linewidth:5,tickmarksSize: 8,textSize: 16,marginInner: 50,'data-textsize': 20},css:{'float':'right'}},
        {maxWidth:900,width:400,height:200,options:{linewidth:3,tickmarksSize: 4,textSize: 10,marginInner: 30,'data-textsize': 14},css:{'float':'none'}}
    ]).on('draw', function (obj)
    {
        var textsize = obj.get('data-textsize');

        // Format the text that is about to be added to the Line chart
        // above the last datapoint.
        label = RGraph.SVG.numberFormat({
            
            // The value of the last point on the chart
            num: obj.data[0][5],
            
            thousand: ','
        });
        
        //
        // Remove the text label if its' present
        //
        if (typeof textLabel !== 'undefined') {
            textLabel.parentNode.removeChild(textLabel);
        }

        // Use the RGraph API function to add the label above the last
        // point. Unlike the canvas libraries the SVG text function
        // doesn't have to be inside the draw event because SVG doesn't
        // clear itself like canvas does when things need redrawing.
        textLabel = RGraph.SVG.text({
            object: obj,
            parent: obj.svg,
            
            text:   label,
            
            size:   textsize,
            bold:   (textsize > 14),

            x:      obj.coords[5].x,
            y:      obj.coords[5].y - 25,
            valign: 'bottom',
            halign: 'center'
        });
    }).draw();
};

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
};



const dessinerLineChart = () => { 
    
    // Some data that is to be shown on the bar chart. For multiple
    // lines it can also be an array of arrays
    // data = [280,45,133,152,278,221,56];
    
    data = [
        [19, 19, 20, 20, 21, 22, 24, 23, 23, 23, 20, 20],
        // Il faut additionner la différence
        [8, 8, 8, 8, 9, 8, 7, 9, 9, 8, 9, 7]
    ];

    
    new RGraph.SVG.Line({
        id: 'line_chart',
        data: data,
        options: {
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            xaxis: true,
            yaxis: false,
            xaxisLabels: ['JAN','FÉV','MARS','AVRIL','MAI','JUIN','JUI', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DÉC'],
            months: ['janvier','février','mars','avril','mai','juin','juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            tooltips: '<b>%{property:months[%{index}]}: %{value}°C</b>',

            // MAIS COMMENT CHANGER LES COULEURS S'ILS SONT DANS LE PATH ???
            // tooltipsFormattedKeyColors: ['#c24275', '#184a8c'],
            // tooltipsFormattedKeyColors: [rose, bleuFonce], 

            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                // opacity: 0.5,
            },
            // linewidth: 3,
            marginTop: 45,
            // marginLeft: 25,
            spline: true,
            filled: true,
            filledOpacity: 0,
            filledAccumulative: true,
            linewidth: 5,
            title: 'Température moyenne à Hawaï',
            titleSubtitle: 'Comparatif entre la température maximum et minimum, en moyenne, par mois',
            //  tooltipsFormattedKeyColors: ['#c24275', '#184a8c'],
            // tooltipsFormattedKeyColors: [rose, bleuFonce],
            // colorsStroke: [mauveFonce, mauvePale], 
            colors: [mauvePale, bleuPale], 
        }
    }).draw();


    
};




const main = () => {
    
    dessinerHorizontalChart(); 
    dessinerDonutChart();
    dessinerDonut3D();
    // dessinerHorizontalBarChartSVG();
    dessinerHorsesShoes();
    dessinerLineChart(); 
    dessinerLineChartBlackWhite();
};

main(); 