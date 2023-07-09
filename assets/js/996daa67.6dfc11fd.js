"use strict";(self.webpackChunksfggv_78282=self.webpackChunksfggv_78282||[]).push([[2408],{3905:(e,n,a)=>{a.d(n,{Zo:()=>w,kt:()=>g});var o=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},p=Object.keys(e);for(o=0;o<p.length;o++)a=p[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)a=p[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=o.createContext({}),s=function(e){var n=o.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},w=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,p=e.originalType,i=e.parentName,w=r(e,["components","mdxType","originalType","parentName"]),m=s(a),u=t,g=m["".concat(i,".").concat(u)]||m[u]||b[u]||p;return a?o.createElement(g,l(l({ref:n},w),{},{components:a})):o.createElement(g,l({ref:n},w))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=a.length,l=new Array(p);l[0]=u;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[m]="string"==typeof e?e:t,l[1]=r;for(var s=2;s<p;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8711:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>r,toc:()=>s});var o=a(7462),t=(a(7294),a(3905));const p={sidebar_position:1},l="qb-inventory installation",r={unversionedId:"Flashbang/qb-inventory-installation",id:"Flashbang/qb-inventory-installation",title:"qb-inventory installation",description:"I can't equip my Flashbang / I can't throw it / It does not explode",source:"@site/docs/Flashbang/qb-inventory-installation.md",sourceDirName:"Flashbang",slug:"/Flashbang/qb-inventory-installation",permalink:"/docs/Flashbang/qb-inventory-installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Simulating Bets",permalink:"/docs/Casino Slots/simulating-bets"},next:{title:"Configuration",permalink:"/docs/Miner Job/configuration"}},i={},s=[{value:"I can&#39;t equip my Flashbang / I can&#39;t throw it / It does not explode",id:"i-cant-equip-my-flashbang--i-cant-throw-it--it-does-not-explode",level:2},{value:"qb-core",id:"qb-core",level:2},{value:"qb-inventory",id:"qb-inventory",level:2},{value:"qb-hud",id:"qb-hud",level:2},{value:"qb-weapons",id:"qb-weapons",level:2}],w={toc:s},m="wrapper";function b(e){let{components:n,...a}=e;return(0,t.kt)(m,(0,o.Z)({},w,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"qb-inventory-installation"},"qb-inventory installation"),(0,t.kt)("h2",{id:"i-cant-equip-my-flashbang--i-cant-throw-it--it-does-not-explode"},"I can't equip my Flashbang / I can't throw it / It does not explode"),(0,t.kt)("p",null,"Ensure that you have configured qb-inventory correctly."),(0,t.kt)("h1",{id:"example-configuration"},"Example configuration"),(0,t.kt)("h2",{id:"qb-core"},"qb-core"),(0,t.kt)("p",null,"Add "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-lua"},"['weapon_flashbang'] = {\n    ['name'] = 'weapon_flashbang',\n    ['label'] = 'Flashbang',\n    ['weight'] = 1000,\n    ['type'] = 'weapon',\n    ['ammotype'] = nil,\n    ['image'] = 'weapon_flashbang.png',\n    ['unique'] = true,\n    ['useable'] = false,\n    ['description'] = 'Your description for weapon_flashbang'\n},\n")),(0,t.kt)("p",null,"right before definition of weapon_grenade under throwables section."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="shared/items.lua:114"',title:'"shared/items.lua:114"'},"    -- Throwables\n    ['weapon_flashbang'] = {\n        ['name'] = 'weapon_flashbang',\n        ['label'] = 'Flashbang',\n        ['weight'] = 1000,\n        ['type'] = 'weapon',\n        ['ammotype'] = nil,\n        ['image'] = 'weapon_flashbang.png',\n        ['unique'] = true,\n        ['useable'] = false,\n        ['description'] = 'Your description for weapon_flashbang'\n    },\n    ['weapon_grenade'] = {['name'] = 'weapon_grenade', ['label'] = 'Grenade',  ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_grenade.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A handheld throwable bomb'},\n    ['weapon_bzgas'] = {['name'] = 'weapon_bzgas', ['label'] = 'BZ Gas', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_bzgas.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A cannister of gas that causes extreme pain'},\n    ['weapon_molotov'] = {['name'] = 'weapon_molotov', ['label'] = 'Molotov', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_molotov.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A crude bomb made of a bottle filled with a flammable liquid and fitted with a wick for lighting'},\n    ['weapon_stickybomb'] = {['name'] = 'weapon_stickybomb', ['label'] = 'C4', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_stickybomb.png', ['unique'] = true, ['useable'] = false, ['description'] = 'An explosive charge covered with an adhesive that when thrown against an object sticks until it explodes'},\n    ['weapon_proxmine'] = {['name'] = 'weapon_proxmine', ['label'] = 'Proxmine Grenade', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_proximitymine.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A bomb placed on the ground that detonates when going within its proximity'},\n    ['weapon_snowball'] = {['name'] = 'weapon_snowball',  ['label'] = 'Snowball', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_snowball.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A ball of packed snow, especially one made for throwing at other people for fun'},\n    ['weapon_pipebomb'] = {['name'] = 'weapon_pipebomb',  ['label'] = 'Pipe Bomb', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_pipebomb.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A homemade bomb, the components of which are contained in a pipe'},\n    ['weapon_ball'] = {['name'] = 'weapon_ball', ['label'] = 'Ball', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = 'AMMO_BALL', ['image'] = 'weapon_ball.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game'},\n    ['weapon_smokegrenade'] = {['name'] = 'weapon_smokegrenade', ['label'] = 'Smoke Grenade', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = nil, ['image'] = 'weapon_c4.png', ['unique'] = true, ['useable'] = false, ['description'] = 'An explosive charge that can be remotely detonated'},\n    ['weapon_flare'] = {['name'] = 'weapon_flare', ['label'] = 'Flare pistol', ['weight'] = 1000, ['type'] = 'weapon', ['ammotype'] = 'AMMO_FLARE', ['image'] = 'weapon_flare.png', ['unique'] = true, ['useable'] = false, ['description'] = 'A small pyrotechnic devices used for illumination and signalling'},\n")),(0,t.kt)("p",null,"Add"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-lua"},"[`weapon_flashbang`] = {\n    ['name'] = 'weapon_flashbang',\n    ['label'] = 'Flashbang',\n    ['weapontype'] = 'Throwable',\n    ['ammotype'] = nil,\n    ['damagereason'] = 'Died'\n},\n")),(0,t.kt)("p",null,"right before definition of weapon_grenade under throwables section."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="shared/weapons.lua:117"',title:'"shared/weapons.lua:117"'},"    -- Throwables\n    [`weapon_flashbang`] = {\n        ['name'] = 'weapon_flashbang',\n        ['label'] = 'Flashbang',\n        ['weapontype'] = 'Throwable',\n        ['ammotype'] = nil,\n        ['damagereason'] = 'Died'\n    },\n    [`weapon_grenade`] = {['name'] = 'weapon_grenade', ['label'] = 'Grenade', ['weapontype'] = 'Throwable', ['ammotype'] = nil, ['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},\n    [`weapon_bzgas`] = {['name'] = 'weapon_bzgas', ['label'] = 'BZ Gas', ['weapontype'] = 'Throwable', ['ammotype'] = nil, ['damagereason'] = 'Died'},\n    [`weapon_molotov`] = {['name'] = 'weapon_molotov', ['label'] = 'Molotov', ['weapontype'] = 'Throwable', ['ammotype'] = nil, ['damagereason'] = 'Torched / Flambeed / Barbecued'},\n    [`weapon_stickybomb`] = {['name'] = 'weapon_stickybomb', ['label'] = 'C4', ['weapontype'] = 'Throwable', ['ammotype'] = nil, ['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},\n    [`weapon_proxmine`] = {['name'] = 'weapon_proxmine', ['label'] = 'Proxmine Grenade', ['weapontype'] = 'Throwable',  ['ammotype'] = nil, ['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},\n    [`weapon_snowball`] = {['name'] = 'weapon_snowball', ['label'] = 'Snowball', ['weapontype'] = 'Throwable', ['ammotype'] = nil, ['damagereason'] = 'Died'},\n    [`weapon_pipebomb`] = {['name'] = 'weapon_pipebomb', ['label'] = 'Pipe Bomb', ['weapontype'] = 'Throwable', ['ammotype'] = nil, ['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},\n    [`weapon_ball`] = {['name'] = 'weapon_ball', ['label'] = 'Ball', ['weapontype'] = 'Throwable', ['ammotype'] = 'AMMO_BALL', ['damagereason'] = 'Died'},\n    [`weapon_smokegrenade`] = {['name'] = 'weapon_smokegrenade', ['label'] = 'Smoke Grenade', ['weapontype'] = 'Throwable', ['ammotype'] = nil, ['damagereason'] = 'Died'},\n    [`weapon_flare`] = {['name'] = 'weapon_flare', ['label'] = 'Flare pistol', ['weapontype'] = 'Throwable', ['ammotype'] = 'AMMO_FLARE',   ['damagereason'] = 'Died'},\n")),(0,t.kt)("h2",{id:"qb-inventory"},"qb-inventory"),(0,t.kt)("p",null,"Add ",(0,t.kt)("inlineCode",{parentName:"p"},'weaponName == "weapon_flashbang" or')," in ",(0,t.kt)("strong",{parentName:"p"},"elseif")," section in line 556, under ",(0,t.kt)("inlineCode",{parentName:"p"},"inventory:client:UseWeapon")," event handler."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua:546"',title:'"client/main.lua:546"'},'RegisterNetEvent(\'inventory:client:UseWeapon\', function(weaponData, shootbool)\n    local ped = PlayerPedId()\n    local weaponName = tostring(weaponData.name)\n    local weaponHash = joaat(weaponData.name)\n    if currentWeapon == weaponName then\n        TriggerEvent(\'weapons:client:DrawWeapon\', nil)\n        SetCurrentPedWeapon(ped, `WEAPON_UNARMED`, true)\n        RemoveAllPedWeapons(ped, true)\n        TriggerEvent(\'weapons:client:SetCurrentWeapon\', nil, shootbool)\n        currentWeapon = nil\n    elseif weaponName == "weapon_flashbang" or weaponName == "weapon_stickybomb" or weaponName == "weapon_pipebomb" or weaponName == "weapon_smokegrenade" or weaponName == "weapon_flare" or weaponName == "weapon_proxmine" or weaponName == "weapon_ball"  or weaponName == "weapon_molotov" or weaponName == "weapon_grenade" or weaponName == "weapon_bzgas" then\n        TriggerEvent(\'weapons:client:DrawWeapon\', weaponName)\n        GiveWeaponToPed(ped, weaponHash, 1, false, false)\n        SetPedAmmo(ped, weaponHash, 1)\n        SetCurrentPedWeapon(ped, weaponHash, true)\n        TriggerEvent(\'weapons:client:SetCurrentWeapon\', weaponData, shootbool)\n        currentWeapon = weaponName\n    elseif weaponName == "weapon_snowball" then\n        TriggerEvent(\'weapons:client:DrawWeapon\', weaponName)\n        GiveWeaponToPed(ped, weaponHash, 10, false, false)\n        SetPedAmmo(ped, weaponHash, 10)\n        SetCurrentPedWeapon(ped, weaponHash, true)\n        TriggerServerEvent(\'inventory:server:snowball\', \'remove\')\n        TriggerEvent(\'weapons:client:SetCurrentWeapon\', weaponData, shootbool)\n        currentWeapon = weaponName\n    else\n        TriggerEvent(\'weapons:client:DrawWeapon\', weaponName)\n        TriggerEvent(\'weapons:client:SetCurrentWeapon\', weaponData, shootbool)\n        local ammo = tonumber(weaponData.info.ammo) or 0\n\n        if weaponName == "weapon_petrolcan" or weaponName == "weapon_fireextinguisher" then\n            ammo = 4000\n        end\n\n        GiveWeaponToPed(ped, weaponHash, ammo, false, false)\n        SetPedAmmo(ped, weaponHash, ammo)\n        SetCurrentPedWeapon(ped, weaponHash, true)\n\n        if weaponData.info.attachments then\n            for _, attachment in pairs(weaponData.info.attachments) do\n                GiveWeaponComponentToPed(ped, weaponHash, joaat(attachment.component))\n            end\n        end\n\n        currentWeapon = weaponName\n    end\nend)\n')),(0,t.kt)("h2",{id:"qb-hud"},"qb-hud"),(0,t.kt)("p",null,"Add `",(0,t.kt)("inlineCode",{parentName:"p"},"weapon_flashbang`,")," after throwables in ",(0,t.kt)("strong",{parentName:"p"},"Config.WhitelistedWeaponArmed")," section to make it look like this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="config.lua:12"',title:'"config.lua:12"'},"Config.WhitelistedWeaponArmed = { -- weapons specifically whitelisted to not show armed mode\n    -- miscellaneous\n    `weapon_petrolcan`,\n    `weapon_hazardcan`,\n    `weapon_fireextinguisher`,\n    -- melee\n    `weapon_dagger`,\n    `weapon_bat`,\n    `weapon_bottle`,\n    `weapon_crowbar`,\n    `weapon_flashlight`,\n    `weapon_golfclub`,\n    `weapon_hammer`,\n    `weapon_hatchet`,\n    `weapon_knuckle`,\n    `weapon_knife`,\n    `weapon_machete`,\n    `weapon_switchblade`,\n    `weapon_nightstick`,\n    `weapon_wrench`,\n    `weapon_battleaxe`,\n    `weapon_poolcue`,\n    `weapon_briefcase`,\n    `weapon_briefcase_02`,\n    `weapon_garbagebag`,\n    `weapon_handcuffs`,\n    `weapon_bread`,\n    `weapon_stone_hatchet`,\n    -- throwables\n    \n    `weapon_flashbang`, -- add flashbang here\n\n    `weapon_grenade`,\n    `weapon_bzgas`,\n    `weapon_molotov`,\n    `weapon_stickybomb`,\n    `weapon_proxmine`,\n    `weapon_snowball`,\n    `weapon_pipebomb`,\n    `weapon_ball`,\n    `weapon_smokegrenade`,\n    `weapon_flare`\n}\n")),(0,t.kt)("h2",{id:"qb-weapons"},"qb-weapons"),(0,t.kt)("p",null,"Add ",(0,t.kt)("inlineCode",{parentName:"p"},"['weapon_flashbang'] = 0.15,")," right after throwables in ",(0,t.kt)("strong",{parentName:"p"},"Config.DurabilityMultiplier"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="config.lua:136"',title:'"config.lua:136"'},"Config.DurabilityMultiplier = {\n    -- Melee\n    -- ['weapon_unarmed']                = 0.15,\n    ['weapon_dagger']                = 0.15,\n    ['weapon_bat']                   = 0.15,\n    ['weapon_bottle']                = 0.15,\n    ['weapon_crowbar']               = 0.15,\n    -- ['weapon_flashlight']             = 0.15,\n    ['weapon_golfclub']              = 0.15,\n    ['weapon_hammer']                = 0.15,\n    ['weapon_hatchet']               = 0.15,\n    ['weapon_knuckle']               = 0.15,\n    ['weapon_knife']                 = 0.15,\n    ['weapon_machete']               = 0.15,\n    ['weapon_switchblade']           = 0.15,\n    -- ['weapon_nightstick']             = 0.15,\n    ['weapon_wrench']                = 0.15,\n    ['weapon_battleaxe']             = 0.15,\n    ['weapon_poolcue']               = 0.15,\n    ['weapon_briefcase']             = 0.15,\n    ['weapon_briefcase_02']          = 0.15,\n    ['weapon_garbagebag']            = 0.15,\n    ['weapon_handcuffs']             = 0.15,\n    ['weapon_bread']                 = 0.15,\n    ['weapon_stone_hatchet']         = 0.15,\n\n    -- Handguns\n    ['weapon_pistol']                = 0.15,\n    ['weapon_pistol_mk2']            = 0.15,\n    ['weapon_combatpistol']          = 0.15,\n    ['weapon_appistol']              = 0.15,\n    -- ['weapon_stungun']                = 0.15,\n    -- ['weapon_stungun_mp']                 = 0.15,\n    ['weapon_pistol50']              = 0.15,\n    ['weapon_snspistol']             = 0.15,\n    ['weapon_heavypistol']           = 0.15,\n    ['weapon_vintagepistol']         = 0.15,\n    ['weapon_flaregun']              = 0.15,\n    ['weapon_marksmanpistol']        = 0.15,\n    ['weapon_revolver']              = 0.15,\n    ['weapon_revolver_mk2']          = 0.15,\n    ['weapon_doubleaction']          = 0.15,\n    ['weapon_snspistol_mk2']         = 0.15,\n    ['weapon_raypistol']             = 0.15,\n    ['weapon_ceramicpistol']         = 0.15,\n    ['weapon_navyrevolver']          = 0.15,\n    ['weapon_gadgetpistol']          = 0.15,\n\n    -- Submachine Guns\n    ['weapon_microsmg']              = 0.15,\n    ['weapon_smg']                   = 0.15,\n    ['weapon_smg_mk2']               = 0.15,\n    ['weapon_assaultsmg']            = 0.15,\n    ['weapon_combatpdw']             = 0.15,\n    ['weapon_machinepistol']         = 0.15,\n    ['weapon_minismg']               = 0.15,\n    ['weapon_raycarbine']            = 0.15,\n\n    -- Shotguns\n    ['weapon_pumpshotgun']          = 0.15,\n    ['weapon_sawnoffshotgun']       = 0.15,\n    ['weapon_assaultshotgun']       = 0.15,\n    ['weapon_bullpupshotgun']       = 0.15,\n    ['weapon_musket']               = 0.15,\n    ['weapon_heavyshotgun']         = 0.15,\n    ['weapon_dbshotgun']            = 0.15,\n    ['weapon_autoshotgun']          = 0.15,\n    ['weapon_pumpshotgun_mk2']      = 0.15,\n    ['weapon_combatshotgun']        = 0.15,\n\n    -- Assault Rifles\n    ['weapon_assaultrifle']         = 0.15,\n    ['weapon_assaultrifle_mk2']     = 0.15,\n    ['weapon_carbinerifle']         = 0.15,\n    ['weapon_carbinerifle_mk2']     = 0.15,\n    ['weapon_advancedrifle']        = 0.15,\n    ['weapon_specialcarbine']       = 0.15,\n    ['weapon_bullpuprifle']         = 0.15,\n    ['weapon_compactrifle']         = 0.15,\n    ['weapon_specialcarbine_mk2']   = 0.15,\n    ['weapon_bullpuprifle_mk2']     = 0.15,\n    ['weapon_militaryrifle']        = 0.15,\n    ['weapon_heavyrifle']           = 0.15,\n\n    -- Light Machine Guns\n    ['weapon_mg']                   = 0.15,\n    ['weapon_combatmg']             = 0.15,\n    ['weapon_gusenberg']            = 0.15,\n    ['weapon_combatmg_mk2']         = 0.15,\n\n    -- Sniper Rifles\n    ['weapon_sniperrifle']          = 0.15,\n    ['weapon_heavysniper']          = 0.15,\n    ['weapon_marksmanrifle']        = 0.15,\n    ['weapon_remotesniper']         = 0.15,\n    ['weapon_heavysniper_mk2']      = 0.15,\n    ['weapon_marksmanrifle_mk2']    = 0.15,\n\n    -- Heavy Weapons\n    ['weapon_rpg']                  = 0.15,\n    ['weapon_grenadelauncher']      = 0.15,\n    ['weapon_grenadelauncher_smoke']= 0.15,\n    ['weapon_emplauncher']          = 0.15,\n    ['weapon_minigun']              = 0.15,\n    ['weapon_firework']             = 0.15,\n    ['weapon_railgun']              = 0.15,\n    ['weapon_hominglauncher']       = 0.15,\n    ['weapon_compactlauncher']      = 0.15,\n    ['weapon_rayminigun']           = 0.15,\n\n    -- Throwables\n    ['weapon_flashbang'] = 0.15, -- add flashbang here\n    ['weapon_grenade']              = 0.15,\n    ['weapon_bzgas']                = 0.15,\n    ['weapon_molotov']              = 0.15,\n    ['weapon_stickybomb']           = 0.15,\n    ['weapon_proxmine']             = 0.15,\n    ['weapon_snowball']             = 0.15,\n    ['weapon_pipebomb']             = 0.15,\n    ['weapon_ball']                 = 0.15,\n    ['weapon_smokegrenade']         = 0.15,\n    ['weapon_flare']                = 0.15,\n\n    -- Miscellaneous\n    ['weapon_petrolcan']            = 0.15,\n    ['weapon_fireextinguisher']     = 0.15,\n    ['weapon_hazardcan']            = 0.15,\n    ['weapon_fertilizercan']        = 0.15,\n}\n")))}b.isMDXComponent=!0}}]);