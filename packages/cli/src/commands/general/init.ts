import program from 'commander'

program
  .command('init')
  .description('initialize the sheets')
  .action(() => {
    console.log('initializing')
  })
