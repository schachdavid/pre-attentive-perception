import React from 'react';
import { Shape } from './Shape';

export class Triangle implements Shape {
  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string
  ) {}

  getJSX() {
    return (
      <polygon
        points={`${0.5 * this.size + this.x},${0 + this.y} 
        ${1 * this.size + this.x},${1 * this.size + this.y} 
        ${0 + this.x},${1 * this.size + this.y}`}
        fill={this.color}
      />
    );
  }
}
