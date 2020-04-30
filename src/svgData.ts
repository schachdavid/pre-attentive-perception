import { Feature } from './svgGenerator/PreAttentiveSvgGenerator';

export enum answerType {
  percentage,
  multiples,
}

interface PreAttentiveSvgData {
  time: number;
  feature?: Feature;
  additionalDistractors?: number;
}

export const svgData: PreAttentiveSvgData[] = [
  {
    time: 1500,
    feature: Feature.Color,
  },
  {
    time: 250,
    feature: Feature.Shape,
  },
  {
    time: 1000,
    feature: Feature.Size,
    additionalDistractors: 2,
  },
  {
    time: 350,
    feature: Feature.Size,
  },
  {
    time: 1500,
    feature: undefined,
    additionalDistractors: 2,
  },
  {
    time: 1500,
    feature: Feature.Size,
    additionalDistractors: 2,
  },


  {
    time: 250,
    feature: Feature.Color,
  },
];
