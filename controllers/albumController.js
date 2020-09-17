// TWING
const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");
let loader = new TwingLoaderFilesystem("./views");
let twing = new TwingEnvironment(loader);

exports.renderView = (req, res, next) => {
	
	twing.render("album.twig", { }).then((output) => {
		res.end(output);
	});
}