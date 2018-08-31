function init(){
	// >>>>>>>>>>>>>>>此处设置搜索引擎
	// searchEngine 的key 必须和按钮id一致。
	searchEngine["百度"]="https://www.baidu.com/#ie=UTF-8&wd=$kw";
	searchEngine["搜上大"]="https://www.baidu.com/#ie=UTF-8&wd=$kw+site:shu.edu.cn";
	searchEngine["谷歌"]="http://www.google.com/search?q=$kw";
	searchEngine["必应"]="https://cn.bing.com/search?q=$kw";
	searchEngine["知乎"]="https://www.zhihu.com/search?q=$kw";
	searchEngine["微信"]="http://weixin.sogou.com/weixin?type=2&ie=UTF-8&query=$kw";
	searchEngine["微博"]="http://s.weibo.com/weibo/$kw";
	searchEngine["淘宝"]="https://s.taobao.com/search?q=$kw";
	searchEngine["京东"]="http://search.jd.com/Search?enc=utf-8&keyword=$kw";


	// >>>>>>>>>>>>>>>>>
	
	$(document).keydown(function(event){
		if (event.keyCode==13){
			onEnterClick();
		}
	});

	for(var x in searchEngine){
		$("#"+x).click(function(){
			onSearch(getSearchText(),searchEngine[this.id]);
		});
	}
}
function onEnterClick(){
	onSearch(getSearchText(),searchEngine["百度"]);
}
function onSearch(text,url){
	var url2=url.replace("$kw",text);
	window.open(url2);
}
function getSearchText(){
	return $("#searchEdit").val();
}
var searchEngine=new Array();
init();
