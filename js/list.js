var list01 = new Vue({
	el: '#list01',
	data: {
		items: [
			{ message: 'Foo' ,message2: 'FooFooFoo' },
			{ message: 'Bar' ,message2: 'BarBarBar' },
			{ message: 'Hoge' ,message2: 'HogeHogeHoge' }
		]
	}
})

var list02 = new Vue({
	el: '#list02',
	data: {
		parentMessage: 'Parent',
		items: [
			{ message: 'Foo' },
			{ message: 'Bar' }
		]
	}
})

new Vue({
	el: '#list03',
	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
})