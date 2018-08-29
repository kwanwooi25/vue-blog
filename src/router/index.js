import Vue from 'vue';
import Router from 'vue-router';
import BlogHome from '@/components/BlogHome';
import BlogPost from '@/components/BlogPost';
import Categories from '@/components/Categories';
import Tags from '@/components/Tags';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
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
    {
      path: '/categories/:slug',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/tags/:slug',
      name: 'Tags',
      component: Tags,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
