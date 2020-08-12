var simplifyPath = function (path) {
    const stack = [];
    const pathArr = path.split('/');
    for (let s of pathArr) {
        if (s === '' || s === '.') {
            continue;
        }
        if (s === '..') {
            stack.pop();
        } else {
            stack.push(s);
        }
    }
    return '/' + stack.join('/');
};

module.exports = simplifyPath;
