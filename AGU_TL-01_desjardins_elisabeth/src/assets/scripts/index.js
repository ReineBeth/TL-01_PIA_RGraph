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

//LES ÉLÉMENTS 
const navigationPrincipale = document.querySelectorAll('.navigation_principale a'); 
const sectionElement = document.querySelectorAll('section');

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
        
        // VERSION MOBILE
        {maxWidth: null,width:600,height: 350,parentCss:{'float':'right'}},
         // VERSION BUREAU
        {maxWidth: 800,width:400,height: 300,parentCss:{'float':'none'}}
    ]);
};



// ACTIVITÉS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerDonutChart = () => {

    // Pourquoi lorsque j'ajoute une 5e activités, tout devient translucide ????
    let labels = ['Sports d\'eau 47%', 'Visites guidées 15%', 'Culture, histoire et art 14%', 'Dîner-spectacle danse Luau 13%'];
    let data = ['47%','15%','14%','13%'];

    activity = new RGraph.Activity({
        id: 'donut_chart',
        min: 0,
        max: 100,
        value: data,
        options: {
            colors : [bleuFonce, vertFonce, mauvePale, rose],
            backgroundColor: '#ffffff',

            // ON N'A PAS LES ICONES, ON SE TROUVE DES IMAGES ????????????????????????????
            // icons: [
            //     '../images/activityMeter-arrowright.png',
            //     '../images/activityMeter-arrowup.png',
            //     '../images/activityMeter-arrowdown.png'
            // ],
            
            labels: labels,
            labelsBold:true,
            labelsColor: noir,

            // BEAUCOUP DE DIFFICULTÉS à mettre ça beau et clean!!!!!!!!!!!!!!!!!!!!!!!!!!
            // tooltips: 'Résultats:%{key}',
            // tooltipsFormattedKeyLabels: labels,
            // tooltipsCss: {
            //     fontSize: '16pt',
            //     textAlign: 'left'
            // },

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



// POPULATIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

        // Comment le rendre plus grand en version bureau?
        
        // VERSION BUREAU
        {maxWidth: null,width:600,height:350,options:{radius: 100,labelsList: false, labels:labels,title:'',tooltips:null}},
        
        // VERSION MOBILE - Les Labels disparaissent !
        {maxWidth: 900,width:400,height:250,options:{radius: 100,labels: null,title: 'Population Hawaii',tooltips:labels}}
    ]);
};


// LES HAUTEURS DES VOLCANS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerLineChartBlackWhite = () => {
    
    // This is the data for the Line chart. A simple JavaScript array.
    data = [1000,1246,1600,3000,4169,4200];

    // Create the Line chart. Give it the data that's defined above.
    // There's nothing notable about the configuration.
    line = new RGraph.SVG.Line({
        id: 'bw_chart',
        data: data,
        options: {
            colors: [vertPale],
            backgroundGrid: false,
            xaxisLabels: ['Mahukona','Kilauea','Kohala','Loihi','Mauna Loa','Mauna Kea'],
            xaxisTickmarks: false,
            yaxisTickmarks: true,
            backgroundGridColor: '#999',
            tickmarksStyle: 'circle',
            marginLeft: 75
        }
    }).responsive([

        // VERSION BUREAU
        {maxWidth:null,width:900,height:500,options:{linewidth:5,tickmarksSize: 8,textSize: 16,marginInner: 50,'data-textsize': 20},css:{'float':'none'}},
        
        // VERSION MOBILE
        {maxWidth:900,width:600,height:350,options:{linewidth:3,tickmarksSize: 4,textSize: 12,marginInner: 30,'data-textsize': 14},css:{'float':'none'}}

    ]).on('draw', function (obj)
    {
        var textsize = obj.get('data-textsize');

        // Format the text that is about to be added to the Line chart
        // above the last datapoint.
        label = RGraph.SVG.numberFormat({
            
            // COMMENT FAIRE POUR  QUE TOUTES LES HAUTEURS APPARAISSENT, PAS SEULEMENT LA DERNIÈRES ???????

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


// ACCUMULATIONS PLUIE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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


// TEMPÉRATURE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerLineChartTemperature = () => { 
    
    data = [
        [19, 19, 20, 20, 21, 22, 24, 23, 23, 23, 20, 20],
        [8, 8, 8, 8, 9, 8, 7, 9, 9, 8, 9, 7]
    ];

    new RGraph.SVG.Line({
        id: 'line_chart',
        data: data,
        options: {
            colors: [bleuPale, rose], 
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            xaxis: true,
            yaxis: true,
            xaxisLabels: ['JAN','FEV','MAR','AVR','MAI','JUI','JUI', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC'],
            months: ['janvier','février','mars','avril','mai','juin','juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            tooltips: '<b>%{property:months[%{index}]}: %{value}°C</b>',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.5,
            },
            linewidth: 3,
            marginTop: 45,
            marginLeft: 25,
            spline: true,
            filled: true,
            filledOpacity: 0,
            filledAccumulative: true,
            title: 'Hawaï - Température mensuelle moyenne en Celsius',
            titleSubtitle: 'Comparatif entre les températures les plus chaudes et fraîches',
        }
    }).draw();  
    
    // COMMENT LE RENDRE RESPONSIVE ????? PLUS GROS EN VERSION BUREAU

};


const main = () => {
    dessinerHorizontalChart(); 
    dessinerDonutChart();
    dessinerDonut3D();
    // dessinerHorizontalBarChartSVG();
    dessinerHorsesShoes();
    dessinerLineChartTemperature(); 
    dessinerLineChartBlackWhite();
};

let dernierIndex = 0;

for(let index = 0; index < sectionElement.length; index++) { 

	navigationPrincipale[index].addEventListener('click', displaySection);

    function displaySection() {
        sectionElement[dernierIndex].style.display = 'none'; 
        navigationPrincipale[dernierIndex].classList.remove = 'active';
            
        sectionElement[index].style.display = 'block';
        navigationPrincipale[index].classList.add = 'active';
        
        dernierIndex = index; 
        main();
    }
}



