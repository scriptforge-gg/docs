"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[8499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:2},a="Understanding Our Structure",s={unversionedId:"understanding-structure",id:"understanding-structure",title:"Understanding Our Structure",description:"Allow us to walk you through the structure of our scripts, designed with flexibility and customization in mind to meet your specific needs. Our scripts consist of various folders and files, each serving a distinct purpose:",source:"@site/docs/understanding-structure.md",sourceDirName:".",slug:"/understanding-structure",permalink:"/docs/understanding-structure",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Homepage",permalink:"/docs/intro"},next:{title:"Custom inventories and frameworks",permalink:"/docs/bridge-file"}},u={},l=[{value:"Client Folder:",id:"client-folder",level:2},{value:"Server Folder:",id:"server-folder",level:2},{value:"Config Folder:",id:"config-folder",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"understanding-our-structure"},"Understanding Our Structure"),(0,i.kt)("p",null,"Allow us to walk you through the structure of our scripts, designed with flexibility and customization in mind to meet your specific needs. Our scripts consist of various folders and files, each serving a distinct purpose:"),(0,i.kt)("h2",{id:"client-folder"},"Client Folder:"),(0,i.kt)("p",null,"Inside this folder, you will find:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Some files are encrypted using ",(0,i.kt)("strong",{parentName:"p"},"FiveM Asset Escrow"),", you can learn more about it ",(0,i.kt)("a",{parentName:"p",href:"https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151"},"here"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"main.lua")," (encrypted): This file (or files) contains the core script code, but it is not accessible for direct modification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"editable_*.lua")," (open-source): These files encompass different functions triggered at various moments during gameplay. You can use these files to integrate your custom framework, notifications, or adapt the script to suit your requirements.")),(0,i.kt)("h2",{id:"server-folder"},"Server Folder:"),(0,i.kt)("p",null,"This folder includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"main.lua")," (open-source): We have made our server-side code open-source in all of our scripts, granting you greater flexibility and control.")),(0,i.kt)("h2",{id:"config-folder"},"Config Folder:"),(0,i.kt)("p",null,"Our scripts rely heavily on the config file since it contains critical customization choices. These choices are frequently given as boolean or integer values, which makes it simple to modify the script to suit your requirements. You can update the value supplied after the equal symbol (=) to change an option. Every option in the configuration file is made as simple as possible, ensuring that you understand what it does and how it works."),(0,i.kt)("p",null,"An example of what you may commonly see in a configuration file is given below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable/Disable Features"),": By changing the boolean values (true/false) associated with particular features, you may turn them on or off."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default Values"),": Establish default values for a variety of factors, including the minigame options, spawn places, and job payment amounts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Language Settings"),": Choose the language that will be used for alerts and in-game notifications.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Remember to save any changes made to the config file. By carefully adjusting the options, you can seamlessly integrate the script with your FiveM server and provide an optimal experience for your players. Furthermore, it is vital to point out the need of backing up your script files before making any changes to them. This preventative action makes sure you have a backup plan in case something goes wrong throughout the customisation procedure.")),(0,i.kt)("p",null,"You may quickly tweak and change our scripts to fit the needs of your server by becoming familiar with their structure and arrangement. Our scripts will smoothly integrate into your FiveM server thanks to their inherent versatility, making them the ideal fit for your unique requirements."))}d.isMDXComponent=!0}}]);