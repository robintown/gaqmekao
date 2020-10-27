#!/usr/bin/env node

"use strict";

// Generates a tabfile from dictionary data, which can be used to create a StarDict export

process.chdir(__dirname);
const dictionary = require('./../dictionary.json');
const ascii = process.argv.includes("--ascii");

const escape = text => text.replace(/\\/g, '\\\\');
const asciify = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i");

const definitions = dictionary.map(entry => {
    const sections = [];

    const head = ascii ? asciify(entry.toaq) : entry.toaq;

    if (ascii)
      sections.push(escape(entry.toaq));
    if (entry.type)
      sections.push(escape(entry.type));
    sections.push(escape(entry.english));
    if (entry.official)
      sections.push(`official`);
    if (entry.gloss)
      sections.push(`gloss: ${escape(entry.gloss)}`);
    if (entry.frame)
      sections.push(`frame: ${escape(entry.frame)}${entry.namesake ? ' (namesake)' : ''}`);
    if (entry.distribution)
      sections.push(`distribution: ${escape(entry.distribution)}`);
    if (entry.etymology)
      sections.push(`etymology: ${escape(entry.etymology)}`);
    if (entry.fields && entry.fields.length > 0)
      sections.push(`fields: ${entry.fields.map(field => field.map(escape).join(' ∨ ')).join(', ')}`);
    if (entry.notes.length > 0)
      sections.push(`notes:\\n\t${entry.notes.map(escape).join('\\n\t')}`);

    if (entry.examples.length > 0) {
      const exLines = entry.examples.map(
        example => `${escape(example.toaq)} — ${escape(example.english)}`
      );
      sections.push(`examples:\\n\t${exLines.join('\\n\t')}`);
    }

    return `${escape(head)}\t${sections.join('\\n\\n')}`;
  }).join('\n');

const keywords = [...new Set(dictionary.map(entry => entry.keywords).flat())]
  .map(keyword => {
    const keyed = dictionary.filter(entry => entry.keywords.includes(keyword));
    return `${keyword}\t${keyed.map(entry => escape(ascii ? asciify(entry.toaq) : entry.toaq)).join(', ')}`;
  }).join('\n');

const tabfile = [definitions, keywords].join('\n') + '\n';
process.stdout.write(tabfile);
