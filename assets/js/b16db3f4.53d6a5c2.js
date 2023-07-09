"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[2579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Qb-core Installation",l={unversionedId:"Police Speed Gun/qb-core-installation",id:"Police Speed Gun/qb-core-installation",title:"Qb-core Installation",description:"1. Open the shared/items.lua file located in your qb-core folder.",source:"@site/docs/Police Speed Gun/qb-core-installation.md",sourceDirName:"Police Speed Gun",slug:"/Police Speed Gun/qb-core-installation",permalink:"/docs/Police Speed Gun/qb-core-installation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Ox-inventory Installation",permalink:"/docs/Police Speed Gun/ox-inventory-installation"},next:{title:"qb-inventory installation",permalink:"/docs/Smokegrenade/qb-inventory-installation"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qb-core-installation"},"Qb-core Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the shared/items.lua file located in your qb-core folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following code snippet to the items file:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="qb-core/shared/items.lua:51"',title:'"qb-core/shared/items.lua:51"'},"['weapon_pistolxm3']                = {['name'] = 'weapon_pistolxm3',                  ['label'] = 'Pistol XM3',                ['weight'] = 1000,         ['type'] = 'weapon',     ['ammotype'] = 'AMMO_PISTOL',              ['image'] = 'weapon_pistolxm3.png',          ['unique'] = true,         ['useable'] = true,      ['description'] = 'Pistol XM3'},\n// highlight-start\n-- Lines below\n['weapon_speedradar'] = {\n    ['name'] = 'weapon_speedradar',\n    ['label'] = 'Radar speed gun',\n    ['weight'] = 600,\n    ['type'] = 'weapon',\n    ['ammotype'] = nil,\n    ['image'] = 'weapon_speedradar.png',\n    ['unique'] = true,\n    ['useable'] = false,\n    ['description'] = 'Radar speed gun'\n},\n// highlight-end\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open the shared/weapons.lua file located in your qb-core folder."),(0,a.kt)("li",{parentName:"ol"},"Add the following code snippet to the weapons file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="qb-core/shared/weapons.lua:51"',title:'"qb-core/shared/weapons.lua:51"'},"[`weapon_pistolxm3`] = {['name'] = 'weapon_pistolxm3',      ['label'] = 'Pistol XM3',               ['weapontype'] = 'Pistol',  ['ammotype'] = 'AMMO_PISTOL',   ['damagereason'] = 'Pistoled / Blasted / Plaugged / Bust a cap in'},\n// highlight-start\n-- Like this\n[`weapon_speedradar`] = {\n    ['name'] = 'weapon_speedradar',\n    ['label'] = 'Speed radar gun',\n    ['weapontype'] = 'Pistol',\n    ['ammotype'] = nil,\n    ['damagereason'] = 'Died'\n},\n// highlight-end\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Remember to restart your server after making these changes for them to take effect.")))}d.isMDXComponent=!0}}]);