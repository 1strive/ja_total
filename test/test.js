
			let data = {                                                                                                                                                                                                            
				name:'尚硅谷',
				address:'北京',
			}


			//创建一个监视的实例对象，用于监视data中属性的变化
			const obs = new Observer(data)		
			console.log(obs)	

			//准备一个vm实例对象
			let vm = {}
			vm._data = data = obs

			//错误的  会死循环,需要在外部声明value
			// Object.defineProperty(data,'name',{
			// 	get(){
			// 		return data.name
			// 	},
			// 	set(val){
			// 		data.name = val
			// 	}
			// })

			function Observer(obj){
				//汇总对象中所有的属性名形成一个数组
				const keys = Object.keys(obj)
				//遍历
				//foreach方法对数组的每个元素执行一次提供的函数
				keys.forEach((k)=>{
					Object.defineProperty(this,k,{
						get(){
							return obj[k]
						},
						set(val){
							console.log(`${k}被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了`)//${}表示引用值
							obj[k] = val
						}
					})
				})
			}
			
			