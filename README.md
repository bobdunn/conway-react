This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Design choices
This is a somewhat quick-and-dirty implementation of Conway's Game of Life in React.js.  Along the way there were several inflection points:

## Grid structure (UI)

Since the solution is already a React app, I really hoped to do something sexy for the grid.  Given the (admittedly self-imposed) time constraints, after looking at several options, such as HTML5 Canvas, flexbox, CSS grid, I landed on an HTML table.  While not sexy, this approach is quite pragmatic.  After all, tables are made for the display of tabular data...

## Grid structure (cells)

I considered going down a path that would have made the "board" an object that had a height and width and a collection of live cells that knew their coordinates.  From the perspective of running the game, this is appealing because it allows you to easily select from the live cells to find how many live neighbors a given cell has.  Initially I created a two-dimensional array of objects with an `isAlive` property, thinking that I might enhance this object to include coordinates.  As I progressed and this seemed less likely to happen, I abandoned the object structure in favor of simply 1's and 0's.  Were I to do it again, I might just go for `true` or `false`.

## Unit Tests

There are lots of opinions about what things ought to be unit tested, especially when it comes to UI.  The approach I took here was to test the things whose implementations weren't initially clear in my head.  There aren't a ton of them, and they're not exhaustive, but I think they're sufficient.

## Create-react-app

I love that this provides so much setup out of the box.  Many thumbs up.  Would use again!



# Running the app

You can run the app by running these commands:

```
git clone git@github.com:bobdunn/conway-react.git
cd conway-react
npm i
npm start
```

This should launch the app on http://localhost:3000/

To run the tests, use:

```
npm test
```

