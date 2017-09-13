import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './app/App';

// TODO: Use AppWithD2 from d2-ui
const Root = ({ d2, store }) => (
    <Provider store={store}>
        <App d2={d2} />
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
