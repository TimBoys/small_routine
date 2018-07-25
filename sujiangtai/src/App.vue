<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import Rem from '@/assets/js/rem'
	
new Rem();

export default {
  name: 'App',
  watch:{
			'$route'(to,from){
//				console.log(to)
//				console.log(from)
				
			}
		},
}
</script>

<style lang="scss" type="text/scss">
	@import "./assets/scss/public";
	@import "./assets/scss/util";


</style>
