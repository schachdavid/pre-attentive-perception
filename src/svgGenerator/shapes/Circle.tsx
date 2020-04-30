import React from 'react';
import { Shape } from './Shape';

export class Circle implements Shape {
  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string
  ) {}

  getJSX() {
    return (
      <circle cx={this.x} cy={this.y} r={this.size / 2} fill={this.color} />
    );
  }
}
