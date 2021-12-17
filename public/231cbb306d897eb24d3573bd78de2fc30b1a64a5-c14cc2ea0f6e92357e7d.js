"use strict";(self.webpackChunkcentral_valley_engineering=self.webpackChunkcentral_valley_engineering||[]).push([[504],{1575:function(e,t,n){n.d(t,{_:function(){return u}});var r=n(9900),i=n(2677),o=n(7618),a=n(2310);function s(){var e=!1,t=[],n=new Set,s={subscribe:function(e){return n.add(e),function(){n.delete(e)}},start:function(r,i){if(e){var a=[];return n.forEach((function(e){a.push((0,o.d5)(e,r,{transitionOverride:i}))})),Promise.all(a)}return new Promise((function(e){t.push({animation:[r,i],resolve:e})}))},set:function(t){return(0,i.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((function(e){(0,a.gg)(e,t)}))},stop:function(){n.forEach((function(e){(0,o.p_)(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,n=e.resolve;s.start.apply(s,(0,r.ev)([],(0,r.CR)(t))).then(n)})),function(){e=!1,s.stop()}}};return s}var l=n(7294),c=n(9179);function u(){var e=(0,c.h)(s);return(0,l.useEffect)(e.mount,[]),e}},660:function(e,t,n){n.d(t,{YD:function(){return d}});var r=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var o=new Map,a=new WeakMap,s=0;function l(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(s+=1,a.set(n,s.toString())),a.get(n)):"0":e[t]);var n})).toString()}function c(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=l(e),n=o.get(t);if(!n){var r,i=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:i},o.set(t,n)}return n}(n),i=r.id,a=r.observer,s=r.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(i))}}function u(e){return"function"!=typeof e.children}var f=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,a=o.children,s=o.as,l=o.tag,c=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,r.createElement)(s||l||"div",i({ref:this.handleNode},c),a)},o}(r.Component);function d(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,o=t.trackVisibility,a=t.rootMargin,s=t.root,l=t.triggerOnce,u=t.skip,f=t.initialInView,d=(0,r.useRef)(),h=(0,r.useState)({inView:!!f}),v=h[0],p=h[1],m=(0,r.useCallback)((function(e){void 0!==d.current&&(d.current(),d.current=void 0),u||e&&(d.current=c(e,(function(e,t){p({inView:e,entry:t}),t.isIntersecting&&l&&d.current&&(d.current(),d.current=void 0)}),{root:s,rootMargin:a,threshold:n,trackVisibility:o,delay:i}))}),[Array.isArray(n)?n.toString():n,s,a,l,u,o,i]);(0,r.useEffect)((function(){d.current||!v.entry||l||u||p({inView:!!f})}));var g=[m,v.inView,v.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},5642:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i=function(){return r.createElement("hr",{className:"h-1 w-16 bg-yellow my-4"})},o=function(e){var t=e.heading,n=e.subheading,o=e.separator,a=void 0===o||o;return r.createElement(r.Fragment,null,r.createElement("h4",{className:"text-yellow uppercase font-semibold text-base mb-2"},n),r.createElement("h2",{className:"text-white font-mono text-4xl"},t),a&&r.createElement(i,null))}},998:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),i=n(690),o=n(7004),a=function(e){var t=e.title,n=e.description,a=e.backgroundImage,s=e.href,l=(0,r.useState)(!1),c=l[0],u=l[1];return r.createElement(i.E.div,{onTapStart:function(){u((function(e){return!e}))},onHoverStart:function(){u(!0)},onHoverEnd:function(){u(!1)},whileHover:{scale:1.05,cursor:"pointer"},transition:{duration:.3},className:"flex flex-col relative h-64 bg-black rounded-lg overflow-hidden select-none"},r.createElement("div",{className:"relative w-full h-full"},a,r.createElement(i.E.div,{className:"absolute left-0 top-0 w-full h-full z-0",initial:"hidden",animate:c?"visible":"hidden",transition:{duration:.3},variants:{visible:{backgroundColor:"#000000BB"},hidden:{backgroundColor:"#00000022"}}}),r.createElement("div",{className:"flex flex-col p-4 z-10 items-baseline text-left h-full"},r.createElement("h3",{className:"text-yellow text-xl font-mono text-shadow z-10"},t),r.createElement(i.E.p,{initial:"hidden",animate:c?"visible":"hidden",transition:{duration:.3},variants:{visible:{opacity:1,translateY:0},hidden:{opacity:0,translateY:-20}},className:"pb-4 flex-1 z-10"},n),r.createElement(i.E.div,{initial:"hidden",animate:c?"visible":"hidden",variants:{visible:{opacity:1,translateX:0},hidden:{opacity:0,translateX:-50}},transition:{duration:.3},className:"z-10"},r.createElement(o.Z,{href:s,variant:"yellow",size:"lg",icon:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",clipRule:"evenodd"})),message:"View Service",animate:!1})))))},s=n(5642),l=n(173),c=n(1575),u=n(660),f=function(){var e=(0,c._)(),t=(0,u.YD)(),n=t[0],o=t[1];(0,r.useEffect)((function(){o&&e.start("visible")}),[e,o]);var f={hidden:{opacity:0},visible:{opacity:1}};return r.createElement("div",{className:"text-center flex flex-col items-center"},r.createElement(s.Z,{heading:"Our Services",subheading:"Find the service to suit your needs"}),r.createElement(i.E.div,{ref:n,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},animate:e,initial:"hidden",className:"grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3  md:grid-rows-2 text-white gap-4"},l.Z.map((function(e){return r.createElement(i.E.div,{variants:f,key:e.link},r.createElement(a,{title:e.name,description:e.description,backgroundImage:e.image,href:e.link}))}))))}},2737:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),i=n(9900),o=n(9922);var a=n(2267),s=n(9179),l=0;function c(){var e=l;return l++,e}var u=function(e){var t=e.children,n=e.initial,i=e.isPresent,o=e.onExitComplete,l=e.custom,u=e.presenceAffectsLayout,d=(0,s.h)(f),h=(0,s.h)(c),v=(0,r.useMemo)((function(){return{id:h,initial:n,isPresent:i,custom:l,onExitComplete:function(e){d.set(e,!0);var t=!0;d.forEach((function(e){e||(t=!1)})),t&&(null==o||o())},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),u?void 0:[i]);return(0,r.useMemo)((function(){d.forEach((function(e,t){return d.set(t,!1)}))}),[i]),r.useEffect((function(){!i&&!d.size&&(null==o||o())}),[i]),r.createElement(a.O.Provider,{value:v},t)};function f(){return new Map}var d=n(9180);function h(e){return e.key||""}var v=function(e){var t=e.children,n=e.custom,a=e.initial,s=void 0===a||a,l=e.onExitComplete,c=e.exitBeforeEnter,f=e.presenceAffectsLayout,v=void 0===f||f,p=function(){var e=(0,r.useRef)(!1),t=(0,i.CR)((0,r.useState)(0),2),n=t[0],a=t[1];return(0,o.z)((function(){return e.current=!0})),(0,r.useCallback)((function(){!e.current&&a(n+1)}),[n])}(),m=(0,r.useContext)(d.WH);(0,d.Md)(m)&&(p=m.forceUpdate);var g=(0,r.useRef)(!0),y=function(e){var t=[];return r.Children.forEach(e,(function(e){(0,r.isValidElement)(e)&&t.push(e)})),t}(t),b=(0,r.useRef)(y),w=(0,r.useRef)(new Map).current,E=(0,r.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=h(e);t.set(n,e)}))}(y,w),g.current)return g.current=!1,r.createElement(r.Fragment,null,y.map((function(e){return r.createElement(u,{key:h(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:v},e)})));for(var k=(0,i.ev)([],(0,i.CR)(y)),x=b.current.map(h),C=y.map(h),V=x.length,N=0;N<V;N++){var O=x[N];-1===C.indexOf(O)?E.add(O):E.delete(O)}return c&&E.size&&(k=[]),E.forEach((function(e){if(-1===C.indexOf(e)){var t=w.get(e);if(t){var i=x.indexOf(e);k.splice(i,0,r.createElement(u,{key:h(t),isPresent:!1,onExitComplete:function(){w.delete(e),E.delete(e);var t=b.current.findIndex((function(t){return t.key===e}));b.current.splice(t,1),E.size||(b.current=y,p(),l&&l())},custom:n,presenceAffectsLayout:v},t))}}})),k=k.map((function(e){var t=e.key;return E.has(t)?e:r.createElement(u,{key:h(e),isPresent:!0,presenceAffectsLayout:v},e)})),b.current=k,r.createElement(r.Fragment,null,E.size?k:k.map((function(e){return(0,r.cloneElement)(e)})))},p=n(690),m={enter:function(e){return{x:e.direction>0?e.width:-e.width}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e.direction<0?e.width:-e.width,opacity:0}}},g=function(e){var t=e.images,n=e.height,i=(0,r.useState)(0),o=i[0],a=i[1],s=(0,r.useState)(0),l=s[0],c=s[1],u=(0,r.useState)(0),f=u[0],d=u[1],h=(0,r.useCallback)((function(){c(1),o+1<t.length?a((function(e){return e+1})):a(0)}),[o,t.length]);return(0,r.useEffect)((function(){var e=setInterval((function(){h()}),5e3);return function(){return clearInterval(e)}}),[h]),r.createElement(r.Fragment,null,t&&r.createElement("div",{className:"w-full relative overflow-hidden",style:{height:n},ref:function(e){return e&&d(e.offsetWidth)}},r.createElement(v,{initial:!1,custom:{direction:l,width:f}},r.createElement(p.E.div,{key:o,className:"flex h-full w-full absolute justify-center",variants:m,transition:{x:{type:"spring",stiffness:300,damping:30}},initial:"enter",exit:"exit",animate:"center",custom:{direction:l,width:f}},t[o])),r.createElement("button",{className:"absolute text-white top-1/2 left-2 transform-gpu -translate-y-1/2 z-10",onClick:function(){c(-1),a(o-1>=0?function(e){return e-1}:t.length-1)}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}))),r.createElement("button",{className:"absolute text-white top-1/2 right-2 transform-gpu -translate-y-1/2 z-10",onClick:h},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})))))}}}]);
//# sourceMappingURL=231cbb306d897eb24d3573bd78de2fc30b1a64a5-c14cc2ea0f6e92357e7d.js.map