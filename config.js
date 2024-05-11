var config = {
    style: 'mapbox://styles/lisekiennemann/clvwv4yal00r401pfh91s9xzc',
    accessToken: 'pk.eyJ1IjoibGlzZWtpZW5uZW1hbm4iLCJhIjoiY2x2d3V4NGwyMmFwNjJsbWhkbXkwZGx4byJ9.98B-dhTS09_Tb_owH_F7zg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: White glaciers: Rabatel, A. Glacial lakes: Gardent, M. Permafrost: Alpine Permafrost Index Map (APIM).',
    chapters: [
            {
            id: 'marmolada',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Estimating glacial risks requires knowing well the territory',
            location: {
                center: [5.83509, 45.44185],
                zoom: 8.10,
                pitch: 0.00,
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
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'lacs-glaciaires',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'ice_avalanche',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '... meaning precisely mapping glaciers,...',
            location: {
                center: [5.83509, 45.44185],
                zoom: 8.10,
                pitch: 0.00,
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
            description: '...glacial lakes...',
            location: {
                center: [5.83509, 45.24185],
                zoom: 8.1,
                pitch: 45.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
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
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'lacs-glaciaires',
                     opacity: 0,
                     duration: 0
                 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: '... and permafrost',
            location: {
                center: [5.83509, 45.24185],
                zoom: 8.1,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [5.83509, 45.24185],
                zoom: 8.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
