var vm = new Vue({
	el: '#class01',
	data: {
		isActive: true,
		hasError: true
	}
})

var vm2 = new Vue({
	el: '#class02',
	data: {
		classObject: {
			active: true,
			'text-danger': true
		}
	}
})

var vm3 = new Vue({
	el: '#class03',
	data: {
		isActive: true,
		error: null
	},
	computed: {
		classObject: function () {
			return {
				active: this.isActive && !this.error,
				'text-danger': this.error && this.error.type === 'fatal'
			}
		}
	}
})

var class04 = new Vue({
	el: '#class04',
	data: {
		isActive: true,
		errorClass: 'text-danger'
	}
})

var class05 = new Vue({
	el: '#class05',
	data: {
		styleObject: {
			color: 'red',
			fontSize: '13px'
		}
	}
})

var class06 = new Vue({
	el: '#class06',
	data: {
		baseStyles: {
			color: 'red',
			fontSize: '13px'
		},
		overridingStyles: {
			color: 'blue',
			fontSize: '18px'
		}
	}
})

var class07 = new Vue({
	el: '#class07'
})