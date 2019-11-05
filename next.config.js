const withCss = require('@zeit/next-css')
const withMarkdown = require('@blunck/next-md')()

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

// module.exports = withCss({})
module.exports = withMarkdown(withCss({}))
// module.exports = {
//     withCss({}),
//     withMarkdown()
// }
// const withMarkdown = require('@blunck/next-md')({
//     markdownLoaderOptions: {
//         gfm: true
//     },
//     htmlLoaderOptions: {
//         minimize: true,
//         conservativeCollapse: false
//     }
// })
// module.exports = withMarkdown()