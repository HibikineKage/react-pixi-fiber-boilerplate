import * as React from 'react';
import { Stage, Sprite } from 'react-pixi-fiber';
import * as icon from './icon.png';
import MoveTest from '../move-test/index';

console.log(icon);
const App = () => (
  <Stage width={800} height={800} options={{ backgroundColor: 0xffffff }}>
    <Sprite />
  </Stage>
);

export default App;
