module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy({ "./src/img": "/img" });
    eleventyConfig.addWatchTarget("./src/css");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}