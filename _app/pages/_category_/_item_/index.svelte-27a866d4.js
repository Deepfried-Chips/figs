import{S as g,i as _,s as C,x as c,k as w,y as f,m as y,z as p,g as h,r as u,p as $,C as d,d as D}from"../../../chunks/index-8bf6b353.js";import{C as M}from"../../../chunks/CategoryItemDocs-abdb9e62.js";import{r as l}from"../../../chunks/Article.svelte_svelte_type_style_lang-99973d4f.js";import{M as S}from"../../../chunks/MetaTags-2c897c6b.js";import"../../../chunks/preload-helper-a6ef5122.js";function k(r){let s,n,e,a;return s=new S({props:{title:r[0].name,description:r[0].description}}),e=new M({props:{docs:r[0]}}),{c(){c(s.$$.fragment),n=w(),c(e.$$.fragment)},l(t){f(s.$$.fragment,t),n=y(t),f(e.$$.fragment,t)},m(t,o){p(s,t,o),h(t,n,o),p(e,t,o),a=!0},p(t,[o]){const i={};o&1&&(i.title=t[0].name),o&1&&(i.description=t[0].description),s.$set(i);const m={};o&1&&(m.docs=t[0]),e.$set(m)},i(t){a||(u(s.$$.fragment,t),u(e.$$.fragment,t),a=!0)},o(t){$(s.$$.fragment,t),$(e.$$.fragment,t),a=!1},d(t){d(s,t),t&&D(n),d(e,t)}}}let U=function({params:{category:r,item:s}}){if(!(r in l))return{status:404};let n=l[r];for(let e=0;e<n.length;e++)if(n[e].name===s)return{props:{docs:n[e]}};if(!(s in n))return{status:404}};function q(r,s,n){let{docs:e}=s;return r.$$set=a=>{"docs"in a&&n(0,e=a.docs)},[e]}class b extends g{constructor(s){super(),_(this,s,q,k,C,{docs:0})}}export{b as default,U as load};
