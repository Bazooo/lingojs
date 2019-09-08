import program from 'commander'

program
  .command('locale-list')
  .description('list locales')
  .action(() => {
    console.log('list locales')
  })
