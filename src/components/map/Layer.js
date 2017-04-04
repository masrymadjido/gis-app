import { Component, PropTypes } from 'react';

class Layer extends Component {
    constructor(props, context) {
        super(props, context);

        this.createPane();
        this.createLayer();
        if (props.index !== undefined) {
            this.setLayerOrder();
        }
    }

    componentDidUpdate(prevProps) {
        const props = this.props;
        const layer = props.layer;
        const prevLayer = prevProps.layer;

        // if (layer.editCounter !== prevLayer.editCounter || layer.config !== prevLayer.config) { // TODO
        if (layer !== prevLayer) { // TODO: Improve check?
            this.removeLayer();
            this.createLayer();
        }

        // if (props.index !== undefined && prevLayer.index !== layer.index) {
        if (props.index !== undefined) {
            this.setLayerOrder();
        }

        if (prevLayer.opacity !== layer.opacity) {
            this.setLayerOpacity();
        }

        if (prevLayer.visible !== layer.visible) {
            this.setLayerVisibility();
        }
    }

    componentWillUnmount() {
        this.removeLayer();
    }

    // Create custom pane to control layer ordering: http://leafletjs.com/examples/map-panes/
    createPane() {
        const props = this.props;
        const layer = props.layer;

        this.pane = props.map.createPane(layer.id);

        if (layer.labels) {
            this.labelPane = props.map.createPane(layer.id + '-labels');
        }
    }

    // Create new layer from config object (override in subclasses)
    createLayer() {
        const props = this.props;
        const layer = props.layer;
        const map = props.map;
        const config = {
            ...layer.config,
        };

        if (layer.index !== undefined) { // If not a basemap
            config.pane = layer.id;
        }

        this.instance = map.addLayer(config);
        this.onLayerAdd();
    }

    onLayerAdd() {
        this.setLayerOpacity();
        this.setLayerVisibility();

        if (this.props.layer.index !== undefined) { // Basemap don't have index
            this.setLayerOrder();
        }
    }

    setLayerOpacity() {
        this.instance.setOpacity(this.props.opacity);
    }

    // Set layer order using custom pages and z-index: http://leafletjs.com/examples/map-panes/
    setLayerOrder() {
        const props = this.props;
        const layer = props.layer;
        const zIndex = 600 - (props.index * 10);

        if (this.pane) { // TODO: Needed?
            this.pane.style.zIndex = zIndex;
        }

        if (this.labelPane) {
            this.labelPane.style.zIndex = zIndex + 1;
        }
    }

    setLayerVisibility() {
        const props = this.props;
        const layer = props.layer;
        const map = props.map;

        if (layer.visible && map.hasLayer(this.instance) === false) {
            map.addLayer(this.instance);
        } else if (!layer.visible && map.hasLayer(this.instance) === true) {
            map.removeLayer(this.instance);
        }
    }

    removeLayer() {
        if (this.props.map.hasLayer(this.instance)) {
            this.props.map.removeLayer(this.instance);
        }
        delete(this.instance);
        delete(this.pane);
        delete(this.labelPane);
    }

    render() {
        return null;
    }
}

Layer.propTypes = {
    //visible: PropTypes.bool,
};

Layer.defaultProps = {
    //visible: true,
};

export default Layer;