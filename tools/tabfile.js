#!/usr/bin/env node

"use strict";

// Generates a tabfile from dictionary data, which can be used to create a StarDict export

process.chdir(__dirname);
const dictionary = require('./../dictionary.json');

const tabfile = dictionary.map(entry => {
    const lines = [];

    lines.push(entry.toaq);
    if (entry.type) lines.push(entry.type);
    lines.push(entry.english);
    if (entry.frame) lines.push(`frame: ${entry.frame}`);
    if (entry.distribution) lines.push(`distribution: ${entry.distribution}`);

    return `${entry.toaq}\t${lines.join('\\n')}`;
  }).join('\n');

process.stdout.write(tabfile + '\n');
