// share.this.js
$(document).ready(function(){if($(".addthis_toolbox").length>0){initShareThisToolbox();}
if($(".form-sendthis").length>0){$(".btn-sendthis").click(function(){$(".btn").attr("disabled","disabled");var lFrom=$("#from").val(),lTo=$("#to").val(),lNote=$("#note").val(),lBy=$("#by").val(),lUrl=$("#url").val(),lTitle=$("#title").val(),lPre=$("#pre").val();var data=eval('({ from: "'+encodeURI(lFrom)+'", to: "'+encodeURI(lTo)+'", note: "'+encodeURI(lNote)+'", by: "'+lBy+'", url: "'+encodeURI(lUrl)+'", title: "'+encodeURI(lTitle)+'", pre: "'+encodeURI(lPre)+'" })');$.post("/sharethis.jsp",data,function(result){if(result.status==200){$(".success").css("display","block");}else{$(".btn").removeAttr("disabled");if(result.invalid){$(".failure").css("display","block");if(result.invalid.from){$("#from").addClass("invalid-field").focus();}
if(result.invalid.to){$("#to").addClass("invalid-field").focus();}}}},"json");});$("#from, #to").blur(function(){if($(this).val().length==0){return;}
$(this).removeClass("invalid-field");if($(".invalid-field").length==0){$(".failure").css("display","");}});$(".success .fakeAnchor").click(function(){$(".success").css("display","");$(".btn").removeAttr("disabled");$("#to").focus();});setTimeout(function(){$("#to").focus();},200);}});function initShareThisToolbox(){var lParam="&url="+encodeURIComponent(window.location.href)+"&title="+encodeURIComponent(document.title)+"&pre="+encodeURIComponent(document.referrer);$(".addthis_toolbox a").each(function(){$(this).attr("href","/sharethis.jsp?by="+this.className+lParam).html("<span class='share-this'></span>");});$(".addthis_toolbox .facebook").attr("title","Send to Facebook").attr("target","_blank");$(".addthis_toolbox .linkedin").attr("title","Send to Linkedin").attr("target","_blank");$(".addthis_toolbox .digg").attr("title","Digg This").attr("target","_blank");$(".addthis_toolbox .delicious").attr("title","Send to Delicious").attr("target","_blank");$(".addthis_toolbox .twitter").attr("title","Tweet This").removeAttr("href").click(function(){var width=550,height=450;var left=parseInt((screen.availWidth/2)-(width/2));var top=parseInt((screen.availHeight/2)-(height/2));window.open("/sharethis.jsp?by="+this.className+lParam,this.className,"width="+width+",height="+height+",left="+left+",top="+top);});$(".addthis_toolbox .gmail").attr("title","Send by Gmail").attr("target","_blank");$(".addthis_toolbox .email").attr("title","Send by Email").addClass("layer-inline iframe").attr("layerWidth","300").attr("layerHeight","350");}

// jquery.jixedbar-0.0.5.src.js
(function($){$.extend({jixedbar:new function(options){var constants={constOverflow:"hidden",constBottom:"0px"};var defaults={showOnTop:false,transparent:false,opacity:0.9,opaqueSpeed:"fast",slideSpeed:"fast",roundedCorners:false,roundedButtons:false,menuFadeSpeed:150,tooltipFadeSpeed:"slow",tooltipFadeOpacity:0.8};var options=$.extend(defaults,options);var ie6=(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)==4&&navigator.appVersion.indexOf("MSIE 6.0")!=-1);var ie7=(document.all&&!window.opera&&window.XMLHttpRequest);var button_active=false;var active_button_name="";var element_obj;var tooNarrow=false;if($.browser.msie){function getIEVersion()
{var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)
rv=parseFloat(RegExp.$1);}
return rv;}
var msieVersion=getIEVersion();ie6=(msieVersion==6);ie7=(msieVersion==7);}
this.construct=function(){return this.each(function(){var obj=$(this);var barImpl=obj.children(".jx-bar-impl");var hideBar=false;element_obj=obj;this.hideBar=true;$("html").css({"height":"100%"});$("body").css({"margin":"0px","height":"100%"});pos="fixed";$(this).css({"overflow":constants["constOverflow"],"position":pos});if(defaults.showOnTop){$(this).css({"top":constants["constBottom"]});}else{$(this).css({"bottom":constants["constBottom"]});}
$(this).addClass("jx-bar");$(this).addClass("jx-bar-button");if(barImpl.width()>$(window).width()){tooNarrow=true;obj.css("width",barImpl.css("width"));}
$("img",obj).css({"vertical-align":"bottom","border":"#fff solid 0px"});$(this).find("img").each(function(){if($(this).attr("alt")!=""){altName="&nbsp;"+$(this).attr("alt");$(this).parent().append(altName);}});if(defaults.transparent){$(this).fadeTo(defaults.opaqueSpeed,defaults.opacity);}
$("<div />").attr("id","jx-menu-con-id").appendTo("body");if(defaults.transparent){$("#jx-menu-con-id").fadeTo(defaults.opaqueSpeed,defaults.opacity);}
if(this.hideBar){$(this).css({"display":"none"});}
$("<div />").attr("id","jx-ttip-con-id").appendTo("body");$("#jx-ttip-con-id").css({"height":"auto","margin-left":"0px","width":"100%","overflow":constants["constOverflow"],"position":pos});if(defaults.showOnTop){$("#jx-ttip-con-id").css({"margin-top":$(this).height()+6,"top":constants["constBottom"]});}else{$("#jx-ttip-con-id").css({"margin-bottom":$(this).height()+6,"bottom":constants["constBottom"]});}
$("li",obj).each(function(){var _title=$(this).attr("title");if(_title!=""){$(this).removeAttr("title");$(this).attr("alt",_title);}});$("li",obj).hover(function(){var elemID=$(this).attr("id");var barTooltipID=elemID+"jx-ttip-id";var tooltipTitle=$(this).attr("title");if(tooltipTitle==""){tooltipTitle=$(this).attr("alt");}
if(tooltipTitle!=""){barTooltipWrapperID=barTooltipID+"_wrapper";$("<div />").attr("id",barTooltipWrapperID).appendTo("#jx-ttip-con-id");$("<div />").attr("id",barTooltipID).appendTo("#"+barTooltipWrapperID);$("#"+barTooltipID).css({"float":"left"});if((defaults.showOnTop)&&!($.browser.msie&&ie6)){$("<div />").addClass("jx-tool-point-dir-up").appendTo("#"+barTooltipID);}
if(tooltipTitle!=undefined){$("<div />").html(tooltipTitle).addClass("jx-bar-button-tooltip").appendTo("#"+barTooltipID);}
if((!defaults.showOnTop)&&!($.browser.msie&&ie6)){$("<div />").addClass("jx-tool-point-dir-down").appendTo("#"+barTooltipID);}
lft_pad=parseInt($(this).css("padding-left"));$("#"+barTooltipWrapperID).css({"margin-left":($(this).offset().left-($("#"+barTooltipID).width()/2))+($(this).width()/2)+lft_pad});if((($(this).find("a:first").attr("name")=="")||(button_active==false))){$("#"+barTooltipID).fadeTo(defaults.tooltipFadeSpeed,defaults.tooltipFadeOpacity);}else if(active_button_name!=$(this).find("a:first").attr("name")){$("#"+barTooltipID).fadeTo(defaults.tooltipFadeSpeed,defaults.tooltipFadeOpacity);}else{$("#"+barTooltipID).css({"display":"none"});}}},function(){var elemID=$(this).attr("id");var barTooltipID=elemID+"jx-ttip-id";var barTooltipWrapperID=barTooltipID+"_wrapper";$("#"+barTooltipID).remove();$("#"+barTooltipWrapperID).remove();});if($.browser.msie&&ie6){$(this).find("li").each(function(){$(this).find("img").each(function(){imgPath=$(this).attr("src");altName=$(this).attr("alt");if(altName==""){altName="&nbsp;&nbsp;"+$(this).attr("title");}
srcText=$(this).parent().html();$(this).parent().html('<span style="cursor:pointer;display:inline-block;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+imgPath+'\');">'+srcText+'</span>&nbsp;'+altName);});$(this).find("img").each(function(){$(this).attr("style","filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);");});});}
$(window).resize(function(){var marginLeft=0;if(barImpl.width()>$(window).width()){tooNarrow=true;obj.css("width",barImpl.css("width"));marginLeft=0-getPageScrollX();}else{tooNarrow=false;obj.css("width",null);}
$(obj).css({"margin-left":marginLeft});$("#jx-uhid-con-id").css({"margin-left":($(obj).offset().left+$(obj).width())-$("#jx-uhid-con-id").width()});if(button_active){$("#jx-menu-con-id").css({"margin-left":$("#"+active_button_name).parent().offset().left});}}).scroll(function(){if(!tooNarrow){return;}
var marginLeft=0-getPageScrollX();obj.css({"margin-left":marginLeft});});$("body").click(__hideJxMenuContainer);$("li",obj).find("ul").each(function(){$(this).css({"display":"none"});});i=1;$("li",obj).find("ul").each(function(){$(this).attr("id","nav"+i);$(this).parent().find("a:first").removeAttr("href");$(this).parent().find("a:first").attr("name","nav"+i);$(this).parent().find("a:first").click(function(){var elemID=$(this).attr("id");var barTooltipID=elemID+"jx-ttip-id";var barTooltipWrapperID=barTooltipID+"_wrapper";$("#"+barTooltipID).remove();$("#"+barTooltipWrapperID).remove();if((button_active)&&(active_button_name==$(this).attr("name"))){$("#jx-menu-con-id").animate({"marginBottom":$(obj).height()-$("#jx-menu-con-id").height()},defaults.menuFadeSpeed,function(){var content=$("#jx-menu-con-id").children(":first");content.css({"display":"none"}).appendTo(content.data('parent'));});$(this).parent().removeClass("jx-nav-menu-active");if(defaults.roundedButtons){$(this).parent().removeClass("jx-nav-menu-active-rounded");}
button_active=false;active_button_name="";$(this).blur();}else{var content=$(this).next();content.data("parent",content.parent()).css({"display":"block"}).appendTo($("#jx-menu-con-id"));$("#jx-menu-con-id").css({"overflow":constants["constOverflow"],"position":pos,"margin-left":$(this).parent().offset().left});$("#jx-menu-con-id").addClass("jx-nav-menu");if($.browser.msie&&ie6){$("#jx-menu-con-id ul li a").css({"width":"100%"});}
if(defaults.roundedButtons){$("#jx-menu-con-id").addClass("jx-nav-menu-rounded");}
$(this).parent().addClass("jx-nav-menu-active");if(defaults.roundedButtons){$(this).parent().addClass("jx-nav-menu-active-rounded");}
if(defaults.showOnTop){$("#jx-menu-con-id").css({"top":constants["constBottom"],"margin-top":$(obj).height()});}else{$("#jx-menu-con-id").css({"bottom":constants["constBottom"],"margin-bottom":$(obj).height()-$("#jx-menu-con-id").height()});}
if(active_button_name!=""){$("a[name='"+active_button_name+"']").parent().removeClass("jx-nav-menu-active");$("a[name='"+active_button_name+"']").parent().removeClass("jx-nav-menu-active-rounded");}
button_active=true;active_button_name=$(this).attr("name");$(this).blur();$("#jx-menu-con-id").animate({"marginBottom":obj.height()-1},defaults.menuFadeSpeed);}
return false;});i=i+1;});var lIsShown=$.cookie.get('toolbar_shown');if(lIsShown){setTimeout(function(){$(obj).slideToggle(1);},10);}else{setTimeout(function(){$(obj).slideToggle(defaults.slideSpeed);},500);}
$.cookie.set('toolbar_shown',true,new Date(new Date().getTime()+(1000*60*60*24*30)),"/");});};this.getOptions=function(){return options;};this.isIE6=function(){return ie6;};this.isIE7=function(){return ie7;};this.hasActiveButton=function(){return button_active;};this.getActiveButtonName=function(){return active_button_name;};this.getTooltipObject=function(){return $("#jx-ttip-con-id");};this.createObjectContainer=function(name){name=typeof(name)!='undefined'?name:"jx-obj-con-id";$("<div />").attr("id",name).appendTo("body");$("#"+name).css({"height":"auto","margin-left":"0px","width":"100%","overflow":constants["constOverflow"],"position":pos});if(defaults.showOnTop){$("#"+name).css({"margin-top":$(element_obj).height()+6,"top":constants["constBottom"]});}else{$("#"+name).css({"margin-bottom":$(element_obj).height()+6,"bottom":constants["constBottom"]});}
return $("#"+name);};}});$.fn.extend({jixedbar:$.jixedbar.construct});})(jQuery);jQuery.fn.exists=function(){return jQuery(this).length>0;};var __hideJxMenuContainer=function(){var content=$("#jx-menu-con-id").children(":first");if(content.length==0){return;}
$("a[name='"+content.attr("id")+"']").click();}
function getPageScrollX(){var xScroll;if(self.pageXOffset){xScroll=self.pageXOffset;}else if(document.documentElement&&document.documentElement.scrollTop){xScroll=document.documentElement.scrollLeft;}else if(document.body){xScroll=document.body.scrollLeft;}
return xScroll;}
$(document).ready(function(){if($.browser.mobile){$("body").addClass("mobile");}
$("#sticky-bar").jixedbar();$(".jx-bar .addthis_toolbox span.share-this").each(function(){var lShareThisItem=$(this);var lShareThisLink=lShareThisItem.parent();lShareThisItem.html(lShareThisLink.attr("title"));lShareThisLink.removeAttr("title");});$(".jx-bar a.share_toolbox").hover(function(){showShareThisPopup();},function(){hideShareThisPopup();});$("#jx-menu-con-id").hover(function(){showShareThisPopup();},function(){hideShareThisPopup();});});var _pendingHideShareThisPopup;function hideShareThisPopup(){if(_pendingHideShareThisPopup!=null){clearTimeout(_pendingHideShareThisPopup);_pendingHideShareThisPopup=null;}
_pendingHideShareThisPopup=setTimeout(function(){_pendingHideShareThisPopup=null;if($("#jx-menu-con-id").children().length>0){$(".jx-bar a.share_toolbox").click();}},250);}
function showShareThisPopup(){if(_pendingHideShareThisPopup!=null){clearTimeout(_pendingHideShareThisPopup);_pendingHideShareThisPopup=null;}
if($("#jx-menu-con-id").children().length==0){$(".jx-bar a.share_toolbox").click();}}
jQuery.extend({cookie:{get:function(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null;}
else{begin+=2;}
var end=document.cookie.indexOf(";",begin);if(end==-1){end=dc.length;}
return unescape(dc.substring(begin+prefix.length,end));},set:function(name,value,expires,path,domain,secure){if(expires==undefined){expires=new Date(new Date().getTime()+(1000*60*60*24*365));}
if(path==undefined){path="/";}
document.cookie=name+"="+escape(value)+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"")+((secure)?"; secure":"");}}});function __showTranslationHint(aHintText){if($.cookie.get("translation-hint-shown")||aHintText=='null'){return;}
$("#translation-hint .translation-hint-text").text(aHintText);setTimeout(function(){var lHintOffset=($("#google_translate_element").width()-$("#translation-hint").width())/2;var lToolbarLeft=$(".jx-bar-impl").position().left;if($.browser.msie){lToolbarLeft=($(window).width()-$(".jx-bar-impl").width())/2
if(lToolbarLeft<0){lToolbarLeft=0;}}
$("#translation-hint").css({"display":'block',"margin-left":lToolbarLeft+$("#google_translate_element").position().left+lHintOffset}).animate({"marginBottom":24,"opacity":1},1000,function(){$.cookie.set("translation-hint-shown",true);}).click(function(){$(this).css({"display":'none'});});},1000);}

// jquery.includeMany-1.2.0.min.js
(function($){$.chainclude=function(urls,finaly){var onload=function(callback,data){if(typeof urls.length!="undefined"){if(urls.length==0){return $.isFunction(finaly)?finaly(data):null}urls.shift();return $.chainclude.load(urls,onload)}for(var item in urls){urls[item](data);delete urls[item];var count=0;for(var i in urls){count++}return(count==0)?$.isFunction(finaly)?finaly(data):null:$.chainclude.load(urls,onload)}};$.chainclude.load(urls,onload)};$.chainclude.load=function(urls,onload){if(typeof urls=="object"&&typeof urls.length=="undefined"){for(var item in urls){return $.include.load(item,onload,urls[item].callback)}}urls=$.makeArray(urls);$.include.load(urls[0],onload,null)};$.include=function(urls,finaly){var luid=$.include.luid++;var onload=function(callback,data){if($.isFunction(callback)){callback(data)}if(--$.include.counter[luid]==0&&$.isFunction(finaly)){finaly()}};if(typeof urls=="object"&&typeof urls.length=="undefined"){$.include.counter[luid]=0;for(var item in urls){$.include.counter[luid]++}return $.each(urls,function(url,callback){$.include.load(url,onload,callback)})}urls=$.makeArray(urls);$.include.counter[luid]=urls.length;$.each(urls,function(i,val){$.include.load(val,onload,null)})};$.extend($.include,{luid:0,counter:[],load:function(url,onload,callback){if($.include.exist(url)){return onload(callback)}if(/.css$/.test(url)){$.include.loadCSS(url,onload,callback)}else{if(/.js$/.test(url)){$.include.loadJS(url,onload,callback)}else{$.get(url,function(data){onload(callback,data)})}}},loadCSS:function(url,onload,callback){var css=document.createElement("link");css.setAttribute("type","text/css");css.setAttribute("rel","stylesheet");css.setAttribute("href",url);$("head").get(0).appendChild(css);$.browser.msie?$.include.IEonload(css,onload,callback):onload(callback)},loadJS:function(url,onload,callback){var js=document.createElement("script");js.setAttribute("type","text/javascript");js.setAttribute("src",url);$.browser.msie?$.include.IEonload(js,onload,callback):js.onload=function(){onload(callback)};$("head").get(0).appendChild(js)},IEonload:function(elm,onload,callback){elm.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){onload(callback)}}},exist:function(url){var fresh=false;$("head script").each(function(){if(/.css$/.test(url)&&this.href==url){return fresh=true}else{if(/.js$/.test(url)&&this.src==url){return fresh=true}}});return fresh}})})(jQuery);

//inline.media.js
$.include(['/script/fancybox/jquery.fancybox-1.2.6.pack.js','/script/fancybox/jquery.fancybox-1.2.6.css'],function(){$(document).ready(function(){var inlineDemos=$(".media-inline");jQuery.each(inlineDemos,function(i,val){var valObj=$(val);var embeddedObj=$(valObj.attr("href")).find(":first-child");var width=embeddedObj.attr("width");var height=embeddedObj.attr("height");valObj.fancybox({'zoomSpeedIn':300,'zoomSpeedOut':300,'zoomSpeedChange':300,'overlayShow':true,'overlayOpacity':0.7,'padding':0,'frameWidth':eval(width),'frameHeight':eval(height),'hideOnContentClick':false});});$(".screenshot-inline").fancybox({'zoomSpeedIn':300,'zoomSpeedOut':300,'zoomSpeedChange':300,'overlayShow':true,'overlayOpacity':0.7,'padding':0,'callbackOnStart':function(){$(document).bind('keydown',fancyLoadingKeyDownHandler);},'callbackOnShow':function(){$(document).unbind('keydown',fancyLoadingKeyDownHandler);},'imageScale':!$.browser.msie,'centerOnScroll':!$.browser.msie});$(".layer-inline").each(function(){registerInlineLayerOverlay(this);});$(".dialog-inline").each(function(){var valObj=$(this);var dialogLayer=$(valObj.attr("href"));var width=dialogLayer.attr("width");var height=dialogLayer.attr("height");var openedCallback=dialogLayer.attr("openedCallback");var closedCallback=dialogLayer.attr("closedCallback");var layer=valObj.fancybox({'zoomSpeedChange':0,'overlayShow':true,'overlayOpacity':0.7,'padding':0,'frameWidth':eval(width),'frameHeight':eval(height),'hideOnContentClick':false,'callbackOnShow':eval(openedCallback),'callbackOnClose':eval(closedCallback)});});});});function registerInlineLayerOverlay(aElem){var valObj=$(aElem);var width=valObj.attr("layerWidth");var height=valObj.attr("layerHeight");valObj.fancybox({'zoomSpeedIn':300,'zoomSpeedOut':300,'zoomSpeedChange':300,'overlayShow':true,'overlayOpacity':0.7,'padding':0,'frameWidth':eval(width),'frameHeight':eval(height),'callbackOnClose':function(){$("#fancy_content").text("");}});}
var fancyLoadingKeyDownHandler=function(e){if(e.keyCode==27&&$("#fancy_loading").css('display')=='block'){$.fn.fancybox.close();}}
function __closeFancybox(){$.fn.fancybox.close();}

// detectmobilebrowser.js
(function(a){jQuery.browser.mobile=/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

// util
function validEmail(emailAddress){var pattern=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return pattern.test(emailAddress);}