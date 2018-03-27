const 	express = require("express"),
		http = require("http"),
		path = require("path"),
		compression = require("compression")

const { PORT, ENV } = process.env

class Server {

	constructor() {
		this.init()
	}

	init() {
		const app = express()
		// Gzip
		app.use(compression())
		// Https redirect
		if (ENV !== "development") {
			app.get("*", (req, res) => res.redirect(`https://${ req.headers.host }${ req.url }`))
		}
		// Setting the static file server to the folder "public"
		app.use(express.static(path.join(__dirname, "../dist")))
		// Return index.html instead on 404
		app.use((req, res) => res.sendFile(path.join(__dirname, "../dist/index.html")))	
		const server = http.createServer(app)
		server.listen(PORT || 3001)
			.on(
				"listening",
				() => console.log("Server listening on port " + (PORT || 3000))
			)
	}
}
new Server()
