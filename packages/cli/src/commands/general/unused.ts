import program from 'commander'

program
  .command('unused')
  .description('list unused keys')
  .option('-s, --scope <scope>', 'scope of the unused keys')
  .action((options) => {
    const { scope } = options
    console.log('unused keys')
    console.log('scope:', scope)
  })
