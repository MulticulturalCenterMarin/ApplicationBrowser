import React, {PureComponent} from 'react';

const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const {settings} = this.props;

    return (
      <Container>
        <h3>Orhanizations</h3>
        <p>Map detailing the existing organization relatships.</p>
        <div className="source-link">
          <a href="https://github.com/uber/react-map-gl/tree/master/examples/geojson" target="_new">View Code ↗</a>
        </div>
        <hr />
      </Container>
    );
  }
}
