import { Point, XY } from "./deps.ts";

export class Sprite {
  constructor(public points: Omit<Point, "zIndex">[]) {}

  protected currentLocations: XY[] = [];

  setCurrentLocations(coordinates: XY[]) {
    this.currentLocations = coordinates;
  }

  getCurrentLocations() {
    return this.currentLocations;
  }

  getRelativePointsRelativeTo({ x, y }: XY) {
    const relativePoints = this.points.map((point) => ({
      ...point,
      coordinate: {
        x: point.coordinate.x + x,
        y: point.coordinate.y + y,
      },
    }));

    return relativePoints;
  }
}
