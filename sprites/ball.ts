import { Sprite } from "../sprite.ts";

const primaryColor = {
  r: 2,
  g: 100,
  b: 200,
};

const secondaryColor = {
  r: 40,
  g: 50,
  b: 100,
};

export const ballSprite = new Sprite([
  {
    character: " ",
    coordinate: {
      x: 0,
      y: 0,
    },
    backgroundColor: primaryColor,
  },
  {
    character: " ",
    coordinate: {
      x: 1,
      y: 0,
    },
    backgroundColor: primaryColor,
  },
  {
    character: " ",
    coordinate: {
      x: 2,
      y: 0,
    },
    backgroundColor: secondaryColor,
  },
  {
    character: " ",
    coordinate: {
      x: 3,
      y: 0,
    },
    backgroundColor: secondaryColor,
  },
  {
    character: " ",
    coordinate: {
      x: 0,
      y: 1,
    },
    backgroundColor: secondaryColor,
  },
  {
    character: " ",
    coordinate: {
      x: 1,
      y: 1,
    },
    backgroundColor: secondaryColor,
  },
  {
    character: " ",
    coordinate: {
      x: 2,
      y: 1,
    },
    backgroundColor: primaryColor,
  },
  {
    character: " ",
    coordinate: {
      x: 3,
      y: 1,
    },
    backgroundColor: primaryColor,
  },
]);
