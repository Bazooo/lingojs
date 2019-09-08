import program from 'commander'

program
  .command('missing')
  .description('list missing translations')
  .option('-s, --scope <scope>', 'scope of the missing translations')
  .action((options) => {
    const { scope } = options
    console.log('missing translations')
    console.log('scope:', scope)
  })
