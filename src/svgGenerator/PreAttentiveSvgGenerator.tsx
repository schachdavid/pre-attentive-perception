import React from 'react';
import { Circle } from './shapes/Circle';
import { Hexagon } from './shapes/Hexagon';
import { Rect } from './shapes/Rect';
import { Shape } from './shapes/Shape';
import { Triangle } from './shapes/Triangle';
import { getDistance, getRandomInt } from './util';

export enum Feature {
  Color,
  Shape,
  Size,
}

export enum ShapeTypes {
  Rect,
  Circle,
  Triangle,
  Hexagon,
}

export class PreAttentiveSvgGenerator {
  shapes: Shape[] = [];
  height: number;
  width: number;
  shapeSize: number;

  constructor(
    height: number = 300,
    width: number = 300,
    shapeSize: number = 20
  ) {
    this.height = height;
    this.width = width;
    this.shapeSize = shapeSize;
  }

  private clearShapes() {
    this.shapes = [];
  }

  private generateShapes(
    numberOfShapes: number = 9,
    shapeType: ShapeTypes = ShapeTypes.Circle
  ) {
    for (let i = 0; i < numberOfShapes; i++) {
      const coordinates = this.getRandomValidCoordinates();
      switch (shapeType) {
        case ShapeTypes.Circle: {
          this.shapes.push(
            new Circle(
              coordinates.x,
              coordinates.y,
              this.shapeSize,
              'rgb(60, 59, 64)'
            )
          );
          break;
        }
        case ShapeTypes.Rect: {
          this.shapes.push(
            new Rect(
              coordinates.x,
              coordinates.y,
              this.shapeSize,
              'rgb(60, 59, 64)'
            )
          );
          break;
        }
        case ShapeTypes.Triangle: {
          this.shapes.push(
            new Triangle(
              coordinates.x,
              coordinates.y,
              this.shapeSize,
              'rgb(60, 59, 64)'
            )
          );
          break;
        }
        case ShapeTypes.Hexagon: {
          this.shapes.push(
            new Hexagon(
              coordinates.x,
              coordinates.y,
              this.shapeSize,
              'rgb(60, 59, 64)'
            )
          );
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  private createFeatureShape(feature?: Feature) {
    const coordinates = this.getRandomValidCoordinates();
    switch (feature) {
      case Feature.Color: {
        this.shapes.push(
          new Circle(coordinates.x, coordinates.y, this.shapeSize, '#00ae8e')
        );
        break;
      }
      case Feature.Shape: {
        this.shapes.push(
          new Rect(
            coordinates.x,
            coordinates.y,
            this.shapeSize,
            'rgb(60, 59, 64)'
          )
        );
        break;
      }
      case Feature.Size: {
        this.shapes.push(
          new Circle(
            coordinates.x,
            coordinates.y,
            this.shapeSize * 1.25,
            'rgb(60, 59, 64)'
          )
        );
        break;
      }
      default: {
        break;
      }
    }
  }

  /**
   * Generates an svg with the given parameters.
   *
   * @param numberOfShapes
   * @param feature
   */
  generateSvg(
    numberOfShapes: number = 20,
    feature?: Feature,
    additionalDistractors?: number
  ) {
    this.clearShapes();
    this.createFeatureShape(feature);
    switch (additionalDistractors) {
      case 1: {
        this.generateShapes(numberOfShapes / 2, ShapeTypes.Circle);
        this.generateShapes(numberOfShapes / 2, ShapeTypes.Triangle);
        break;
      }
      case 2: {
        this.generateShapes(numberOfShapes / 3, ShapeTypes.Circle);
        this.generateShapes(numberOfShapes / 3, ShapeTypes.Triangle);
        this.generateShapes(numberOfShapes / 3, ShapeTypes.Hexagon);
        break;
      }
      default: {
        this.generateShapes(numberOfShapes, ShapeTypes.Circle);
        break;
      }
    }
    return (
      <svg width={this.height} height={this.width}>
        {this.shapes.map((shape) => shape.getJSX())}
      </svg>
    );
  }

  /**
   * Check if the given point is distanced enough to the other shapes.
   */
  isDistancedToShapes(x: number, y: number) {
    return !this.shapes.some((shape) => {
      return getDistance(x, y, shape.x, shape.y) < this.shapeSize * 2;
    });
  }

  /**
   * Finds random coordinates which are distanced to all objects.
   */
  getRandomValidCoordinates() {
    let coordinatesAreValid = false;
    let i = 0;
    while (!coordinatesAreValid && i < 100) {
      let x = getRandomInt(this.shapeSize * 2, this.width - this.shapeSize * 2);
      let y = getRandomInt(
        this.shapeSize * 2,
        this.height - this.shapeSize * 2
      );
      coordinatesAreValid = this.isDistancedToShapes(x, y);
      i++;
      if (coordinatesAreValid) {
        return { x: x, y: y };
      }
    }
    return { x: -10, y: -10 };
  }
}
