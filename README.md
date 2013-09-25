Test-Driven Development with The Game of Life
=

Before you begin, download or git checkout this repository into a folder called "TD-GOL"

You can run these exercises (A) with Grunt or (B) with no dependencies. See instructions below.

Option A: Grunt Setup
==

Step 1: Run npm and grunt

```bash
$> cd TD-GOL
$> npm install
$> grunt
$> grunt watch
```

Step 2: Add a failing test to the top of ./Game.html

Step 3: Watch your command line to see the failing test

Step 4: Add code to the bottom of ./Game.html until all tests pass


Option B: No Dependency Setup
==

Step 1: Open ./Game.html in your browser; add ?refresh=1500 to the URL

Step 2: Add a failing test to ./Game.html

Step 3: Watch your browser window to see the failing test

Step 4: Add code to the bottom of ./Game.html until all tests pass


Game Requirements
==

The Game of Life is a cellular simulation created by British mathematician John Horton Conway. After defining an initial state, cells evolve into still lifes, gliders, and long-lived patterns of chaos.

Cells are placed on a grid according to a given starting state. In each generation, the rules for cell birth and survival are governed by two rules:

1. Any live cell with 2 or 3 live neighbors survives to the next generation.
2. Any dead cell with exactly 3 live neighbors is born in the next generation.

Other cells die.


References
==

Presentation for the UtahJS Workshop that uses this repository is on [Github](https://github.com/kensnyder/TDD-Game-of-Life-Presentation)

[ConwayJS.com](http://ConwayJS.com), [conwaylife.com Wiki](http://conwaylife.com/wiki/Main_Page), [pentadecathlon.com](http://pentadecathlon.com/lifeNews/index.php)
