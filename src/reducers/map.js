import {arrayMove} from 'react-sortable-hoc';

const defaultState = {
    bounds: [[-34.9, -18.7], [35.9, 50.2]],
    basemap: {
        id: 'osmLight',
        visible: true,
        expanded: false,
        opacity: 1,
        subtitle: 'Basemap',
    },
    overlays: [],
};


const basemap = (state, action) => {

    switch (action.type) {

        case 'BASEMAP_SELECTED':
            if (state.id === action.id) { // No change
                return state;
            }

            return {
                ...state,
                id: action.id,
            };

        case 'BASEMAP_CHANGE_OPACITY':
            return {
                ...state,
                opacity: action.opacity,
            };

        case 'BASEMAP_TOGGLE_EXPAND':
            return {
                ...state,
                expanded: !state.expanded,
            };

        case 'BASEMAP_TOGGLE_VISIBILITY':
            return {
                ...state,
                visible: !state.visible,
            };

        default:
            return state;

    }
};


const overlay = (state, action) => {

    switch (action.type) {

        case 'OVERLAY_CHANGE_OPACITY':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                opacity: action.opacity,
            };

        case 'OVERLAY_TOGGLE_VISIBILITY':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                visible: !state.visible,
            };

        case 'OVERLAY_TOGGLE_EXPAND':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                expanded: !state.expanded,
            };

        default:
            return state;

    }
};

const map = (state = defaultState, action) => {
    switch (action.type) {
        case 'BASEMAP_SELECTED':
        case 'BASEMAP_CHANGE_OPACITY':
        case 'BASEMAP_TOGGLE_EXPAND':
        case 'BASEMAP_TOGGLE_VISIBILITY':
            return {
                ...state,
                basemap: basemap(state.basemap, action),
            };

        case 'OVERLAY_ADD':
            return {
                ...state,
                overlays: [
                    action.payload,
                    ...state.overlays,
                ]
            };

        case 'OVERLAY_ADD_DATA':
            console.log('OVERLAY_ADD_DATA');

            return {
                ...state,
            };

        case 'OVERLAY_LOAD':
            console.log('OVERLAY_LOAD');

            return {
                ...state,
            };


        case 'OVERLAY_UPDATE':
            console.log('OVERLAY_UPDATE');

            return state;

            /*
            return {
                ...state,
                overlays: state.overlays.map(l => overlay(l, action))
            };
            */

        case 'OVERLAY_REMOVE':
            return {
                ...state,
                overlays: state.overlays.filter(overlay => overlay.id !== action.id)
            };

        case 'OVERLAY_SORT':
            return {
                ...state,
                overlays: arrayMove(state.overlays, action.oldIndex, action.newIndex)
            };

        case 'OVERLAY_EDIT':
        case 'OVERLAY_CHANGE_OPACITY':
        case 'OVERLAY_TOGGLE_VISIBILITY':
        case 'OVERLAY_TOGGLE_EXPAND':
            return {
                ...state,
                overlays: state.overlays.map(l => overlay(l, action))
            };

        default:
            return state;

    }
};

export default map;