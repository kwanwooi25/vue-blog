import Vue from 'vue';
import Router from 'vue-router';
import BlogHome from '@/components/BlogHome';
import BlogPost from '@/components/BlogPost';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      component: BlogHome,
    },
    {
      path: '/post/:slug',
      name: 'BlogPost',
      component: BlogPost,
    },
  ],
});
