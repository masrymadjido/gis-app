import React from 'react';
import PropTypes from 'prop-types';
import SelectField from '../d2-ui/SelectField';
import TextField from '../d2-ui/TextField';

const operators = {
    INTEGER: [
        { id: 'EQ', name: '=' },
        { id: 'GT', name: '>' },
        { id: 'GE', name: '>=' },
        { id: 'LT', name: '<' },
        { id: 'LE', name: '<=' },
        { id: 'NE', name: '!=' }
    ]
};

const styles = {
    container: {
        float: 'left',
    },
    operator: {
        marginTop: -8,
        marginRight: 24,
        width: 120,
    },
    value: {
        marginRight: 16,
        width: 216,
        top: -15,
    }
};

const DataItemFilterOperator = ({ valueType, filter, onChange }, { d2 }) => {
    const items = operators[valueType];
    const i18n = d2.i18n.getTranslation.bind(d2.i18n);
    let operator;
    let value;

    if (filter) {
        const splitFilter = filter.split(':');
        operator = splitFilter[0];
        value = splitFilter[1];
    }

    return (
        <div style={styles.container}>
            {items ?
                <SelectField
                    label={i18n('operator')}
                    items={items}
                    value={operator || items[0].id}
                    onChange={newOperator => onChange(`${newOperator.id}:${value}`)}
                    style={styles.operator}
                />
            : null}
            <TextField
                label={i18n('value')}
                type={valueType === 'INTEGER' ? 'number' : 'text'}
                value={value}
                onChange={newValue => onChange(`${operator}:${newValue}`)}
                style={styles.value}
            />
        </div>
    )
};


DataItemFilterOperator.contextTypes = {
    d2: PropTypes.object
};


export default DataItemFilterOperator;