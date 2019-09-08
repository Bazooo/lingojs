import program from 'commander'

program
  .command('scope-list')
  .description('list scopes')
  .action(() => {
    console.log('list boi')
  })
