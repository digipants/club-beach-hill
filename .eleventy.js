module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/product');
    eleventyConfig.addPassthroughCopy('./src/blog-posts');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};