const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function caesarcipher(string, num) {
    let apple = '';
    for (let i = 0; i < string.length; i++) {
        let kill = letters.indexOf(string.toLowerCase().charAt(i));
        
        const index = (kill + num) % 26;
        apple += letters[index];
    }
    return apple;
}

export default caesarcipher;