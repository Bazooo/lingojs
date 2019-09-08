#!/usr/bin/env node

import program from 'commander'
import './commands'

program
  .version('0.0.1')
  .description('A CLI tool for generating your translation files')
  .parse(process.argv)
