import program from 'commander'

program
  .command('key-rename <old_key_name> <new_key_name>')
  .description('rename key')
  .action((oldKeyName, newKeyName) => {
    console.log('newKeyName:', newKeyName)
    console.log('oldKeyName:', oldKeyName)
  })
