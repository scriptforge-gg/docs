"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[9662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Common Issues",s={unversionedId:"Miner Job/common-issues",id:"Miner Job/common-issues",title:"Common Issues",description:"I can't equip my pickaxe",source:"@site/docs/Miner Job/common-issues.md",sourceDirName:"Miner Job",slug:"/Miner Job/common-issues",permalink:"/docs/Miner Job/common-issues",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/Miner Job/configuration"},next:{title:"Installation",permalink:"/docs/Police Radar & Scrambler/installation"}},c={},l=[{value:"I can&#39;t equip my pickaxe",id:"i-cant-equip-my-pickaxe",level:2},{value:"I don&#39;t get keys to my car",id:"i-dont-get-keys-to-my-car",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-issues"},"Common Issues"),(0,o.kt)("h2",{id:"i-cant-equip-my-pickaxe"},"I can't equip my pickaxe"),(0,o.kt)("p",null,"Ensure that you have downloaded the necessary files for the pickaxe weapon. The pickaxe weapon is available on the ScriptForge GitHub repository. You can access it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/scriptforge-gg/weapon_pickaxe"},"here"),". Make sure you have downloaded it and started in server.cfg."),(0,o.kt)("h2",{id:"i-dont-get-keys-to-my-car"},"I don't get keys to my car"),(0,o.kt)("p",null,"To resolve this issue, you need to make sure that the code block responsible for spawning the vehicle and assigning keys is correctly configured. Here's an explanation of the code and the necessary edits you might need to make:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua:271"',title:'"server/main.lua:271"'},'function SpawnVehicle(owner, modelHash, coords)\n    local entity = CreateVehicle(modelHash, coords.x, coords.y, coords.z, coords.w, true, false)\n    local tries = 0\n    while not DoesEntityExist(entity) do\n        Citizen.Wait(0)\n        tries = tries + 1\n        if tries > 50 then return end\n    end\n\n    local plate = "MINER"..owner\n    if ((tostring(owner)):len() > 3) then\n        plate = ("MINER"):sub(0, 2 - (tostring(owner)):len())..owner\n    end\n\n    SetVehicleNumberPlateText(entity, plate)\n    while not string.find(GetVehicleNumberPlateText(entity), plate) do\n        Citizen.Wait(0)\n    end\n\n    -- You can add your keys code below (owner = source of the player, GetVehicleNumberPlateText(entity) = vehicle plate)\n    // highlight-start\n    -- For example like this:\n    exports.ox_inventory:AddItem(tonumber(owner), "carkey", 1, GetVehicleNumberPlateText(entity))\n    // highlight-end\n    if (qbKeys) then\n        TriggerClientEvent("sf-minerjob:qbKeys", owner, GetVehicleNumberPlateText(entity))\n    end\n\n    return entity\nend\n')))}d.isMDXComponent=!0}}]);