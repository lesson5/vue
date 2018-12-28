var app = new Vue({
	el: '#syntax01',
	data: {
		message: 'データバインディングのもっとも基本的な形は、”Mustache” 構文(二重中括弧)を利用したテキスト展開です',
		message2: 'v-once ディレクティブを使用することで、データ変更時の更新はおこなわず、一度だけ展開することができます。ただし、同じノードのあらゆる他のバインディングが影響を受けることに注意してください',
		rawHtml: '<span>ここはhtml</span>',
		dynamicId: 'bind',
		dynamicTitle: 'タイトル',
		ok: true
	}
})

var app2 = new Vue({
	el: '#syntax02',
	data: {
		seen: true,
		url: 'https://soundcloud.com/you/tracks',
		windowopen: '_blank'
	}
})