module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy({ "./src/img": "/img" });
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addWatchTarget("./src/js");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}