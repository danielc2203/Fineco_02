import React from 'react';

class MiComponente extends React.Component {
  render() {
    return (
      <div className="card-header text-center">
        <h1>Hola Daniel</h1>
      </div>
    );
  }
}

export default MiComponente;

import React from 'react';
import ReactDOM from 'react-dom';
import MiComponente from './MiComponente';

ReactDOM.render(<MiComponente />, document.getElementById('root'));
