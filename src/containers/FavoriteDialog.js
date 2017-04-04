import { connect } from 'react-redux'
import FavoritesDialog from '../components/favorite/FavoritesDialog';
import { getFavorite, closeFavoritesDialog } from '../actions/favorites';

const mapStateToProps = (state) => ({
    favoritesDialogOpen: state.ui.favoritesDialogOpen,
});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(closeFavoritesDialog()),
    onFavoriteSelect: id => {
        dispatch(closeFavoritesDialog());
        dispatch(getFavorite(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesDialog);






