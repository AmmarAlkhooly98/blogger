import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import Signup from '@/pages/Signup';

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
			path: '/profile',
			name: 'profile',
			component: Profile
		},
		{
			path: '/signup',
			name: 'signup',
			component: Signup
		}
	]
});
