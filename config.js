var config = {
    style: 'mapbox://styles/lisekiennemann/clvwv4yal00r401pfh91s9xzc',
    accessToken: 'pk.eyJ1IjoibGlzZWtpZW5uZW1hbm4iLCJhIjoiY2x2d3V4NGwyMmFwNjJsbWhkbXkwZGx4byJ9.98B-dhTS09_Tb_owH_F7zg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: ' Scroll down to see the data. ',
    footer: 'Sources: <br>  White glaciers: Rabatel Antoine. | Glacial lakes: Gardent Marie. | Permafrost: Alpine Permafrost Index Map. <br> Map and animation: Lise Kiennemann',
    chapters: [
            {
            id: 'marmolada',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: ' <B> Researchers and the ONF have worked together to update the then-incomplete inventories... </B>',
            location: {
                center: [6.73509, 45.44185],
                zoom: 7.50,
                pitch: 15.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'glacier-2022',
                     opacity: 0,
                     duration:0 
                 },
                {
                     layer: 'lacs-glaciaires',
                     opacity: 0,
                     duration: 0
                 },
                                 {
                     layer: 'permafrost',
                     opacity: 0,
                     duration: 0
                 },
                                                  {
                     layer: 'lacs2',
                     opacity: 0,
                     duration: 0
                 }
            ],
            onChapterExit: [
                            {
                     layer: 'glacier-2022',
                     opacity: 1,
                     duration:0 
                 },
                 {
                     layer: 'lacs-glaciaires',
                     opacity: 0
                 },
                    {
                     layer: 'permafrost',
                     opacity: 0,
                     duration: 0
                 },
                                                  {
                     layer: 'lacs2',
                     opacity: 0,
                     duration: 0
                 }
            ]
        },
        {
            id: 'ice_avalanche',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<B> ...of glaciers,... </B> ',
            location: {
                center: [6.71168, 45.45837],
                zoom: 7.5,
                pitch: 15.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'glacier-2022',
                     opacity: 1,
                     duration: 100
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'glacier-2022',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<B> ...glacial lakes... </B>',
            location: {
                center: [6.73509, 45.44185],
                zoom: 7.5,
                pitch: 15.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'lacs-glaciaires',
                     opacity: 1,
                     duration: 100
                 },
                                  {
                     layer: 'lacs2',
                     opacity: 1,
                     duration: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'lacs-glaciaires',
                     opacity: 0,
                     duration: 0
                 },
                                  {
                     layer: 'lacs2',
                     opacity: 0,
                     duration: 0
                 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<B> ... and permafrost. </B>',
            location: {
                center: [6.73509, 44.84185],
                zoom: 6.9,
                pitch: 15,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'permafrost',
                     opacity: 1,
                     duration: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'permafrost',
                     opacity: 0,
                     duration: 0
                 }
            ]

        }
        //{
            //id: 'fourth-chapter',
            //alignment: 'fully',
            //hidden: false,
            //title: 'Third Title',
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            //location: {
                //center: [5.83509, 45.24185],
                //zoom: 8.1,
                //pitch: 0,
                //bearing: 0
            //},
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            //callback: '',
            //onChapterEnter: [],
            //onChapterExit: []
        //}
    ]
};
