import * as React from 'react';
import { Sprite } from 'react-pixi-fiber';

interface Props {
  alpha?: number;
  x?: number;
  y?: number;
  animationSpeed?: number;

  textures: PIXI.Texture[];
}
const AnimationSprite = (props: Props) => <Sprite />;
export default AnimationSprite;
