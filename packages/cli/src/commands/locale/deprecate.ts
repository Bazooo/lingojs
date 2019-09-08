import program from 'commander'

program
  .command('locale-deprecate <locale_name>')
  .description('deprecate locale')
  .action((localeName) => {
    console.log('localeName:', localeName)
  })
