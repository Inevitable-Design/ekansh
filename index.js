#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import { intro, outro, select, spinner  } from '@clack/prompts';
import data from './lib/data.js';
import open from 'open';
import fs from 'fs';
import path from 'path';
import lolcatjs from 'lolcatjs';

const __dirname = './static/fonts/'
let fontData = fs.readFileSync(path.join(__dirname, "3d.flf"), "utf8");

// Function to display ASCII art
function displayAsciiArt() {
    figlet.parseFont("3d", fontData)
    lolcatjs.options.animate = true;
    lolcatjs.fromString(figlet.textSync(`${data.cli}`, "3d") + `\n\nVersion: ${data.version} | Made with love by ${data.author}`);
}

function displayUserBio() {
    lolcatjs.fromString(`\n${data.bio}\n${data.title.join(' | ')}\n`);
}

// Function to display social links
function displaySocials() {
    console.log(chalk.yellow('Ways to connect with me:'));
    data.urls.forEach(({ label, value, username }) => {
        const display = value ? value : ``;
        console.log(`${chalk.blue(label)}: ${chalk.cyan(username)} | ${chalk.green(display)}`);
    });
    console.log(`\n`);
}

async function displayQuickLaunchLinks() {
    const options = data.urls.map(({ label, value, hint }) => ({ label, value, hint }));
    const selectedUrl = await select({
        message: 'Pick a link to open:',
        options: options,
    });
    if (selectedUrl) {
        const s = spinner();
        await s.start('Opening Link');
        await open(selectedUrl);
        s.stop('Link Opened!');
        // console.log(`Opened ${selectedUrl}`);
    } else {
        console.log('No URL selected.');
    }
}


// Main function
// Main function
async function main() {
    let exit = false;
    while (!exit) {
        displayAsciiArt();
        displayUserBio();
        displaySocials();

        intro(`Quick Launch Links`);
        await displayQuickLaunchLinks();
        // outro(`Press exit to exit or continue`);
        
        const exitOption = await select({
            message: 'Your choice:',
            options: [
                { label: 'Exit', value: 'e' },
                { label: 'Continue', value: 'c' }
            ]
        });

        if (exitOption === 'e') {
            exit = true;
            lolcatjs.fromString('Exiting...')
        }
    }
}

// Run the main function
main();
