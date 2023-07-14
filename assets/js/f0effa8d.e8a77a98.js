"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[9806],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=m(t),y=o,f=d["".concat(c,".").concat(y)]||d[y]||l[y]||i;return t?r.createElement(f,u(u({ref:n},s),{},{components:t})):r.createElement(f,u({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=y;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:o,u[1]=a;for(var m=2;m<i;m++)u[m]=t[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:3},u="Custom inventories and frameworks",a={unversionedId:"bridge-file",id:"bridge-file",title:"Custom inventories and frameworks",description:"In our scripts that are made for certain frameworks like ESX or QB we have included bridge.lua file in server/main.lua - Here you can easily integrate your custom inventory or custom framework into our scripts.",source:"@site/docs/bridge-file.md",sourceDirName:".",slug:"/bridge-file",permalink:"/docs/bridge-file",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Understanding Our Structure",permalink:"/docs/understanding-structure"},next:{title:"Configuration",permalink:"/docs/Casino Lucky Wheel/configuration"}},c={},m=[],s={toc:m},d="wrapper";function l(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-inventories-and-frameworks"},"Custom inventories and frameworks"),(0,o.kt)("p",null,"In our scripts that are made for certain frameworks like ESX or QB we have included bridge.lua file in server/main.lua - Here you can easily integrate your custom inventory or custom framework into our scripts."),(0,o.kt)("p",null,"The file looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/bridge.lua"',title:'"server/bridge.lua"'},'function Setup()\n    local bridgeDetected = false\n    -- Ox_inventory support (When QB and ESX are not started)\n    if(GetResourceState("ox_inventory") ~= "missing") then\n        bridgeDetected = true\n        Bridge.AddItem = function(source, itemName, count)\n            return exports[\'ox_inventory\']:AddItem(source, itemName, count)\n        end\n        Bridge.RemoveItem = function(source, itemName, count)\n            return exports[\'ox_inventory\']:RemoveItem(source, itemName, count)\n        end\n        Bridge.GetItemCount = function(source, itemName)\n            return exports[\'ox_inventory\']:GetItem(source, itemName, nil, true)\n        end\n    end\n    -- QBCore support\n    if(GetResourceState("qb-core") ~= "missing") then\n        QBCore = exports[\'qb-core\']:GetCoreObject()\n        bridgeDetected = true\n        Bridge.AddItem = function(source, itemName, count)\n            local ply = QBCore.Functions.GetPlayer(source)\n            if not ply then return end\n            if(itemName == "money") then\n                ply.Functions.AddMoney("cash", count)\n                return true\n            end\n            if(itemName == "bank") then\n                ply.Functions.AddMoney("bank", count)\n                return true\n            end\n            return ply.Functions.AddItem(itemName, count)\n        end\n        Bridge.RemoveItem = function(source, itemName, count)\n            local ply = QBCore.Functions.GetPlayer(source)\n            if not ply then return end\n            if(itemName == "money") then\n                ply.Functions.RemoveMoney("cash", count)\n                return true\n            end\n            if(itemName == "bank") then\n                ply.Functions.RemoveMoney("bank", count)\n                return true\n            end\n            ply.Functions.RemoveItem(itemName, count)\n            return true\n        end\n        Bridge.GetItemCount = function(source, itemName)\n            local ply = QBCore.Functions.GetPlayer(source)\n            if not ply then return 0 end\n            if(itemName == "money") then\n                return ply.Functions.GetMoney("cash")\n            end\n            if(itemName == "bank") then\n                return ply.Functions.GetMoney("bank")\n            end\n            local items = ply.Functions.GetItemsByName(itemName)\n            local itemCount = 0\n            for k, v in ipairs(items) do\n                itemCount += v.amount\n            end\n            return itemCount\n        end\n        Bridge.CheckJob = function(source, jobName, grade)\n            local ply = QBCore.Functions.GetPlayer(source)\n            if not ply then return false end\n            return ply.PlayerData.job.name == jobName and ply.PlayerData.job.grade.level >= grade\n        end\n    end\n    -- ESX support \n    if(GetResourceState("es_extended") ~= "missing") then\n        bridgeDetected = true\n        ESX = nil\n        if(ESXEvent) then\n            while not ESX do\n                TriggerEvent(ESXEvent, function(obj) ESX = obj end)\n                Citizen.Wait(100)\n            end\n        else\n            ESX = exports["es_extended"]:getSharedObject()\n        end\n        Bridge.AddItem = function(source, itemName, count)\n            local xPlayer = ESX.GetPlayerFromId(source)\n            if not xPlayer then return end\n            if(itemName == "money") then\n                xPlayer.addMoney(count)\n                return true\n            end\n            if(itemName == "bank") then\n                xPlayer.addAccountMoney("bank", count)\n                return true\n            end\n            return not (xPlayer.addInventoryItem(itemName, count) == false)\n        end\n        Bridge.RemoveItem = function(source, itemName, count)\n            local xPlayer = ESX.GetPlayerFromId(source)\n            if not xPlayer then return end\n            if(itemName == "money") then\n                xPlayer.removeMoney(count)\n                return true\n            end\n            if(itemName == "bank") then\n                xPlayer.removeAccountMoney("bank", count)\n                return true\n            end\n            xPlayer.removeInventoryItem(itemName, count)\n            return true\n        end\n        Bridge.GetItemCount = function(source, itemName)\n            local xPlayer = ESX.GetPlayerFromId(source)\n            if not xPlayer then return end\n            if(itemName == "money") then\n                return xPlayer.getMoney()\n            end\n            if(itemName == "bank") then\n                return xPlayer.getAccount("bank").money\n            end\n            return xPlayer.getInventoryItem(itemName)?.count or 0\n        end\n        Bridge.CheckJob = function(source, jobName, grade)\n            local xPlayer = ESX.GetPlayerFromId(source)\n            if not xPlayer then return end\n            return xPlayer.getJob().name == jobName and xPlayer.getJob().grade >= grade\n        end\n    end\n    -- Quasar inventory support\n    if(GetResourceState("qs-inventory") ~= "missing") then\n        bridgeDetected = true\n        Bridge.AddItem = function(source, itemName, count)\n            return exports[\'qs-inventory\']:AddItem(source, itemName, count)\n        end\n        Bridge.RemoveItem = function(source, itemName, count)\n            return exports[\'qs-inventory\']:RemoveItem(source, itemName, count)\n        end\n        Bridge.GetItemCount = function(source, itemName)\n            return exports[\'qs-inventory\']:GetItemTotalAmount(source, itemName)\n        end\n    end\n    if(not bridgeDetected) then\n        print("^3Could not detect inventory/framework, script will work in standalone mode")\n        Bridge.AddItem = function(source, itemName, count)\n            -- here you can hook up your own inventory\n            return true\n        end\n        Bridge.RemoveItem = function(source, itemName, count)\n            -- here you can hook up your own inventory\n            return true\n        end\n        Bridge.GetItemCount = function(source, itemName)\n            -- here you can hook up your own inventory\n            return 99999\n        end\n        Bridge.CheckJob = function(source, jobName, grade)\n            -- here you can hook up your custom framework job check (Required for legal job scripts)\n            return true\n        end\n    end\nend\n\nSetup()\n')))}l.isMDXComponent=!0}}]);