import { DenoShell, OutOfBoundsError, userInput, XY } from "./deps.ts";
import { ballSprite } from "./sprites/ball.ts";

const shell = new DenoShell();

shell.setRaw(true);
shell.showCursor(false);
shell.clear();

const main = shell.getBoxRepresentation();

const background = main.newLayer({
  width: 0.4,
  height: 0.5,
  xOffset: "middle",
  yOffset: "middle",
});

const backgroundColor = {
  r: 200,
  g: 200,
  b: 200,
};

background.fill({
  character: " ",
  backgroundColor: backgroundColor,
});

const ballLayer = background.newLayer({});

const relativePoints = ballSprite.getRelativePointsRelativeTo({ x: 5, y: 5 });

for (const point of relativePoints) {
  ballLayer.moveCursorTo(point.coordinate);

  ballLayer.bufferedWriteCharacter(point);
}

ballSprite.setCurrentLocations(relativePoints.map((point) => point.coordinate));

shell.render();

let shouldQuit = false;

const sleep = (amount: number) =>
  new Promise((resolve) => setTimeout(() => resolve(null), amount));

const ballLoop = async () => {
  const ballSpeed = {
    x: 1,
    y: 1,
  };

  const moveBall = (by: Partial<XY>) => {
    ballSprite.setCurrentLocations(
      ballLayer.shift(ballSprite.getCurrentLocations(), by)
    );
  };

  while (!shouldQuit) {
    try {
      moveBall(ballSpeed);
    } catch (error) {
      if (error instanceof OutOfBoundsError) {
        if (error.axis === "x") {
          ballSpeed.x = -1 * ballSpeed.x;
        }
        if (error.axis === "y") {
          ballSpeed.y = -1 * ballSpeed.y;
        }
      }
    }
    await sleep(50);
  }
};

const userInputLoop = async () => {
  while (!shouldQuit) {
    await userInput(shell, {
      q: () => {
        shouldQuit = true;
      },
      Escape: () => {
        shouldQuit = true;
      },
    });
  }
};

ballLoop();
userInputLoop();

while (!shouldQuit) {
  await sleep(50);

  shell.render();
}

shell.clear();
shell.setRaw(false);
shell.showCursor(true);
