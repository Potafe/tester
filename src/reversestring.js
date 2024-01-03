function reversestring(string) {
    let apple = '';
    const n = string.length;
    for (let i = 0; i < n; i++) {
        apple += string[n - i - 1];
    }
    return apple;
}

export default reversestring;