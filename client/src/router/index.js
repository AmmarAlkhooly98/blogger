import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import Signup from '@/pages/Signup';
import PublicBlogs from '@/pages/PublicBlogs';
import CreateBlog from '@/pages/CreateBlog';
import EditBlog from '@/pages/EditBlog';
import ViewBlog from '@/pages/ViewBlog';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},

		{
			path: '/signup',
			name: 'signup',
			component: Signup
		},
		{
			path: '/publicBlogs',
			name: 'publicBlogs',
			component: PublicBlogs
		},
		{
			path: '/blogs/create',
			name: 'blogs-create',
			component: CreateBlog
		},

		{
			path: '/blogs/:blogId',
			name: 'blog',
			component: ViewBlog
		},
		{
			path: '/blogs/:blogId/edit',
			name: 'blogs-edit',
			component: EditBlog
		},
		{
			path: '/profile/:userId',
			name: 'profile',
			component: Profile,
			props: true
		}
	]
});
