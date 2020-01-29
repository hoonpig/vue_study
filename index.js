var app = new Vue({
	el: '#app'
	, data :{
		message:'helloworld Vue!'
	}
})

var app2 = new Vue({
	el:'#app-2'
	, data :{
		message:'page load time : ' + new Date()
	}
	
})

//app2.message="change title";

var app3 = new Vue({
	
	el:"#app-3"
	, data:{
		seen : true
	}
})

//app3.seen = false;


var  app4 = new Vue({
	el:"#app-4",
	data:{
		todos:[
			{text : 'study vue'}
			,{text : 'study javascript'}
			,{text : 'ssacol'}
		]
	}
})

//app4.todos.push({text : 'new item'})


var app5 = new Vue({
	el:"#app-5",
	data:{
		message:'hello Vue.js'
	},
	methods:{
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('')
		}
		
	}
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '안녕하세요 Vue!'
  }
})


Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})

var app7= new Vue({
	el:"#app-7",
	data:{
		groceryList:[
			{id : 0 , text: "Vegetable"},
			{id : 1 , text: "Cheese"},
			{id : 2 , text: "humen"}
		]
	}
})

var obj = {
	foo:'bar'
}

//Object.freeze(obj)

new Vue({
	el : "#app-8",
	data:obj
})



















