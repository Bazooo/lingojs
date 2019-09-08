import program from 'commander'

program
  .command('variant-list')
  .description('list variants')
  .action(() => {
    console.log('list variants')
  })
