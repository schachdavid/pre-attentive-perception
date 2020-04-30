export interface Shape {
  x: number;
  y: number;
  size: number;
  color: string;

  /**
   * Generates the JSX Element.
   */
  getJSX(): JSX.Element;
}
