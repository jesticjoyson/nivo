"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8075],{55930:function(e,r,n){n.d(r,{VC:function(){return ne},LJ:function(){return ue},Sy:function(){return de},mX:function(){return T},Pq:function(){return L},XB:function(){return G}});var o=n(27378),t=n(45434),i=n(47425),a=n(89193),l=n(64253),c=n(79234),u=n(58493),s=n(29140);function d(e,r){return e<r?-1:e>r?1:e>=r?0:NaN}1===(b=d).length&&(v=b,b=function(e,r){return d(v(e),r)});var b,v,f=Array.prototype;f.slice,f.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);function m(e,r,n){e=+e,r=+r,n=(t=arguments.length)<2?(r=e,e=0,1):t<3?1:+n;for(var o=-1,t=0|Math.max(0,Math.ceil((r-e)/n)),i=new Array(t);++o<t;)i[o]=e+o*n;return i}var p=Math.cos,g=Math.sin,h=Math.PI,y=h/2,A=2*h,M=Math.max;function R(e){return function(r,n){return e(r.source.value+r.target.value,n.source.value+n.target.value)}}var x=Array.prototype.slice;function C(e){return function(){return e}}var N=n(41584);function O(e){return e.source}function E(e){return e.target}function k(e){return e.radius}function j(e){return e.startAngle}function V(e){return e.endAngle}function B(){var e=O,r=E,n=k,o=j,t=V,i=null;function a(){var a,l=x.call(arguments),c=e.apply(this,l),u=r.apply(this,l),s=+n.apply(this,(l[0]=c,l)),d=o.apply(this,l)-y,b=t.apply(this,l)-y,v=s*p(d),f=s*g(d),m=+n.apply(this,(l[0]=u,l)),h=o.apply(this,l)-y,A=t.apply(this,l)-y;if(i||(i=a=(0,N.Z)()),i.moveTo(v,f),i.arc(0,0,s,d,b),d===h&&b===A||(i.quadraticCurveTo(0,0,m*p(h),m*g(h)),i.arc(0,0,m,h,A)),i.quadraticCurveTo(0,0,v,f),i.closePath(),a)return i=null,a+""||null}return a.radius=function(e){return arguments.length?(n="function"==typeof e?e:C(+e),a):n},a.startAngle=function(e){return arguments.length?(o="function"==typeof e?e:C(+e),a):o},a.endAngle=function(e){return arguments.length?(t="function"==typeof e?e:C(+e),a):t},a.source=function(r){return arguments.length?(e=r,a):e},a.target=function(e){return arguments.length?(r=e,a):r},a.context=function(e){return arguments.length?(i=null==e?null:e,a):i},a}var W=n(30042);function D(){return D=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},D.apply(this,arguments)}function w(e,r){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}var I="/Users/raph/projects/plouc/nivo/packages/chord/src/ChordRibbonTooltip.tsx",L={layers:["ribbons","arcs","labels","legends"],padAngle:0,innerRadiusRatio:.9,innerRadiusOffset:0,colors:{scheme:"nivo"},arcOpacity:1,activeArcOpacity:1,inactiveArcOpacity:.15,arcBorderWidth:1,arcBorderColor:{from:"color",modifiers:[["darker",.4]]},arcTooltip:(0,o.memo)((function(e){var r=e.arc;return(0,l.jsxDEV)(a._5,{id:r.label,value:r.formattedValue,color:r.color,enableChip:!0},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/chord/src/ChordArcTooltip.tsx",lineNumber:6,columnNumber:5},void 0)})),ribbonOpacity:.5,activeRibbonOpacity:.85,inactiveRibbonOpacity:.15,ribbonBorderWidth:1,ribbonBorderColor:{from:"color",modifiers:[["darker",.4]]},ribbonBlendMode:"normal",enableLabel:!0,label:"id",labelOffset:12,labelRotation:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,legends:[],animate:!0,motionConfig:"gentle",role:"img"},G=D({},L,{ribbonBlendMode:"normal",ribbonTooltip:(0,o.memo)((function(e){var r=e.ribbon;return(0,l.jsxDEV)(a.zI,{rows:[[(0,l.jsxDEV)(a.Af,{color:r.source.color},"chip",!1,{fileName:I,lineNumber:9,columnNumber:17},void 0),(0,l.jsxDEV)("strong",{children:r.source.label},"id",!1,{fileName:I,lineNumber:10,columnNumber:17},void 0),r.source.formattedValue],[(0,l.jsxDEV)(a.Af,{color:r.target.color},"chip",!1,{fileName:I,lineNumber:14,columnNumber:17},void 0),(0,l.jsxDEV)("strong",{children:r.target.label},"id",!1,{fileName:I,lineNumber:15,columnNumber:17},void 0),r.target.formattedValue]]},void 0,!1,{fileName:I,lineNumber:6,columnNumber:5},void 0)}))}),T=D({},L,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),S=function(e){var r=e.padAngle;return function(){var e=0,r=null,n=null,o=null;function t(t){var i,a,l,c,u,s,d=t.length,b=[],v=m(d),f=[],p=[],g=p.groups=new Array(d),h=new Array(d*d);for(i=0,u=-1;++u<d;){for(a=0,s=-1;++s<d;)a+=t[u][s];b.push(a),f.push(m(d)),i+=a}for(r&&v.sort((function(e,n){return r(b[e],b[n])})),n&&f.forEach((function(e,r){e.sort((function(e,o){return n(t[r][e],t[r][o])}))})),c=(i=M(0,A-e*d)/i)?e:A/d,a=0,u=-1;++u<d;){for(l=a,s=-1;++s<d;){var y=v[u],R=f[y][s],x=t[y][R],C=a,N=a+=x*i;h[R*d+y]={index:y,subindex:R,startAngle:C,endAngle:N,value:x}}g[y]={index:y,startAngle:l,endAngle:a,value:b[y]},a+=c}for(u=-1;++u<d;)for(s=u-1;++s<d;){var O=h[s*d+u],E=h[u*d+s];(O.value||E.value)&&p.push(O.value<E.value?{source:E,target:O}:{source:O,target:E})}return o?p.sort(o):p}return t.padAngle=function(r){return arguments.length?(e=M(0,r),t):e},t.sortGroups=function(e){return arguments.length?(r=e,t):r},t.sortSubgroups=function(e){return arguments.length?(n=e,t):n},t.sortChords=function(e){return arguments.length?(null==e?o=null:(o=R(e))._=e,t):o&&o._},t}().padAngle(r)},F=function(e){var r=e.startAngle,n=e.endAngle,o=e.arcGenerator;return(0,u.to)([r,n],(function(e,r){return o({startAngle:e,endAngle:r})}))},P=function(e){var r=e.sourceStartAngle,n=e.sourceEndAngle,o=e.targetStartAngle,t=e.targetEndAngle,i=e.ribbonGenerator;return(0,u.to)([r,n,o,t],(function(e,r,n,o){return i({source:{startAngle:Math.min(e,r),endAngle:Math.max(r,e)},target:{startAngle:Math.min(n,o),endAngle:Math.max(o,n)}})}))},U=function(e){var r=e.width,n=e.height,t=e.innerRadiusRatio,i=e.innerRadiusOffset;return(0,o.useMemo)((function(){return function(e){var r=e.width,n=e.height,o=e.innerRadiusRatio,t=e.innerRadiusOffset,i=[r/2,n/2],a=Math.min(r,n)/2,l=a*o,c=a*(o-t);return{center:i,radius:a,innerRadius:l,arcGenerator:(0,s.Z)().outerRadius(a).innerRadius(l),ribbonGenerator:B().radius(c)}}({width:r,height:n,innerRadiusRatio:t,innerRadiusOffset:i})}),[r,n,t,i])},q=function(e){var r=e.chord,n=e.getColor,t=e.keys,i=e.data,a=e.getLabel,l=e.formatValue;return(0,o.useMemo)((function(){return function(e){var r=e.chord,n=e.data,o=e.keys,t=e.getLabel,i=e.formatValue,a=e.getColor,l=r(n),c=l.groups.map((function(e){var r=D({},e,{id:o[e.index],formattedValue:i(e.value)});return D({},r,{label:t(r),color:a(r)})}));return{arcs:c,ribbons:l.map((function(e){var r=D({},e.source,{id:o[e.source.index],formattedValue:i(e.source.value)}),n=D({},e.target,{id:o[e.target.index],formattedValue:i(e.target.value)});return D({},e,{id:[r.id,n.id].sort().join("."),source:D({},r,{label:t(r),color:a(r)}),target:D({},n,{label:t(n),color:a(n)})})}))}}({chord:r,data:i,keys:t,getLabel:a,formatValue:l,getColor:n})}),[r,n,t,i,a,l])},H=function(e){var r=e.data,n=e.keys,i=e.label,a=void 0===i?L.label:i,l=e.valueFormat,u=e.width,s=e.height,d=e.innerRadiusRatio,b=void 0===d?L.innerRadiusRatio:d,v=e.innerRadiusOffset,f=void 0===v?L.innerRadiusOffset:v,m=e.padAngle,p=void 0===m?L.padAngle:m,g=e.colors,h=void 0===g?L.colors:g,y=function(e){var r=e.padAngle;return(0,o.useMemo)((function(){return S({padAngle:r})}),[r])}({padAngle:p}),A=U({width:u,height:s,innerRadiusRatio:b,innerRadiusOffset:f}),M=A.center,R=A.radius,x=A.innerRadius,C=A.arcGenerator,N=A.ribbonGenerator,O=(0,o.useMemo)((function(){return(0,t.ji)(a)}),[a]),E=(0,t.O_)(l),k=(0,c.U)(h,"id"),j=q({chord:y,getColor:k,keys:n,data:r,getLabel:O,formatValue:E});return{center:M,chord:y,radius:R,innerRadius:x,arcGenerator:C,ribbonGenerator:N,getColor:k,arcs:j.arcs,ribbons:j.ribbons}},_=function(e){var r=e.arcOpacity,n=void 0===r?L.arcOpacity:r,t=e.activeArcOpacity,i=void 0===t?L.activeArcOpacity:t,a=e.inactiveArcOpacity,l=void 0===a?L.inactiveArcOpacity:a,c=e.ribbons,u=e.ribbonOpacity,s=void 0===u?L.ribbonOpacity:u,d=e.activeRibbonOpacity,b=void 0===d?L.activeRibbonOpacity:d,v=e.inactiveRibbonOpacity,f=void 0===v?L.inactiveRibbonOpacity:v,m=(0,o.useState)(null),p=m[0],g=m[1],h=(0,o.useState)(null),y=h[0],A=h[1],M=(0,o.useMemo)((function(){var e=[],r=[];return p&&(e.push(p.id),c.filter((function(e){return e.source.id===p.id||e.target.id===p.id})).forEach((function(e){r.push(e.id)}))),y&&(e.push(y.source.id),e.push(y.target.id),r.push(y.id)),{selectedArcIds:e,selectedRibbonIds:r}}),[p,y,c]),R=M.selectedArcIds.length>1||M.selectedRibbonIds.length>0,x=(0,o.useMemo)((function(){return function(e){return R?M.selectedArcIds.includes(e.id)?i:l:n}}),[R,M.selectedArcIds,n,i,l]),C=(0,o.useMemo)((function(){return function(e){return R?M.selectedRibbonIds.includes(e.id)?b:f:s}}),[R,M.selectedRibbonIds,s,b,f]);return D({currentArc:p,setCurrentArc:g,currentRibbon:y,setCurrentRibbon:A,hasSelection:R},M,{getArcOpacity:x,getRibbonOpacity:C})},$=function(e){var r=e.center,n=e.radius,t=e.arcs,i=e.arcGenerator,a=e.ribbons,l=e.ribbonGenerator;return(0,o.useMemo)((function(){return{center:r,radius:n,arcs:t,arcGenerator:i,ribbons:a,ribbonGenerator:l}}),[r,n,t,i,a,l])},z=(0,o.memo)((function(e){var r=e.ribbon,n=e.ribbonGenerator,t=e.animatedProps,i=e.borderWidth,c=e.blendMode,s=e.isInteractive,d=e.setCurrent,b=e.onMouseEnter,v=e.onMouseMove,f=e.onMouseLeave,m=e.onClick,p=e.tooltip,g=(0,a.lL)(),h=g.showTooltipFromEvent,y=g.hideTooltip,A=(0,o.useMemo)((function(){if(s)return function(e){d(r),h((0,o.createElement)(p,{ribbon:r}),e),null==b||b(r,e)}}),[s,h,p,r,b,d]),M=(0,o.useMemo)((function(){if(s)return function(e){h((0,o.createElement)(p,{ribbon:r}),e),null==v||v(r,e)}}),[s,h,p,r,v]),R=(0,o.useMemo)((function(){if(s)return function(e){d(null),y(),null==f||f(r,e)}}),[s,y,r,f,d]),x=(0,o.useMemo)((function(){if(s&&m)return function(e){return null==m?void 0:m(r,e)}}),[s,r,m]);return(0,l.jsxDEV)(u.q.path,{"data-testid":"ribbon."+r.source.id+"."+r.target.id,d:P({sourceStartAngle:t.sourceStartAngle,sourceEndAngle:t.sourceEndAngle,targetStartAngle:t.targetStartAngle,targetEndAngle:t.targetEndAngle,ribbonGenerator:n}),fill:t.color,opacity:t.opacity,strokeWidth:i,stroke:t.borderColor,style:{mixBlendMode:c},onMouseEnter:A,onMouseMove:M,onMouseLeave:R,onClick:x},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/chord/src/ChordRibbon.tsx",lineNumber:81,columnNumber:13},void 0)})),X=function(e,r){var n,o,i=e.source,a=e.target;if(i.startAngle<a.startAngle?(n=i,o=a):(n=a,o=i),r){var l=(0,t.Vp)(n),c=(0,t.Vp)(o);return{sourceStartAngle:l,sourceEndAngle:l,targetStartAngle:c,targetEndAngle:c}}return{sourceStartAngle:n.startAngle,sourceEndAngle:n.endAngle,targetStartAngle:o.startAngle,targetEndAngle:o.endAngle}},Z=(0,o.memo)((function(e){var r=e.ribbons,n=e.ribbonGenerator,o=e.borderWidth,i=e.borderColor,a=e.getOpacity,s=e.blendMode,d=e.isInteractive,b=e.setCurrent,v=e.onMouseEnter,f=e.onMouseMove,m=e.onMouseLeave,p=e.onClick,g=e.tooltip,h=(0,t.tf)(),y=h.animate,A=h.config,M=(0,t.Fg)(),R=(0,c.Bf)(i,M),x=(0,u.useTransition)(r,{keys:function(e){return e.id},initial:function(e){return D({},X(e,!1),{color:e.source.color,opacity:a(e),borderColor:R(e.source)})},from:function(e){return D({},X(e,!1),{color:e.source.color,opacity:0,borderColor:R(e.source)})},update:function(e){return D({},X(e,!1),{color:e.source.color,opacity:a(e),borderColor:R(e.source)})},leave:function(e){return D({},X(e,!1),{color:e.source.color,opacity:0,borderColor:R(e.source)})},expires:!0,config:A,immediate:!y});return(0,l.jsxDEV)(l.Fragment,{children:x((function(e,r){return(0,l.jsxDEV)(z,{ribbon:r,ribbonGenerator:n,animatedProps:e,borderWidth:o,blendMode:s,setCurrent:b,isInteractive:d,tooltip:g,onMouseEnter:v,onMouseMove:f,onMouseLeave:m,onClick:p},r.id,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/chord/src/ChordRibbons.tsx",lineNumber:128,columnNumber:21},void 0)}))},void 0,!1)})),J=(0,o.memo)((function(e){var r=e.arc,n=e.animatedProps,t=e.borderWidth,i=e.arcGenerator,c=e.setCurrent,s=e.isInteractive,d=e.onMouseEnter,b=e.onMouseMove,v=e.onMouseLeave,f=e.onClick,m=e.tooltip,p=(0,a.lL)(),g=p.showTooltipFromEvent,h=p.hideTooltip,y=(0,o.useMemo)((function(){if(s)return function(e){c(r),g((0,o.createElement)(m,{arc:r}),e),null==d||d(r,e)}}),[s,g,m,r,d,c]),A=(0,o.useMemo)((function(){if(s)return function(e){g((0,o.createElement)(m,{arc:r}),e),null==b||b(r,e)}}),[s,g,m,r,b]),M=(0,o.useMemo)((function(){if(s)return function(e){c(null),h(),null==v||v(r,e)}}),[s,h,r,v,c]),R=(0,o.useMemo)((function(){if(s&&f)return function(e){return null==f?void 0:f(r,e)}}),[s,r,f]);return(0,l.jsxDEV)(u.q.path,{"data-testid":"arc."+r.id,d:F({startAngle:n.startAngle,endAngle:n.endAngle,arcGenerator:i}),fill:n.color,opacity:n.opacity,strokeWidth:t,stroke:n.borderColor,onMouseEnter:y,onMouseMove:A,onMouseLeave:M,onClick:R},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/chord/src/ChordArc.tsx",lineNumber:73,columnNumber:13},void 0)})),K=(0,o.memo)((function(e){var r=e.arcs,n=e.borderWidth,o=e.borderColor,i=e.getOpacity,a=e.arcGenerator,s=e.setCurrent,d=e.isInteractive,b=e.onMouseEnter,v=e.onMouseMove,f=e.onMouseLeave,m=e.onClick,p=e.tooltip,g=(0,t.tf)(),h=g.animate,y=g.config,A=(0,t.Fg)(),M=(0,c.Bf)(o,A),R=(0,u.useTransition)(r,{keys:function(e){return e.id},initial:function(e){return{startAngle:e.startAngle,endAngle:e.endAngle,color:e.color,opacity:i(e),borderColor:M(e)}},from:function(e){return{startAngle:e.startAngle,endAngle:e.endAngle,color:e.color,opacity:0,borderColor:M(e)}},update:function(e){return{startAngle:e.startAngle,endAngle:e.endAngle,color:e.color,opacity:i(e),borderColor:M(e)}},leave:function(e){return{startAngle:e.startAngle,endAngle:e.endAngle,color:e.color,opacity:0,borderColor:M(e)}},expires:!0,config:y,immediate:!h});return(0,l.jsxDEV)(l.Fragment,{children:R((function(e,r){return(0,l.jsxDEV)(J,{arc:r,arcGenerator:a,animatedProps:e,borderWidth:n,setCurrent:s,isInteractive:d,tooltip:p,onMouseEnter:b,onMouseMove:v,onMouseLeave:f,onClick:m},r.id,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/chord/src/ChordArcs.tsx",lineNumber:81,columnNumber:21},void 0)}))},void 0,!1)})),Q=(0,o.memo)((function(e){var r=e.arcs,n=e.radius,i=e.rotation,a=e.color,s=(0,t.tf)(),d=s.animate,b=s.config,v=(0,t.Fg)(),f=(0,c.Bf)(a,v),m=(0,o.useMemo)((function(){return r.map((function(e){var r=(0,t.Vp)(e),o=(0,t.$t)(n,r,i);return{id:e.id,label:e.label,x:o.x,y:o.y,rotation:o.rotate,color:f(e),textAnchor:o.align,dominantBaseline:o.baseline}}))}),[r,n,i,f]),p=(0,u.useTransition)(m,{keys:function(e){return e.id},initial:function(e){return{x:e.x,y:e.y,rotation:e.rotation,color:e.color}},from:function(e){return{x:e.x,y:e.y,rotation:e.rotation,color:e.color}},enter:function(e){return{x:e.x,y:e.y,rotation:e.rotation,color:e.color}},update:function(e){return{x:e.x,y:e.y,rotation:e.rotation,color:e.color}},expires:!0,config:b,immediate:!d});return(0,l.jsxDEV)(l.Fragment,{children:p((function(e,r){return(0,l.jsxDEV)(u.q.text,{"data-testid":"label."+r.id,style:D({},v.labels.text,{pointerEvents:"none",fill:e.color}),transform:(0,u.to)([e.x,e.y,e.rotation],(function(e,r,n){return"translate("+e+", "+r+") rotate("+n+")"})),textAnchor:r.textAnchor,dominantBaseline:r.dominantBaseline,children:r.label},r.id,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/chord/src/ChordLabels.tsx",lineNumber:97,columnNumber:17},void 0)}))},void 0,!1)})),Y=["isInteractive","animate","motionConfig","theme","renderWrapper"],ee="/Users/raph/projects/plouc/nivo/packages/chord/src/Chord.tsx",re=function(e){var r=e.data,n=e.keys,a=e.label,c=e.valueFormat,u=e.margin,s=e.width,d=e.height,b=e.innerRadiusRatio,v=void 0===b?G.innerRadiusRatio:b,f=e.innerRadiusOffset,m=void 0===f?G.innerRadiusOffset:f,p=e.padAngle,g=void 0===p?G.padAngle:p,h=e.layers,y=void 0===h?G.layers:h,A=e.colors,M=void 0===A?G.colors:A,R=e.arcBorderWidth,x=void 0===R?G.arcBorderWidth:R,C=e.arcBorderColor,N=void 0===C?G.arcBorderColor:C,O=e.arcOpacity,E=void 0===O?G.arcOpacity:O,k=e.activeArcOpacity,j=void 0===k?G.activeArcOpacity:k,V=e.inactiveArcOpacity,B=void 0===V?G.inactiveArcOpacity:V,W=e.arcTooltip,w=void 0===W?G.arcTooltip:W,I=e.ribbonBorderWidth,L=void 0===I?G.ribbonBorderWidth:I,T=e.ribbonBorderColor,S=void 0===T?G.ribbonBorderColor:T,F=e.ribbonBlendMode,P=void 0===F?G.ribbonBlendMode:F,U=e.ribbonOpacity,q=void 0===U?G.ribbonOpacity:U,z=e.activeRibbonOpacity,X=void 0===z?G.activeRibbonOpacity:z,J=e.inactiveRibbonOpacity,Y=void 0===J?G.inactiveRibbonOpacity:J,re=e.ribbonTooltip,ne=void 0===re?G.ribbonTooltip:re,oe=e.enableLabel,te=void 0===oe?G.enableLabel:oe,ie=e.labelOffset,ae=void 0===ie?G.labelOffset:ie,le=e.labelRotation,ce=void 0===le?G.labelRotation:le,ue=e.labelTextColor,se=void 0===ue?G.labelTextColor:ue,de=e.isInteractive,be=void 0===de?G.isInteractive:de,ve=e.onArcMouseEnter,fe=e.onArcMouseMove,me=e.onArcMouseLeave,pe=e.onArcClick,ge=e.onRibbonMouseEnter,he=e.onRibbonMouseMove,ye=e.onRibbonMouseLeave,Ae=e.onRibbonClick,Me=e.legends,Re=void 0===Me?G.legends:Me,xe=e.role,Ce=void 0===xe?G.role:xe,Ne=e.ariaLabel,Oe=e.ariaLabelledBy,Ee=e.ariaDescribedBy,ke=(0,t.Bs)(s,d,u),je=ke.margin,Ve=ke.innerWidth,Be=ke.innerHeight,We=ke.outerWidth,De=ke.outerHeight,we=H({data:r,keys:n,label:a,valueFormat:c,width:Ve,height:Be,innerRadiusRatio:v,innerRadiusOffset:m,padAngle:g,colors:M}),Ie=we.center,Le=we.radius,Ge=we.arcGenerator,Te=we.ribbonGenerator,Se=we.arcs,Fe=we.ribbons,Pe=_({arcOpacity:E,activeArcOpacity:j,inactiveArcOpacity:B,ribbons:Fe,ribbonOpacity:q,activeRibbonOpacity:X,inactiveRibbonOpacity:Y}),Ue=Pe.setCurrentArc,qe=Pe.setCurrentRibbon,He=Pe.getArcOpacity,_e=Pe.getRibbonOpacity,$e=$({center:Ie,radius:Le,arcs:Se,arcGenerator:Ge,ribbons:Fe,ribbonGenerator:Te});if(Le<=0)return null;var ze=Se.map((function(e){return{id:e.id,label:e.label,color:e.color}})),Xe={ribbons:null,arcs:null,labels:null,legends:null};return y.includes("ribbons")&&(Xe.ribbons=(0,l.jsxDEV)("g",{transform:"translate("+Ie[0]+", "+Ie[1]+")",children:(0,l.jsxDEV)(Z,{ribbons:Fe,ribbonGenerator:Te,borderWidth:L,borderColor:S,getOpacity:_e,blendMode:P,setCurrent:qe,isInteractive:be,onMouseEnter:ge,onMouseMove:he,onMouseLeave:ye,onClick:Ae,tooltip:ne},void 0,!1,{fileName:ee,lineNumber:124,columnNumber:17},void 0)},"ribbons",!1,{fileName:ee,lineNumber:123,columnNumber:13},void 0)),y.includes("arcs")&&(Xe.arcs=(0,l.jsxDEV)("g",{transform:"translate("+Ie[0]+", "+Ie[1]+")",children:(0,l.jsxDEV)(K,{arcs:Se,arcGenerator:Ge,borderWidth:x,borderColor:N,getOpacity:He,setCurrent:Ue,isInteractive:be,onMouseEnter:ve,onMouseMove:fe,onMouseLeave:me,onClick:pe,tooltip:w},void 0,!1,{fileName:ee,lineNumber:146,columnNumber:17},void 0)},"arcs",!1,{fileName:ee,lineNumber:145,columnNumber:13},void 0)),y.includes("labels")&&te&&(Xe.labels=(0,l.jsxDEV)("g",{transform:"translate("+Ie[0]+", "+Ie[1]+")",children:(0,l.jsxDEV)(Q,{arcs:Se,radius:Le+ae,rotation:ce,color:se},void 0,!1,{fileName:ee,lineNumber:167,columnNumber:17},void 0)},"labels",!1,{fileName:ee,lineNumber:166,columnNumber:13},void 0)),y.includes("legends")&&Re.length>0&&(Xe.legends=(0,l.jsxDEV)(o.Fragment,{children:Re.map((function(e,r){return(0,l.jsxDEV)(i.$6,D({},e,{containerWidth:Ve,containerHeight:Be,data:ze}),r,!1,{fileName:ee,lineNumber:181,columnNumber:21},void 0)}))},"legends",!1,{fileName:ee,lineNumber:179,columnNumber:13},void 0)),(0,l.jsxDEV)(t.tM,{width:We,height:De,margin:je,role:Ce,ariaLabel:Ne,ariaLabelledBy:Oe,ariaDescribedBy:Ee,children:y.map((function(e,r){var n;return"function"==typeof e?(0,l.jsxDEV)(o.Fragment,{children:(0,o.createElement)(e,$e)},r,!1,{fileName:ee,lineNumber:205,columnNumber:28},void 0):null!=(n=null==Xe?void 0:Xe[e])?n:null}))},void 0,!1,{fileName:ee,lineNumber:194,columnNumber:9},void 0)},ne=function(e){var r=e.isInteractive,n=void 0===r?G.isInteractive:r,o=e.animate,i=void 0===o?G.animate:o,a=e.motionConfig,c=void 0===a?G.motionConfig:a,u=e.theme,s=e.renderWrapper,d=w(e,Y);return(0,l.jsxDEV)(t.W2,{animate:i,isInteractive:n,motionConfig:c,renderWrapper:s,theme:u,children:(0,l.jsxDEV)(re,D({isInteractive:n},d),void 0,!1,{fileName:ee,lineNumber:231,columnNumber:9},void 0)},void 0,!1,{fileName:ee,lineNumber:222,columnNumber:5},void 0)},oe=["theme","isInteractive","animate","motionConfig","renderWrapper"],te="/Users/raph/projects/plouc/nivo/packages/chord/src/ChordCanvas.tsx",ie=function(e){var r=e.event,n=e.canvasEl,o=e.center,i=e.margin,a=e.radius,l=e.innerRadius,c=e.arcs,u=(0,t.P6)(n,r),s=u[0],d=u[1],b=i.left+o[0],v=i.top+o[1];return(0,W.oO)(b,v,a,l,c,s,d)},ae=function(e){var r=e.pixelRatio,n=void 0===r?T.pixelRatio:r,u=e.margin,s=e.data,d=e.keys,b=e.width,v=e.height,f=e.label,m=void 0===f?T.label:f,p=e.valueFormat,g=e.innerRadiusRatio,h=void 0===g?T.innerRadiusRatio:g,y=e.innerRadiusOffset,A=void 0===y?T.innerRadiusOffset:y,M=e.padAngle,R=void 0===M?T.padAngle:M,x=e.layers,C=void 0===x?T.layers:x,N=e.colors,O=void 0===N?T.colors:N,E=e.arcBorderWidth,k=void 0===E?T.arcBorderWidth:E,j=e.arcBorderColor,V=void 0===j?T.arcBorderColor:j,B=e.arcOpacity,W=void 0===B?T.arcOpacity:B,w=e.activeArcOpacity,I=void 0===w?T.activeArcOpacity:w,L=e.inactiveArcOpacity,G=void 0===L?T.inactiveArcOpacity:L,S=e.arcTooltip,F=void 0===S?T.arcTooltip:S,P=e.ribbonBorderWidth,U=void 0===P?T.ribbonBorderWidth:P,q=e.ribbonBorderColor,z=void 0===q?T.ribbonBorderColor:q,X=e.ribbonOpacity,Z=void 0===X?T.ribbonOpacity:X,J=e.activeRibbonOpacity,K=void 0===J?T.activeRibbonOpacity:J,Q=e.inactiveRibbonOpacity,Y=void 0===Q?T.inactiveRibbonOpacity:Q,ee=e.enableLabel,re=void 0===ee?T.enableLabel:ee,ne=e.labelOffset,oe=void 0===ne?T.labelOffset:ne,ae=e.labelRotation,le=void 0===ae?T.labelRotation:ae,ce=e.labelTextColor,ue=void 0===ce?T.labelTextColor:ce,se=e.isInteractive,de=void 0===se?T.isInteractive:se,be=e.onArcMouseEnter,ve=e.onArcMouseMove,fe=e.onArcMouseLeave,me=e.onArcClick,pe=e.legends,ge=void 0===pe?T.legends:pe,he=(0,o.useRef)(null),ye=(0,t.Bs)(b,v,u),Ae=ye.innerWidth,Me=ye.innerHeight,Re=ye.outerWidth,xe=ye.outerHeight,Ce=ye.margin,Ne=H({data:s,keys:d,label:m,valueFormat:p,width:Ae,height:Me,innerRadiusRatio:h,innerRadiusOffset:A,padAngle:R,colors:O}),Oe=Ne.center,Ee=Ne.radius,ke=Ne.innerRadius,je=Ne.arcGenerator,Ve=Ne.ribbonGenerator,Be=Ne.arcs,We=Ne.ribbons,De=_({arcOpacity:W,activeArcOpacity:I,inactiveArcOpacity:G,ribbons:We,ribbonOpacity:Z,activeRibbonOpacity:K,inactiveRibbonOpacity:Y}),we=De.currentArc,Ie=De.setCurrentArc,Le=De.getArcOpacity,Ge=De.getRibbonOpacity,Te=(0,t.Fg)(),Se=(0,c.Bf)(ue,Te),Fe=(0,c.Bf)(V,Te),Pe=(0,c.Bf)(z,Te),Ue=$({center:Oe,radius:Ee,arcs:Be,arcGenerator:je,ribbons:We,ribbonGenerator:Ve});(0,o.useEffect)((function(){if(null!==he.current){he.current.width=Re*n,he.current.height=xe*n;var e=he.current.getContext("2d");e.scale(n,n),e.fillStyle=Te.background,e.fillRect(0,0,Re,xe),Ee<=0||C.forEach((function(r){if("ribbons"===r&&(e.save(),e.translate(Ce.left+Oe[0],Ce.top+Oe[1]),Ve.context(e),We.forEach((function(r){e.save(),e.globalAlpha=Ge(r),e.fillStyle=r.source.color,e.beginPath(),Ve(r),e.fill(),U>0&&(e.strokeStyle=Pe(r.source),e.lineWidth=U,e.stroke()),e.restore()})),e.restore()),"arcs"===r&&(e.save(),e.translate(Ce.left+Oe[0],Ce.top+Oe[1]),je.context(e),Be.forEach((function(r){e.save(),e.globalAlpha=Le(r),e.fillStyle=r.color,e.beginPath(),je(r),e.fill(),k>0&&(e.strokeStyle=Fe(r),e.lineWidth=k,e.stroke()),e.restore()})),e.restore()),"labels"===r&&!0===re&&(e.save(),e.translate(Ce.left+Oe[0],Ce.top+Oe[1]),e.font=Te.labels.text.fontSize+"px "+(Te.labels.text.fontFamily||"sans-serif"),Be.forEach((function(r){var n=(0,t.Vp)(r),o=(0,t.$t)(Ee+oe,n,le);e.save(),e.translate(o.x,o.y),e.rotate((0,t.Ht)(o.rotate)),e.textAlign=o.align,e.textBaseline=o.baseline,e.fillStyle=Se(r),e.fillText(r.label,0,0),e.restore()})),e.restore()),"legends"===r){e.save(),e.translate(Ce.left,Ce.top);var n=Be.map((function(e){return{id:e.id,label:e.label,color:e.color}}));ge.forEach((function(r){(0,i.as)(e,D({},r,{data:n,containerWidth:Ae,containerHeight:Me,theme:Te}))})),e.restore()}"function"==typeof r&&r(e,Ue)}))}}),[he,Ae,Me,Re,xe,Ce,n,Oe,Ee,Te,C,Be,je,Le,k,Fe,We,Ve,Ge,U,Pe,re,oe,le,Se,ge,Ue]);var qe=(0,a.lL)(),He=qe.showTooltipFromEvent,_e=qe.hideTooltip,$e=(0,o.useCallback)((function(e){if(null!==he.current){var r=ie({event:e,canvasEl:he.current,center:Oe,margin:Ce,radius:Ee,innerRadius:ke,arcs:Be});r?(Ie(r),He((0,o.createElement)(F,{arc:r}),e),!we&&be&&be(r,e),ve&&ve(r,e),we&&we.id!==r.id&&fe&&fe(r,e)):(Ie(null),_e(),we&&fe&&fe(we,e))}}),[he,Oe,Ce,Ee,ke,Be,Ie,we,He,_e,F,be,ve,fe]),ze=(0,o.useCallback)((function(){Ie(null),_e()}),[Ie,_e]),Xe=(0,o.useCallback)((function(e){if(null!==he.current&&me){var r=ie({event:e,canvasEl:he.current,center:Oe,margin:Ce,radius:Ee,innerRadius:ke,arcs:Be});r&&me(r,e)}}),[he,Oe,Ce,Ee,ke,Be,me]);return(0,l.jsxDEV)("canvas",{ref:he,width:Re*n,height:xe*n,style:{width:Re,height:xe,cursor:de?"auto":"normal"},onMouseEnter:de?$e:void 0,onMouseMove:de?$e:void 0,onMouseLeave:de?ze:void 0,onClick:de?Xe:void 0},void 0,!1,{fileName:te,lineNumber:355,columnNumber:9},void 0)},le=function(e){var r=e.theme,n=e.isInteractive,o=void 0===n?T.isInteractive:n,i=e.animate,a=void 0===i?T.animate:i,c=e.motionConfig,u=void 0===c?T.motionConfig:c,s=e.renderWrapper,d=w(e,oe);return(0,l.jsxDEV)(t.W2,{isInteractive:o,animate:a,motionConfig:u,theme:r,renderWrapper:s,children:(0,l.jsxDEV)(ae,D({isInteractive:o},d),void 0,!1,{fileName:te,lineNumber:381,columnNumber:9},void 0)},void 0,!1,{fileName:te,lineNumber:380,columnNumber:5},void 0)},ce="/Users/raph/projects/plouc/nivo/packages/chord/src/ResponsiveChord.tsx",ue=function(e){return(0,l.jsxDEV)(t.d,{children:function(r){var n=r.width,o=r.height;return(0,l.jsxDEV)(ne,D({},e,{width:n,height:o}),void 0,!1,{fileName:ce,lineNumber:7,columnNumber:33},void 0)}},void 0,!1,{fileName:ce,lineNumber:6,columnNumber:5},void 0)},se="/Users/raph/projects/plouc/nivo/packages/chord/src/ResponsiveChordCanvas.tsx",de=function(e){return(0,l.jsxDEV)(t.d,{children:function(r){var n=r.width,o=r.height;return(0,l.jsxDEV)(le,D({},e,{width:n,height:o}),void 0,!1,{fileName:se,lineNumber:7,columnNumber:33},void 0)}},void 0,!1,{fileName:se,lineNumber:6,columnNumber:5},void 0)}}}]);
//# sourceMappingURL=fdfa66205b88a9fae762ee6cb169ee9c5fd2a6d9-47792240a25d0db36a59.js.map