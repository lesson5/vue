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

new Vue({
	el: '#list04',
	data: {
		items: [
			{ id:3, message: 'Foo' ,message2: 'FooFooFoo' },
			{ id:1, message: 'Bar' ,message2: 'BarBarBar' },
			{ id:2, message: 'Hoge' ,message2: 'HogeHogeHoge' }
		]
	}
})


var example1 = new Vue({
	el: '#list05',
	data: {
		items: [
			{ id:3, message: 'Foo' ,message2: 'FooFooFoo' },
			{ id:1, message: 'Bar' ,message2: 'BarBarBar' },
			{ id:2, message: 'Hoge' ,message2: 'HogeHogeHoge' }
		]
	}
})
example1.items.push({ id:4, message: 'Baz', message2: 'BazBazBaz' })