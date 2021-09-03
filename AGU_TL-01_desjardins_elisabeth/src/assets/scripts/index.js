// COULEURS  
const jaune = getComputedStyle(document.documentElement).getPropertyValue('--jaune');
const vertPale = getComputedStyle(document.documentElement).getPropertyValue('--vert_pale');
const vertFonce = getComputedStyle(document.documentElement).getPropertyValue('--vert_fonce');
const bleuPale = getComputedStyle(document.documentElement).getPropertyValue('--bleu_pale');
const bleuFonce = getComputedStyle(document.documentElement).getPropertyValue('--bleu_fonce');
const mauvePale = getComputedStyle(document.documentElement).getPropertyValue('--mauve_pale');
const mauveFonce = getComputedStyle(document.documentElement).getPropertyValue('--mauve_fonce');
const rose = getComputedStyle(document.documentElement).getPropertyValue('--rose');
const orangeClair = getComputedStyle(document.documentElement).getPropertyValue('--orange_clair');
const orangeFonce = getComputedStyle(document.documentElement).getPropertyValue('--orange_fonce');
const blanc = getComputedStyle(document.documentElement).getPropertyValue('--blanc');
const noir = getComputedStyle(document.documentElement).getPropertyValue('--noir');

//LES ÉLÉMENTS 
const navigationPrincipale = document.querySelector('.navigation_principale');
const menuOuvrirBtn = document.querySelector('.menu_open_btn'); 
const menuFermerBtn = document.querySelector('.menu_close_btn'); 

// Fonctionnalités générales 

function ouvrirNavigation() { 
    navigationPrincipale.style.display = 'flex';
    menuFermerBtn.style.display = 'block';

    menuOuvrirBtn.style.display = 'none';
}

function fermerNavigation() { 
    navigationPrincipale.style.display = 'none';
    menuFermerBtn.style.display = 'none';

    menuOuvrirBtn.style.display = 'block';
}

function changerNavigationResize() { 

    if(window.innerWidth >= '800') {  
        	ouvrirNavigation(); 
        	menuFermerBtn.style.display = 'none'; 
        } else { 
            fermerNavigation(); 
            menuOuvrirBtn.style.display = 'block';
        }
}

// Les graphiques 

const dessinerGraphiqueMariage = () => {

    let labels = ['Honolulu', 'Hawaii', 'Kauai', 'Maui' ];
    new RGraph.HBar({
        id: 'graphique_mariage',
        data: [67, 16, 14, 3],
        options: {
            backgroundGrid: false,
            colors: [mauveFonce],
            highlightFill: `Gradient(${mauveFonce}:${bleuPale})`,
            highlightStroke: `Gradient(${mauveFonce}:${bleuPale})`,
            labelsAbove: true,
            labelsAboveUnitsPost: '%', 
            shadow: true,
            shadowColor: '#ddd',
            shadowOffsetx: 2,
            shadowOffsety: 2,
            tooltips: [`${labels[0]} : 67%`, `${labels[1]} : 16%`, `${labels[2]} : 14%`, `${labels[3]}: 3%`],
            tooltipsCss: {
                fontSize: '14pt',
                backgroundColor: bleuPale,
                color: noir,
                border: `1px solid ${bleuFonce}`,
            },
            xaxis: false,
            xaxisScale: false,
            yaxis: false,
        }
    
    }).on('draw', function (obj)
    {
        var coords = obj.coords;

        for (var i=0; i<coords.length; ++i) {
    
            RGraph.text({
                bold:   true,
                color:  'white',
                object: obj,
                text:   labels[i],
                x:      coords[i][0] + 10,
                y:      coords[i][1] + (coords[i][3] / 2),
                valign: 'center'
            });
        }
    }).grow().responsive([
        
        // VERSION BUREAU
        {maxWidth: null,width:500,height: 350},
        // VERSION MOBILE
        {maxWidth: 600,width:400,height: 300}

    ]);
};

// ACTIVITÉS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerGraphiqueActivites = () => {

    let labels = ['Sports d\'eau', 'Visites guidées', 'Culture, histoire et art', 'Dîner-spectacle danse Luau'];
    let data = ['47%','15%','14%','13%'];

    activity = new RGraph.Activity({
        id: 'graphique_activites',
        min: 0,
        max: 100,
        value: data,
        options: {
            backgroundColor: 'transparent',
            colors : [bleuFonce, vertFonce, mauvePale, rose],
            labels: labels,
            labelsBold:true,
            labelsColor: noir,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            tooltips: [`${data[0]}%`, `${data[1]}%`, `${data[2]}%`, `${data[3]}%`],
            tooltipsCss: {
                backgroundColor: orangeClair,
                border: '1px solid orangeFonce',
                color: noir,
                fontSize: '14pt',
                textAlign: 'left',
            },
            width: 50,
        }
    }).grow().responsive([
        
        // // VERSION BUREAU
        {maxWidth: null, width: 450, height: 450, options: {width: null}, css: {'float':'none'}},
        
        // VERSION MOBILE
        {maxWidth: 600,  width: 250, height: 250, options: {width: 25}, css: {'float':'none'}}
    ]);
};



// POPULATIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const dessinerGraphiquePopulation = () => {
    let labels = ['Asiatiques 38%','Blancs 25%','Océaniens 10%','Noirs 2%','Autres 25%'];
    
    new RGraph.Pie({
        id: 'graphique_population',
        data: [38.60, 24.74, 9.96, 1.57, 25.13],
        options: {
            colorsStroke: 'transparent',
            colors: [orangeClair, vertFonce, bleuFonce, mauveFonce, bleuPale],
            exploded: [8, 8, 8, 8, 8], 
            labels: labels,
            labelsSticksLength: 15,
            labelsSticksLinewidth: 2,
            shadow: true,
            shadowOffsetx: 15,
            shadowOffsety: 15,
            shadowColor: '#aaa',
            textAccessible: false, 
            textSize: 14,
            tooltips: [],
            tooltipsCss: {
                backgroundColor: blanc,
                border: `1px solid ${bleuFonce}`,
                color: noir,
                fontSize: '14pt',
            },
            variant: 'donut3d',
        }
    }).draw().responsive([

        // VERSION BUREAU
        {maxWidth: null, width:800, options:{ radius: 100, labelsList: false, labels: labels, tooltips:null}},
     
        // VERSION TABLETTE
        {maxWidth: 800, width: 650, height: 350, options:{ radius: 100, labelsList: false, labels: null, tooltips:labels}},
        
        // VERSION MOBILE
        {maxWidth: 600, width:500, options:{ radius: 100, labels: null, tooltips:labels}}

    ]);
};

// ACCUMULATIONS PLUIE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerGraphiquePluie = () => {

    new RGraph.Bar({
        id: 'graphique_pluie',
        data: [
            [45, 235, 60],
            [50, 245, 40],
            [60, 340, 45],
            [20, 290, 35],
            [20, 205, 25],
            [15, 190, 15],
            [15, 275, 30],
            [20, 250, 40],
            [20, 250, 35],
            [40, 250, 30],
            [55, 395, 45],
            [55, 295, 50]
        ],
        options: {
            backgroundGridHlinesCount: 8,
            backgroundGridVlines: true,
            colors: [mauveFonce, bleuFonce, orangeClair],
            marginLeft: 55,
            key: ['Honolulu','Hilo','Mauna Loa '],
            keyPosition: 'margin',
            keyPositionX: 100,
            textAccessible: false,
            title: 'Comparatif du nombre de pluie à Honolulu, Hilo et Mauna Loa',
            titleX: 100,
            titleY: 0,
            titleBold: true,
            titleHalign: 'left',
            xaxisLabels: ['JAN','FEV','MAR','AVR','MAI','JUI','JUI', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC'],
            xaxis: true,
            xaxisLabelsAngle: 45,
            yaxis: true,
            yaxisLabelsCount: 8,
            yaxisScaleMax: 450,
        }
    }).grow().on('beforedraw', function (obj)
    {
        RGraph.clear(obj.canvas, blanc);

    }).responsive([

        // VERSION BUREAU 
        {maxWidth: null, width: 750, height: 350,options:{textSize: 12, marginInner: 5, yaxisLabelsCount: 8,}},

        // VERSION TABLETTE
        {maxWidth: 1240, width: 500, height: 350,options:{textSize: 12, marginInner: 5, yaxisLabelsCount: 6,}},
        
        // VERSION MOBILE
        {maxWidth: 600, width: 400, height: 200,options:{textSize: 12, marginInner: 2, yaxisLabelsCount: 3,}}

    ]);
};


// LES HAUTEURS DES VOLCANS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerGraphiqueVolcans = () => {
    
    let data = [1000,1246,1600,3000,4169,4200];

    line = new RGraph.SVG.Line({
        id: 'graphique_volcans',
        data: data,
        options: {
            backgroundGrid: false,
            backgroundGridColor: '#999',
            colors: [vertPale],
            marginLeft: 55,
            shadow: true,
            tickmarksStyle: 'filledcircle',
            tooltipsCss: {
                fontSize: '14pt',
                backgroundColor: orangeClair,
                color: noir,
                border: `1px solid ${orangeFonce}`,
            },
            xaxisLabels: ['Mahukona','Kilauea','Kohala','Loihi','Mauna Loa','Mauna Kea'],
            xaxisLabelsAngle: 15,
            xaxisTickmarks: false,
            yaxisTickmarks: true,
            yaxisLabelsCount: 9,
            yaxisScaleUnitsPost: 'm',
        }
    }).responsive([

        // VERSION BUREAU 
        {maxWidth: null, width: 750, height: 350,options:{textSize: 10, marginInner: 5, yaxisLabelsCount: 8}},

        // VERSION TABLETTE
        {maxWidth: 1240, width: 500, height: 350,options:{textSize: 10, marginInner: 5, yaxisLabelsCount: 6}},
        
        // VERSION MOBILE
        {maxWidth: 600, width: 400, height: 200,options:{textSize: 10, marginInner: 2, yaxisLabelsCount: 3}}


    ]).on('draw', function (obj) {

        var textsize = obj.get('data-textsize');

        textLabel = RGraph.SVG.text({
            object: obj,
            parent: obj.svg,
            size:   textsize,
            bold:   (textsize > 14),
            x:      obj.coords[5].x,
            y:      obj.coords[5].y - 25,
            valign: 'bottom',
            halign: 'center'
        });
    }).draw();
};

// TEMPÉRATURE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerGraphiqueTemperature = () => { 
    
    let data = [
        [19, 19, 20, 20, 21, 22, 24, 23, 23, 23, 20, 20],
        [8, 8, 8, 8, 9, 8, 7, 9, 9, 8, 9, 7]
    ];

    new RGraph.SVG.Line({
        id: 'graphique_temperature',
        data: data,
        options: {
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            colors: [bleuPale, rose], 
            filled: true,
            filledOpacity: 0,
            filledAccumulative: true,
            linewidth: 3,
            marginTop: 45,
            marginLeft: 55,
            months: ['janvier','février','mars','avril','mai','juin','juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            spline: true,
            title: 'Température mensuelle moyenne en Celsius',
            titleSubtitle: 'Comparatif entre les températures les plus chaudes et fraîches',
            tooltips: '<b>%{property:months[%{index}]}: %{value}°C</b>',
            tooltipsCss: {
                fontSize: '14pt',
                backgroundColor: jaune,
                color: noir,
                border: `1px solid ${orangeFonce}`,
            },
            xaxis: true,
            xaxisLabelsAngle: 45,
            xaxisLabels: ['JAN','FEV','MAR','AVR','MAI','JUI','JUI', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC'],
            yaxis: true,

        }
    }).draw().responsive([

        // VERSION BUREAU 
        {maxWidth: null, width: 750, height: 350,options:{textSize: 10, marginInner: 5, yaxisLabelsCount: 8}},

        // VERSION TABLETTE
        {maxWidth: 1240, width: 500, height: 350,options:{textSize: 10, marginInner: 5, yaxisLabelsCount: 6}},

        // VERSION BUREAU 
        {maxWidth: 600, width: 400, height: 200,options:{textSize: 10, marginInner: 2, yaxisLabelsCount: 3}}

        ]);  
};

menuOuvrirBtn.addEventListener('click', ouvrirNavigation);
menuFermerBtn.addEventListener('click', fermerNavigation);
window.addEventListener('resize', changerNavigationResize);

const main = () => {
    dessinerGraphiqueMariage(); 
    dessinerGraphiqueActivites();
    dessinerGraphiquePopulation();
    dessinerGraphiquePluie();
    dessinerGraphiqueVolcans();
    dessinerGraphiqueTemperature(); 
};

main();

