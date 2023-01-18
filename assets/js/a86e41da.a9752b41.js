"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},l),{},{components:n})):a.createElement(k,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"command-palette",title:"Command Palette"},i=void 0,c={unversionedId:"packages/documentation/command-palette",id:"packages/documentation/command-palette",title:"Command Palette",description:"refine supports the command palette feature and use the",source:"@site/docs/packages/documentation/command-palette.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/command-palette",permalink:"/docs/packages/documentation/command-palette",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/command-palette.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1674038087,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{id:"command-palette",title:"Command Palette"},sidebar:"someSidebar",previous:{title:"CLI",permalink:"/docs/packages/documentation/cli"},next:{title:"React Table",permalink:"/docs/packages/documentation/react-table"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Access Control",id:"access-control",level:2},{value:"Actions",id:"actions",level:2},{value:"Custom Actions",id:"custom-actions",level:2},{value:"Example",id:"example",level:2}],l=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," supports the command palette feature and use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("strong",{parentName:"a"},"kbar")),". ",(0,r.kt)("strong",{parentName:"p"},"kbar")," is a fully extensible ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows) interface for your site."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},"@pankod/refine-kbar")," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-kbar\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"First of all, you need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-kbar")," library and we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineKbarProvider")," to wrap the whole application."),(0,r.kt)("p",null,"After that, we should create the ",(0,r.kt)("inlineCode",{parentName:"p"},"<OffLayoutArea/>")," component for the Refine component and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," command palette in ",(0,r.kt)("inlineCode",{parentName:"p"},"<OffLayoutArea>"),". We have the ",(0,r.kt)("inlineCode",{parentName:"p"},"<RefineKbar>")," component to provide the command palette to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'tile="src/App.tsx"',tile:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\n// highlight-next-line\nimport { RefineKbarProvider } from "@pankod/refine-kbar";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\nimport {\n    CategoriesList,\n    CategoriesCreate,\n    CategoriesEdit,\n} from "pages/categories";\n\n// highlight-start\nexport const OffLayoutArea: React.FC = () => {\n    return <RefineKbar />;\n};\n// highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <RefineKbarProvider>\n            <Refine\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                        create: PostCreate,\n                        edit: PostEdit,\n                        show: PostShow,\n                        icon: <Icons.StarOutlined />,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: CategoriesList,\n                        create: CategoriesCreate,\n                        edit: CategoriesEdit,\n                        canDelete: true,\n                    },\n                ]}\n                //highlight-next-line\n                OffLayoutArea={OffLayoutArea}\n            />\n        </RefineKbarProvider>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/packages/command-palette/kbar/refine-kbar-example.gif",alt:"Refine Kbar Example"})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Why do we need to add ",(0,r.kt)("inlineCode",{parentName:"em"},"<OffLayoutArea>")," to the ",(0,r.kt)("inlineCode",{parentName:"em"},"<Refine>")," component?"),(0,r.kt)("br",null),"\nBecause we need to reach the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component.")),(0,r.kt)("h2",{id:"access-control"},"Access Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," respects the access control settings of your App. To learn more about access control, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"Access Control Provider")," section of the documentation. Also, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," to check the delete accessibility of the command palette.",(0,r.kt)("br",null),"\nFor more information check out the source code of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"refine-kbar"))," package"),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," uses your resources to create default actions. Which includes; ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),". It will hide the current action of the page you are in."),(0,r.kt)("h2",{id:"custom-actions"},"Custom Actions"),(0,r.kt)("p",null,"If we want to add custom actions to the command palette, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar"),".\ncheck the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/finefoods-mui/src/hooks/useOrderCustomKbarActions/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"refine-finefoods"))," example. Also you can find more information about actions in the ",(0,r.kt)("a",{parentName:"p",href:"https://kbar.vercel.app/docs/concepts/actions"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar"))," package."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAction")," to create a new action and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," to register the action to the command palette."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Custom action example"',title:'"Custom',action:!0,'example"':!0},'import { createAction, useRegisterActions } from "@pankod/refine-kbar";\n\nconst customAction = createAction({\n    name: "my custom action",\n    section: "custom-actions",\n    perform: () => {\n        console.log("onSelect my custom action");\n    },\n    priority: Priority.HIGH,\n});\n\nuseRegisterActions(customAction);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," exports the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar")),". You can use all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar"))," features.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l,{path:"command-palette-kbar",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);