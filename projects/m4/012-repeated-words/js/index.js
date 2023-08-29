const fs = require('fs');

function detectRepeatedWords(data) {
    const lines = data.split('\n');
    let lastWord = '';
    let lineNumber = 1;

    for (let line of lines) {
        const words = line.trim().split(/\s+/); 

        if (lastWord && words[0] && lastWord.toLowerCase() === words[0].toLowerCase()) {
            console.log(`Line ${lineNumber}: Word "${words[0]}" repeated from the previous line.`);
        }

        for (let i = 0; i < words.length - 1; i++) {
            if (words[i].toLowerCase() === words[i + 1].toLowerCase()) {
                console.log(`Line ${lineNumber}: Repeated word "${words[i]}"`);
            }
        }

        lastWord = words[words.length - 1];
        lineNumber++;
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: node index.js <filename>");
    process.exit(1);
}

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err.message}`);
        process.exit(1);
    }

    detectRepeatedWords(data);
});