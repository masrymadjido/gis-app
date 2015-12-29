GIS.app.SearchWindow = function(layer) {
    var data = [],
        store = layer.core.featureStore,
        button,
        window;

    for (var i = 0; i < layer.features.length; i++) {
        data.push([layer.features[i].data.id, layer.features[i].data.name]);
    }

    if (!data.length) {
        GIS.logg.push([data, layer.id + '.search.data: feature ids/names']);
        alert(GIS.i18n.layer + ' ' + GIS.i18n.has_no_orgunits);
        return;
    }

    button = Ext.create('Ext.ux.button.ColorButton', {
        width: gis.conf.layout.tool.item_width - gis.conf.layout.tool.itemlabel_width,
        height: 24,
        value: '0000ff'
    });

    window = Ext.create('Ext.window.Window', {
        title: GIS.i18n.organisationunit_search,
        iconCls: 'gis-window-title-icon-search',
        bodyStyle: 'background-color: #fff; padding: 1px',
        resizable: false,
        height: 380,
        items: [
            {
                layout: 'column',
                cls: 'gis-container-inner',
                items: [
                    {
                        cls: 'gis-panel-html-label',
                        html: GIS.i18n.highlight_color + ':',
                        width: gis.conf.layout.tool.itemlabel_width
                    },
                    button
                ]
            },
            {
                xtype: 'container',
                height: 1
            },
            {
                layout: 'column',
                cls: 'gis-container-inner',
                items: [
                    {
                        cls: 'gis-panel-html-label',
                        html: GIS.i18n.text_filter + ':',
                        width: gis.conf.layout.tool.itemlabel_width
                    },
                    {
                        xtype: 'textfield',
                        cls: 'gis-textfield',
                        width: gis.conf.layout.tool.item_width - gis.conf.layout.tool.itemlabel_width,
                        enableKeyEvents: true,
                        listeners: {
                            keyup: function() {
                                store.clearFilter();
                                if (this.getValue()) {
                                    store.filter('name', this.getValue());
                                }
                                store.sortStore();
                            }
                        }
                    }
                ]
            },
            {
                xtype: 'grid',
                cls: 'gis-grid',
                bodyStyle: 'border: 0 none',
                height: 290,
                width: gis.conf.layout.tool.item_width,
                scroll: 'vertical',
                hideHeaders: true,
                columns: [{
                    id: 'name',
                    text: 'Organisation units',
                    dataIndex: 'name',
                    sortable: false,
                    width: gis.conf.layout.tool.item_width
                }],
                store: layer.core.featureStore,
                listeners: {
                    select: function(grid, record) {
                        var feature = layer.getFeaturesByAttribute('id', record.data.id)[0],
                            color = button.getValue(),
                            symbolizer;

                        layer.redraw();

                        if (feature.geometry.CLASS_NAME === gis.conf.finals.openLayers.point_classname) {
                            symbolizer = new OpenLayers.Symbolizer.Point({
                                pointRadius: 6,
                                fillColor: '#' + color,
                                strokeWidth: 1
                            });
                        }
                        else {
                            symbolizer = new OpenLayers.Symbolizer.Polygon({
                                strokeColor: '#' + color,
                                fillColor: '#' + color
                            });
                        }

                        layer.drawFeature(feature, symbolizer);
                    }
                }
            }
        ],
        listeners: {
            render: function() {
                gis.util.gui.window.setPositionTopLeft(this);
                store.sortStore();
            },
            destroy: function() {
                layer.redraw();
            }
        }
    });

    return window;
};