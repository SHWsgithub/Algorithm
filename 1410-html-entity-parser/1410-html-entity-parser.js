/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {

    const entities = {
        "&quot;": "\"",
        "&apos;": "'",
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&frasl;": "/",
    };

  return text.replace(/&quot;|&apos;|&amp;|&gt;|&lt;|&frasl;/g, (match) => entities[match]);
};