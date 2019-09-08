import program from 'commander'

program
  .command('key-remove <key_name>')
  .description('deprecate key')
  .action((keyName) => {
    console.log('keyName:', keyName)
  })
