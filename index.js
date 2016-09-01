var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var permalinks  = require('metalsmith-permalinks');
var browserSync = require('metalsmith-browser-sync');

Metalsmith(__dirname)
  .use(browserSync({
        files: ["src-markdown/**/*.md", "layouts/**/*.html"],
        open: false
  }))
  .use(collections({
    posts: {
        pattern: 'posts/*.md',
        sortBy: 'date',
        reverse: true
    }
  }))
  .metadata({
    title: "My Static Site & Blog",
    description: "It is about saying to the ddd World!",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src-markdown')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });