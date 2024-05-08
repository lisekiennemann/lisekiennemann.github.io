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
    title: 'Glacial Risks',
    subtitle: 'Test',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
            {
            id: 'marmolada',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '"images\marmolada.png"',
            description: 'Scientists did an inventory of glaciers.',
            location: {
                center: [11.86036, 46.43050],
                zoom: 12.88,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'glacier-2022',
                     opacity: 0,
                     duration: 5000
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
            id: 'ice_avalanche',
            alignment: 'left',
            hidden: false,
            title: 'Chapitre1',
            image: './path/to/image/source.png',
            description: 'Scientists did an inventory of glaciers.',
            location: {
                center: [6.68754, 44.79062],
                zoom: 7.73,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'glacier-2022',
                     opacity: 1,
                     duration: 5000
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
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.68754, 44.79062],
                zoom: 7.73,
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'glacier-2022',
                     opacity: 0,
                     duration: 50
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
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
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
                center: [-58.54195, -34.71600],
                zoom: 4,
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
