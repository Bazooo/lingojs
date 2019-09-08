import program from 'commander'

program
  .command('scope-add <name> [description]')
  .description('add a new scope')
  .action((name, description) => {
    console.log('name:', name)
    console.log('description:', description)
  })
