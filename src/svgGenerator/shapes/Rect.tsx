import React from 'react';
import { Shape } from './Shape';

export class Rect implements Shape {
  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string
  ) {}

  getJSX() {
    return (
      <rect
        x={this.x}
        y={this.y}
        height={this.size}
        width={this.size}
        fill={this.color}
      />
    );
  }
}
