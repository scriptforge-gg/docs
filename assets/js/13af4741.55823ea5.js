"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[8500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),g=d(n),p=l,m=g["".concat(s,".").concat(p)]||g[p]||u[p]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[g]="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const o={sidebar_position:2},i="Configuring tables",r={unversionedId:"Casino/Texas Holdem/configuring-tables",id:"Casino/Texas Holdem/configuring-tables",title:"Configuring tables",description:"Changing bets on tables",source:"@site/docs/Casino/Texas Holdem/configuring-tables.md",sourceDirName:"Casino/Texas Holdem",slug:"/Casino/Texas Holdem/configuring-tables",permalink:"/docs/Casino/Texas Holdem/configuring-tables",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/Casino/Texas Holdem/installation"},next:{title:"qb-inventory installation",permalink:"/docs/Flashbang/qb-inventory-installation"}},s={},d=[{value:"Changing bets on tables",id:"changing-bets-on-tables",level:2},{value:"Enabling dev mode",id:"enabling-dev-mode",level:2},{value:"Adding existing (in world) table",id:"adding-existing-in-world-table",level:2},{value:"Creating new table",id:"creating-new-table",level:2}],c={toc:d},g="wrapper";function u(e){let{components:t,...o}=e;return(0,l.kt)(g,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuring-tables"},"Configuring tables"),(0,l.kt)("h2",{id:"changing-bets-on-tables"},"Changing bets on tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-texasholdem/config.lua:11"',title:'"sf-texasholdem/config.lua:11"'},'-- Texas holdem poker\nConfig.Tables = {\n    {\n        coords = vec3(1014.360596, 42.602310, 69.860405),\n        heading = 283.5,\n        model = 1783728142,\n        spawn = true,\n        texture = 3,\n        type = "normal",\n        smallBlind = 100, -- here you can change the small blind\n    },\n}\n')),(0,l.kt)("h2",{id:"enabling-dev-mode"},"Enabling dev mode"),(0,l.kt)("p",null,"To use the table configuratoin commands, you must enable the development mode by setting Config.DevMode to true. Make sure to disable it after completing the resource configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-texasholdem/config.lua:3"',title:'"sf-texasholdem/config.lua:3"'},"Config = {}\n\n-- It should be enabled by default\nConfig.DevMode = true\n")),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Remember to set Config.DevMode to false after resource configuration.")),(0,l.kt)("p",null,"For existing tables in the game world, use the appropriate command based on the type of table:"),(0,l.kt)("h2",{id:"adding-existing-in-world-table"},"Adding existing (in world) table"),(0,l.kt)("p",null,"Use this command: ",(0,l.kt)("strong",{parentName:"p"},"/gettxh")),(0,l.kt)("p",null,"When the command is executed, the script will automatically detect the nearby table model and save its details to a text file in the resource folder. Here's an example of the table configuration in the text file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="tables.txt"',title:'"tables.txt"'},'    -- 07/09/23 18:37:10\n    // highlight-start\n    {\n        coords = vec3(1014.360596, 42.602310, 69.860405),\n        heading = 283.5,\n        model = 1783728142,\n        spawn = false,\n        texture = 3,\n        type = "normal",\n        smallBlind = 100,\n    },\n    // highlight-end\n')),(0,l.kt)("p",null,"To add the existing table to the configuration, copy the table details from the text file and paste it into the appropriate section of the config.lua file. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-texasholdem/config.lua:11"',title:'"sf-texasholdem/config.lua:11"'},'Config.Tables = {\n    {\n        coords = vec3(1012.068542, 52.708717, 69.860405),\n        heading = 102.99999237061,\n        model = 1783728142,\n        spawn = true,\n        texture = 3,\n        type = "normal",\n        smallBlind = 100,\n    },\n    // highlight-start\n    -- new table from the text file\n    {\n        coords = vec3(1014.360596, 42.602310, 69.860405),\n        heading = 283.5,\n        model = 1783728142,\n        spawn = false,\n        texture = 3,\n        type = "normal",\n        smallBlind = 100,\n    },\n    // highlight-end\n}\n')),(0,l.kt)("h2",{id:"creating-new-table"},"Creating new table"),(0,l.kt)("p",null,"To create a new table, use the corresponding command for your script:"),(0,l.kt)("p",null,"Use this command: ",(0,l.kt)("strong",{parentName:"p"},"/spawntxh")),(0,l.kt)("p",null,"Executing the command will activate the creator mode, allowing you to choose the position, texture, and heading of the table in the game. Once you're satisfied, press enter, and the script will save the table details to a text file.\n",(0,l.kt)("img",{alt:"Creator Mode",src:n(3162).Z,width:"1918",height:"1074"})),(0,l.kt)("p",null,"Here's an example of the table configuration in the text file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="tables.txt"',title:'"tables.txt"'},'     -- 07/09/23 18:46:17\n    // highlight-start\n    {\n        coords = vec3(1040.235352, 53.900368, 68.060196),\n        heading = 193.50001525879,\n        model = 1783728142,\n        spawn = true,\n        texture = 0,\n        type = "normal",\n        smallBlind = 10,\n    },\n    // highlight-end\n')),(0,l.kt)("p",null,"To add the new table to the configuration, copy the table details from the text file and paste it into the appropriate section of the config.lua file. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-texasholdem/config.lua:11"',title:'"sf-texasholdem/config.lua:11"'},'Config.Tables = {\n    {\n        coords = vec3(1014.360596, 42.602310, 69.860405),\n        heading = 283.5,\n        model = 1783728142,\n        spawn = true,\n        texture = 3,\n        type = "normal",\n        smallBlind = 100,\n    },\n    {\n        coords = vec3(1012.068542, 52.708717, 69.860405),\n        heading = 102.99999237061,\n        model = 1783728142,\n        spawn = true,\n        texture = 3,\n        type = "normal",\n        smallBlind = 100,\n    },\n    // highlight-start\n    -- new table from the text file\n     {\n        coords = vec3(1040.235352, 53.900368, 68.060196),\n        heading = 193.50001525879,\n        model = 1783728142,\n        spawn = true,\n        texture = 0,\n        type = "normal",\n        smallBlind = 10,\n    },\n    // highlight-end\n}\n')))}u.isMDXComponent=!0},3162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/creatormodetablegames-e43729c4933ca6e4a70f6705d579acc3.jpg"}}]);