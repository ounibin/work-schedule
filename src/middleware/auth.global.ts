// 全局中间件：将中间件文件放在项目根目录中的middleware目录下，并以.global为后缀。这种中间件会在每个路由切换时执行。
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('to===', to)
  // console.log('from===', from)
})
