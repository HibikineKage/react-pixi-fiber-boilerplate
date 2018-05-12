import * as React from 'react';
import { Stage, Sprite } from 'react-pixi-fiber';
import icon from './icon.png';

const App = () => (
  <Stage>
    <Sprite texture={icon} />
  </Stage>
);

export default App;
