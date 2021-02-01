/**
 * @author Zhao Tian
 * @date 2021/2/1
 * @Description: 由于vuepress项目的路由固定是history模式，这就导致了本项目在github上静态部署时
 * 会出现刷新后页面显示404,现在的解决办法就是改写404页面，将404页面重定向到首页去。
*/
const fs = require('fs')

const content404 = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>404</title>
  <script>
    location.href = location.origin + '/?page=' + encodeURIComponent(location.href.replace(location.origin, ''));
  </script>
</head>
<body></body>
</html>`

module.exports = {
  async generated (pagePaths) {
    const pagePath404 = pagePaths.find(item => item.includes('dist\\404.html') || item.includes('dist/404.html'))
    fs.writeFile(pagePath404, content404, (err) => {
      if (err) {
        throw new Error(err)
      }
      console.log('change 404 page ok')
    })
  }
}
