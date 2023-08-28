"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[7517],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[f]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},a="Config file",l={unversionedId:"Multiplayer jobs/Plumber Job/config-file",id:"Multiplayer jobs/Plumber Job/config-file",title:"Config file",description:"",source:"@site/docs/Multiplayer jobs/Plumber Job/config-file.md",sourceDirName:"Multiplayer jobs/Plumber Job",slug:"/Multiplayer jobs/Plumber Job/config-file",permalink:"/docs/Multiplayer jobs/Plumber Job/config-file",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Legacy mode",permalink:"/docs/Multiplayer jobs/Miner Job/legacy"},next:{title:"Creating New Paths",permalink:"/docs/Multiplayer jobs/Plumber Job/creating-new-paths"}},s={},c=[],p={toc:c},f="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config-file"},"Config file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="config.lua"',title:'"config.lua"'},'ESXEvent = nil -- set to nil to use export or event name\n\nLanguage = "en"\n\nConfig = {}\n\nConfig.MoneyItem = "money"\n\n\nConfig.Clothes = {}\n\n-- ragdolls player when running/jumping with pipe\nConfig.DisableFastMovement = true\nConfig.DisableControls = {\n    21,\n    22,\n    24,\n    25,\n    44,\n    68,\n    140,\n    141,\n    142,\n    257,\n    263,\n    264,\n}\n\nConfig.RefillPoint = {\n    waypointCoords = vector3(1377.188232, -2045.080933, 52.020157),\n    coords = vector4(1358.68, -2095.84, 52.0, 310),\n    length = 9.8,\n    width = 14.0,\n    minZ = 51.0,\n    maxZ = 54.2\n}\n\nConfig.Job = {\n    name = "plumber",\n    startPed = {\n        coords = vector4(1384.631104, -2080.119873, 51.608837, 40.870346),\n        model = `s_m_m_lathandy_01`\n    },\n    label = _L("job_label"),\n    maxPlayers = 6,\n    description = _L("job_description"),\n    changePercent = true, -- allows owner to change player percents\n    clothes = Config.Clothes,\n    requireClothes = true, -- require job clothes\n    requireJob = false,\n    teamLimit = 26, -- maximum amount of teams\n    vehicle = { -- or nil\n        price = 500,\n        model = `plumpo`,\n        coords = vector4(1369.480591, -2079.999023, 51.998566, 305.774231),\n        props = {\n            livery = 1,\n            mods = {\n                [10] = 10,\n            }\n        }\n    },\n    -- changes difficulty (amount of pipes) depending on players on job\n    difficulty = {\n        [1] = "small",\n        [2] = "small",\n        [3] = "medium",\n        [4] = "medium",\n        [5] = "big",\n        [6] = "big",\n    },\n    -- when players are not close to a owner/action coords during a action it kicks them\n    playersActivityCheck = {\n        closeCheck = true,\n        vehDist = 250.0, -- distance from the vehicle\n        noActionCheck = true, -- kicks a player when no action was performed during amount of other player actions\n        noActionTimes = 10, -- amount of difference required between most active player and checked player (pipes placed in this case)\n        offlineTime = 5 * 60, -- kick player after amount of time offline\n    },\n    payout = {\n        -- bonus system (there\'s a base payout and for each additional player bonus percentage)\n        useBonusPercent = false, -- uses basePayout and bonusPercent per player\n        basePayout = 500,\n        bonusPercent = 0.25,\n        -- custom (TOTAL AMOUNT)\n        playerPayouts = {\n            [1] = 300,\n            [2] = 600,\n            [3] = 900,\n            [4] = 1200,\n            [5] = 1500,\n            [6] = 1800\n        },\n    },\n    blips = {\n        {\n            hasJob = true, -- requires job (or display always when requireJob is set to false)\n            activeJob = false, -- requires being in active job (in team)\n            label = _L("start_job_blip"),\n            coords =  vector3(1384.631104, -2080.119873, 51.608837),\n            sprite = 272,\n            color = 26,\n            alpha = 255,\n        },\n        {\n            hasJob = true, -- requires job (or display always when requireJob is set to false)\n            activeJob = true, -- requires being in active job (in team)\n            label = _L("refill_pipes_blip"),\n            coords = Config.RefillPoint.coords.xyz,\n            sprite = 467,\n            color = 26,\n            alpha = 255,\n        },\n    },\n    -- amount of pipes vehicle has, when the vehicle runs out of pipes the player is required to refill them\n    vehPipes = 33\n}\n\n-- Used when no target was detected\nConfig.StandaloneControls = {\n    ["get_pipe"] = {\n        key = 38, -- its E on keyboard, to change to diffrent key see https://docs.fivem.net/docs/game-references/controls/\n        disabled = false\n    },\n    ["place_pipe"] = {\n        key = 38, -- its E on keyboard, to change to diffrent key see https://docs.fivem.net/docs/game-references/controls/\n        disabled = false\n    },\n    ["open_valve"] = {\n        key = 38, -- its E on keyboard, to change to diffrent key see https://docs.fivem.net/docs/game-references/controls/\n        disabled = false\n    },\n}\n\n-- Key to place pipe while holding it in hands\nConfig.DefaultKeys = {\n    ["refill_pipes"] = "E"\n}\n\n-- Animation times (in miliseconds), to implement your progress bar etc edit the getPipeAnim and putPipeAnim callbacks in editable_client.lua\nConfig.AnimTimes = {\n    ["get_pipe"] = 5000,\n    ["put_pipe"] = 5000\n}\n\n-- Maximum distance from the pipe to place\nConfig.PipeDistance = 1.5\n\n-- Distance from which the pipes will spawn\nConfig.RenderDistance = 150.0\n\nConfig.AttachOffset = { model = `pipe2`, offset = { 0.145, 0.04, -0.205, 62, -54.5, -70.5 }, bone = 57005 }\n\n-- Installation site blip settings\nConfig.BlipSettings = {\n    radius = 50.0,\n    radiusColor = 39,\n    radiusAlpha = 128,\n    blipSprite = 402,\n    blipColor = 26,\n    blipAlpha = 255,\n    showRoute = true,\n    routeColor = 26\n}\n\nConfig.LastPathDistance = 150.0 -- minimal distance between last path and next one\n\n-- none/error/warning/all\nConfig.Verbose = "warning"\n\n-- required to create new paths\nConfig.DevMode = false\n\nConfig.AfkTime = 60 * 60\n\nConfig.Paths = {}\n')))}u.isMDXComponent=!0}}]);