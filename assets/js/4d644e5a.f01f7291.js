"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[7979],{3905:(A,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>p});var t=n(7294);function i(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function r(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function l(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function a(A,e){if(null==A)return{};var n,t,i=function(A,e){if(null==A)return{};var n,t,i={},r=Object.keys(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=A[n]);return i}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(i[n]=A[n])}return i}var o=t.createContext({}),u=function(A){var e=t.useContext(o),n=e;return A&&(n="function"==typeof A?A(e):l(l({},e),A)),n},s=function(A){var e=u(A.components);return t.createElement(o.Provider,{value:e},A.children)},d="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(A,e){var n=A.components,i=A.mdxType,r=A.originalType,o=A.parentName,s=a(A,["components","mdxType","originalType","parentName"]),d=u(n),f=i,p=d["".concat(o,".").concat(f)]||d[f]||c[f]||r;return n?t.createElement(p,l(l({ref:e},s),{},{components:n})):t.createElement(p,l({ref:e},s))}));function p(A,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var r=n.length,l=new Array(r);l[0]=f;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=A,a[d]="string"==typeof A?A:i,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1009:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},l="Configuration",a={unversionedId:"Casino Lucky Wheel/configuration",id:"Casino Lucky Wheel/configuration",title:"Configuration",description:"Props",source:"@site/docs/Casino Lucky Wheel/configuration.md",sourceDirName:"Casino Lucky Wheel",slug:"/Casino Lucky Wheel/configuration",permalink:"/docs/Casino Lucky Wheel/configuration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Custom inventories and frameworks",permalink:"/docs/bridge-file"},next:{title:"Configuration",permalink:"/docs/Casino Slots/configuration"}},o={},u=[{value:"Props",id:"props",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Admin panel",id:"admin-panel",level:3},{value:"Server Configuration",id:"server-configuration",level:3}],s={toc:u},d="wrapper";function c(A){let{components:e,...r}=A;return(0,i.kt)(d,(0,t.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("p",null,"All the prop and object coords can be found in config.*.lua file. By default, we made config files\nfor GTA:O casino, and GABZ Casino."),(0,i.kt)("h2",{id:"rewards"},"Rewards"),(0,i.kt)("p",null,"For configuring the rewards you can either use the ",(0,i.kt)("inlineCode",{parentName:"p"},"config_rewards.lua")," script from the root directory, or use the ingame menu.\nIn the config file you will find an array of objects of the type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n    name = "$50000", -- Display name on the wheel\n    count = 50000, -- Count of the item that the winner receives\n    itemName = "money", -- Name of the item that the winner receives \n    type = "item", -- Type (item/vehicle/mystery)\n    chance = 1, -- Chance in percent\n    anim = "win_exit" --  Animation (win_exit/win_big/win_huge)\n},\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name - The display name that will be shown on the wheel itself"),(0,i.kt)("li",{parentName:"ul"},"count - The amount of item that the winner receives"),(0,i.kt)("li",{parentName:"ul"},"itemName - The 'script' name of the item (spawnname)"),(0,i.kt)("li",{parentName:"ul"},"type - If set to 'item' will give an item, if set to 'vehicle' it will call the ",(0,i.kt)("inlineCode",{parentName:"li"},"AddVehicle")," function in ",(0,i.kt)("inlineCode",{parentName:"li"},"server/main.lua"),". When set to 'mystery' it will call the ",(0,i.kt)("inlineCode",{parentName:"li"},"MysteryReward")," function in ",(0,i.kt)("inlineCode",{parentName:"li"},"server/main.lua"),"."),(0,i.kt)("li",{parentName:"ul"},"chance - The chance that the item will be chosen. If you want the chances to be percent, all the chances must sum to 100."),(0,i.kt)("li",{parentName:"ul"},"anim - The animation that player ped will play on win.")),(0,i.kt)("h3",{id:"admin-panel"},"Admin panel"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Panel",src:n(5467).Z,width:"959",height:"720"})),(0,i.kt)("p",null,"The admin panel will let you configure the wheel in real time without the need for restarting the script.\nFrom the top you will be able to see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notification if the chances are not summing to 100 and in brackets the sum"),(0,i.kt)("li",{parentName:"ul"},"List of currently added entries"),(0,i.kt)("li",{parentName:"ul"},"The editor to add new ones")),(0,i.kt)("p",null,"On the right of every item you can find an ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," icon that will enter the edit mode for the entry."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Panel Edit Item",src:n(2189).Z,width:"902",height:"201"})),(0,i.kt)("p",null,"This is the example config for 10% chance for winning 10000 casino chips. You set the type to ",(0,i.kt)("inlineCode",{parentName:"p"},"item"),",\nanimation is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"win_big")," and all the item data is inputted. Items are selected from a dropdown\nlist with search for ease of finding valid items."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin Panel Edit Vehicle",src:n(4018).Z,width:"917",height:"205"})),(0,i.kt)("p",null,"For vehicles everything works the same except that you should input the vehicle spawn name instead\nof item name. If the newly added or edited vehicle has the lowest chance out of all the vehicles\nthe casino announcer will call out that 'New luxurious vehicle is available at the lucky wheel'\n(only works with the sf-casinoutils script). "),(0,i.kt)("h3",{id:"server-configuration"},"Server Configuration"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"server/main.lua")," file you can add your own logic for wheel changing permissions,\nmystery rewards and vehicle addition. Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function CanChangeWheel(source)\n    return IsPlayerAceAllowed(tostring(source), ChangePermission)\nend\n\nfunction MysteryReward(source, name)\n    \nend\n\nfunction AddVehicle(source, model)\n    \nend\n")),(0,i.kt)("p",null,"For vehicle we have prepared support for esx_garages and qb-garages"),(0,i.kt)("p",null,"You can also implement your own logic for getting the item list\n(i.e. if you want to use society items) in the server file."))}c.isMDXComponent=!0},4018:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"},2189:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"},5467:(A,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/lucky_wheel_panel-7274162959a60cb84e87d4d9211f4046.png"}}]);