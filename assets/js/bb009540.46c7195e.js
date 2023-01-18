"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"useImport",title:"useImport",description:"useImport hook API references of @pankod/refine-core"},i=void 0,p={unversionedId:"api-reference/core/hooks/import-export/useImport",id:"api-reference/core/hooks/import-export/useImport",title:"useImport",description:"useImport hook API references of @pankod/refine-core",source:"@site/docs/api-reference/core/hooks/import-export/useImport.md",sourceDirName:"api-reference/core/hooks/import-export",slug:"/api-reference/core/hooks/import-export/useImport",permalink:"/docs/api-reference/core/hooks/import-export/useImport",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/import-export/useImport.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1674038087,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{id:"useImport",title:"useImport",description:"useImport hook API references of @pankod/refine-core"},sidebar:"someSidebar",previous:{title:"useExport",permalink:"/docs/api-reference/core/hooks/import-export/useExport"},next:{title:"useInvalidate",permalink:"/docs/api-reference/core/hooks/invalidate/useInvalidate"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"With <code>input[type=file]</code>",id:"with-inputtypefile",level:3},{value:"Handling Relational Data",id:"handling-relational-data",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return Values",id:"return-values",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("PropsTable"),u=d("CodeSandboxExample"),c={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useImport")," hook allows you to handle your ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," import logic easily. It uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.papaparse.com/docs"},(0,r.kt)("inlineCode",{parentName:"a"},"papaparse"))," under the hood to parse ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useImport } from "@pankod/refine-core";\n\nconst { handleChange } = useImport(options);\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Assume we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file of this contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","categoryId"\n"dummy title 1","3"\n"dummy title 2","44"\n')),(0,r.kt)("p",null,"This file should be parsed as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'[\n    {\n        title: "dummy title 1",\n        categoryId: "3",\n    },\n    {\n        title: "dummy title 2",\n        categoryId: "44",\n    },\n];\n')),(0,r.kt)("h3",{id:"with-inputtypefile"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"input[type=file]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    // highlight-next-line\n    useImport,\n} from "@pankod/refine-core";\n\nexport const PostList: React.FC = () => {\n    const [total, setTotal] = React.useState(0);\n    const [processed, setProcessed] = React.useState(0);\n\n    // highlight-start\n    const { handleChange } = useImport<IPostFile>({\n        onFinish: (results) => {\n            window.alert(JSON.stringify(results));\n        },\n        onProgress: ({ totalAmount, processedAmount }) => {\n            setProcessed(processedAmount);\n            setTotal(totalAmount);\n        },\n    });\n    // highlight-end\n\n    return (\n        <>\n            <input\n                type="file"\n                // highlight-start\n                onChange={(event) => {\n                    if (event.target.files) {\n                        handleChange({\n                            file: event.target.files[0],\n                        });\n                    }\n                }}\n                // highlight-end\n            />\n            <span>{`${processed}/${total}`}</span>\n        </>\n    );\n};\n\ninterface IPostFile {\n    title: string;\n    categoryId: string;\n}\n')),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useImport")," hook contains all the props that the HTML Input element needs (",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"accept"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange"),") so you can use directly ",(0,r.kt)("inlineCode",{parentName:"p"},"inputProps")," in your HTML input elements like this"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    // highlight-next-line\n    useImport,\n} from "@pankod/refine-core";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { inputProps } = useImport();\n    return (\n        <input\n            // highlight-next-line\n            {...inputProps}\n        />\n    );\n};\n'))),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/core/useImport/useImport.gif",alt:"useImport usage"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"When user clicks the ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," element and selects a ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file, ",(0,r.kt)("inlineCode",{parentName:"p"},"useImport")," parses the content with ",(0,r.kt)("a",{parentName:"p",href:"https://www.papaparse.com/docs"},"papaparse"),", creates the resources one by one or as batches (depending on the configuration). Which endpoint to create the given resource is inferred from the current route."),(0,r.kt)("p",null,"Resources are added one by one (",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useCreate"},(0,r.kt)("inlineCode",{parentName:"a"},"useCreate")),") or as batches (",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useCreateMany"},(0,r.kt)("inlineCode",{parentName:"a"},"useCreateMany")),") if explicitly configured with ",(0,r.kt)("a",{parentName:"p",href:"#useimport-options"},(0,r.kt)("inlineCode",{parentName:"a"},"batchSize"))," option. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize")," is 1."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize")," is more than 1, ",(0,r.kt)("inlineCode",{parentName:"p"},"createMany")," method should be implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"DataProvider"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},"Refer to DataProvider documentation for further information about importing the default css. ","\u2192"))),(0,r.kt)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,r.kt)("p",null,"In some cases, you might want to change/process the data of ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file after parsing. Example cases of this requirement: your data contains relational data and references to data in other places, your backend API requires your data to be sent in a specific format. You can further customize ",(0,r.kt)("inlineCode",{parentName:"p"},"useImport")," to achieve this."),(0,r.kt)("p",null,"Assume this is the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file we want to create resources from:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," are relational fields, we shouldn't store them as objects. Instead, we should keep only their ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," fields in our exported files. And ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," format doesn't support JSON data, we stored ",(0,r.kt)("inlineCode",{parentName:"p"},"category.id")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"user.id")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),"."),(0,r.kt)("p",null,"When creating these resources back, we should map it back to our backend API's required format. ",(0,r.kt)("inlineCode",{parentName:"p"},"mapData")," option allows us to do this. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const importProps = useImport<IPostFile>({\n    mapData: (item) => {\n        return {\n            title: item.title,\n            content: item.content,\n            status: item.status,\n            category: {\n                id: item.categoryId,\n            },\n            user: {\n                id: item.userId,\n            },\n        };\n    },\n});\n\ninterface IPostFile {\n    title: string;\n    status: string;\n    content: string;\n    categoryId: string;\n    userId: string;\n}\n")),(0,r.kt)("p",null,"Now, parsed data is mapped to conform our APIs requirements."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(m,{module:"@pankod/refine-core/useImport",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"return-values"},"Return Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inputProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Props to that you can pass ",(0,r.kt)("inlineCode",{parentName:"td"},"<input />")," element props."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#useimportinputpropstype"},(0,r.kt)("inlineCode",{parentName:"a"},"UseImportInputPropsType")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handleChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Props to handle ",(0,r.kt)("inlineCode",{parentName:"td"},'<input type="file">')," element ",(0,r.kt)("inlineCode",{parentName:"td"},"onChange")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,r.kt)("td",{parentName:"tr",align:null},"It can be used to handle the ",(0,r.kt)("inlineCode",{parentName:"td"},"loading")," status for the Import operation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the mutation/mutations of creating imported resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"TError,"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," unknown>")),") ","|"," ",(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"{ data: TData[]},"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"TError,"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables[]; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," unknown>")),")")))),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TItem"),(0,r.kt)("td",{parentName:"tr",align:null},"Interface of parsed csv data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(u,{path:"core-use-import",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);