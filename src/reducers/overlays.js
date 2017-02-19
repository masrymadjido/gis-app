const defaultOverlays = [{
    img: 'images/layers/events.png',
    title: 'Events',
    opacity: 0.95,
    expanded: false,
    visible: true,
},{
    img: 'images/layers/facilities.png',
    title: 'Facilities',
    subtitle: 'Facility type',
    expanded: true,
    visible: true,
    opacity: 1,
    legend: {
        items: [{
            image: 'https://play.dhis2.org/dev/images/orgunitgroup/08.png',
            name : 'CHP',
        },{
            image: 'https://play.dhis2.org/dev/images/orgunitgroup/16.png',
            name : 'CHC',
        },{
            image: 'https://play.dhis2.org/dev/images/orgunitgroup/10.png',
            name : 'MCHP',
        },{
            image: 'https://play.dhis2.org/dev/images/orgunitgroup/14.png',
            name : 'Clinic',
        },{
            image: 'https://play.dhis2.org/dev/images/orgunitgroup/05.png',
            name : 'Hospital',
        }]
    },
    data: [{
        name: 'Ahamadyya Mission Cl',
        code: 'OU_211234',
        level: 4,
        parent: 'Magbema',
        type: '',
        ownership: 'Public facilities',
        location: 'Rural',
    },{
        name: 'Ahmadiyya Muslim Hospital',
        code: 'OU_268246',
        level: 4,
        parent: 'Yoni',
        type: 'Hospital',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Air Port Centre, Lungi',
        code: 'OU_255017',
        level: 4,
        parent: 'Kaffu Bullom',
        type: '',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Allen Town Health Post',
        code: 'OU_278337',
        level: 4,
        parent: 'Freetown',
        type: '',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Approved School CHP',
        code: 'OU_278314',
        level: 4,
        parent: 'Freetown',
        type: 'CHP',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Arab Clinic',
        code: 'OU_233378',
        level: 4,
        parent: 'Gbense',
        type: 'Clinic',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Baama CHC',
        code: 'OU_222681',
        level: 4,
        parent: 'Wandor',
        type: 'CHC',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Babara CHC',
        code: 'OU_254991',
        level: 4,
        parent: 'Lokomasama',
        type: 'CHC',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Bafodia CHC',
        code: 'OU_226243',
        level: 4,
        parent: 'Wara Wara Bafodia',
        type: 'CHC',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Bai Largo MCHP',
        code: 'OU_246994',
        level: 4,
        parent: 'Kori',
        type: 'MCHP',
        ownership: 'Public facilities',
        location: 'Urban',
    },{
        name: 'Baiama CHP',
        code: 'OU_233331',
        level: 4,
        parent: 'Tankoro',
        type: 'CHP',
        ownership: 'Public facilities',
        location: 'Urban',
    }],
},{
    img: 'images/layers/thematic.png',
    layerType: 'Thematic',
    title: 'ANC 3 Coverage',
    subtitle: '2017',
    expanded: true,
    visible: true,
    opacity: 0.8,
    legend: {
        items: [{
            color: '#ffffb2',
            name: 'Low',
            range: '0 - 40 (0)'
        },{
            color: '#fed976',
            name : 'Medium',
            range: '40 - 60 (1)',
        },{
            color: '#feb24c',
            name : 'Medium plus',
            range: '60 - 70 (1)',
        },{
            color: '#fd8d3c',
            name : 'High',
            range: '70 - 80 (0)',
        },{
            color: '#f03b20',
            name : 'High plus',
            range: '80 - 90 (4)',
        },{
            color: '#bd0026',
            name : 'Great',
            range: '90 - 120 (5)',
        }]
    },
},{
    img: 'images/layers/boundaries.png',
    title: 'Boundaries',
    opacity: 1,
    visible: true,
    expanded: false,
},{
    img: 'images/layers/labels.png',
    title: 'Labels',
    opacity: 0.9,
    visible: true,
    expanded: false,
},{
    img: 'images/layers/population.png',
    title: 'Population density',
    opacity: 0.9,
    visible: true,
    expanded: false,
},{
    img: 'images/layers/elevation.png',
    title: 'Elevation',
    opacity: 0.9,
    visible: true,
    expanded: false,
},{
    img: 'images/layers/temperature.png',
    title: 'Temperature',
    opacity: 0.9,
    visible: true,
    expanded: false,
},{
    img: 'images/layers/landcover.png',
    title: 'Landcover',
    opacity: 0.9,
    visible: true,
    expanded: false,
},{
    img: 'images/layers/precipitation.png',
    title: 'Precipitation',
    subtitle: '26 - 28 Nov. 2016',
    expanded: true,
    visible: true,
    opacity: 0.9,
    legend: {
        description: 'Precipitation collected from satellite and weather stations on the ground.',
        unit: 'millimeter',
        items: [{
            color: '#eff3ff',
            range : '0 - 20',
        },{
            color: '#c6dbef',
            range : '20 - 40',
        },{
            color: '#9ecae1',
            range : '40 - 60',
        },{
            color: '#6baed6',
            range : '60 - 80',
        },{
            color: '#3182bd',
            range : '80 - 100',
        },{
            color: '#08519c',
            range : '> 100',
        }],
        source: 'UCSB / CHG / Google Earth Engine',
        sourceUrl: 'https://explorer.earthengine.google.com/#detail/UCSB-CHG%2FCHIRPS%2FPENTAD',
    }
},{
    img: 'images/layers/nighttime.png',
    title: 'Nighttime lights',
    opacity: 0.9,
    visible: true,
    expanded: false,
},];

const overlays = (state = defaultOverlays, action) => {

    switch (action.type) {

        default:
            return state

    }
};

export default overlays;