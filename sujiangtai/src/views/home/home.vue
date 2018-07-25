<template>
	<div>
		<swiper :list="banner"></swiper>
		
		
		
		
		
		<router-link to="/HelloWorld">Go to HelloWorld</router-link>
		{{$route.query}}
	</div>
</template>

<script>
	import swiper from '../../components/swiper';
	//获取微信第一次登录参数 
	function getUrlParam(sHref, sArgName){
          var args  = sHref.split("?");
          var retval = "";
          if(args[0] == sHref) /*参数为空*/
          {
               return retval; /*无需做任何处理*/
          }  
          var str = args[1];
          args = str.split("&");
          for(var i = 0; i < args.length; i ++)
          {
              str = args[i];
              var arg = str.split("=");
              if(arg.length <= 1) continue;
              if(arg[0] == sArgName) retval = arg[1]; 
          }
//        console.log(retval)
          return retval;
    	}
	
	export default{
		name:"home",
		data(){
			return {
				home:"home",
				banner: [{
						src: '../../../static/images/home/home_headerSwiper2.png',
						href: '/detail/1007'
					},
					{
						src: '../../../static/images/home/home_headerSwiper1.png',
						href: '/detail/1009'
					}
				]
			}
		},
		mounted:function(){
			var strUrl=location.href.split('#')[0];
			console.log(strUrl)
			var resultCode = getUrlParam(strUrl,"response_type");
			console.log(resultCode)
			
		},
		components:{
			swiper
		}
		
	}
	
</script>

<style>
	
	
	
</style>