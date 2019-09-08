import program from 'commander'

program
  .command('scope-rename <old_scope_name> <new_scope_name>')
  .description('rename scope')
  .action((oldScopeName, newScopeName) => {
    console.log('newScopeName:', newScopeName)
    console.log('oldScopeName:', oldScopeName)
  })
