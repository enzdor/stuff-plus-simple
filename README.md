# Stuff Plus Simple

[The website!](https://enzdor.github.io/stuff-plus-simple)

Stuff Plus Simple is the website where I host the data obtained from [ss-py](https://github.com/enzdor/ss-py), a simple stuff, location, and pitching plus model script. The data you can browse through is the sqlite database that is the output of ss-py. The database contains the tables stuff plus, location plus, pitching plus, stuff_regressors and pitchers.

There are four "tabs" in the website that can be used to browse through the data. The first one is for the plus tables. The second one is for the number of pitches thrown by the pitchers. The third is for the stuff regressors. And the fourth is a playground where you can query directly to the database.

The database is hosted directly in your browser using [sql.js-httpvfs](https://github.com/phiresky/sql.js-httpvfs). The rest is just HTML+CSS and JavaScript. The path for the database in this repository is `dist/test.db`.

## Run and Serve

If you are planning to run this website on your computer, you will need to change one line of code in `src/index.js`. The line of code you're supposed to change is commented:

```
worker = await createDbWorker(
  [
    {
			from: "inline",
			config: {
				serverMode: "full",
				// production path is /stuff-plus-simple/dist/test.db
				// dev path is        /dist/test.db
				// url: "/dist/test.db",
				url: "/stuff-plus-simple/dist/test.db",
				requestChunkSize: 4096,
			},
		},
	],
	workerUrl.toString(),
	wasmUrl.toString()
);
```

The url should be set to `/dist/test.db`. The other url is used for the website to work on github pages. To build and serve the website you just need to:

```
npm i
node_modules/.bin/webpack --mode=development
node_modules/.bin/http-server
```

And you'll be able to access the website through port :8080.
