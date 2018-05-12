import * as React from 'react';
import { Stage, Sprite } from 'react-pixi-fiber';
import * as icon from './icon.png';

console.log(icon);
const App = () => (
  <Stage width={800} height={800}>
    <Sprite width={800} height={800} texture={PIXI.Texture.fromImage(icon)} />
  </Stage>
);

export default App;
