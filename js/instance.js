
// データオブジェクト
var data = { id: 1, usertext:'' }

// Vue インスタンスにオブジェクトを追加する
var vm = new Vue({
	el: '#app',
	data: data
})

// インスタンスのプロパティを取得すると、
// 元のデータからそのプロパティが返されます
vm.id == data.id // => true

// プロパティへの代入は、元のデータにも反映されます
vm.id = 5
data.id // => 5

// ... そして、その逆もまたしかりです
data.id = 3
vm.id // => 3

data.usertext = 'hi'
vm.usertext


var obj = {
	foo: 'bar'
}

//Object.freeze(obj)

new Vue({
	el: '#app-freeze',
	data: obj
})


var data2 = { name: 'hisa' }
var vm2 = new Vue({
	el: '#example',
	data: data2
})

vm2.$data === data2 // => true
vm2.$el === document.getElementById('example') // => true

// $watch はインスタンスメソッドです
vm2.$watch('name', function (newValue, oldValue) {
	// このコールバックは `vm.name` の値が変わる時に呼ばれます
	console.log(newValue)
	console.log(oldValue)
})