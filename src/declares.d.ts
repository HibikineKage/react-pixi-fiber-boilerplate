declare module '*.png';
declare module 'react-pixi-fiber' {
  /**
   * Custom component properties.
   */
  export interface Behavior<T, U extends PIXI.DisplayObject> {
    /**
     * Use this to create an instance of [PIXI.DisplayObject].
     */
    customDisplayObject: (props: T) => U;
    /**
     * Use this to apply newProps to your Component in a custom way.
     */
    customApplyProps?: (displayObject: U, oldProps: T, newProps: T) => any;
    /**
     * Use this to do something after displayObject is attached, which happens after componentDidMount lifecycle method.
     */
    customDidAttach?: (displayObject: U) => any;
    /**
     * Use this to do something (usually cleanup) before detaching, which happens before componentWillUnmount lifecycle method.
     */
    customWillDetach?: (displayObject: U) => any;
  }
  export interface StageProperties extends Component<PIXI.Container> {
    options?: PIXI.ApplicationOptions;
  }
  /**
   * Create a custom component.
   */
  export function CustomPIXIComponent<T, U extends PIXI.DisplayObject>(
    behavior: Behavior<T, U>,
    /**
     * The name of this custom component like 'Rectangle'.
     */
    type: string
  ): string;
}
