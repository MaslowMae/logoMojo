#!/usr/bin/env node
require('cli').withStdinLines(function(lines, newline) {
    this.output(lines.sort().join(newline));
});

var cli = require('cli');

var i = 0, interval = setInterval(function () { 
    cli.progress(++i / 100); 
    if (i === 100) {
        clearInterval(interval);
        cli.ok('Finished!');
    }
}, 50);

//https://github.com/node-js-libs/cli/blob/master/examples/progress.js

const fs = require('fs');
import('inquirer')
import select, { Separator } from '@inquirer/select';
//npm install @inquirer/select for select seperator option