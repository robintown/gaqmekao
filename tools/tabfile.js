#!/usr/bin/env node

"use strict";

// Generates a tabfile from dictionary data, which can be used to create a StarDict export

process.chdir(__dirname);
const dictionary = require('./../dictionary.json');

const definitions = dictionary.map(entry => {
    const sections = [];

    if (entry.type)
      sections.push(entry.type);
    sections.push(entry.english);
    if (entry.official)
      sections.push(`official`);
    if (entry.gloss)
      sections.push(`gloss: ${entry.gloss}`);
    if (entry.frame)
      sections.push(`frame: ${entry.frame}${entry.namesake ? ' (namesake)' : ''}`);
    if (entry.distribution)
      sections.push(`distribution: ${entry.distribution}`);
    if (entry.etymology)
      sections.push(`etymology: ${entry.etymology}`);
    if (entry.fields && entry.fields.length > 0)
      sections.push(`fields: ${entry.fields.map(field => field.join(' ∨ ')).join(', ')}`);
    if (entry.notes.length > 0)
      sections.push(`notes:\\n\t${entry.notes.join('\\n\t')}`);

    if (entry.examples.length > 0) {
      const exLines = entry.examples.map(
        example => `${example.toaq} — ${example.english}`
      );
      sections.push(`examples:\\n\t${exLines.join('\\n\t')}`);
    }

    return `${entry.toaq}\t${sections.join('\\n\\n')}`;
  }).join('\n');

const keywords = [...new Set(dictionary.map(entry => entry.keywords).flat())]
  .map(keyword => {
    const keyed = dictionary.filter(entry => entry.keywords.includes(keyword));
    return `${keyword}\t${keyed.map(entry => entry.toaq).join(', ')}`;
  }).join('\n');;

const tabfile = [definitions, keywords].join('\n') + '\n';
process.stdout.write(tabfile);
