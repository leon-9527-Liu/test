import{ad as O,ae as W,_ as z,a9 as f,a5 as h,af as E,a as B,b as J,c as T,d as D,e as H,f as N,g as q,h as G,i as R,j as V,k as $,l as K,m as Q,n as X,o as Y,p as Z,q as ee,r as se,s as ne,t as ie,u as ae,v as oe,w as te,x as le,y as _e,z as ue,A as pe,B as ge,C as re,D as de,E as ce,F as me,G as ve,H as fe,I as be,J as Ae,K as he,L as Me,M as we,N as je,O as ye,P as Ie,Q as Ue,R as xe,S as Le,T as ke,U as Pe,V as Ee,W as Ce,X as ze,Y as Se,Z as Fe,$ as Oe,a0 as We,a1 as Be,a2 as Je,a3 as Te,ag as y,ah as U,a6 as s,a7 as x,a8 as L,ai as I,aj as C,aa as P,ab as c,ac as De}from"./index-BuLVqqr2.js";import{T as He,F as Ne}from"./FooterCountent-CW0h3A_Q.js";var S={exports:{}};(function(g,a){(function(b,M){g.exports=M()})(O,function(){function b(e){var n=[];return e.AMapUI&&n.push(M(e.AMapUI)),e.Loca&&n.push(v(e.Loca)),Promise.all(n)}function M(e){return new Promise(function(n,o){var l=[];if(e.plugins)for(var _=0;_<e.plugins.length;_+=1)t.AMapUI.plugins.indexOf(e.plugins[_])==-1&&l.push(e.plugins[_]);if(u.AMapUI===i.failed)o("前次请求 AMapUI 失败");else if(u.AMapUI===i.notload){u.AMapUI=i.loading,t.AMapUI.version=e.version||t.AMapUI.version,_=t.AMapUI.version;var d=document.body||document.head,r=document.createElement("script");r.type="text/javascript",r.src="https://webapi.amap.com/ui/"+_+"/main.js",r.onerror=function(p){u.AMapUI=i.failed,o("请求 AMapUI 失败")},r.onload=function(){if(u.AMapUI=i.loaded,l.length)window.AMapUI.loadUI(l,function(){for(var p=0,A=l.length;p<A;p++){var j=l[p].split("/").slice(-1)[0];window.AMapUI[j]=arguments[p]}for(n();m.AMapUI.length;)m.AMapUI.splice(0,1)[0]()});else for(n();m.AMapUI.length;)m.AMapUI.splice(0,1)[0]()},d.appendChild(r)}else u.AMapUI===i.loaded?e.version&&e.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):l.length?window.AMapUI.loadUI(l,function(){for(var p=0,A=l.length;p<A;p++){var j=l[p].split("/").slice(-1)[0];window.AMapUI[j]=arguments[p]}n()}):n():e.version&&e.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):m.AMapUI.push(function(p){p?o(p):l.length?window.AMapUI.loadUI(l,function(){for(var A=0,j=l.length;A<j;A++){var F=l[A].split("/").slice(-1)[0];window.AMapUI[F]=arguments[A]}n()}):n()})})}function v(e){return new Promise(function(n,o){if(u.Loca===i.failed)o("前次请求 Loca 失败");else if(u.Loca===i.notload){u.Loca=i.loading,t.Loca.version=e.version||t.Loca.version;var l=t.Loca.version,_=t.AMap.version.startsWith("2"),d=l.startsWith("2");if(_&&!d||!_&&d)o("JSAPI 与 Loca 版本不对应！！");else{_=t.key,d=document.body||document.head;var r=document.createElement("script");r.type="text/javascript",r.src="https://webapi.amap.com/loca?v="+l+"&key="+_,r.onerror=function(p){u.Loca=i.failed,o("请求 AMapUI 失败")},r.onload=function(){for(u.Loca=i.loaded,n();m.Loca.length;)m.Loca.splice(0,1)[0]()},d.appendChild(r)}}else u.Loca===i.loaded?e.version&&e.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):n():e.version&&e.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):m.Loca.push(function(p){p?o(p):o()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var i;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(i||(i={}));var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},u={AMap:i.notload,AMapUI:i.notload,Loca:i.notload},m={AMap:[],AMapUI:[],Loca:[]},w=[],k=function(e){typeof e=="function"&&(u.AMap===i.loaded?e(window.AMap):w.push(e))};return{load:function(e){return new Promise(function(n,o){if(u.AMap==i.failed)o("");else if(u.AMap==i.notload){var l=e.key,_=e.version,d=e.plugins;l?(window.AMap&&location.host!=="lbs.amap.com"&&o("禁止多种API加载方式混用"),t.key=l,t.AMap.version=_||t.AMap.version,t.AMap.plugins=d||t.AMap.plugins,u.AMap=i.loading,_=document.body||document.head,window.___onAPILoaded=function(p){if(delete window.___onAPILoaded,p)u.AMap=i.failed,o(p);else for(u.AMap=i.loaded,b(e).then(function(){n(window.AMap)}).catch(o);w.length;)w.splice(0,1)[0]()},d=document.createElement("script"),d.type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+l+"&plugin="+t.AMap.plugins.join(","),d.onerror=function(p){u.AMap=i.failed,o(p)},_.appendChild(d)):o("请填写key")}else if(u.AMap==i.loaded)if(e.key&&e.key!==t.key)o("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)o("不允许多个版本 JSAPI 混用");else{if(l=[],e.plugins)for(_=0;_<e.plugins.length;_+=1)t.AMap.plugins.indexOf(e.plugins[_])==-1&&l.push(e.plugins[_]);l.length?window.AMap.plugin(l,function(){b(e).then(function(){n(window.AMap)}).catch(o)}):b(e).then(function(){n(window.AMap)}).catch(o)}else if(e.key&&e.key!==t.key)o("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)o("不允许多个版本 JSAPI 混用");else{var r=[];if(e.plugins)for(_=0;_<e.plugins.length;_+=1)t.AMap.plugins.indexOf(e.plugins[_])==-1&&r.push(e.plugins[_]);k(function(){r.length?window.AMap.plugin(r,function(){b(e).then(function(){n(window.AMap)}).catch(o)}):b(e).then(function(){n(window.AMap)}).catch(o)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},u={AMap:i.notload,AMapUI:i.notload,Loca:i.notload},m={AMap:[],AMapUI:[],Loca:[]}}}})})(S);var qe=S.exports;const Ge=W(qe),Re={name:"map-view",props:{center:{type:Array,required:!0}},data(){return{map:null}},mounted(){this.initAMap()},unmounted(){var g;(g=this.map)==null||g.destroy()},methods:{initAMap(){window._AMapSecurityConfig={securityJsCode:"8171e19a6b311452d68a2418179cde4d"},Ge.load({key:"2d995450f683f77b60331255876d2622",version:"2.0",plugins:["AMap.Scale","AMap.Marker","AMap.InfoWindow"]}).then(g=>{this.map=new g.Map("container",{zoom:18,center:this.center});const a=new g.Marker({position:this.center,map:this.map,title:"白金汉爵大酒店"});new g.InfoWindow({content:"<b>白金汉爵大酒店</b>",offset:new g.Pixel(0,-30)}).open(this.map,a.getPosition())}).catch(g=>{console.log(g)})}}},Ve={id:"container"};function $e(g,a,b,M,v,i){return f(),h("div",Ve)}const Ke=z(Re,[["render",$e],["__scopeId","data-v-5248394d"]]),Qe={data(){return{imgArray:["2.jpg","sleep23.jpg","sleep21.jpg","sleep19.jpg"],screenheight:document.documentElement.clientHeight+"px",images:E.roomsimage,imagescount:E.rooms,coordinates:[121.418072,31.026839],cityinfos:{city:"上海",cityadress:"中国上海闵行路1577号",number:"021-31850888"}}},components:{MapContainer:Ke,TempHeader:He,FooterCountent:Ne},mounted(){window.onresize=()=>()=>{this.screenheight=document.documentElement.clientHeight+"px"}},methods:{getImageUrl(g){return new URL(Object.assign({"../../assets/image/19.jpg":B,"../../assets/image/2.jpg":J,"../../assets/image/20.jpg":T,"../../assets/image/21.jpg":D,"../../assets/image/22.jpg":H,"../../assets/image/23.jpg":N,"../../assets/image/24.jpg":q,"../../assets/image/36.jpg":G,"../../assets/image/37.jpg":R,"../../assets/image/38.jpg":V,"../../assets/image/canyin.jpg":$,"../../assets/image/canyin1.jpg":K,"../../assets/image/canyin2.jpg":Q,"../../assets/image/canyin3.jpg":X,"../../assets/image/canyin4.jpg":Y,"../../assets/image/changzhou.jpg":Z,"../../assets/image/cixi.jpg":ee,"../../assets/image/foods1.jpg":se,"../../assets/image/foods2.jpg":ne,"../../assets/image/foods3.jpg":ie,"../../assets/image/hangzhou.jpg":ae,"../../assets/image/hefei.jpg":oe,"../../assets/image/hunli1.jpg":te,"../../assets/image/hunli2.jpg":le,"../../assets/image/hunli3.jpg":_e,"../../assets/image/hunli4.jpg":ue,"../../assets/image/hunli5.jpg":pe,"../../assets/image/hunli7.jpg":ge,"../../assets/image/hunli9.jpg":re,"../../assets/image/nanjing.jpg":de,"../../assets/image/pinghu.jpg":ce,"../../assets/image/shanghai.jpg":me,"../../assets/image/shizhong.jpg":ve,"../../assets/image/sleep1.jpg":fe,"../../assets/image/sleep16.jpg":be,"../../assets/image/sleep19.jpg":Ae,"../../assets/image/sleep2.jpg":he,"../../assets/image/sleep20.jpg":Me,"../../assets/image/sleep21.jpg":we,"../../assets/image/sleep23.jpg":je,"../../assets/image/sleep4.jpg":ye,"../../assets/image/sleep9.jpg":Ie,"../../assets/image/wuhu.jpg":Ue,"../../assets/image/wuxi.jpg":xe,"../../assets/image/wuzhong.jpg":Le,"../../assets/image/xiangcheng.jpg":ke,"../../assets/image/yanhui10.jpg":Pe,"../../assets/image/yanhui11.jpg":Ee,"../../assets/image/yanhui12.jpg":Ce,"../../assets/image/yanhui13.jpg":ze,"../../assets/image/yanhui14.jpg":Se,"../../assets/image/yanhui15.jpg":Fe,"../../assets/image/yanhui16.jpg":Oe,"../../assets/image/yanhui17.jpg":We,"../../assets/image/yinliao.jpg":Be,"../../assets/image/yinyue.jpg":Je,"../../assets/image/zhanwei.jpg":Te})[`../../assets/image/${g}`],import.meta.url).href}}},Xe={class:"index_bgc"},Ye={class:"responsive-image"},Ze={class:"index_group"},es={class:"index_group_text"},ss={class:"img_group-content-text"},ns={class:"detailInfo"},is={class:"maptitlemap"};function as(g,a,b,M,v,i){const t=I("temp-header"),u=I("el-carousel-item"),m=I("el-carousel"),w=I("map-container"),k=I("footer-countent"),e=De("lazy");return f(),h("div",Xe,[y(t,{cityinfo:v.cityinfos},null,8,["cityinfo"]),y(m,{class:"index_banner_img",height:v.screenheight,interval:2e3},{default:U(()=>[(f(!0),h(x,null,L(v.imgArray,n=>(f(),C(u,{key:n},{default:U(()=>[P(s("img",Ye,null,512),[[e,i.getImageUrl(n)]])]),_:2},1024))),128))]),_:1},8,["height"]),a[12]||(a[12]=s("div",{class:"index_content_title"},[s("p",null,"GUEST ROOM AMENITIE"),s("p",null,"客房供应")],-1)),s("div",Ze,[(f(!0),h(x,null,L(v.images,(n,o)=>(f(),h("div",{class:"index_group_foreach",key:o},[P(s("img",null,null,512),[[e,i.getImageUrl(n.image)]]),s("div",es,[s("span",null,c(n.textone),1),a[0]||(a[0]=s("br",null,null,-1)),s("span",null,c(n.texttwo),1)])]))),128))]),a[13]||(a[13]=s("div",{class:"index_detail_title"},[s("p",null,"你的汉爵你做主"),s("br"),s("p",null,"秉承汉爵待客之道而定制的客房"),s("p",null,"享受更高品质的住宿体验以及高级楼层独有的优惠"),s("p",null,"房间面积均在55平方米以上"),s("p",null,"由移动的阴影和阴影编织而成的永恒时刻"),s("p",null,"我们提供只有在这里才能体验到的欧式贵族体验"),s("p",null,"在这里度过一段可以舒缓心灵的时光")],-1)),s("div",null,[(f(!0),h(x,null,L(v.imagescount,(n,o)=>(f(),h("div",{class:"img_group-content-foreach",key:o},[s("div",ss,[s("span",null,c(n.textone),1),a[1]||(a[1]=s("br",null,null,-1)),s("span",null,c(n.texttwo),1)]),y(m,{class:"img_group-content-foreach_group",height:v.screenheight,interval:2e3},{default:U(()=>[(f(!0),h(x,null,L(n.images,l=>(f(),C(u,{key:l},{default:U(()=>[P(s("img",null,null,512),[[e,i.getImageUrl(l)]])]),_:2},1024))),128))]),_:2},1032,["height"]),s("div",ns,[s("div",null,[a[2]||(a[2]=s("p",null,"基本信息",-1)),s("p",null,c(n.generalInformation),1),a[3]||(a[3]=s("p",null,"全部设施",-1)),s("p",null,c(n.allAmenities),1),a[4]||(a[4]=s("p",null,"洗浴用品",-1)),s("p",null,c(n.toiletries),1)]),s("div",null,[a[5]||(a[5]=s("p",null,"客房布局和家具",-1)),s("p",null,c(n.roomLayoutAndFurniture),1),a[6]||(a[6]=s("p",null,"无障碍设施",-1)),s("p",null,c(n.accessibleFacilitie),1),a[7]||(a[7]=s("p",null,"网络与通讯",-1)),s("p",null,c(n.networkingCommunications),1)]),s("div",null,[a[8]||(a[8]=s("p",null,"卫浴设施",-1)),s("p",null,c(n.bathroomFacilities),1),a[9]||(a[9]=s("p",null,"客房设施",-1)),s("p",null,c(n.roomAmenities),1),a[10]||(a[10]=s("p",null,"媒体科技",-1)),s("p",null,c(n.multimediaTechnolog),1)])])]))),128))]),s("div",is,[a[11]||(a[11]=s("p",null,"地图",-1)),y(w,{center:v.coordinates},null,8,["center"])]),s("div",null,[y(k,{cityinfo:v.cityinfos},null,8,["cityinfo"])])])}const ls=z(Qe,[["render",as],["__scopeId","data-v-a614b7b3"]]);export{ls as default};