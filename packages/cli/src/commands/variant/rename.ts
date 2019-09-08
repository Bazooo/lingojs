import program from 'commander'

program
  .command('variant-rename <old_variant_name> <new_variant_name>')
  .description('rename variant')
  .action((oldVariantName, newVariantName) => {
    console.log('newVariantName:', newVariantName)
    console.log('oldVariantName:', oldVariantName)
  })
