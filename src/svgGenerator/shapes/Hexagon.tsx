import React from 'react';
import { Shape } from './Shape';

export class Hexagon implements Shape {
  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string
  ) {}

  getJSX() {
    //scale heaxgon similiar to other shapes
    const size = this.size * 0.8;
    return (
      <polygon
        points={`${1.5 * size + this.x},${0.75 * size + this.y}
      ${1.125 * size + this.x},  ${1.4 * size + this.y}
      ${0.375 * size + this.x},  ${1.4 * size + this.y}
      ${0 * size + this.x},  ${0.75 * size + this.y}
      ${0.375 * size + this.x},  ${0.1 * size + this.y}
      ${1.125 * size + this.x},  ${0.1 * size + this.y}`}
        fill={this.color}
      ></polygon>
    );
  }
}
