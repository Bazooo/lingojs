import program from 'commander'

program
  .command('key-add')
  .description('add a new key, returns the key name')
  .option('-s, --scope <scope>', 'the key scope')
  .option('-i, --identifier <identifier>', 'the key identifier')
  .action((options) => {
    const { scope, identifier } = options
    console.log('scope:', scope)
    console.log('identifier:', identifier)
  })

