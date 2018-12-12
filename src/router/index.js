import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import ProductList from '@/components/ProductList'
import CarouselFigure from '@/components/CarouselFigure'

Vue.use(Router)
Vue.use(VueResource)

const router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
      	title:"login"
      }
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      children: [
      	{
	        path: 'Home',
	        name: 'Product',
	        component: ProductList,
	        meta: {
		      	title:"home"
		      },
		      children: [
		      	{
			      	path: 'CarouselFigure',
		        	name: 'CarouselFigure',
		        	component: CarouselFigure
	        	},
	        	{
			        path: '/',
			        redirect: { name: 'CarouselFigure' }
		      	}
	        
		      ]
      	},
      	{
	        path: '/',
	        redirect: { name: 'CarouselFigure' }
      	}
      ]
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
      	title:"helloWorld"
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

//输出 router
export default router

