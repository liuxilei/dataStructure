/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
    const stack = [];
    const EntityCharactersToString = {
        '&quot;': '"',
        '&apos;': "'",
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/',
    };
    for (let i = 0; i < text.length; i++) {
        let item = text[i];
        if (item === '&') {
            stack.push('&');
        } else if (stack[stack.length - 1] && stack[stack.length - 1].startsWith('&')) {
            if (item === ';') {
                if (EntityCharactersToString[stack[stack.length - 1] + ';']) {
                    stack[stack.length - 1] =
                        EntityCharactersToString[stack[stack.length - 1] + ';'];
                    stack.push('');
                } else {
                    stack[stack.length - 1] += item;
                }
            } else {
                stack[stack.length - 1] += item;
            }
        } else {
            stack.push(item);
        }
    }
    return stack.join('');
};

module.exports = entityParser;
