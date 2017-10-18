/* ------------------------- External Dependencies -------------------------- */
import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {Marker} from 'react-map-gl';

/* ------------------------- Internal Dependencies -------------------------- */
import ControlPanel from './control-panel';
/*--- Structural ---*/
import {
 OrganizationsMapMarkers
} from 'foundry'

/*--- Redux ---*/
import {
  firestoreDocumentAddRequest,
  firestoreDocumentSetRequest,
  firestoreDocumentGetRequest,
  firestoreDocumentAllGetRequest,
  firestoreDocumentFilterGetRequest,
} from 'store/departments/actions'

/*--- Map ---*/
import {defaultMapStyle, dataLayer} from 'static/maps/style/StyleSimple';
import {updatePercentiles} from './utils';
import {fromJS} from 'immutable';
import {json as requestJson} from 'd3-request';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX;

export default class App extends Component {

  state = {
    mapStyle: defaultMapStyle,
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
      bearing: 0,
      pitch: 0,
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();

    const payload={}
    const metadata = {
      delta: 'organizationMapMarkers',
      collection: 'organizations',
      document: "teststing",
    }
    // dispatch(firestoreDocumentFilterGetRequest({payload, metadata }))

    requestJson('data/us-income.geojson', (error, response) => {
      if (!error) {
        this._loadData(response);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _loadData = data => {

    updatePercentiles(data, f => f.properties.income[this.state.year]);

    const mapStyle = defaultMapStyle
      // Add geojson source to map
      .setIn(['sources', 'incomeByState'], fromJS({type: 'geojson', data}))
      // Add point layer to map
      .set('layers', defaultMapStyle.get('layers').push(dataLayer));

    this.setState({data, mapStyle});
  };

  _updateSettings = (name, value) => {
    if (name === 'year') {
      this.setState({year: value});

      const {data, mapStyle} = this.state;
      if (data) {
        updatePercentiles(data, f => f.properties.income[value]);
        const newMapStyle = mapStyle.setIn(['sources', 'incomeByState', 'data'], fromJS(data));
        this.setState({mapStyle: newMapStyle});
      }
    }
  };

  _onViewportChange = viewport => this.setState({viewport});

  _onHover = event => {
    const {features, srcEvent: {offsetX, offsetY}} = event;
    const hoveredFeature = features && features.find(f => f.layer.id === 'data');

    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  };

  _renderTooltip() {
    const {hoveredFeature, year, x, y} = this.state;

    return hoveredFeature && (
      <div className="tooltip" style={{left: x, top: y}}>
        <div>State: {hoveredFeature.properties.name}</div>
        <div>Median Household Income: {hoveredFeature.properties.value}</div>
        <div>Percentile: {hoveredFeature.properties.percentile / 8 * 100}</div>
      </div>
    );
  }

  render() {
    const {viewport, mapStyle} = this.state;
    return (
      <div>
        <ReactMapGL
          {...viewport}
          mapStyle={mapStyle}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={this._onHover} >
          {this._renderTooltip()}
          <OrganizationsMapMarkers/>
        </ReactMapGL>
      </div>
    );
  }

}