import program from 'commander'

program
  .command('locale-add <name>')
  .description('add a new locale')
  .action((name) => {
    console.log('name:', name)
  })

