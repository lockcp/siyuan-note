(function(e){function t(t){for(var a,l,c=t[0],i=t[1],u=t[2],b=0,s=[];b<c.length;b++)l=c[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&s.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(s.length)s.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0312":function(e,t,n){"use strict";n("ccb3")},"0663":function(e,t,n){"use strict";n("932c")},"40a2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["gb"])("data-v-3553bc4e");Object(a["H"])("data-v-3553bc4e");var o={id:"app"},l={id:"header"},c={class:"folder-infor"},i={class:"folder-name"},u={class:"total-number"},d={class:"button-grounp"},b=Object(a["m"])("刷新"),s={class:"set-order-type action-btn"},p={class:"set-order-type action-btn"},f={class:"set-page-size action-btn"},O={class:"set-view-type action-btn"},j={id:"content","element-loading-text":"拼命加载中"},v={key:0,id:"page-nav"};Object(a["F"])();var g=r((function(e,t,n,g,h,m){var w=Object(a["N"])("el-button"),y=Object(a["N"])("el-option"),_=Object(a["N"])("el-select"),k=Object(a["N"])("el-empty"),T=Object(a["N"])("el-pagination"),E=Object(a["O"])("loading");return Object(a["E"])(),Object(a["j"])("div",o,[Object(a["n"])("div",l,[Object(a["n"])("div",c,[Object(a["n"])("span",i,Object(a["R"])(e.folderName),1),Object(a["n"])("span",u,Object(a["R"])(e.totalNumber)+" 篇笔记",1)]),Object(a["n"])("div",d,[Object(a["n"])(w,{size:"mini",icon:"el-icon-refresh",onClick:t[1]||(t[1]=function(t){return e.getData()})},{default:r((function(){return[b]})),_:1}),Object(a["n"])("span",s,[Object(a["n"])(_,{modelValue:e.orderType,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.orderType=t}),placeholder:"排序类型",size:"mini",disabled:"KanbanView"===e.viewType,onChange:t[3]||(t[3]=function(t){return e.getData()})},{default:r((function(){return[(Object(a["E"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(e.orderTypeOptions,(function(e){return Object(a["E"])(),Object(a["j"])(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]),Object(a["n"])("span",p,[Object(a["n"])(_,{modelValue:e.orderField,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.orderField=t}),placeholder:"排序字段",size:"mini",disabled:"KanbanView"===e.viewType,onChange:t[5]||(t[5]=function(t){return e.getData()})},{default:r((function(){return[(Object(a["E"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(e.orderFieldOptions,(function(e){return Object(a["E"])(),Object(a["j"])(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]),Object(a["n"])("span",f,[Object(a["n"])(_,{modelValue:e.pageSize,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.pageSize=t}),placeholder:"分页大小",size:"mini",disabled:"CalendarView"===e.viewType||"KanbanView"===e.viewType,onChange:t[7]||(t[7]=function(t){return e.getData()})},{default:r((function(){return[(Object(a["E"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(e.pageSizeOptions,(function(e){return Object(a["E"])(),Object(a["j"])(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]),Object(a["n"])("span",O,[Object(a["n"])(_,{modelValue:e.viewType,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.viewType=t}),placeholder:"视图类型",size:"mini",onChange:t[9]||(t[9]=function(t){return e.getData()})},{default:r((function(){return[(Object(a["E"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(e.viewTypeOptions,(function(e){return Object(a["E"])(),Object(a["j"])(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])])])]),Object(a["db"])(Object(a["n"])("div",j,[e.compData?(Object(a["E"])(),Object(a["j"])(a["c"],{key:0},[(Object(a["E"])(),Object(a["j"])(Object(a["P"])(e.viewType),{data:e.compData},null,8,["data"]))],1024)):(Object(a["E"])(),Object(a["j"])(k,{key:1,description:"内容为空"}))],512),[[E,e.loading]]),e.showPageNav?(Object(a["E"])(),Object(a["j"])("div",v,[Object(a["n"])(T,{small:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":e.currentPage,"onUpdate:current-page":t[10]||(t[10]=function(t){return e.currentPage=t}),"page-size":e.pageSize,total:e.totalNumber,onNextClick:e.setPageNumber,onCurrentChange:e.setPageNumber},null,8,["current-page","page-size","total","onNextClick","onCurrentChange"])])):Object(a["k"])("",!0)])})),h=n("1da1"),m=(n("ac1f"),n("1276"),n("a15b"),n("159b"),n("fb6a"),n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("5319"),n("bc3a")),w=n.n(m);n("466d");function y(e){console.log(e)}function _(e){if(e&&0!=e.length){for(var t=0;t<e.length;t++){var n=e[t].ial,a=/background-image:url\(assets\/(.*)\);{1}?/,r=n.match(a);if(r){var o="http://127.0.0.1:6806/assets/";e[t].cover="background-image:url('"+o+r[1]+"');"}else{var l=/background-image:(.*?)["|;]/,c=n.match(l);e[t].cover=c?"background-image:"+c[1]:null}}return e}return e}var k={IS_TEST:!0,TEST_URL:"http://127.0.0.1:6806",PROD_URL:"http://127.0.0.1:6806",viewTypeOptions:[{value:"DashboardView",label:"Dashboard"},{value:"CardView",label:"卡片视图"},{value:"TableView",label:"表格视图"},{value:"ListView",label:"列表视图"},{value:"CalendarView",label:"日历视图"},{value:"KanbanView",label:"看板视图"}],orderFieldOptions:[{value:"created",label:"创建日期"},{value:"updated",label:"更新日期"}],orderTypeOptions:[{value:"ASC",label:"升序"},{value:"DESC",label:"降序"}],pageSizeOptions:[{value:6,label:"分页：6"},{value:10,label:"分页：10"},{value:20,label:"分页：20"}]};function T(e){var t;return t=k.IS_TEST?k.TEST_URL:k.PROD_URL,new Promise((function(n,a){w.a.post(t+"/api/query/sql",{stmt:e}).then((function(e){200==e.status&&(0==e.data.code?n(e.data.data):a(e.data))})).catch((function(e){a(e)}))}))}function E(e){return S.apply(this,arguments)}function S(){return S=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=regeneratorRuntime.mark((function e(n){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t[n].id,r="SELECT * FROM attributes WHERE block_id = '"+a+"'",e.next=4,T(r);case 4:o=e.sent,o.forEach((function(e){var a=e.name;a=a.replace(/-/g,"_"),t[n][a]=e.value}));case 6:case"end":return e.stop()}}),e)})),a=0;case 2:if(!(a<t.length)){e.next=7;break}return e.delegateYield(n(a),"t0",4);case 4:a++,e.next=2;break;case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function x(e,t,n,r,o,l){return Object(a["E"])(),Object(a["j"])("div",null,"dash")}var N={props:{data:null},methods:{openNote:function(e){window.open("siyuan://blocks/"+e,"_blank")}}};N.render=x;var P=N,V={id:"table-view"};function z(e,t,n,r,o,l){var c=Object(a["N"])("el-table-column"),i=Object(a["N"])("el-tag"),u=Object(a["N"])("el-table");return Object(a["E"])(),Object(a["j"])("div",V,[Object(a["n"])(u,{data:n.data,border:"",style:{width:"100%"}},{default:Object(a["cb"])((function(){return[Object(a["n"])(c,{prop:"content",label:"标题",sortable:"","min-width":"150"},{default:Object(a["cb"])((function(e){return[Object(a["n"])("div",{class:"title",onClick:function(t){return l.openNote(e.row.id)}},[Object(a["n"])("span",null,Object(a["R"])(e.row.content),1)],8,["onClick"])]})),_:1}),Object(a["n"])(c,{prop:"new_created",label:"创建日期",width:"150"}),Object(a["n"])(c,{prop:"new_updated",label:"更新日期",width:"150"}),Object(a["n"])(c,{prop:"custom_lz_priority",label:"优先级",filters:[{text:"P0",value:"P0"},{text:"P1",value:"P1"},{text:"P2",value:"P2"},{text:"P3",value:"P3"}],"filter-method":l.filterPriority,"filter-placement":"bottom-end",width:"100"},{default:Object(a["cb"])((function(e){return[e.row.custom_lz_priority?(Object(a["E"])(),Object(a["j"])(i,{key:0,type:"success","disable-transitions":""},{default:Object(a["cb"])((function(){return[Object(a["m"])(Object(a["R"])(e.row.custom_lz_priority),1)]})),_:2},1024)):Object(a["k"])("",!0)]})),_:1},8,["filter-method"]),Object(a["n"])(c,{prop:"custom_lz_todo",label:"待办",width:"100",filters:[{text:"doing",value:"doing"},{text:"done",value:"done"}],"filter-method":l.filterTodo,"filter-placement":"bottom-end"},{default:Object(a["cb"])((function(e){return[e.row.custom_lz_todo?(Object(a["E"])(),Object(a["j"])(i,{key:0,type:"primary","disable-transitions":""},{default:Object(a["cb"])((function(){return[Object(a["m"])(Object(a["R"])(e.row.custom_lz_todo),1)]})),_:2},1024)):Object(a["k"])("",!0)]})),_:1},8,["filter-method"]),Object(a["n"])(c,{prop:"memo",label:"备注"})]})),_:1},8,["data"])])}var D={props:{data:null},methods:{openNote:function(e){window.open("siyuan://blocks/"+e,"_blank")},filterPriority:function(e,t){return t.custom_lz_priority==e},filterTodo:function(e,t){return t.custom_lz_todo===e}}};D.render=z;var R=D,C=Object(a["gb"])("data-v-16d260eb");Object(a["H"])("data-v-16d260eb");var L={id:"list-view"},F={class:"title"};Object(a["F"])();var A=C((function(e,t,n,r,o,l){return Object(a["E"])(),Object(a["j"])("div",L,[(Object(a["E"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(n.data,(function(e){return Object(a["E"])(),Object(a["j"])("div",{class:"list-item",key:e.id},[Object(a["n"])("span",F,Object(a["R"])(e.content),1)])})),128))])})),I={props:{data:null},methods:{openNote:function(e){window.open("siyuan://blocks/"+e,"_blank")}}};n("f338");I.render=A,I.__scopeId="data-v-16d260eb";var U=I,W=Object(a["gb"])("data-v-612abec8");Object(a["H"])("data-v-612abec8");var K={id:"card-view"},M={class:"list"},H=Object(a["n"])("div",{class:"cover"},null,-1),B={class:"note-content"},J={class:"title"},Q={class:"date"},q={class:"date"};Object(a["F"])();var Y=W((function(e,t,n,r,o,l){var c=Object(a["N"])("el-card");return Object(a["E"])(),Object(a["j"])("div",K,[Object(a["n"])("div",M,[(Object(a["E"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(n.data,(function(e){return Object(a["E"])(),Object(a["j"])("div",{class:"card",key:e.id},[Object(a["n"])(c,{"body-style":{padding:"0px"},shadow:"hover"},{default:W((function(){return[H,Object(a["n"])("div",B,[Object(a["n"])("div",J,Object(a["R"])(e.content),1),Object(a["n"])("div",Q,"创建日期："+Object(a["R"])(e.new_created),1),Object(a["n"])("div",q,"更新日期："+Object(a["R"])(e.new_updated),1)])]})),_:2},1024)])})),128))])])})),$={props:{data:null},methods:{openNote:function(e){window.open("siyuan://blocks/"+e,"_blank")}}};n("cec0");$.render=Y,$.__scopeId="data-v-612abec8";var G=$,X={id:"calendar-view"};function Z(e,t,n,r,o,l){return Object(a["E"])(),Object(a["j"])("div",X,"calendar")}var ee={props:{data:null},methods:{openNote:function(e){window.open("siyuan://blocks/"+e,"_blank")}}};ee.render=Z;var te=ee,ne={id:"kanban-view"};function ae(e,t,n,r,o,l){return Object(a["E"])(),Object(a["j"])("div",ne," kanban ")}var re={props:{data:null},methods:{openNote:function(e){window.open("siyuan://blocks/"+e,"_blank")}}};re.render=ae;var oe=re,le=Object(a["o"])({name:"App",components:{Dashboard:P,CardView:G,ListView:U,TableView:R,CalendarView:te,KanbanView:oe},data:function(){return{blockId:null,attributes:null,noteBox:null,folderPath:null,folderName:"思源笔记",viewType:"TableView",pageSize:6,pageOffset:0,currentPage:2,totalNumber:0,orderField:"updated",orderType:"DESC",totalData:null,pageData:null,compData:null,viewOptions:null,orderOptions:null,pageSizeOptions:null,loading:!1}},computed:{showPageNav:function(){return"CalendarView"!=this.viewType&&"KanbanView"!=this.viewType}},methods:{initWidget:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.viewTypeOptions=k.viewTypeOptions,e.orderTypeOptions=k.orderTypeOptions,e.orderFieldOptions=k.orderFieldOptions,e.pageSizeOptions=k.pageSizeOptions,t.next=7,e.getWidgetSettings("20210625102657-s414327");case 7:if(!t.sent){t.next=9;break}e.getData();case 9:t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),e.loading=!1,console.log("%c[initWidget]挂件初始化出错：","color: red"),y(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},getWidgetSettings:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,r,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a="SELECT b.id AS id, b.box AS box, b.type AS type, b.path AS path, a.name AS attrName, a.value AS attrValue FROM blocks AS b LEFT JOIN attributes AS a ON b.id = a.block_id WHERE b.id = '"+e+"'",n.prev=1,n.next=4,T(a);case 4:return r=n.sent,t.attributes=r,t.noteBox=r[0].box,o=r[0].path.split("/"),o.pop(),o=o.join("/")+"/",t.folderPath=o,l=t.parseFolderName(o),l&&(t.folderName=l),r.forEach((function(e){var n=e.attrName;"custom-lz-order-type"==n&&(t.orderType=e.attrValue,console.log("ordertype："+t.orderType)),"custom-lz-order-field"==n&&(t.orderField=e.attrValue,console.log("orderfield："+t.orderField)),"custom-lz-page-size"==n&&(t.pageSize=parseInt(e.attrValue),console.log("pagesize："+t.pageSize)),"custom-lz-view-type"==n&&(t.viewType=e.attrValue,console.log("viewtype："+t.viewType))})),n.abrupt("return",!0);case 17:n.prev=17,n.t0=n["catch"](1),console.log("%c[getWidgetSettings]获取挂件块属性出错：","color: red"),y(n.t0);case 21:case"end":return n.stop()}}),n,null,[[1,17]])})))()},parseFolderName:function(e){var t=e.split("/"),n=t.length-2;return t[n]},createSQL:function(){var e="",t="";this.noteBox&&(e=" AND box='"+this.noteBox+"'"),this.folderPath&&(t=" AND path LIKE '%"+this.folderPath+"%'"),"降序"==this.orderType&&(this.orderType="DESC"),"升序"==this.orderType&&(this.orderType="ASC");var n=" ORDER BY "+this.orderField+" "+this.orderType,a="SELECT * FROM blocks WHERE type='d'"+e+t+n;return a},getData:function(){var e=arguments,t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,r,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=!(e.length>0&&void 0!==e[0])||e[0],n.prev=1,!a){n.next=27;break}return k.IS_TEST||(t.loading=!0),r=t.createSQL(),n.next=7,T(r);case 7:return o=n.sent,o=_(o),n.next=11,E(o);case 11:if(l=n.sent,k.IS_TEST||(t.loading=!1),!(l.length>0)){n.next=24;break}t.totalData=l,t.pageData=t.parsePage(t.totalData),t.totalNumber=l.length,y("数据查询SQL："+r),y("获得全量数据："),y(t.totalData),y("获取分页数据："),y(t.pageData),n.next=25;break;case 24:throw"未取得符合条件的数据";case 25:n.next=29;break;case 27:y("采用数组分页，加载分页数据无需再次请求网络"),t.pageData=t.parsePage(t.totalData);case 29:"KanbanView"==t.viewType||"CalendarView"==t.viewType?t.compData=t.totalData:t.compData=t.pageData,n.next=37;break;case 32:n.prev=32,n.t0=n["catch"](1),t.loading=!1,console.log("%c[getData]获取数据出错：","color: red"),y(n.t0);case 37:case"end":return n.stop()}}),n,null,[[1,32]])})))()},parsePage:function(e){var t=this.pageOffset+this.pageSize;return console.log("当前分页： "+this.pageOffset+" - "+t),e.slice(this.pageOffset,this.pageOffset+this.pageSize)},setPageNumber:function(e){this.pageOffset=(e-1)*this.pageSize,this.getData(!1)}},created:function(){this.initWidget()}});n("0312"),n("0663");le.render=g,le.__scopeId="data-v-3553bc4e";var ce=le,ie=n("3fd4"),ue=(n("7dd6"),n("3ef0")),de=n.n(ue),be=function(e){e.use(ie["a"],{locale:de.a})},se=Object(a["i"])(ce);be(se),se.config.globalProperties.$http="hello,world",se.mount("#app")},"7bc9":function(e,t,n){},"932c":function(e,t,n){},ccb3:function(e,t,n){},cec0:function(e,t,n){"use strict";n("7bc9")},f338:function(e,t,n){"use strict";n("40a2")}});
//# sourceMappingURL=app.7df82d5a.js.map