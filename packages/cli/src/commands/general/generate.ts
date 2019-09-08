import program from 'commander'

program
  .command('generate [output_dir]')
  .description('generate translation files')
  .action((outputDir) => {
    console.log('outputDir:', outputDir)
  })
