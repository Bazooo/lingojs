import program from 'commander'

program
  .command('scope-describe <scope_name> <description>')
  .description('change description of a scope')
  .action((scopeName, description) => {
    console.log('scopeName:', scopeName)
    console.log('description:', description)
  })
