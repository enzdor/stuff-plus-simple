# Stuff Plus Simple

[The website!](https://enzdor.github.io/stuff-plus-simple)

Stuff Plus Simple is the website where I host the data obtained from [ss-py](https://github.com/enzdor/ss-py), a simple stuff, location, and pitching plus model script. The data you can browse through is the sqlite database that is the output of ss-py. The database contains the tables stuff plus, location plus, pitching plus, stuff_regressors and pitchers.

There are four "tabs" in the website that can be used to browse through the data. The first one is for the plus tables. The second one is for the number of pitches thrown by the pitchers. The third is for the stuff regressors. And the fourth is a playground where you can query directly to the database.

The database is hosted directly in your browser using [sql.js-httpvfs](https://github.com/phiresky/sql.js-httpvfs). The rest is just HTML+CSS and JavaScript. The path for the database in this repository is `dist/test.db`.

## Run and Serve

The database URL is resolved relative to the generated assets, so the same build
works locally and on GitHub Pages. To build and serve the website:

```
npm i
npm run build
npm run serve
```

Then open <http://localhost:8080>.

## Deploy to GitHub Pages

Run `npm run build` and commit the generated files in `dist/`, including
`bundle.js`, the generated worker, the WASM file, and `test.db`. Configure GitHub
Pages to publish from the repository root. No source-code path changes are needed
between local development and deployment.

## TODO
