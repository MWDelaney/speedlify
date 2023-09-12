module.exports = {
	name: "Clients", // optional, falls back to object key
	description: "Rebel's client sites",
	options: {
		frequency: 1,
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
    runs: 1
	},
	urls: [
    "https://abaretirement.com",
    "https://advancedheatingoil.com",
    "https://alternativetaxmanagement.com",
    "https://antiquesandthearts.com",
    "https://anvilcap.com",
    "https://aona-events.org",
    "https://aquaticarttechnologies.com",
    "https://asafersurface.com",
    "https://ashaliving.org",
    "https://azaleaestatesfayetteville.com",
    "https://berchemmoses.com",
    "https://bhcgonlinelibrary.com",
    "https://birddogwhiskey.com",
    "https://bluecordfirearms.com",
    "https://brandelmanor.org",
    "https://brasscityharvestwaterbury.com",
    "https://budrcannabis.com",
    "https://candsbenefits.com",
    "https://careplus.att.com",
    "https://carmodylaw.com",
    "https://cat5movie.com",
    "https://charteroakcommunities.org",
    "https://compassdiversified.com",
    "https://covenantcareathome.org",
    "https://covhomechicago.org"
	]
};
