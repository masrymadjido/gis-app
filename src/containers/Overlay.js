import { connect } from 'react-redux';
import OverlayCard from '../components/layers/overlays/OverlayCard';
import { editOverlay, removeOverlay, changeOverlayOpacity, toggleOverlayExpand, toggleOverlayVisibility } from '../actions/overlays';
import { toggleDataTable } from '../actions/dataTable';

export default connect(
    null,
    { editOverlay, removeOverlay, changeOverlayOpacity, toggleOverlayExpand, toggleOverlayVisibility, toggleDataTable }
)(OverlayCard);
