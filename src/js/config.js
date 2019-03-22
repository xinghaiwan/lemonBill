require.config({
	baseUrl: '/js',
	paths: {
		'mui': './libs/mui.min',
		'picker': './libs/mui.picker.min',
		'poppicker': './libs/mui.poppicker',
		'getuid': './utils/getUid',
		'moment': './libs/moment'
	
	},
	shim: {
		'picker': {
			deps: ['mui']
		},
		'poppicker': {
			deps: ['mui']
		}
	}

})