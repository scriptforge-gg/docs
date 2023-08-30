"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[2698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,p=g["".concat(s,".").concat(d)]||g[d]||m[d]||l;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="Configuring tables",o={unversionedId:"Casino/Table games/configuring-tables",id:"Casino/Table games/configuring-tables",title:"Configuring tables",description:"Changing bets on tables",source:"@site/docs/Casino/Table games/configuring-tables.md",sourceDirName:"Casino/Table games",slug:"/Casino/Table games/configuring-tables",permalink:"/docs/Casino/Table games/configuring-tables",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Blackjack deck logic",permalink:"/docs/Casino/Table games/blackjack-deck-logic"},next:{title:"Installation",permalink:"/docs/Casino/Texas Holdem/installation"}},s={},c=[{value:"Changing bets on tables",id:"changing-bets-on-tables",level:2},{value:"Enabling dev mode",id:"enabling-dev-mode",level:2},{value:"Adding existing (in world) table",id:"adding-existing-in-world-table",level:2},{value:"Creating new table",id:"creating-new-table",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(g,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-tables"},"Configuring tables"),(0,r.kt)("h2",{id:"changing-bets-on-tables"},"Changing bets on tables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-roulette/config.lua:11"',title:'"sf-roulette/config.lua:11"'},'-- Roulette\nConfig.Tables = {\n    {\n        coords = vec3(1024.628540, 52.756798, 68.860077),\n        heading = 143.1566619873,\n        model = 623773339,\n        replaceModel = -1273284377,\n        spawn = false,\n        type = "junior", -- you can add logic for table types (for example membership) check CanUseTable function in server/main.lua\n        texture = 3,\n        bets = {\n            min = 10, -- minimum table bet\n            max = 500, -- maximum single bet\n            chipAmount = 3 -- maximum chip amount, all money you can put on roullete in this is 3 x 500 chips\n        }\n    },\n}\n-- Blackjack/Three Card Poker\nConfig.Tables = {\n    {\n        coords = vec3(1035.850098, 55.024582, 68.060074),\n        heading = 193.15667724609,\n        model = -1728077103,\n        replaceModel = 112404821,\n        spawn = false,\n        type = "junior", -- you can add logic for table types (for example membership) check CanUseTable function in server/main.lua\n        texture = 2,\n        bets = {\n            min = 10, -- minimum table bet\n            max = 500 -- maximum table bet\n        }\n    },\n}\n')),(0,r.kt)("h2",{id:"enabling-dev-mode"},"Enabling dev mode"),(0,r.kt)("p",null,"To use the table configuratoin commands, you must enable the development mode by setting Config.DevMode to true. Make sure to disable it after completing the resource configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-roulette/config.lua:3"',title:'"sf-roulette/config.lua:3"'},"Config = {}\n\n-- It should be enabled by default\nConfig.DevMode = true\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Remember to set Config.DevMode to false after resource configuration.")),(0,r.kt)("p",null,"For existing tables in the game world, use the appropriate command based on the type of table:"),(0,r.kt)("h2",{id:"adding-existing-in-world-table"},"Adding existing (in world) table"),(0,r.kt)("p",null,"Use command for your script:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Roulette: ",(0,r.kt)("strong",{parentName:"li"},"/getroulette")),(0,r.kt)("li",{parentName:"ul"},"Blackjack: ",(0,r.kt)("strong",{parentName:"li"},"/getblackjack")),(0,r.kt)("li",{parentName:"ul"},"Three Card Poker: ",(0,r.kt)("strong",{parentName:"li"},"/gettcp"))),(0,r.kt)("p",null,"When the command is executed, the script will automatically detect the nearby table model and save its details to a text file in the resource folder. Here's an example of the table configuration in the text file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="roulettes.txt"',title:'"roulettes.txt"'},"    -- 07/09/23 18:37:10\n    // highlight-start\n    {\n        coords = vec3(1143.078491, 250.950150, -52.030754),\n        heading = 66.999984741211,\n        model = 623773339,\n        spawn = false,\n        texture = nil,\n        bets = {\n            min = 10,\n            max = 5000\n        }\n    },\n    // highlight-end\n")),(0,r.kt)("p",null,"To add the existing table to the configuration, copy the table details from the text file and paste it into the appropriate section of the config.lua file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-roulette/config.lua:11"',title:'"sf-roulette/config.lua:11"'},"Config.Roulettes = {\n    {\n        coords = vec3(1150.071655, 248.227341, -52.030754),\n        heading = 252.00001525879,\n        model = 623773339,\n        spawn = true,\n        texture = 3,\n        bets = {\n            min = 10,\n            max = 50000\n        }\n    },\n    {\n        coords = vec3(1143.078491, 250.950150, -52.030754),\n        heading = 66.999992370605,\n        model = 623773339,\n        spawn = true,\n        texture = 0,\n        bets = {\n            min = 10,\n            max = 5000\n        }\n    },\n    // highlight-start\n    -- new table from the text file\n    {\n        coords = vec3(1143.078491, 250.950150, -52.030754),\n        heading = 66.999984741211,\n        model = 623773339,\n        spawn = false,\n        texture = nil,\n        bets = {\n            min = 10,\n            max = 5000\n        }\n    },\n    // highlight-end\n}\n")),(0,r.kt)("h2",{id:"creating-new-table"},"Creating new table"),(0,r.kt)("p",null,"To create a new table, use the corresponding command for your script:"),(0,r.kt)("p",null,"Use command for your script:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Roulette: ",(0,r.kt)("strong",{parentName:"li"},"/spawnroulette")),(0,r.kt)("li",{parentName:"ul"},"Blackjack: ",(0,r.kt)("strong",{parentName:"li"},"/spawnblackjack")),(0,r.kt)("li",{parentName:"ul"},"Three Card Poker: ",(0,r.kt)("strong",{parentName:"li"},"/spawntcp"))),(0,r.kt)("p",null,"Executing the command will activate the creator mode, allowing you to choose the position, texture, and heading of the table in the game. Once you're satisfied, press enter, and the script will save the table details to a text file.\n",(0,r.kt)("img",{alt:"Creator Mode",src:n(3162).Z,width:"1918",height:"1074"})),(0,r.kt)("p",null,"Here's an example of the table configuration in the text file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="roulettes.txt"',title:'"roulettes.txt"'},"     -- 07/09/23 18:46:17\n    // highlight-start\n    {\n        coords = vec3(1144.410278, 268.813690, -52.840851),\n        heading = 44.5,\n        model = 623773339,\n        spawn = true,\n        texture = 0,\n        bets = {\n            min = 10,\n            max = 5000\n        }\n    },\n    // highlight-end\n")),(0,r.kt)("p",null,"To add the new table to the configuration, copy the table details from the text file and paste it into the appropriate section of the config.lua file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="sf-roulette/config.lua:11"',title:'"sf-roulette/config.lua:11"'},"Config.Roulettes = {\n    {\n        coords = vec3(1150.071655, 248.227341, -52.030754),\n        heading = 252.00001525879,\n        model = 623773339,\n        spawn = true,\n        texture = 3,\n        bets = {\n            min = 10,\n            max = 50000\n        }\n    },\n    {\n        coords = vec3(1143.078491, 250.950150, -52.030754),\n        heading = 66.999992370605,\n        model = 623773339,\n        spawn = true,\n        texture = 0,\n        bets = {\n            min = 10,\n            max = 5000\n        }\n    },\n    // highlight-start\n    -- new table from the text file\n    {\n        coords = vec3(1144.410278, 268.813690, -52.840851),\n        heading = 44.5,\n        model = 623773339,\n        spawn = true,\n        texture = 0,\n        bets = {\n            min = 10,\n            max = 5000\n        }\n    },\n    // highlight-end\n}\n")))}m.isMDXComponent=!0},3162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/creatormodetablegames-e43729c4933ca6e4a70f6705d579acc3.jpg"}}]);