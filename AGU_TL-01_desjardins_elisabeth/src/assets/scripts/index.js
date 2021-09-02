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
const navigationPrincipale = document.querySelector('nav');
const menuOuvrirBtn = document.querySelector('.menu_open_btn'); 
const menuFermerBtn = document.querySelector('.menu_close_btn'); 

// Fonctionnalités générales 

function ouvrirNavigation() { 
    navigationPrincipale.style.display = 'block';
    menuFermerBtn.style.display = 'block';

    menuOuvrirBtn.style.display = 'none';
}

function fermerNavigation() { 
    navigationPrincipale.style.display = 'none';
    menuFermerBtn.style.display = 'none';

    menuOuvrirBtn.style.display = 'block';
}

function changerNavigationResize() { 

    fermerNavigation();

	if(window.innerWidth >= '800') {  
		ouvrirNavigation(); 
		menuFermerBtn.style.display = 'none'; 
	}
}

// Les graphiques 

const dessinerGraphiqueMariage = () => {

    // Ouain... Maui fait chier XD 

    let labels = ['Honolulu', 'Hawaii', 'Kauai', 'Maui' ];
    new RGraph.HBar({
        id: 'graphique_mariage',
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
            tooltips: [`${labels[0]} : 67%`, `${labels[1]} : 16%`, `${labels[2]} : 14%`, `${labels[3]}: 3%`],
            tooltipsCss: {
                fontSize: '14pt',
                backgroundColor: bleuPale,
                color: noir,
                border: `1px solid ${bleuFonce}`,
            },
            highlightFill: 'Gradient(rgba(255,255,255,0):white)',
            highlightStroke: 'Gradient(rgba(255,255,255,0):white)'
        }
    
    }).on('draw', function (obj)
    {
        var coords = obj.coords;

        for (var i=0; i<coords.length; ++i) {
    
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

// Version 2
//Pas parfait à cause de la 4ième valeur qui est si petite 
{maxWidth: null, width: 600, height: 300, options: {textSize: 14}},
{maxWidth: 900,  width: 400, height: 200, options: {textSize: 10}}

        
// Version 1
//À 500 de largeur je ne vois pas tous le graphique. 
        // // VERSION BUREAU
        // {maxWidth: null,width:600,height: 350},
        // // VERSION MOBILE
        // {maxWidth: 600,width:400,height: 300}
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
            colors : [bleuFonce, vertFonce, mauvePale, rose],
            backgroundColor: 'transparent',
            labels: labels,
            labelsBold:true,
            labelsColor: noir,



            // OPTION 1
            // tooltips: [`${labels[0]} ${data[0]}%`, `${labels[1]} ${data[1]}%`, `${labels[2]} ${data[2]}%`, `${labels[3]} ${data[3]}%`],



            // OPTION 2
            tooltips: [`${data[0]}%`, `${data[1]}%`, `${data[2]}%`, `${data[3]}%`],

            //RETIRER PEU IMPORTE LA VERSION 
            // tooltipsFormattedKeyLabels: `${labels} ${data}%`, 


            tooltipsCss: {
                backgroundColor: orangeClair,
                border: '1px solid orangeFonce',
                color: noir,
                fontSize: '14pt',
                textAlign: 'left',
            },

            width: 50,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5
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
            shadow: true,
            shadowOffsetx: 15,
            shadowOffsety: 15,
            shadowColor: '#aaa',
            variant: 'donut3d',
            labels: labels,
            labelsSticksLength: 15,
            labelsSticksLinewidth: 2,
            textAccessible: false, 
            textSize: 14,

            // J'arrive pas à sélectionné la section a moins de 2% (le mauve)... 
            tooltips: [],
            tooltipsCss: {
                fontSize: '14pt',
                backgroundColor: blanc,
                color: noir,
                border: `1px solid ${bleuFonce}`,
            },
            colorsStroke: 'transparent',
            colors: [orangeClair, vertFonce, bleuFonce, mauveFonce, bleuPale],
            exploded: [8, 8, 8, 8, 8], 
        }
    }).draw().responsive([

        // VERSION BUREAU
        {maxWidth: null,width:800,height:400,options:{radius: 100,labelsList: false, labels:labels,title:'',tooltips:null}},
        
        // VERSION MOBILE - Les Labels disparaissent !
        {maxWidth: 600,width:500,height:350,options:{radius: 100,labels: null,tooltips:labels}}

    ]);
};


// LES HAUTEURS DES VOLCANS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerGraphiqueVolcans = () => {
    
    let data = [1000,1246,1600,3000,4169,4200];

    line = new RGraph.SVG.Line({
        id: 'graphique_volcans',
        data: data,
        options: {
            colors: [vertPale],
            backgroundGrid: false,


            // OK C'est pas parfait mais au moins on voit le label dans son entier ! 
            xaxisLabels: ['Mahukona','Kilauea','Kohala','Loihi','Mauna Loa','Mauna Kea'],
            xaxisLabelsAngle: 10,
            xaxisTickmarks: false,

            // Ça fonctionne, mais j'en pers des bouts...
            // xaxisPosition: top,
            // xaxisLabelsPosition: right,
            // xaxisLabelsSpecificAlign: right,

            yaxisTickmarks: true,
            yaxisLabelsCount: 9,
            yaxisScaleUnitsPost: 'm',
            backgroundGridColor: '#999',
            tickmarksStyle: 'filledcircle',
            marginLeft: 75,
            shadow: true,
            tooltips: [1000,1246,1600,3000,4169,4200],
            tooltipsCss: {
                fontSize: '14pt',
                backgroundColor: orangeClair,
                color: noir,
                border: `1px solid ${orangeFonce}`,
            },
        }
    }).responsive([





// VERSION 2

        {maxWidth: null,width: 650,height: 250, options: {  yaxisLabelsCount: 9, yaxisTickmarks: true,}},
        {maxWidth: 900,width: 400,height: 150, options: {  yaxisLabelsCount: 4, yaxisTickmarks: false,}}

// VERSION 1

        // // VERSION BUREAU
        // {maxWidth:null,width:850,height:450,options:{linewidth:5,tickmarksSize: 8,textSize: 16,marginInner: 50,'data-textsize': 20, marginLeft: 100},css:{'float':'none'}},
        
        // // VERSION MOBILE
        // {maxWidth:600,width:500,height:300,options:{linewidth:3,tickmarksSize: 4,textSize: 12,marginInner: 30,'data-textsize': 14},css:{'float':'none'}}





    ]).on('draw', function (obj) {




        // Je ne vois plus d'animation lool 
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
            colors: [mauveFonce, bleuFonce, orangeClair],
            xaxisLabels: ['J','F','M','A','M','J','J', 'A', 'S', 'O', 'N', 'D'],
            xaxis: true,
            yaxis: true,
            backgroundGridVlines: true,
            backgroundGridHlinesCount: 8,
            
         
            yaxisLabelsCount: 8,
            yaxisScaleMax: 450,
            
          
            key: ['Honolulu','Hilo','Mauna Loa '],
            keyPosition: 'margin',
            keyPositionX: 100,

         
            title: 'Comparatif du nombre de pluie à Honolulu, Hilo et Mauna Loa',

            titleX: 100,
            titleY: 0,
            titleBold: true,
            titleHalign: 'left',
            
            // tooltips: [],
            // tooltipsCss: {
            //     textAlign: 'center',
            // },
            textAccessible: false 
            //si on le met à true ça rajoute un titre intégré au tableau 
        }
    }).grow().on('beforedraw', function (obj)
    {
        RGraph.clear(obj.canvas, blanc);

    }).responsive([

        // J'ai apporter quelque changement pour qu'on puisse lire les donnés quand l'écran est petit 
        {maxWidth: null, width: 750, height: 350,options:{textSize: 14, marginInner: 5,marginLeft: 50}, yaxisLabelsCount: 8,},

        // À 500px on ne le voit pas au complet
        {maxWidth: 600, width: 500, height: 200,options:{textSize: 18, marginInner: 2, marginLeft: 50, yaxisLabelsCount: 3,}}
    ]);
};


// TEMPÉRATURE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerGraphiqueTemperature = () => { 
    
    data = [
        [19, 19, 20, 20, 21, 22, 24, 23, 23, 23, 20, 20],
        [8, 8, 8, 8, 9, 8, 7, 9, 9, 8, 9, 7]
    ];

    new RGraph.SVG.Line({
        id: 'graphique_temperature',
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
                fontSize: '14pt',
                backgroundColor: jaune,
                color: noir,
                border: `1px solid ${orangeFonce}`,
            },
            linewidth: 3,
            marginTop: 45,
            marginLeft: 25,
            spline: true,
            filled: true,
            filledOpacity: 0,
            filledAccumulative: true,
            // J'ai enlevé le mot Hawaii du titre car au final c'est une page qui ne parle que d'hawaii alors je ne crois pas que ce soit necessaire de l'écrire.
            title: 'Température mensuelle moyenne en Celsius',
            titleSubtitle: 'Comparatif entre les températures les plus chaudes et fraîches',
            xaxisLabelsAngle: 45,
        }
    }).draw().responsive([

        {maxWidth: null, width: 750, height: 350,options:{textSize: 16, marginInner: 5,marginLeft: 50}, yaxisLabelsCount: 8,},

        {maxWidth: 1240, width: 500, height: 350,options:{textSize: 12, marginInner: 5,marginLeft: 50}, yaxisLabelsCount: 8,},

        // À 500px on ne le voit pas au complet
        {maxWidth: 600, width: 400, height: 200,options:{textSize: 10, marginInner: 2, marginLeft: 50, yaxisLabelsCount: 3,}}


// VERSION 1 

        // // VERSION BUREAU
        // {maxWidth: null, width: 750, height: 350, options: {titleSize: 16, textSize: 14, marginInner: 25},},
        // // VERSION MOBILE
        // {maxWidth: 600,  width: 500, height: 200, options: {titleSize: 12, textSize: 10, marginInner: 10},}
        ]);  
};

menuOuvrirBtn.addEventListener('click', ouvrirNavigation);
menuFermerBtn.addEventListener('click', fermerNavigation);
window.addEventListener('resize', changerNavigationResize);

const main = () => {
    dessinerGraphiqueMariage(); 
    dessinerGraphiqueActivites();
    dessinerGraphiquePopulation();
    dessinerGraphiqueVolcans();
    dessinerGraphiquePluie();
    dessinerGraphiqueTemperature(); 
};

main();

