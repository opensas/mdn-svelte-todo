var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function l(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t,e,n=e){return t.set(n),e}function a(e){return e&&l(e.destroy)?e.destroy:t}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),0!==p.size&&f(m)}function h(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function _(){return v(" ")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e){t.value=null==e?"":e}function S(t,e,n){t.classList[n?"add":"remove"](e)}function T(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const A=new Set;let M,N=0;function O(t,e,n,o,s,l,c,r=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*l(t);a+=100*t+`%{${c(o,1-o)}}\n`}const u=a+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=t.ownerDocument;A.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(b("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${d} ${o}ms linear ${s}ms 1 both`,N+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),N-=s,N||f(()=>{N||(A.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),A.clear())}))}function D(t){M=t}function L(){if(!M)throw new Error("Function called outside component initialization");return M}function R(){const t=L();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=T(e,n);o.slice().forEach(e=>{e.call(t,s)})}}}const z=[],B=[],I=[],P=[],U=Promise.resolve();let q=!1;function F(t){I.push(t)}function J(t){P.push(t)}let W=!1;const H=new Set;function V(){if(!W){W=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];D(e),G(e.$$)}for(z.length=0;B.length;)B.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];H.has(e)||(H.add(e),e())}I.length=0}while(z.length);for(;P.length;)P.pop()();q=!1,W=!1,H.clear()}}function G(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}let K;function Q(t,e,n){t.dispatchEvent(T(`${e?"intro":"outro"}${n}`))}const X=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function tt(){Y.r||s(Y.c),Y=Y.p}function et(t,e){t&&t.i&&(X.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push(()=>{X.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const ot={duration:0};function st(n,o,c,r){let i=o(n,c),a=r?0:1,u=null,h=null,$=null;function g(){$&&j(n,$)}function b(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(o){const{delay:l=0,duration:c=300,easing:r=e,tick:y=t,css:v}=i||ot,_={start:d()+l,b:o};o||(_.group=Y,Y.r+=1),u?h=_:(v&&(g(),$=O(n,a,o,c,l,r,v)),o&&y(0,1),u=b(_,c),F(()=>Q(n,o,"start")),function(t){let e;0===p.size&&f(m),new Promise(n=>{p.add(e={c:t,f:n})})}(t=>{if(h&&t>h.start&&(u=b(h,c),h=null,Q(n,u.b,"start"),v&&(g(),$=O(n,a,u.b,u.duration,0,r,i.css))),u)if(t>=u.end)y(a=u.b,1-a),Q(n,u.b,"end"),h||(u.b?g():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*r(e/u.duration),y(a,1-a)}return!(!u&&!h)}))}return{run(t){l(i)?(K||(K=Promise.resolve(),K.then(()=>{K=null})),K).then(()=>{i=i(),y(t)}):y(t)},end(){g(),u=h=null}}}function lt(t,e){nt(t,1,1,()=>{e.delete(t.key)})}function ct(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function rt(t){t&&t.c()}function it(t,e,o){const{fragment:c,on_mount:r,on_destroy:i,after_update:a}=t.$$;c&&c.m(e,o),F(()=>{const e=r.map(n).filter(l);i?i.push(...e):s(e),t.$$.on_mount=[]}),a.forEach(F)}function at(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(z.push(t),q||(q=!0,U.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(e,n,l,c,r,i,a=[-1]){const u=M;D(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a};let p=!1;if(f.ctx=l?l(e,d,(t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=s)&&(f.bound[t]&&f.bound[t](s),p&&ut(e,t)),n}):[],f.update(),p=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&et(e.$$.fragment),it(e,n.target,n.anchor),V()}D(u)}class ft{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function pt(e){let n,o,l,c,r,i,a,u,d,f,p,m,y,v,x,C,E,T,A,M,N,O,j,D,L,R;return{c(){n=b("div"),o=b("button"),l=b("span"),l.textContent="Show",c=_(),r=b("span"),r.textContent="All",i=_(),a=b("span"),a.textContent="tasks",d=_(),f=b("button"),p=b("span"),p.textContent="Show",m=_(),y=b("span"),y.textContent="Active",v=_(),x=b("span"),x.textContent="tasks",E=_(),T=b("button"),A=b("span"),A.textContent="Show",M=_(),N=b("span"),N.textContent="Completed",O=_(),j=b("span"),j.textContent="tasks",k(l,"class","visually-hidden"),k(a,"class","visually-hidden"),k(o,"class","btn toggle-btn"),k(o,"aria-pressed",u="all"===e[0]),S(o,"btn__primary","all"===e[0]),k(p,"class","visually-hidden"),k(x,"class","visually-hidden"),k(f,"class","btn toggle-btn"),k(f,"aria-pressed",C="active"===e[0]),S(f,"btn__primary","active"===e[0]),k(A,"class","visually-hidden"),k(j,"class","visually-hidden"),k(T,"class","btn toggle-btn"),k(T,"aria-pressed",D="completed"===e[0]),S(T,"btn__primary","completed"===e[0]),k(n,"class","filters btn-group stack-exception")},m(t,s){$(t,n,s),h(n,o),h(o,l),h(o,c),h(o,r),h(o,i),h(o,a),h(n,d),h(n,f),h(f,p),h(f,m),h(f,y),h(f,v),h(f,x),h(n,E),h(n,T),h(T,A),h(T,M),h(T,N),h(T,O),h(T,j),L||(R=[w(o,"click",e[1]),w(f,"click",e[2]),w(T,"click",e[3])],L=!0)},p(t,[e]){1&e&&u!==(u="all"===t[0])&&k(o,"aria-pressed",u),1&e&&S(o,"btn__primary","all"===t[0]),1&e&&C!==(C="active"===t[0])&&k(f,"aria-pressed",C),1&e&&S(f,"btn__primary","active"===t[0]),1&e&&D!==(D="completed"===t[0])&&k(T,"aria-pressed",D),1&e&&S(T,"btn__primary","completed"===t[0])},i:t,o:t,d(t){t&&g(n),L=!1,s(R)}}}function mt(t,e,n){let{filter:o="all"}=e;return t.$set=t=>{"filter"in t&&n(0,o=t.filter)},[o,()=>n(0,o="all"),()=>n(0,o="active"),()=>n(0,o="completed")]}class ht extends ft{constructor(t){super(),dt(this,t,mt,pt,c,{filter:0})}}function $t(t){if(t&&"function"==typeof t.select){const e=e=>t.select();return t.addEventListener("focus",e),{destroy:()=>t.removeEventListener("focus",e)}}}function gt(t){let e,n,o,l,c,r,i,u,d,f,p,m,y,x,E,S,T,A,M,N,O,j,D=t[0].name+"",L=t[0].name+"",R=t[0].name+"";return{c(){e=b("div"),n=b("input"),c=_(),r=b("label"),i=v(D),d=_(),f=b("div"),p=b("button"),m=v("Edit"),y=b("span"),x=v(L),S=_(),T=b("button"),A=v("Delete"),M=b("span"),N=v(R),k(n,"type","checkbox"),k(n,"id",o="todo-"+t[0].id),n.checked=l=t[0].completed,k(r,"for",u="todo-"+t[0].id),k(r,"class","todo-label"),k(e,"class","c-cb"),k(y,"class","visually-hidden"),k(p,"type","button"),k(p,"class","btn"),k(M,"class","visually-hidden"),k(T,"type","button"),k(T,"class","btn btn__danger"),k(f,"class","btn-group")},m(o,s){$(o,e,s),h(e,n),h(e,c),h(e,r),h(r,i),$(o,d,s),$(o,f,s),h(f,p),h(p,m),h(p,y),h(y,x),h(f,S),h(f,T),h(T,A),h(T,M),h(M,N),O||(j=[w(n,"click",t[7]),w(p,"click",t[6]),a(E=t[9].call(null,p)),w(T,"click",t[5])],O=!0)},p(t,e){1&e&&o!==(o="todo-"+t[0].id)&&k(n,"id",o),1&e&&l!==(l=t[0].completed)&&(n.checked=l),1&e&&D!==(D=t[0].name+"")&&C(i,D),1&e&&u!==(u="todo-"+t[0].id)&&k(r,"for",u),1&e&&L!==(L=t[0].name+"")&&C(x,L),1&e&&R!==(R=t[0].name+"")&&C(N,R)},d(t){t&&g(e),t&&g(d),t&&g(f),O=!1,s(j)}}}function bt(t){let e,n,o,l,c,r,i,u,d,f,p,m,y,S,T,A,M,N,O,j,D,L,R,z,B,I,P,U,q=t[0].name+"",F=t[0].name+"",J=t[0].name+"";return{c(){e=b("form"),n=b("div"),o=b("label"),l=v("New name for '"),c=v(q),r=v("'"),u=_(),d=b("input"),y=_(),S=b("div"),T=b("button"),A=v("Cancel"),M=b("span"),N=v("renaming "),O=v(F),j=_(),D=b("button"),L=v("Save"),R=b("span"),z=v("new name for "),B=v(J),k(o,"for",i="todo-"+t[0].id),k(o,"class","todo-label"),k(d,"type","text"),k(d,"id",f="todo-"+t[0].id),k(d,"autocomplete","off"),k(d,"class","todo-text"),k(n,"class","form-group"),k(M,"class","visually-hidden"),k(T,"class","btn todo-cancel"),k(T,"type","button"),k(R,"class","visually-hidden"),k(D,"class","btn btn__primary todo-edit"),k(D,"type","submit"),D.disabled=I=!t[2],k(S,"class","btn-group"),k(e,"class","stack-small")},m(s,i){$(s,e,i),h(e,n),h(n,o),h(o,l),h(o,c),h(o,r),h(n,u),h(n,d),E(d,t[2]),h(e,y),h(e,S),h(S,T),h(T,A),h(T,M),h(M,N),h(M,O),h(S,j),h(S,D),h(D,L),h(D,R),h(R,z),h(R,B),P||(U=[w(d,"input",t[10]),a(p=$t.call(null,d)),a(m=t[8].call(null,d)),w(T,"click",t[3]),w(e,"submit",x(t[4])),w(e,"keydown",t[11])],P=!0)},p(t,e){1&e&&q!==(q=t[0].name+"")&&C(c,q),1&e&&i!==(i="todo-"+t[0].id)&&k(o,"for",i),1&e&&f!==(f="todo-"+t[0].id)&&k(d,"id",f),4&e&&d.value!==t[2]&&E(d,t[2]),1&e&&F!==(F=t[0].name+"")&&C(O,F),1&e&&J!==(J=t[0].name+"")&&C(B,J),4&e&&I!==(I=!t[2])&&(D.disabled=I)},d(t){t&&g(e),P=!1,s(U)}}}function yt(e){let n;function o(t,e){return t[1]?bt:gt}let s=o(e),l=s(e);return{c(){n=b("div"),l.c(),k(n,"class","stack-small")},m(t,e){$(t,n,e),l.m(n,null)},p(t,[e]){s===(s=o(t))&&l?l.p(t,e):(l.d(1),l=s(t),l&&(l.c(),l.m(n,null)))},i:t,o:t,d(t){t&&g(n),l.d()}}}function vt(t,e,n){const o=R();let{todo:s}=e,l=!1,c=!1,r=s.name;function i(t){n(0,s={...s,...t}),o("update",s)}function a(){n(2,r=s.name),n(1,l=!1)}return t.$set=t=>{"todo"in t&&n(0,s=t.todo)},[s,l,r,a,function(){i({name:r}),n(1,l=!1)},function(){o("remove",s)},function(){c=!0,n(1,l=!0)},function(){i({completed:!s.completed})},t=>t&&"function"==typeof t.focus&&t.focus(),t=>c&&t.focus(),function(){r=this.value,n(2,r)},t=>"Escape"===t.key&&a()]}class _t extends ft{constructor(t){super(),dt(this,t,vt,yt,c,{todo:0})}}function wt(e){let n,o,l,c,r,i,a,u,d,f,p,m=e[1]?"Check":"Uncheck";return{c(){n=b("div"),o=b("button"),l=v(m),c=v(" all"),i=_(),a=b("button"),u=v("Remove completed"),k(o,"type","button"),k(o,"class","btn btn__primary"),o.disabled=r=0===e[0].length,k(a,"type","button"),k(a,"class","btn btn__primary"),a.disabled=d=0===e[2],k(n,"class","btn-group")},m(t,s){$(t,n,s),h(n,o),h(o,l),h(o,c),h(n,i),h(n,a),h(a,u),f||(p=[w(o,"click",e[3]),w(a,"click",e[4])],f=!0)},p(t,[e]){2&e&&m!==(m=t[1]?"Check":"Uncheck")&&C(l,m),1&e&&r!==(r=0===t[0].length)&&(o.disabled=r),4&e&&d!==(d=0===t[2])&&(a.disabled=d)},i:t,o:t,d(t){t&&g(n),f=!1,s(p)}}}function xt(t,e,n){const o=R();let{todos:s}=e,l=!0;let c;return t.$set=t=>{"todos"in t&&n(0,s=t.todos)},t.$$.update=()=>{1&t.$$.dirty&&n(2,c=s.filter(t=>t.completed).length)},[s,l,c,()=>{o("checkAll",l),n(1,l=!l)},()=>o("removeCompleted")]}class kt extends ft{constructor(t){super(),dt(this,t,xt,wt,c,{todos:0})}}function Ct(e){let n,o,l,c,r,i,u,d,f,p,m;return{c(){n=b("form"),o=b("h2"),o.innerHTML='<label for="todo-0" class="label__lg">What needs to be done?</label>',l=_(),c=b("input"),i=_(),u=b("button"),d=v("Add"),k(o,"class","label-wrapper"),k(c,"type","text"),k(c,"id","todo-0"),k(c,"autocomplete","off"),k(c,"class","input input__lg"),k(u,"type","submit"),u.disabled=f=!e[0],k(u,"class","btn btn__primary btn__lg")},m(t,s){$(t,n,s),h(n,o),h(n,l),h(n,c),E(c,e[0]),e[6](c),h(n,i),h(n,u),h(u,d),p||(m=[w(c,"input",e[5]),a(r=$t.call(null,c)),w(n,"submit",x(e[2])),w(n,"keydown",e[7])],p=!0)},p(t,[e]){1&e&&c.value!==t[0]&&E(c,t[0]),1&e&&f!==(f=!t[0])&&(u.disabled=f)},i:t,o:t,d(t){t&&g(n),e[6](null),p=!1,s(m)}}}function Et(t,e,n){const o=R();let s,{autofocus:l=!1}=e,c="";const r=()=>{n(0,c=""),s.focus()};var i;i=()=>l&&s.focus(),L().$$.on_mount.push(i);return t.$set=t=>{"autofocus"in t&&n(4,l=t.autofocus)},[c,s,()=>{o("addTodo",c),n(0,c=""),s.focus()},r,l,function(){c=this.value,n(0,c)},function(t){B[t?"unshift":"push"](()=>{s=t,n(1,s)})},t=>"Escape"===t.key&&r()]}class St extends ft{constructor(t){super(),dt(this,t,Et,Ct,c,{autofocus:4})}}function Tt(e){let n,o,s,l,c;return{c(){n=b("h2"),o=v(e[2]),s=v(" out of "),l=v(e[1]),c=v(" items completed"),k(n,"id","list-heading"),k(n,"tabindex","-1")},m(t,r){$(t,n,r),h(n,o),h(n,s),h(n,l),h(n,c),e[5](n)},p(t,[e]){4&e&&C(o,t[2]),2&e&&C(l,t[1])},i:t,o:t,d(t){t&&g(n),e[5](null)}}}function At(t,e,n){let o,{todos:s}=e;let l,c;return t.$set=t=>{"todos"in t&&n(3,s=t.todos)},t.$$.update=()=>{8&t.$$.dirty&&n(1,l=s.length),8&t.$$.dirty&&n(2,c=s.filter(t=>t.completed).length)},[o,l,c,s,()=>o.focus(),function(t){B[t?"unshift":"push"](()=>{o=t,n(0,o)})}]}class Mt extends ft{constructor(t){super(),dt(this,t,At,Tt,c,{todos:3,focus:4})}get focus(){return this.$$.ctx[4]}}const Nt=[];function Ot(e,n=t){let o;const s=[];function l(t){if(c(e,t)&&(e=t,o)){const t=!Nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Nt.push(n,e)}if(t){for(let t=0;t<Nt.length;t+=2)Nt[t][0](Nt[t+1]);Nt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(c,r=t){const i=[c,r];return s.push(i),1===s.length&&(o=n(l)||t),c(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}const jt=Ot("Welcome to the To-Do list app!"),Dt=((t,e)=>{const n=t=>JSON.stringify(t,null,2),o=JSON.parse;null===localStorage.getItem(t)&&localStorage.setItem(t,n(e));const s=o(localStorage.getItem(t)),{subscribe:l,set:c,update:r}=Ot(s);return{subscribe:l,set:e=>(localStorage.setItem(t,n(e)),c(e)),update:r}})("mdn-svelte-todo",[{id:1,name:"Visit MDN web docs",completed:!0},{id:2,name:"Complete the Svelte Tutorial",completed:!1}]);function Lt(t,e,n){const o=t.slice();return o[17]=e[n],o}function Rt(t){let e;return{c(){e=b("li"),e.textContent="Nothing to do here!"},m(t,n){$(t,e,n)},d(t){t&&g(e)}}}function zt(t,e){let n,o,s,l;return o=new _t({props:{todo:e[17]}}),o.$on("update",e[12]),o.$on("remove",e[13]),{key:t,first:null,c(){n=b("li"),rt(o.$$.fragment),s=_(),k(n,"class","todo"),this.first=n},m(t,e){$(t,n,e),it(o,n,null),h(n,s),l=!0},p(t,e){const n={};5&e&&(n.todo=t[17]),o.$set(n)},i(t){l||(et(o.$$.fragment,t),l=!0)},o(t){nt(o.$$.fragment,t),l=!1},d(t){t&&g(n),at(o)}}}function Bt(t){let e,n,o,s,l,c,r,i,a,u,d,f,p,m,y=[],v=new Map;function w(e){t[10].call(null,e)}n=new St({props:{autofocus:!0}}),n.$on("addTodo",t[9]);let x={};void 0!==t[2]&&(x.filter=t[2]),s=new ht({props:x}),B.push(()=>ct(s,"filter",w));let C={todos:t[0]};r=new Mt({props:C}),t[11](r);let E=t[6](t[2],t[0]);const S=t=>t[17].id;for(let e=0;e<E.length;e+=1){let n=Lt(t,E,e),o=S(n);v.set(o,y[e]=zt(o,n))}let T=null;return E.length||(T=Rt()),p=new kt({props:{todos:t[0]}}),p.$on("checkAll",t[14]),p.$on("removeCompleted",t[8]),{c(){e=b("div"),rt(n.$$.fragment),o=_(),rt(s.$$.fragment),c=_(),rt(r.$$.fragment),i=_(),a=b("ul");for(let t=0;t<y.length;t+=1)y[t].c();T&&T.c(),u=_(),d=b("hr"),f=_(),rt(p.$$.fragment),k(a,"role","list"),k(a,"class","todo-list stack-large"),k(a,"aria-labelledby","list-heading"),k(e,"class","todoapp stack-large")},m(t,l){$(t,e,l),it(n,e,null),h(e,o),it(s,e,null),h(e,c),it(r,e,null),h(e,i),h(e,a);for(let t=0;t<y.length;t+=1)y[t].m(a,null);T&&T.m(a,null),h(e,u),h(e,d),h(e,f),it(p,e,null),m=!0},p(t,[e]){const n={};!l&&4&e&&(l=!0,n.filter=t[2],J(()=>l=!1)),s.$set(n);const o={};if(1&e&&(o.todos=t[0]),r.$set(o),117&e){const n=t[6](t[2],t[0]);Z(),y=function(t,e,n,o,s,l,c,r,i,a,u,d){let f=t.length,p=l.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const $=[],g=new Map,b=new Map;for(m=p;m--;){const t=d(s,l,m),r=n(t);let i=c.get(r);i?o&&i.p(t,e):(i=a(r,t),i.c()),g.set(r,$[m]=i),r in h&&b.set(r,Math.abs(m-h[r]))}const y=new Set,v=new Set;function _(t){et(t,1),t.m(r,u),c.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=$[p-1],n=t[f-1],o=e.key,s=n.key;e===n?(u=e.first,f--,p--):g.has(s)?!c.has(o)||y.has(o)?_(e):v.has(s)?f--:b.get(o)>b.get(s)?(v.add(o),_(e)):(y.add(s),f--):(i(n,c),f--)}for(;f--;){const e=t[f];g.has(e.key)||i(e,c)}for(;p;)_($[p-1]);return $}(y,e,S,1,t,n,v,a,lt,zt,null,Lt),tt(),n.length?T&&(T.d(1),T=null):T||(T=Rt(),T.c(),T.m(a,null))}const c={};1&e&&(c.todos=t[0]),p.$set(c)},i(t){if(!m){et(n.$$.fragment,t),et(s.$$.fragment,t),et(r.$$.fragment,t);for(let t=0;t<E.length;t+=1)et(y[t]);et(p.$$.fragment,t),m=!0}},o(t){nt(n.$$.fragment,t),nt(s.$$.fragment,t),nt(r.$$.fragment,t);for(let t=0;t<y.length;t+=1)nt(y[t]);nt(p.$$.fragment,t),m=!1},d(o){o&&g(e),at(n),at(s),t[11](null),at(r);for(let t=0;t<y.length;t+=1)y[t].d();T&&T.d(),at(p)}}}function It(t,e,n){let o;r(t,jt,t=>n(16,o=t));let s,{todos:l=[]}=e;function c(t){n(0,l=[...l,{id:p,name:t,completed:!1}]),i(jt,o=`Todo '${t}' has been added`)}function a(t){n(0,l=l.filter(e=>e.id!==t.id)),s.focus(),i(jt,o=`Todo '${t.name}' has been deleted`)}function u(t){const e=l.findIndex(e=>e.id===t.id);l[e].name!==t.name&&i(jt,o=`todo '${l[e].name}' has been renamed to '${t.name}'`),l[e].completed!==t.completed&&i(jt,o=`todo '${l[e].name}' marked as ${t.completed?"completed":"active"}`),n(0,l[e]={...l[e],...t},l)}let d="all";const f=t=>{n(0,l=l.map(e=>({...e,completed:t}))),i(jt,o=`${t?"Checked":"Unchecked"} ${l.length} todos`)};let p;return t.$set=t=>{"todos"in t&&n(0,l=t.todos)},t.$$.update=()=>{1&t.$$.dirty&&(p=l.length>0?Math.max(...l.map(t=>t.id))+1:1),4&t.$$.dirty&&("all"===d?i(jt,o="Browsing all todos"):"active"===d?i(jt,o="Browsing active todos"):"completed"===d&&i(jt,o="Browsing completed todos"))},[l,s,d,c,a,u,(t,e)=>"active"===t?e.filter(t=>!t.completed):"completed"===t?e.filter(t=>t.completed):e,f,()=>{i(jt,o=`Removed ${l.filter(t=>t.completed).length} todos`),n(0,l=l.filter(t=>!t.completed))},t=>c(t.detail),function(t){d=t,n(2,d)},function(t){B[t?"unshift":"push"](()=>{s=t,n(1,s)})},t=>u(t.detail),t=>a(t.detail),t=>f(t.detail)]}class Pt extends ft{constructor(t){super(),dt(this,t,It,Bt,c,{todos:0})}}function Ut(t){const e=t-1;return e*e*e+1}function qt(t,{delay:e=0,duration:n=400,easing:o=Ut,x:s=0,y:l=0,opacity:c=0}){const r=getComputedStyle(t),i=+r.opacity,a="none"===r.transform?"":r.transform,u=i*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*s}px, ${(1-t)*l}px);\n\t\t\topacity: ${i-u*e}`}}function Ft(t){let e,n,o,s,l,c,r,i,a,u;return{c(){e=b("div"),n=y("svg"),o=y("path"),s=_(),l=b("p"),c=v(t[1]),k(o,"d","M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"viewBox","0 0 20 20"),k(n,"class","svelte-10fwmbj"),k(l,"class","svelte-10fwmbj"),k(e,"role","alert"),k(e,"aria-live","polite"),k(e,"class","svelte-10fwmbj")},m(r,d){$(r,e,d),h(e,n),h(n,o),h(e,s),h(e,l),h(l,c),i=!0,a||(u=w(e,"click",t[3]),a=!0)},p(t,e){(!i||2&e)&&C(c,t[1])},i(t){i||(F(()=>{r||(r=st(e,qt,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1)}),i=!0)},o(t){r||(r=st(e,qt,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0),i=!1},d(t){t&&g(e),t&&r&&r.end(),a=!1,u()}}}function Jt(t){let e,n,o=t[0]&&Ft(t);return{c(){o&&o.c(),e=v("")},m(t,s){o&&o.m(t,s),$(t,e,s),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&et(o,1)):(o=Ft(t),o.c(),et(o,1),o.m(e.parentNode,e)):o&&(Z(),nt(o,1,1,()=>{o=null}),tt())},i(t){n||(et(o),n=!0)},o(t){nt(o),n=!1},d(t){o&&o.d(t),t&&g(e)}}}function Wt(t,e,n){let o;r(t,jt,t=>n(1,o=t));let s,l,{ms:c=3e3}=e;var i;i=()=>clearTimeout(l),L().$$.on_destroy.push(i);return t.$set=t=>{"ms"in t&&n(2,c=t.ms)},t.$$.update=()=>{6&t.$$.dirty&&((t,e)=>{clearTimeout(l),t?(n(0,s=!0),e>0&&(l=setTimeout(()=>n(0,s=!1),e))):n(0,s=!1)})(o,c)},[s,o,c,()=>n(0,s=!1)]}class Ht extends ft{constructor(t){super(),dt(this,t,Wt,Jt,c,{ms:2})}}function Vt(t){let e,n,o,s,l;function c(e){t[1].call(null,e)}e=new Ht({});let r={};return void 0!==t[0]&&(r.todos=t[0]),o=new Pt({props:r}),B.push(()=>ct(o,"todos",c)),{c(){rt(e.$$.fragment),n=_(),rt(o.$$.fragment)},m(t,s){it(e,t,s),$(t,n,s),it(o,t,s),l=!0},p(t,[e]){const n={};!s&&1&e&&(s=!0,n.todos=t[0],J(()=>s=!1)),o.$set(n)},i(t){l||(et(e.$$.fragment,t),et(o.$$.fragment,t),l=!0)},o(t){nt(e.$$.fragment,t),nt(o.$$.fragment,t),l=!1},d(t){at(e,t),t&&g(n),at(o,t)}}}function Gt(t,e,n){let o;return r(t,Dt,t=>n(0,o=t)),[o,function(t){o=t,Dt.set(o)}]}return new class extends ft{constructor(t){super(),dt(this,t,Gt,Vt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
