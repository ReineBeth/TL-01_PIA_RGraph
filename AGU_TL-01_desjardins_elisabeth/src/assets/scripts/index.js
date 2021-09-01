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
const navigationPrincipale = document.querySelectorAll('.navigation_principale button'); 
const sectionElement = document.querySelectorAll('section');

const dessinerGraphiqueMariage = () => {
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
            tooltips: ['Honolulu : 67%', 'Hawaii : 16%', 'Kauai : 14%', 'Maui: 3%'],
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
        
        // VERSION BUREAU
        {maxWidth: null,width:600,height: 350,parentCss:{'float':'right'}},
        // VERSION MOBILE
       {maxWidth: 600,width:400,height: 300,parentCss:{'float':'none'}}
    ]);
};

// ACTIVITÉS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dessinerGraphiqueActivites = () => {

    let labels = ['Sports d\'eau 47%', 'Visites guidées 15%', 'Culture, histoire et art 14%', 'Dîner-spectacle danse Luau 13%'];
    let data = ['47%','15%','14%','13%'];

    activity = new RGraph.Activity({
        id: 'graphique_activites',
        min: 0,
        max: 100,
        value: data,
        options: {
            colors : [bleuFonce, vertFonce, mauvePale, rose],
            backgroundColor: '#ffffff',
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
        
        // VERSION BUREAU
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

            //devrait-on mettre le text accessible ? 
            // Sais pas trop, ça change la typo... Et quand je check dans Axe DevTool, on n'a pas de Critical issues ou Serious... On a 1 Moderate et 1 Minor, et c'est du code des graphiques. Donc je le garderais à false
            textAccessible: false, 

            // Car même si on ajoute ces 3 propriétés, ça ne change rien.La doc dit aussi que ce n'est pas certain de rendre un texte accessible (voir : https://www.rgraph.net/canvas/accessible-text.html)
            // textAccessible: true,         
            // The default is true now
            // textAccessibleOverflow: true, 
            // The default is true now
            // textAccessiblePointerevents: true,

            textSize: 14,
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
        {maxWidth: 600,width:400,height:350,options:{radius: 100,labels: null,tooltips:labels}}

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
            xaxisLabels: ['Mahukona','Kilauea','Kohala','Loihi','Mauna Loa','Mauna Kea'],
            xaxisTickmarks: false,
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

            // J'essaie de placer les lables de l'axe des x, verticallement pour pouvoir le voir au complet en mobile
            // xaxisLabelsAngle: 90,

// Ça fonctionne, mais j'en pers des bouts...
            // xaxisPosition: top,
            // xaxisLabelsPosition: right,
            // xaxisLabelsSpecificAlign: right,
        }
    }).responsive([

        // VERSION BUREAU
        {maxWidth:null,width:850,height:450,options:{linewidth:5,tickmarksSize: 8,textSize: 16,marginInner: 50,'data-textsize': 20, marginLeft: 100},css:{'float':'none'}},
        
        // VERSION MOBILE
        {maxWidth:600,width:500,height:300,options:{linewidth:3,tickmarksSize: 4,textSize: 12,marginInner: 30,'data-textsize': 14},css:{'float':'none'}}

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
        {maxWidth: null, width: 750, height: 350,options:{textSize: 14, marginInner: 5,marginLeft: 50}, parentCss: {'float':'right'}},


        // À 500px on ne le voit pas au complet
        {maxWidth: 600, width: 500, height: 200,options:{textSize: 10, marginInner: 2,marginLeft: 50}, parentCss: {'float':'none'}}
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
            title: 'Hawaï - Température mensuelle moyenne en Celsius',
            titleSubtitle: 'Comparatif entre les températures les plus chaudes et fraîches',
        }
    }).draw().responsive([
        // VERSION BUREAU
        {maxWidth: null, width: 750, height: 350, options: {titleSize: 16, textSize: 14, marginInner: 25}, parentCss: {'float': 'none'}},
        // VERSION MOBILE
        {maxWidth: 600,  width: 500, height: 200, options: {titleSize: 12, textSize: 10, marginInner: 10}, parentCss: {'float': 'none'}}
        ]);  
};

//LA FONCTION FONCTIONNE MAIS UN PETIT BUG A MARIAGE. MOI JE L'UTILISERAIS CAR JE TROUVE CA PLUS COOL
// ACTIVITÉS et MARIAGES ne fonctionnent pas très bien (en mobile comme en bureau)
// POPULATIONS les tooltips, en mobile, n'apparaissent plus
// Je ferais des ances.... 


// let dernierIndex = 0;
// navigationPrincipale[0].classList.add('active'); 
// sectionElement[0].style.display = 'block';

// for(let index = 0; index < sectionElement.length; index++) { 

// 	navigationPrincipale[index].addEventListener('click', displaySection);

//     function displaySection() {
//         sectionElement[dernierIndex].style.display = 'none'; 
//         navigationPrincipale[dernierIndex].classList.remove('active');
            
//         sectionElement[index].style.display = 'block';
//         navigationPrincipale[index].classList.add('active');
        
//         dernierIndex = index; 
//         main();
//     }
// }

const main = () => {
    dessinerGraphiqueMariage(); 
    dessinerGraphiqueActivites();
    dessinerGraphiquePopulation();
    dessinerGraphiqueVolcans();
    dessinerGraphiquePluie();
    dessinerGraphiqueTemperature(); 
};

main();

