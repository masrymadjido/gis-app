import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import OverlayList from './OverlayList'

const styles = {
    contentStyle: {
        width: 610,
        maxWidth: 'none',
    },
    bodyStyle: {
        overflowY: 'auto',
        padding: '0px 0px 0px 24px',
    },
};

const AddLayerDialog = ({ overlaysDialogOpen, overlays, onRequestClose, onLayerSelect }) => {
    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={onRequestClose}
        />,
    ];

    return (
        <Dialog
            title="Add new layer"
            actions={actions}
            modal={true}
            open={overlaysDialogOpen}
            contentStyle={styles.contentStyle}
            bodyStyle={styles.bodyStyle}
        >
            <OverlayList
                overlays={overlays}
                onLayerSelect={onLayerSelect}
            />
        </Dialog>
    );
};

AddLayerDialog.propTypes = {
    layersDialogOpen: PropTypes.bool,
    overlays: PropTypes.array,
    onRequestClose: PropTypes.func.isRequired,
    onLayerSelect: PropTypes.func.isRequired,
};

AddLayerDialog.defaultProps = {
    layersDialogOpen: false,
    overlays: [],
};

export default AddLayerDialog;