//attr方法

//获取属性
$("meta").attr("charset");

//设置属性
console.log($("li").attr("name", "test"));

var i = 0,
	len = $("li").length;
$("li").attr("title", "666");
while(i < len){
	$("li").eq(i).attr("name", "test" +i);
	console.log($("li:eq(" + i + ")").attr("name"));
	i++;
}
console.log($("li").attr("name"));