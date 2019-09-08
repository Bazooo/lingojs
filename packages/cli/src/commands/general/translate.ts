import program from 'commander'

program
  .command('translate [translation]')
  .description('add translation')
  .option('-s, --scope <scope>', 'the key scope')
  .option('-i, --identifier <identifier>', 'the key identifier')
  .option('-l, --locale <locale>', 'the translation locale')
  .option('-v, --variant <variant>', 'the translation variant')
  .action((translation, options) => {
    const { scope, identifier, locale, variant } = options
    console.log('translation:', translation)
    console.log('scope:', scope)
    console.log('identifier:', identifier)
    console.log('locale:', locale)
    console.log('variant:', variant)
    console.log(`${scope}.${identifier}~${variant}`, locale, translation)
  })
