// データオブジェクト
var data = {
	id: 1,
	usertext: ''
}

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


var data2 = {
	name: 'hisa'
}
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


new Vue({
	data: {
		a: 1
	},
	beforeCreate: function () {
		// インスタンスが初期化されるときに同期的に呼ばれる
		console.log('beforeCreate')
	},
	created: function () {
		// インスタンスが作成された後に同期的に呼ばれる データの監視とイベントの初期セットアップが完了した状態
		// `this` は vm インスタンスを指します
		console.log('created')
		console.log('a is: ' + this.a)
	},
	beforeMount: function () {
		// インスタンスがマウントされる前に呼ばれる
	},
	mounted: function () {
		// インスタンスがマウントされた後に呼ばれる
	},
	beforeUpdate: function () {
		// 状態を更新し、Virtual DOMが再描画される前に呼ばれる
	},
	updated: function () {
		// 状態を更新し、Virtual DOMが再描画される後に呼ばれる
		// 状態変更後のDOM要素にアクセスする場合は、 updated内で取得すると良い
		// ただし、 updated内で状態を更新すると無限ループに陥る可能性がある（ 状態を更新してループを抜ける条件をちゃんと実装しておく必要がある）
	},
	beforeDestroy: function () {
		// インスタンスが破棄される前に呼ばれる まだインスタンスが機能できる状態
	},
	destroyed: function () {
		// インスタンスが破棄される後に呼ばれる
	}
})
