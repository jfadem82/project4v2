angular.module('project4v2')
	.config(MainRouter)
	.config(interceptor)

function interceptor($httpProvider) {
	$httpProvider.interceptors.push('authInterceptorFactory')
}

function MainRouter($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise('/login')

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'partials/login.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'partials/signup.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('loggedOut', {
			url: '/loggedOut',
			templateUrl: 'partials/home.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('posts', {
			url: '/posts',
			templateUrl: 'partials/post-list.html',
			controller: 'PostsController as postsCtrl'
		})
		.state('detail', {
			url: '/posts/:postId',
			templateUrl: 'partials/post-detail.html',
			controller: 'PostDetailsController as postDetailsCtrl'
		})
		.state('album-form', {
			url: '/album-form',
			templateUrl: 'partials/album-form.html',
			controller: 'AlbumsController as albCTRL'
		})
		.state('edit-profile', {
			url: '/edit-profile',
			templateUrl: 'partials/edit-profile.html',
			controller: 'UsersController as usersCtrl'
		})	
		.state('album-detail', {
			url: '/album-form/:albumId',
			templateUrl: 'partials/album-detail.html',
			controller: 'AlbumDetailsController as albDetailsCTRL'
		})
		.state('publicposts', {
			url:'/publicposts',
			templateUrl: 'partials/publicposts.html',
			controller: 'PostsController as postsCtrl'
		})
		.state('myposts', {
			url:'/myposts',
			templateUrl: '/partials/myposts.html',
			controller: 'jwtController as jwtCtrl'
		})
}