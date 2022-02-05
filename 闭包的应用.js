
//JS模块
//具有特定功能的JS文件
//将所有的数据和功能都封装在一个函数内部（私有的）
//只向外暴露一个包含n个方法的对象和函数
//模块的使用者，只需要通过模块暴露的对象调用方法来实现对应功能
function myModule(){
	//私有数据
	let msg = "xxx";
	//操作数据的函数
	function doSomething(){
		console.log("doSomething() " + msg.toUpperCase());
	}

	function doOtherthing(){
		console.log("doOtherthing() " + msg.toLowerCase());
	}
	//向外暴露的对象
	return{
		doSomething: doSomething,
		doOtherthing: doOtherthing
	}
}

(function(window){
	//私有数据
	let msg = "xxx";
	//操作数据的函数
	function doSomething(){
		console.log("doSomething() " + msg.toUpperCase());
	}

	function doOtherthing(){
		console.log("doOtherthing() " + msg.toLowerCase());
	}
	//向外暴露的对象
	window.myModule2 = {
		doSomething: doSomething,
		doOtherthing: doOtherthing
	}
})(window)

//闭包的缺点
//函数执行完后，函数的局部变量没有释放，占用内存时间会变成
//容易造成内存泄露
//!!能不用闭包就不用 及时释放