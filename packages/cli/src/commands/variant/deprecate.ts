import program from 'commander'

program
  .command('variant-deprecate <variant_name>')
  .description('deprecate variant')
  .action((variantName) => {
    console.log('variantName:', variantName)
  })
