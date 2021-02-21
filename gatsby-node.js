var fs = require("fs")
var dir = "./.cache/caches/@priscmicio/gatsby-source-prismic-graphql";
exports.onPreBootstrap = () => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}