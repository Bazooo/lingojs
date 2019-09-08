import program from 'commander'

program
  .command('key-list')
  .description('list keys')
  .action(() => {
    console.log('list keys')
  })
