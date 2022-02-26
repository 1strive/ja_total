<!--
 * @Author: JA
 * @Date: 2021-12-12 12:01:21
 * @LastEditTime: 2021-12-19 14:11:04
 * @LastEditors: JA
-->
<template>
	<div>
		<Student name="李四" sex="女" :age="18"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
