import program from 'commander'

program
  .command('variant-add <name>')
  .description('add a new variant')
  .action((name) => {
    console.log('name:', name)
  })

