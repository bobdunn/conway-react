This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Design choices
This is a somewhat quick-and-dirty implementation of Conway's Game of Life in React.js.  Along the way there were several inflection points:

## Grid structure (UI)

Since the solution is already a React app, I really hoped to do something sexy for the grid.  Given the (admittedly self-imposed) time constraints, after looking at several options, such as HTML5 Canvas, flexbox, CSS grid, I landed on an HTML table.  While not sexy, this approach is quite pragmatic.  After all, tables are made for the display of tabular data...

## Grid structure (cells)

The intent for structure here is that the population is a collection that only includes the live cells.  Each cell will manage its own continued life or death.  There is a challenge in whose responsibility it is to "resurrect" a dead cell when appropriate.  Perhaps as I work through the parts that make sense, this part will reveal itself.

## Unit Tests

I intent to have my thinking more clearly demonstrated by the tests in this branch.  The UI is "done" for the most part, though there may be a component needed to translate from the population of live cells to the array expected by the Grid component.

## Create-react-app

I love that this provides so much setup out of the box.  Many thumbs up.  Would use again!



# Running the app

You can run this branch of the app by running these commands:

```
git clone -b only-live-cell-objects https://github.com/bobdunn/conway-react
cd conway-react
npm i
npm start
```

(Note that depending on your python configuration, you may see some errors during the `npm i` step.  These should not prevent the app from running correctly.)

This should launch the app on http://localhost:3000/

To run the tests, use:

```
npm test
```

