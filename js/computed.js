var vm = new Vue({
	el: '#computed01',
	data: {
		message: 'Hello'
	},
	computed: {
		// 算出 getter 関数
		reversedMessage: function () {
			// `this` は vm インスタンスを指します
			return this.message.split('').reverse().join('')
		}
	}
})

//console.log(vm.reversedMessage) // => 'olleH'
//vm.message = 'Goodbye'
//console.log(vm.reversedMessage) // => 'eybdooG'

var vm = new Vue({
	el: '#computed02',
	data: {
		message: 'Hello'
	},
	methods: {
		reverseMessage: function () {
			return this.message.split('').reverse().join('')
		}
	}
})

var vm = new Vue({
	el: '#computed03',
	computed: {
		now: function () {
			return Date.now()
		}
	}
})

//vm.now = 'Goodbye'
//console.log(vm.now)

var vm = new Vue({
	el: '#computed04',
	data: {
		firstName: 'Foo',
		lastName: 'Bar'
	},
	computed: {
		fullName: function () {
			return this.firstName + ' ' + this.lastName
		}
	}
})

var vm = new Vue({
	el: '#computed05',
	data: {
		firstName: 'Foo',
		lastName: 'Bar'
	},
	computed: {
		fullName: {
			// getter 関数
			get: function () {
				return this.firstName + ' ' + this.lastName
			},
			// setter 関数
			set: function (newValue) {
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}
})

//vm.firstName = 'John'
//vm.lastName = 'Doe'
vm.fullName = 'Joooooohn Doooooooe'



<!-- ajax ライブラリの豊富なエコシステムや、汎用的なユーティリティ	-->
<!-- メソッドがたくさんあるので、Vue のコアはそれらを再発明せずに		-->
<!-- 小さく保たれています。この結果として、慣れ親しんでいるものだけを	-->
<!-- 使えるような自由さを Vue は持ち合わせています。			-->

	var watchExampleVM = new Vue({
		el: '#computed06',
		data: {
			question: '',
			answer: 'I cannot give you an answer until you ask a question!'
		},
		watch: {
			// この関数は question が変わるごとに実行されます。
			question: function (newQuestion, oldQuestion) {
				this.answer = 'Waiting for you to stop typing...'
				this.debouncedGetAnswer()
			}
		},
		created: function () {
			// _.debounce は特にコストの高い処理の実行を制御するための
			// lodash の関数です。この場合は、どのくらい頻繁に yesno.wtf/api
			// へのアクセスすべきかを制限するために、ユーザーの入力が完全に
			// 終わるのを待ってから ajax リクエストを実行しています。
			// _.debounce (とその親戚である _.throttle )  についての詳細は
			// https://lodash.com/docs#debounce を見てください。
			this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
		},
		methods: {
			getAnswer: function () {
				if (this.question.indexOf('?') === -1) {
					this.answer = 'Questions usually contain a question mark. ;-)'
					return
				}
				this.answer = 'Thinking...'
				var vm = this
				axios.get('https://yesno.wtf/api')
					.then(function (response) {
					vm.answer = _.capitalize(response.data.answer)
				})
					.catch(function (error) {
					vm.answer = 'Error! Could not reach the API. ' + error
				})
			}
		}
	})
