import program from 'commander'

program
  .command('locale-rename <old_locale_name> <new_locale_name>')
  .description('rename locale')
  .action((oldLocaleName, newLocaleName) => {
    console.log('newLocaleName:', newLocaleName)
    console.log('oldLocaleName:', oldLocaleName)
  })
