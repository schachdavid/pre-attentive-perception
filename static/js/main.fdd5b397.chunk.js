(this["webpackJsonppre-attentive-perception"]=this["webpackJsonppre-attentive-perception"]||[]).push([[0],{12:function(e,t,a){e.exports={container:"CodeBox_container__K4lrG",content:"CodeBox_content__uraSf",copyIcon:"CodeBox_copyIcon___W9Sk"}},22:function(e,t,a){e.exports={container:"CopyMessage_container__3M9lb"}},224:function(e,t,a){"use strict";a.r(t);var n,i,r=a(1),s=a.n(r),o=a(17),c=a.n(o),l=(a(31),a(16),a(32),a(2)),h=a(18),u=a.n(h),d=a(11),m=a(3),g=a(4),p=function(){function e(t,a,n,i){Object(m.a)(this,e),this.x=t,this.y=a,this.size=n,this.color=i}return Object(g.a)(e,[{key:"getJSX",value:function(){return s.a.createElement("circle",{cx:this.x,cy:this.y,r:this.size/2,fill:this.color})}}]),e}(),v=function(){function e(t,a,n,i){Object(m.a)(this,e),this.x=t,this.y=a,this.size=n,this.color=i}return Object(g.a)(e,[{key:"getJSX",value:function(){var e=.8*this.size;return s.a.createElement("polygon",{points:"".concat(1.5*e+this.x,",").concat(.75*e+this.y,"\n      ").concat(1.125*e+this.x,",  ").concat(1.4*e+this.y,"\n      ").concat(.375*e+this.x,",  ").concat(1.4*e+this.y,"\n      ").concat(0*e+this.x,",  ").concat(.75*e+this.y,"\n      ").concat(.375*e+this.x,",  ").concat(.1*e+this.y,"\n      ").concat(1.125*e+this.x,",  ").concat(.1*e+this.y),fill:this.color})}}]),e}(),f=function(){function e(t,a,n,i){Object(m.a)(this,e),this.x=t,this.y=a,this.size=n,this.color=i}return Object(g.a)(e,[{key:"getJSX",value:function(){return s.a.createElement("rect",{x:this.x,y:this.y,height:this.size,width:this.size,fill:this.color})}}]),e}(),_=function(){function e(t,a,n,i){Object(m.a)(this,e),this.x=t,this.y=a,this.size=n,this.color=i}return Object(g.a)(e,[{key:"getJSX",value:function(){return s.a.createElement("polygon",{points:"".concat(.5*this.size+this.x,",").concat(0+this.y," \n        ").concat(1*this.size+this.x,",").concat(1*this.size+this.y," \n        ").concat(0+this.x,",").concat(1*this.size+this.y),fill:this.color})}}]),e}();function S(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}!function(e){e[e.Color=0]="Color",e[e.Shape=1]="Shape",e[e.Size=2]="Size"}(n||(n={})),function(e){e[e.Rect=0]="Rect",e[e.Circle=1]="Circle",e[e.Triangle=2]="Triangle",e[e.Hexagon=3]="Hexagon"}(i||(i={}));var y,b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;Object(m.a)(this,e),this.shapes=[],this.height=void 0,this.width=void 0,this.shapeSize=void 0,this.height=t,this.width=a,this.shapeSize=n}return Object(g.a)(e,[{key:"clearShapes",value:function(){this.shapes=[]}},{key:"generateShapes",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.Circle,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],0);a<e;a++){var n=this.getRandomValidCoordinates();switch(t){case i.Circle:this.shapes.push(new p(n.x,n.y,this.shapeSize,"rgb(60, 59, 64)"));break;case i.Rect:this.shapes.push(new f(n.x,n.y,this.shapeSize,"rgb(60, 59, 64)"));break;case i.Triangle:this.shapes.push(new _(n.x,n.y,this.shapeSize,"rgb(60, 59, 64)"));break;case i.Hexagon:this.shapes.push(new v(n.x,n.y,this.shapeSize,"rgb(60, 59, 64)"))}}}},{key:"createFeatureShape",value:function(e){var t=this.getRandomValidCoordinates(),a="rgb(60, 59, 64)";e&&n.Color in e&&(a="#00ae8e");var i=this.shapeSize;e&&n.Size in e&&(i*=1.4),e&&n.Shape?this.shapes.push(new f(t.x,t.y,i,a)):this.shapes.push(new p(t.x,t.y,i,a))}},{key:"generateSvg",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;switch(this.clearShapes(),t&&this.createFeatureShape(t),a){case 1:this.generateShapes(e/2,i.Circle),this.generateShapes(e/2,i.Triangle);break;case 2:this.generateShapes(e/3,i.Circle),this.generateShapes(e/3,i.Triangle),this.generateShapes(e/3,i.Hexagon);break;default:this.generateShapes(e,i.Circle)}return s.a.createElement("svg",{width:this.height,height:this.width},this.shapes.map((function(e){return e.getJSX()})))}},{key:"isDistancedToShapes",value:function(e,t){var a=this;return!this.shapes.some((function(n){return i=e,r=t,s=n.x,o=n.y,Math.sqrt(Math.pow(i-s,2)+Math.pow(r-o,2))<2*a.shapeSize;var i,r,s,o}))}},{key:"getRandomValidCoordinates",value:function(){for(var e=!1,t=0;!e&&t<100;){var a=S(2*this.shapeSize,this.width-2*this.shapeSize),n=S(2*this.shapeSize,this.height-2*this.shapeSize);if(t++,e=this.isDistancedToShapes(a,n))return{x:a,y:n}}return{x:-10,y:-10}}}]),e}();!function(e){e[e.percentage=0]="percentage",e[e.multiples=1]="multiples"}(y||(y={}));var x=[{time:3e3,feature:n.Shape},{time:3e3,feature:n.Color,additionalDistractors:2},{time:3e3,feature:n.Shape,additionalDistractors:1},{time:3e3},{time:3e3,feature:n.Size},{time:1e3,feature:n.Size,additionalDistractors:2},{time:350,feature:n.Size},{time:1500,feature:void 0,additionalDistractors:2},{time:1500,feature:n.Size,additionalDistractors:2},{time:250,feature:n.Color}],w=a(25),E=a(10),C=a.n(E),k=a(19),N=a(228),z=a(227),O=a(12),P=a.n(O),j=function(e){var t=e.code,a=e.onCopyClick;return s.a.createElement("div",{className:P.a.container},s.a.createElement(k.a,{className:P.a.copyIcon,onClick:function(){navigator.clipboard.writeText(t),a()}}),s.a.createElement("div",{className:P.a.content},s.a.createElement(N.a,{language:"json",style:z.a},t)))},T=a(22),B=a.n(T),M=function(e){var t=e.className;return s.a.createElement("div",{className:C()(B.a.container,t)},"Daten kopiert!")},D=a(14),I=a(23),L=a(6),R=a.n(L),H=function(e){var t=e.code;return s.a.createElement("div",{className:R.a.container},s.a.createElement("div",{className:R.a.socialMediaFooter},s.a.createElement("a",{href:"mailto:schachdavid@web.de?subject=Visualization Antworten&body=Hi David,\n          hier die Antworten der Umfrage:\n          ".concat(t),className:R.a.socialMediaLink,"aria-label":"Send via Email"},s.a.createElement(I.a,{className:R.a.icon})),s.a.createElement("a",{href:"https://telegram.me/share/url?url=".concat(t),className:R.a.socialMediaLink,"aria-label":"Send via Telegram"},s.a.createElement(D.a,{className:R.a.icon})),s.a.createElement("a",{href:"https://wa.me/?text=".concat(t),className:R.a.socialMediaLink,"aria-label":"Send via Whatsapp"},s.a.createElement(D.b,{className:R.a.icon}))))},A=a(5),J=a.n(A),V=function(e){var t=e.data,a=Object(r.useState)(!1),n=Object(l.a)(a,2),i=n[0],o=n[1],c=Object(w.a)({},t),h=JSON.stringify(c,null,4);return s.a.createElement("div",{className:J.a.completedPage},s.a.createElement(M,{className:C()(J.a.copyMessage,i?J.a.blendInCopyMessage:"")}),s.a.createElement("h1",{className:J.a.headLine},"Vielen Dank f\xfcr deine Hilfe!"),s.a.createElement("div",{className:J.a.answersContainer},s.a.createElement("div",{className:J.a.answers},"Deine Antworten"),s.a.createElement("div",{className:J.a.codeBox},s.a.createElement(j,{code:h,onCopyClick:function(){o(!0)}}))),s.a.createElement("div",{className:J.a.shareContainer},s.a.createElement("div",{className:J.a.sharePlease},"Bitte schicke mir deine Antworten damit ich sie auswerten kann:"),s.a.createElement(H,{code:h})))},W=a(24),X=a.n(W),F=function(e){var t=e.visibleTime,a=e.onTimeOver,n=e.children;return s.a.useEffect((function(){return setTimeout((function(){a()}),t),function(){}}),[]),s.a.createElement("div",{className:X.a.container},n)},q=a(7),Z=a.n(q),G=function(e){var t=e.onStart;return s.a.createElement("div",{className:Z.a.container},s.a.createElement("div",{className:Z.a.content},s.a.createElement("h1",{className:Z.a.headLine},"Wahrnehmungs Tests"),s.a.createElement("div",{className:Z.a.time},"Zeitaufwand: 2min."),s.a.createElement("div",{className:Z.a.assignment},s.a.createElement("p",null,"Dir werden gleich f\xfcr einen kurzen Moment Bilder gezeigt."),s.a.createElement("p",null,"Du musst beurteilen, ob ein Objekt aus der Reihe tanzt.")),s.a.createElement("div",{className:Z.a.dataDisclaimer},"Die Daten werden alle lokal verarbeitet, am Ende kannst du mir deine Antworten per Mail oder einem Instant-Messenger deiner Wahl verschicken.")),s.a.createElement("input",{className:Z.a.nextButton,type:"submit",value:"Start",onClick:t}))},Q=a(9),U=a.n(Q),Y=function(){var e=Object(r.useState)(new d.ReactSurveyModel(function(){var e={showProgressBar:"top",locale:"de",showNavigationButtons:!1};return e.pages=x.map((function(e,t){var a="";return a=t<4?"Testfrage: Tanzt ein einzelnes Objekt aus der Reihe?":4===t?"LETZTE Testfrage: Tanzt ein einzelnes Objekt aus der Reihe?":"Tanzt ein einzelnes Objekt aus der Reihe?",{questions:[{type:"radiogroup",name:t.toString(),title:a,choices:["Ja","Nein"],isRequired:!0,correctAnswer:["Nein"]}]}})),e}())),t=Object(l.a)(e,2),a=t[0],n=(t[1],Object(r.useState)(!0)),i=Object(l.a)(n,2),o=i[0],c=i[1],h=Object(r.useState)(0),m=Object(l.a)(h,2),g=m[0],p=m[1],v=Object(r.useState)(!1),f=Object(l.a)(v,2),_=f[0],S=f[1],y=Object(r.useState)(!1),w=Object(l.a)(y,2),E=w[0],C=w[1],k=Object(r.useState)(new b),N=Object(l.a)(k,2),z=N[0],O=(N[1],Object(r.useState)()),P=Object(l.a)(O,2),j=P[0],T=P[1],B=Object(r.useState)(500),M=Object(l.a)(B,2),D=M[0],I=M[1],L=x.length;Object(r.useEffect)((function(){var e=x[0].feature,t=x[0].time,n=x[0].additionalDistractors;T(z.generateSvg(9,e?[e]:[],n)),I(t),c(!0),a.onValidateQuestion.add((function(e,t){var a=e.currentPageNo;a<=3&&("Nein"===t.value&&"undefined"!==typeof x[a].feature||"Ja"===t.value&&"undefined"===typeof x[a].feature)&&(t.error="Falsche Antwort. Bitte korrigiere deine Antwort.")})),d.StylesManager.applyTheme("winter");var i=new u.a.Converter;return a.onTextMarkdown.add((function(e,t){var a=i.makeHtml(t.text);a=(a=a.substring(3)).substring(0,a.length-4),t.html=a})),function(){}}),[]);var R=function(){var e=a.currentPageNo;if(e>=L-1)a.isLastPage?S(!0):a.nextPage();else if(o||g===e||a.isCurrentPageHasErrors)o&&(c(!1),p(g+1),0!==g&&a.nextPage());else{var t=x[e+1].feature,n=x[e+1].time,i=x[e+1].additionalDistractors;T(z.generateSvg(9,t?[t]:[],i)),I(n),c(!0)}},H=E?_?s.a.createElement(V,{data:a.data}):o?s.a.createElement("div",{className:U.a.svgShowBoxContainer},s.a.createElement(F,{visibleTime:D,onTimeOver:function(){return R()}},j)):s.a.createElement("div",{className:U.a.surveyContainer},s.a.createElement(d.Survey,{model:a}),s.a.createElement("input",{className:U.a.nextButton,type:"submit",value:"Weiter",onClick:R})):s.a.createElement(G,{onStart:function(){return C(!0)}});return s.a.createElement("div",{className:U.a.container},H)};var K=function(){function e(){document.body.style.height=window.innerHeight+"px"}return window.addEventListener("resize",e),e(),s.a.createElement("div",{className:"App"},s.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,a){e.exports={container:"SvgShowBox_container__1gYN3"}},26:function(e,t,a){e.exports=a(224)},31:function(e,t,a){},32:function(e,t,a){},5:function(e,t,a){e.exports={completedPage:"CompletedPage_completedPage__1BqT-",codeBox:"CompletedPage_codeBox__13OHm",xValue:"CompletedPage_xValue__20tTk",shareContainer:"CompletedPage_shareContainer__1S2gr",sharePlease:"CompletedPage_sharePlease__26riB",answers:"CompletedPage_answers__25GuZ",answersContainer:"CompletedPage_answersContainer__1Or2X",copyMessage:"CompletedPage_copyMessage__jIaW-",blendInCopyMessage:"CompletedPage_blendInCopyMessage__1PX0X"}},6:function(e,t,a){e.exports={socialMediaFooter:"ShareButtons_socialMediaFooter__8pADs",icon:"ShareButtons_icon__3dGPb"}},7:function(e,t,a){e.exports={container:"TitlePage_container__1yDjd",headLine:"TitlePage_headLine__1eDPq",time:"TitlePage_time__BIQ_v",dataDisclaimer:"TitlePage_dataDisclaimer__1O53u",content:"TitlePage_content__3H2Yd",assignment:"TitlePage_assignment__ysOSo",nextButton:"TitlePage_nextButton__2vQ0g"}},9:function(e,t,a){e.exports={container:"SurveyPanel_container__MCpxc",surveyContainer:"SurveyPanel_surveyContainer__1PlBI",svgShowBoxContainer:"SurveyPanel_svgShowBoxContainer__3mgkS",chart:"SurveyPanel_chart__3USj-",chartContainer:"SurveyPanel_chartContainer__1brvN",footLine:"SurveyPanel_footLine__3mITb",nextButton:"SurveyPanel_nextButton__1hTaZ"}}},[[26,1,2]]]);
//# sourceMappingURL=main.fdd5b397.chunk.js.map