"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[7287],{10536:function(e,i,t){t.d(i,{UH:function(){return V},Xf:function(){return F},ju:function(){return T},eN:function(){return q},n6:function(){return _},W$:function(){return w}});var n=t(27378),r=t(45434),o=t(44365),a=t(18091),c=t(1520),d=t(30964),u=t(94942),s=t(79234),l=t(89193),p=t(46448),f=t(9841),h=t(23615),v=t.n(h),y=t(58493);function m(){return m=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}var g=function(e){return(0,n.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},b=function(e){var i=e.width,t=e.height,o=e.data,u=e.interpolation,l=e.xPadding,f=e.xOuterPadding,h=e.yOuterPadding,v=e.lineWidth,y=e.activeLineWidth,b=e.inactiveLineWidth,O=e.colors,x=e.opacity,R=e.activeOpacity,M=e.inactiveOpacity,W=e.pointSize,q=e.activePointSize,P=e.inactivePointSize,C=e.pointColor,L=e.pointBorderWidth,k=e.activePointBorderWidth,S=e.inactivePointBorderWidth,B=e.pointBorderColor,E=e.isInteractive,T=e.currentSerie,w=(0,n.useMemo)((function(){return function(e){var i=e.width,t=e.height,n=e.data,r=e.xPadding,o=e.xOuterPadding,a=e.yOuterPadding,c=new Set,d=new Set;n.forEach((function(e){e.data.forEach((function(e){c.has(e.x)||c.add(e.x),d.has(e.y)||null===e.y||d.add(e.y)}))})),c=Array.from(c),d=Array.from(d).sort((function(e,i){return e-i}));var u=(0,p.x)().domain(c).range([0,i]).padding(o),s=(0,p.x)().domain(d).range([0,t]).padding(a),l=u.step()*Math.min(.5*r,.5);return{series:n.map((function(e){var t=m({},e,{points:[],linePoints:[]});return e.data.forEach((function(n,r){var o=null,a=null;null!==n.y&&void 0!==n.y&&(o=u(n.x),a=s(n.y));var c={id:e.id+"."+r,serie:e,data:n,x:o,y:a};t.points.push(c),null!==o&&(0===r?t.linePoints.push([0,c.y]):t.linePoints.push([c.x-l,c.y])),t.linePoints.push([c.x,c.y]),null!==o&&(r===e.data.length-1&&o?t.linePoints.push([i,c.y]):t.linePoints.push([c.x+l,c.y])),t.points=t.points.filter((function(e){return null!==e.x}))})),t})),xScale:u,yScale:s}}({width:i,height:t,data:o,xPadding:l,xOuterPadding:f,yOuterPadding:h})}),[i,t,o,l,f,h]),I=w.series,z=w.xScale,F=w.yScale,G=function(e){return(0,n.useMemo)((function(){return(0,a.Z)().curve("smooth"===e?c.ZP:d.Z).defined((function(e){return null!==e[0]&&null!==e[1]}))}),[e])}(u),A=(0,s.U)(O,"id"),j=function(e){var i=e.activeLineWidth,t=e.inactiveLineWidth,r=e.opacity,o=e.activeOpacity,a=e.inactiveOpacity,c=e.isInteractive,d=e.currentSerie,u=g(e.lineWidth),s=g(i),l=g(t),p=g(r),f=g(o),h=g(a),v=(0,n.useMemo)((function(){return function(e){return{lineWidth:u(e),opacity:p(e)}}}),[u,p]),y=(0,n.useMemo)((function(){return function(e){return{lineWidth:s(e),opacity:f(e)}}}),[s,f]),m=(0,n.useMemo)((function(){return function(e){return{lineWidth:l(e),opacity:h(e)}}}),[l,h]);return(0,n.useMemo)((function(){return c?function(e){return null===d?v(e):e.id===d?y(e):m(e)}:v}),[v,y,m,c,d])}({lineWidth:v,activeLineWidth:y,inactiveLineWidth:b,opacity:x,activeOpacity:R,inactiveOpacity:M,isInteractive:E,currentSerie:T}),U=(0,n.useMemo)((function(){return I.map((function(e){var i=m({},e);return i.color=A(i),i.style=j(i),i}))}),[I,A,j]),H=(0,r.Fg)(),X=(0,s.Bf)(C,H),Z=(0,s.Bf)(B,H),V=function(e){var i=e.activePointSize,t=e.inactivePointSize,r=e.pointBorderWidth,o=e.activePointBorderWidth,a=e.inactivePointBorderWidth,c=e.isInteractive,d=e.currentSerie,u=g(e.pointSize),s=g(i),l=g(t),p=g(r),f=g(o),h=g(a),v=(0,n.useMemo)((function(){return function(e){return{size:u(e),borderWidth:p(e)}}}),[u,p]),y=(0,n.useMemo)((function(){return function(e){return{size:s(e),borderWidth:f(e)}}}),[s,f]),m=(0,n.useMemo)((function(){return function(e){return{size:l(e),borderWidth:h(e)}}}),[l,h]);return(0,n.useMemo)((function(){return c?function(e){return null===d?v(e):e.serieId===d?y(e):m(e)}:v}),[v,y,m,c,d])}({pointSize:W,activePointSize:q,inactivePointSize:P,pointBorderWidth:L,activePointBorderWidth:k,inactivePointBorderWidth:S,isInteractive:E,currentSerie:T}),_=(0,n.useMemo)((function(){var e=[];return U.forEach((function(i){i.points.forEach((function(t){var n=m({},t,{serie:i,serieId:i.id,isActive:T===i.id,isInactive:null!==T&&T!==i.id});n.color=X(n),n.borderColor=Z(n),n.style=V(m({},n,{serie:i})),e.push(n)}))})),e}),[U,X,Z,V,T]);return{xScale:z,yScale:F,series:U,points:_,lineGenerator:G}},O=function(e){var i=e.serie;return React.createElement(l._5,{id:i.id,enableChip:!0,color:i.color})},x=(0,n.memo)(O),R={pointerEvents:"none"},M=function(e){var i=e.x,t=e.y,n=e.size,o=e.color,a=e.borderColor,c=e.borderWidth,d=(0,r.tf)(),u=d.animate,s=d.config,l=(0,y.useSpring)({x:i,y:t,radius:n/2,color:o,borderWidth:c,config:s,immediate:!u});return React.createElement(y.q.circle,{cx:l.x,cy:l.y,r:(0,y.to)(l.radius,(function(e){return Math.max(e,0)})),fill:l.color,strokeWidth:l.borderWidth,stroke:a,style:R})},W=(0,n.memo)(M),q=(m({},{data:v().arrayOf(v().shape({id:v().string.isRequired,data:v().arrayOf(v().shape({x:v().oneOfType([v().number,v().string]).isRequired,y:v().oneOfType([v().number,v().string])})).isRequired})).isRequired,layers:v().arrayOf(v().oneOfType([v().oneOf(["grid","axes","labels","lines","points"]),v().func])).isRequired,interpolation:v().oneOf(["linear","smooth"]).isRequired,xPadding:v().number.isRequired,xOuterPadding:v().number.isRequired,yOuterPadding:v().number.isRequired,colors:s.qi.isRequired,lineWidth:v().oneOfType([v().number,v().func]).isRequired,activeLineWidth:v().oneOfType([v().number,v().func]).isRequired,inactiveLineWidth:v().oneOfType([v().number,v().func]).isRequired,opacity:v().oneOfType([v().number,v().func]).isRequired,activeOpacity:v().oneOfType([v().number,v().func]).isRequired,inactiveOpacity:v().oneOfType([v().number,v().func]).isRequired,startLabel:v().oneOfType([v().oneOf([!1]),v().string,v().func]).isRequired,startLabelPadding:v().number.isRequired,startLabelTextColor:s.UO.isRequired,endLabel:v().oneOfType([v().oneOf([!1]),v().string,v().func]).isRequired,endLabelPadding:v().number.isRequired,endLabelTextColor:s.UO.isRequired,pointComponent:v().oneOfType([v().func,v().object]).isRequired,pointSize:v().oneOfType([v().number,v().func]).isRequired,activePointSize:v().oneOfType([v().number,v().func]).isRequired,inactivePointSize:v().oneOfType([v().number,v().func]).isRequired,pointColor:s.UO.isRequired,pointBorderWidth:v().oneOfType([v().number,v().func]).isRequired,activePointBorderWidth:v().oneOfType([v().number,v().func]).isRequired,inactivePointBorderWidth:v().oneOfType([v().number,v().func]).isRequired,pointBorderColor:s.UO.isRequired,enableGridX:v().bool.isRequired,enableGridY:v().bool.isRequired,axisTop:o.VT,axisRight:o.VT,axisBottom:o.VT,axisLeft:o.VT,isInteractive:v().bool.isRequired,onMouseEnter:v().func,onMouseMove:v().func,onMouseLeave:v().func,onClick:v().func,tooltip:v().oneOfType([v().func,v().object]).isRequired},r.w$,{role:v().string.isRequired}),m({},{layers:["grid","axes","labels","lines","points"],interpolation:"smooth",xPadding:.6,xOuterPadding:.5,yOuterPadding:.5,colors:{scheme:"nivo"},lineWidth:2,activeLineWidth:4,inactiveLineWidth:1,opacity:1,activeOpacity:1,inactiveOpacity:.3,startLabel:!1,startLabelPadding:16,startLabelTextColor:{from:"color"},endLabel:"id",endLabelPadding:16,endLabelTextColor:{from:"color"},pointSize:6,activePointSize:8,inactivePointSize:4,pointColor:{from:"serie.color"},pointBorderWidth:0,activePointBorderWidth:0,inactivePointBorderWidth:0,pointBorderColor:{from:"serie.color",modifiers:[["darker",1.4]]},enableGridX:!0,enableGridY:!0,axisTop:{},axisBottom:{},axisLeft:{},isInteractive:!0,tooltip:x},{pointComponent:W,animate:!0,motionConfig:"gentle",role:"img"})),P=function(e){var i=e.serie,t=e.lineGenerator,o=e.yStep,a=e.isInteractive,c=function(e){var i=e.serie,t=e.isInteractive,r=e.onMouseEnter,o=e.onMouseMove,a=e.onMouseLeave,c=e.onClick,d=e.setCurrent,u=e.tooltip,s=(0,l.lL)(),p=s.showTooltipFromEvent,f=s.hideTooltip,h=(0,n.useCallback)((function(e){p((0,n.createElement)(u,{serie:i}),e),d(i.id),r&&r(i,e)}),[i,r,p,d]),v=(0,n.useCallback)((function(e){p((0,n.createElement)(u,{serie:i}),e),o&&o(i,e)}),[i,o,p]),y=(0,n.useCallback)((function(e){f(),d(null),a&&a(i,e)}),[i,a,f,d]),m=(0,n.useCallback)((function(e){c&&c(i,e)}),[i,c]);return(0,n.useMemo)((function(){return{onMouseEnter:t?h:void 0,onMouseMove:t?v:void 0,onMouseLeave:t?y:void 0,onClick:t?m:void 0}}),[t,h,v,y,m])}({serie:i,isInteractive:a,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,setCurrent:e.setCurrentSerie,tooltip:e.tooltip}),d=(0,r.tf)(),u=d.animate,s=d.config,p=t(i.linePoints),f=(0,r.NS)(p),h=(0,y.useSpring)({color:i.color,opacity:i.style.opacity,lineWidth:i.style.lineWidth,config:s,immediate:!u});return React.createElement(React.Fragment,null,React.createElement(y.q.path,{fill:"none",d:f,stroke:h.color,strokeWidth:h.lineWidth,strokeLinecap:"round",strokeOpacity:h.opacity,style:{pointerEvents:"none"}}),a&&React.createElement("path",{fill:"none",stroke:"red",strokeOpacity:0,strokeWidth:o,d:p,strokeLinecap:"butt",onMouseEnter:c.onMouseEnter,onMouseMove:c.onMouseMove,onMouseLeave:c.onMouseLeave,onClick:c.onClick}))},C=(0,n.memo)(P),L=function(e){var i=e.series,t=e.getLabel,o=e.position,a=e.padding,c=e.color,d=(0,r.Fg)(),u=(0,r.tf)(),l=u.animate,p=u.config,f=function(e){var i=e.series,t=e.position,o=e.padding,a=e.color,c=e.getLabel,d=(0,r.Fg)(),u=(0,s.Bf)(a,d);return(0,n.useMemo)((function(){var e,n;"start"===t?(e="end",n=-1*o):(e="start",n=o);var r=[];return i.forEach((function(i){var o=i.id;"function"==typeof c&&(o=c(i));var a="start"===t?i.linePoints[0]:i.linePoints[i.linePoints.length-1];null!==a[0]&&null!==a[1]&&r.push({id:i.id,label:o,x:a[0]+n,y:a[1],color:u(i),opacity:i.style.opacity,serie:i,textAnchor:e})})),r}),[i,t,o,u])}({series:i,getLabel:t,position:o,padding:a,color:c});return(0,y.useSprings)(f.length,f.map((function(e){return{x:e.x,y:e.y,opacity:e.opacity,config:p,immediate:!l}}))).map((function(e,i){var t=f[i];return React.createElement(y.q.text,{key:t.id,x:e.x,y:e.y,textAnchor:t.textAnchor,dominantBaseline:"central",opacity:e.opacity,style:m({},d.labels.text,{fill:t.color})},t.label)}))},k=(0,n.memo)(L),S=function(e){var i=e.pointComponent;return e.points.map((function(e){return(0,n.createElement)(i,{key:e.id,data:e.data,x:e.x,y:e.y,isActive:e.isActive,isInactive:e.isInactive,size:e.style.size,color:e.color,borderColor:e.borderColor,borderWidth:e.style.borderWidth})}))};S.propTypes={pointComponent:v().oneOfType([v().func,v().object]).isRequired,points:v().arrayOf(v().shape({id:v().string.isRequired,data:v().object.isRequired,x:v().number.isRequired,y:v().number.isRequired,isActive:v().bool.isRequired,isInactive:v().bool.isRequired,color:v().string.isRequired,borderColor:v().string.isRequired,style:v().shape({size:v().number.isRequired,borderWidth:v().number.isRequired}).isRequired})).isRequired};var B=(0,n.memo)(S),E=function(e){var i=e.data,t=e.width,a=e.height,c=e.margin,d=e.layers,u=e.interpolation,s=e.xPadding,l=e.xOuterPadding,p=e.yOuterPadding,f=e.colors,h=e.lineWidth,v=e.activeLineWidth,y=e.inactiveLineWidth,m=e.opacity,g=e.activeOpacity,O=e.inactiveOpacity,x=e.startLabel,R=e.startLabelPadding,M=e.startLabelTextColor,W=e.endLabel,q=e.endLabelPadding,P=e.endLabelTextColor,L=e.pointComponent,S=e.pointSize,E=e.activePointSize,T=e.inactivePointSize,w=e.pointColor,I=e.pointBorderWidth,z=e.activePointBorderWidth,F=e.inactivePointBorderWidth,G=e.pointBorderColor,A=e.axisTop,j=e.axisRight,U=e.axisBottom,H=e.axisLeft,X=e.enableGridX,Z=e.enableGridY,V=e.isInteractive,_=e.onMouseEnter,N=e.onMouseMove,Y=e.onMouseLeave,$=e.onClick,K=e.tooltip,D=e.role,J=(0,r.Bs)(t,a,c),Q=J.margin,ee=J.innerWidth,ie=J.innerHeight,te=J.outerWidth,ne=J.outerHeight,re=(0,n.useState)(null),oe=re[0],ae=re[1],ce=b({width:ee,height:ie,data:i,interpolation:u,xPadding:s,xOuterPadding:l,yOuterPadding:p,lineWidth:h,activeLineWidth:v,inactiveLineWidth:y,colors:f,opacity:m,activeOpacity:g,inactiveOpacity:O,pointSize:S,activePointSize:E,inactivePointSize:T,pointColor:w,pointBorderWidth:I,activePointBorderWidth:z,inactivePointBorderWidth:F,pointBorderColor:G,startLabel:x,endLabel:W,isInteractive:V,currentSerie:oe}),de=ce.series,ue=ce.points,se=ce.xScale,le=ce.yScale,pe=ce.lineGenerator,fe={grid:React.createElement(o.rj,{key:"grid",width:ee,height:ie,xScale:X?se:null,yScale:Z?le:null}),axes:React.createElement(o.dk,{key:"axes",xScale:se,yScale:le,width:ee,height:ie,top:A,right:j,bottom:U,left:H}),labels:[],lines:React.createElement(n.Fragment,{key:"lines"},de.map((function(e){return React.createElement(C,{key:e.id,serie:e,currentSerie:oe,setCurrentSerie:ae,lineGenerator:pe,yStep:le.step(),margin:Q,isInteractive:V,onMouseEnter:_,onMouseMove:N,onMouseLeave:Y,onClick:$,tooltip:K})}))),points:React.createElement(B,{key:"points",pointComponent:L,points:ue})};!1!==x&&fe.labels.push(React.createElement(k,{key:"start",series:de,getLabel:x,position:"start",padding:R,color:M})),!1!==W&&fe.labels.push(React.createElement(k,{key:"end",series:de,getLabel:W,position:"end",padding:q,color:P}));var he=(0,n.useMemo)((function(){return{currentSerie:oe,innerHeight:ie,innerWidth:ee,lineGenerator:pe,points:ue,series:de,setCurrentSerie:ae,xScale:se,yScale:le}}),[oe,ie,ee,pe,ue,de,se,le]);return React.createElement(r.tM,{width:te,height:ne,margin:Q,role:D},d.map((function(e,i){return"function"==typeof e?React.createElement(n.Fragment,{key:i},(0,n.createElement)(e,he)):fe[e]})))};E.defaultProps=q;var T=(0,n.memo)((0,r.li)(E)),w=function(e){return React.createElement(r.d,null,(function(i){var t=i.width,n=i.height;return React.createElement(T,m({width:t,height:n},e))}))},I=function(e){var i=e.serie;return React.createElement(l._5,{id:i.id,enableChip:!0,color:i.color})},z=(0,n.memo)(I),F=(m({},{data:v().arrayOf(v().shape({id:v().string.isRequired,data:v().arrayOf(v().shape({x:v().oneOfType([v().number,v().string]).isRequired,y:v().number.isRequired})).isRequired})).isRequired,align:v().oneOf(["start","middle","end"]).isRequired,layers:v().arrayOf(v().oneOfType([v().oneOf(["grid","axes","labels","areas"]),v().func])).isRequired,interpolation:v().oneOf(["linear","smooth"]).isRequired,spacing:v().number.isRequired,xPadding:v().number.isRequired,colors:s.qi.isRequired,blendMode:r.wM.isRequired,fillOpacity:v().number.isRequired,activeFillOpacity:v().number.isRequired,inactiveFillOpacity:v().number.isRequired,defs:v().arrayOf(v().shape({id:v().string.isRequired})).isRequired,fill:v().arrayOf(v().shape({id:v().string,match:v().oneOfType([v().oneOf(["*"]),v().object,v().func]).isRequired})).isRequired,borderWidth:v().number.isRequired,activeBorderWidth:v().number.isRequired,inactiveBorderWidth:v().number.isRequired,borderColor:s.UO.isRequired,borderOpacity:v().number.isRequired,activeBorderOpacity:v().number.isRequired,inactiveBorderOpacity:v().number.isRequired,startLabel:v().oneOfType([v().oneOf([!1]),v().string,v().func]).isRequired,startLabelPadding:v().number.isRequired,startLabelTextColor:s.UO.isRequired,endLabel:v().oneOfType([v().oneOf([!1]),v().string,v().func]).isRequired,endLabelPadding:v().number.isRequired,endLabelTextColor:s.UO.isRequired,enableGridX:v().bool.isRequired,axisTop:o.VT,axisBottom:o.VT,isInteractive:v().bool.isRequired,onMouseEnter:v().func,onMouseMove:v().func,onMouseLeave:v().func,onClick:v().func,tooltip:v().oneOfType([v().func,v().object]).isRequired},r.w$,{role:v().string.isRequired}),m({},{align:"middle",layers:["grid","axes","labels","areas"],interpolation:"smooth",spacing:0,xPadding:.6,colors:{scheme:"nivo"},blendMode:"normal",fillOpacity:.8,activeFillOpacity:1,inactiveFillOpacity:.15,defs:[],fill:[],borderWidth:1,activeBorderWidth:1,inactiveBorderWidth:0,borderColor:{from:"color",modifiers:[["darker",.4]]},borderOpacity:1,activeBorderOpacity:1,inactiveBorderOpacity:0,startLabel:!1,startLabelPadding:12,startLabelTextColor:{from:"color",modifiers:[["darker",1]]},endLabel:"id",endLabelPadding:12,endLabelTextColor:{from:"color",modifiers:[["darker",1]]},enableGridX:!0,axisTop:{},axisBottom:{},isInteractive:!0,tooltip:z},{animate:!0,motionConfig:"gentle",role:"img"})),G=function(e){return(0,n.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},A=function(e){var i=e.data,t=e.width,o=e.height,a=e.align,l=e.spacing,h=e.xPadding,v=e.interpolation,y=e.colors,g=e.fillOpacity,b=e.activeFillOpacity,O=e.inactiveFillOpacity,x=e.borderWidth,R=e.activeBorderWidth,M=e.inactiveBorderWidth,W=e.borderColor,q=e.borderOpacity,P=e.activeBorderOpacity,C=e.inactiveBorderOpacity,L=e.isInteractive,k=e.current,S=function(e){var i=e.data,t=e.width,r=e.height,o=e.align,a=e.spacing,c=e.xPadding;return(0,n.useMemo)((function(){return function(e){var i=e.data,t=e.width,n=e.height,r=e.align,o=e.spacing,a=e.xPadding,c=new Map,d=null,u=null;i.forEach((function(e){e.data.forEach((function(i){c.has(i.x)||c.set(i.x,{id:i.x,total:0,values:new Map});var t=c.get(i.x),n=t.total+i.y;t.total=n,t.values.set(e.id,{serieId:e.id,value:i.y}),(null===n||n>d)&&(d=n,u=t.values.size)}))}));var s=(0,p.x)().domain(Array.from(c.keys())).range([0,t]),l=(0,f.Z)().domain([0,d]).range([0,n-u*o]);c.forEach((function(e,i){e.x=s(i);var t=l(e.total)+e.values.size*o,a=0;"middle"===r?a=(n-t)/2:"end"===r&&(a=n-t),Array.from(e.values.values()).sort((function(e,i){return i.value-e.value})).forEach((function(i,t,n){var r=n.filter((function(e,i){return i<t})),c=r.reduce((function(e,i){return e+i.value}),0),d=e.values.get(i.serieId);d.position=t,d.height=l(i.value),d.beforeHeight=l(c)+a+o*(r.length+.5)}))}));var h=s.step()*Math.min(.5*a,.5),v=i.map((function(e){var i=m({},e);return i.points=[],i.areaPoints=[],e.data.forEach((function(t,n){var r=c.get(t.x),o=r.values.get(e.id),a=r.x,d=o.beforeHeight,u=o.height,s=d+u/2,l=d,p=d+u;i.points.push({x:a,y:s,height:u,data:m({},t)}),n>0&&i.areaPoints.push({x:a-h,y0:l,y1:p}),i.areaPoints.push({x:a,y0:l,y1:p}),n<e.data.length-1&&i.areaPoints.push({x:a+h,y0:l,y1:p})})),i}));return{xScale:s,heightScale:l,series:v}}({data:i,width:t,height:r,align:o,spacing:a,xPadding:c})}),[i,t,r,o,a,c])}({data:i,width:t,height:o,align:a,spacing:l,xPadding:h}),B=S.series,E=S.xScale,T=S.heightScale,w=function(e){return(0,n.useMemo)((function(){return(0,u.Z)().x((function(e){return e.x})).y0((function(e){return e.y0})).y1((function(e){return e.y1})).curve("smooth"===e?c.ZP:d.Z)}),[e])}(v),I=(0,s.U)(y,"id"),z=function(e){var i=e.activeFillOpacity,t=e.inactiveFillOpacity,o=e.borderWidth,a=e.activeBorderWidth,c=e.inactiveBorderWidth,d=e.borderColor,u=e.borderOpacity,l=e.activeBorderOpacity,p=e.inactiveBorderOpacity,f=e.isInteractive,h=e.current,v=G(e.fillOpacity),y=G(i),m=G(t),g=G(o),b=G(a),O=G(c),x=(0,r.Fg)(),R=(0,s.Bf)(d,x),M=G(u),W=G(l),q=G(p),P=(0,n.useMemo)((function(){return function(e){return{fillOpacity:v(e),borderWidth:g(e),borderColor:R(e),borderOpacity:M(e)}}}),[v,g,R,M]),C=(0,n.useMemo)((function(){return function(e){return{fillOpacity:y(e),borderWidth:b(e),borderColor:R(e),borderOpacity:W(e)}}}),[y,b,R,W]),L=(0,n.useMemo)((function(){return function(e){return{fillOpacity:m(e),borderWidth:O(e),borderColor:R(e),borderOpacity:q(e)}}}),[m,O,R,q]);return(0,n.useMemo)((function(){return f?function(e){return null===h?P(e):e.id===h?C(e):L(e)}:P}),[P,C,L,f,h])}({fillOpacity:g,activeFillOpacity:b,inactiveFillOpacity:O,borderWidth:x,activeBorderWidth:R,inactiveBorderWidth:M,borderColor:W,borderOpacity:q,activeBorderOpacity:P,inactiveBorderOpacity:C,isInteractive:L,current:k});return{series:(0,n.useMemo)((function(){return B.map((function(e){var i=m({},e);return i.color=I(i),i.style=z(i),i}))}),[B,I,z]),xScale:E,heightScale:T,areaGenerator:w}},j=function(e){var i=e.serie,t=e.areaGenerator,o=e.blendMode,a=function(e){var i=e.serie,t=e.isInteractive,r=e.onMouseEnter,o=e.onMouseMove,a=e.onMouseLeave,c=e.onClick,d=e.setCurrent,u=e.tooltip,s=(0,l.lL)(),p=s.showTooltipFromEvent,f=s.hideTooltip,h=(0,n.useCallback)((function(e){p((0,n.createElement)(u,{serie:i}),e),d(i.id),r&&r(i,e)}),[i,r,p,d]),v=(0,n.useCallback)((function(e){p((0,n.createElement)(u,{serie:i}),e),o&&o(i,e)}),[i,o,p]),y=(0,n.useCallback)((function(e){f(),d(null),a&&a(i,e)}),[i,a,f,d]),m=(0,n.useCallback)((function(e){c&&c(i,e)}),[i,c]);return(0,n.useMemo)((function(){return{onMouseEnter:t?h:void 0,onMouseMove:t?v:void 0,onMouseLeave:t?y:void 0,onClick:t?m:void 0}}),[t,h,v,y,m])}({serie:i,isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,setCurrent:e.setCurrentSerie,tooltip:e.tooltip}),c=(0,r.tf)(),d=c.animate,u=c.config,s=(0,r.NS)(t(i.areaPoints)),p=(0,y.useSpring)({color:i.color,fillOpacity:i.style.fillOpacity,stroke:i.style.borderColor,strokeOpacity:i.style.borderOpacity,config:u,immediate:!d});return React.createElement(y.q.path,{d:s,fill:i.fill?i.fill:p.color,fillOpacity:p.fillOpacity,stroke:p.stroke,strokeWidth:i.style.borderWidth,strokeOpacity:p.strokeOpacity,style:{mixBlendMode:o},onMouseEnter:a.onMouseEnter,onMouseMove:a.onMouseMove,onMouseLeave:a.onMouseLeave,onClick:a.onClick})},U=(0,n.memo)(j),H=function(e){var i=e.series,t=e.position,o=e.padding,a=e.color,c=(0,r.Fg)(),d=(0,r.tf)(),u=d.animate,l=d.config,p=function(e){var i=e.series,t=e.position,o=e.padding,a=e.color,c=(0,r.Fg)(),d=(0,s.Bf)(a,c);return(0,n.useMemo)((function(){var e,n;return"start"===t?(e="end",n=-1*o):(e="start",n=o),i.map((function(i){var r="start"===t?i.points[0]:i.points[i.points.length-1];return{id:i.id,x:r.x+n,y:r.y,color:d(i),opacity:i.style.fillOpacity,serie:i,textAnchor:e}}))}),[i,t,o,d])}({series:i,position:t,padding:o,color:a});return(0,y.useSprings)(p.length,p.map((function(e){return{x:e.x,y:e.y,opacity:e.opacity,config:l,immediate:!u}}))).map((function(e,i){var t=p[i];return React.createElement(y.q.text,{key:t.id,x:e.x,y:e.y,textAnchor:t.textAnchor,dominantBaseline:"central",opacity:e.opacity,style:m({},c.labels.text,{fill:t.color})},t.id)}))},X=(0,n.memo)(H),Z=function(e){var i=e.data,t=e.align,a=e.width,c=e.height,d=e.margin,u=e.layers,s=e.interpolation,l=e.spacing,p=e.xPadding,f=e.colors,h=e.blendMode,v=e.fillOpacity,y=e.activeFillOpacity,g=e.inactiveFillOpacity,b=e.defs,O=e.fill,x=e.borderWidth,R=e.activeBorderWidth,M=e.inactiveBorderWidth,W=e.borderColor,q=e.borderOpacity,P=e.activeBorderOpacity,C=e.inactiveBorderOpacity,L=e.startLabel,k=e.startLabelPadding,S=e.startLabelTextColor,B=e.endLabel,E=e.endLabelPadding,T=e.endLabelTextColor,w=e.enableGridX,I=e.axisTop,z=e.axisBottom,F=e.isInteractive,G=e.onMouseEnter,j=e.onMouseMove,H=e.onMouseLeave,Z=e.onClick,V=e.tooltip,_=e.role,N=(0,n.useState)(null),Y=N[0],$=N[1],K=(0,r.Bs)(a,c,d),D=K.margin,J=K.innerWidth,Q=K.innerHeight,ee=K.outerWidth,ie=K.outerHeight,te=A({data:i,width:J,height:Q,align:t,spacing:l,xPadding:p,interpolation:s,colors:f,fillOpacity:v,activeFillOpacity:y,inactiveFillOpacity:g,borderWidth:x,activeBorderWidth:R,inactiveBorderWidth:M,borderColor:W,borderOpacity:q,activeBorderOpacity:P,inactiveBorderOpacity:C,isInteractive:F,current:Y}),ne=te.series,re=te.xScale,oe=te.areaGenerator,ae=(0,n.useMemo)((function(){return(0,r.yU)(b,ne,O,{targetKey:"fill"})}),[b,ne,O]),ce={grid:w&&React.createElement(o.rj,{key:"grid",width:J,height:Q,xScale:re}),axes:React.createElement(o.dk,{key:"axes",xScale:re,width:J,height:Q,top:I,bottom:z}),labels:[],areas:React.createElement(n.Fragment,{key:"areas"},ne.map((function(e){return React.createElement(U,{key:e.id,areaGenerator:oe,serie:e,blendMode:h,isInteractive:F,setCurrentSerie:$,onMouseEnter:G,onMouseMove:j,onMouseLeave:H,onClick:Z,tooltip:V})})))};return!1!==L&&ce.labels.push(React.createElement(X,{key:"start",series:ne,position:"start",padding:k,color:S})),!1!==B&&ce.labels.push(React.createElement(X,{key:"end",series:ne,position:"end",padding:E,color:T})),React.createElement(r.tM,{defs:ae,width:ee,height:ie,margin:D,role:_},u.map((function(i,t){return"function"==typeof i?React.createElement(n.Fragment,{key:t},i(m({},e,{innerWidth:J,innerHeight:Q,outerWidth:ee,outerHeight:ie,series:ne,xScale:re,areaGenerator:oe}))):ce[i]})))};Z.defaultProps=F;var V=(0,n.memo)((0,r.li)(Z)),_=function(e){return React.createElement(r.d,null,(function(i){var t=i.width,n=i.height;return React.createElement(V,m({width:t,height:n},e))}))}}}]);
//# sourceMappingURL=b276a4b74ec6c7f3d9d321f2bdee5b26e655f43e-d312196920c781158a9e.js.map