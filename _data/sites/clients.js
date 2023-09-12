module.exports = {
	name: "Clients", // optional, falls back to object key
	description: "Rebel's client sites",
	options: {
		frequency: 1,
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.speedlify.dev/",
    "https://abaretirement.com",
    "https://advancedheatingoil.com",
    "https://alternativetaxmanagement.com",
    "https://antiquesandthearts.com",
    "https://anvilcap.com"
	]
};
