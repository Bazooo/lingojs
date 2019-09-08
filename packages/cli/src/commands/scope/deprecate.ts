import program from 'commander'

program
  .command('scope-deprecate <scope_name>')
  .description('deprecate scope')
  .action((scopeName) => {
    console.log('scopeName:', scopeName)
  })
