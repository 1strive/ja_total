<!--
 * @Author: JA
 * @Date: 2021-12-12 12:01:21
 * @LastEditTime: 2021-12-19 13:21:51
 * @LastEditors: JA
-->
<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './School.vue'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
