"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",slug:"javascript-variadic-currying",authors:"abdullah_numan",tags:["javascript","currying"],image:"/img/blog/2022-08-28-js-currying-functions/social.png",featured_image:"/img/blog/2022-08-28-js-currying-functions/featured.png",is_featured:!0,hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/javascript-variadic-currying",source:"@site/blog/2022-08-28-js-currying-functions.md",title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",date:"2022-08-28T00:00:00.000Z",formattedDate:"August 28, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"currying",permalink:"/blog/tags/currying"}],readingTime:8.82,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",slug:"javascript-variadic-currying",authors:"abdullah_numan",tags:["javascript","currying"],image:"/img/blog/2022-08-28-js-currying-functions/social.png",featured_image:"/img/blog/2022-08-28-js-currying-functions/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid"},nextItem:{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering"},relatedPosts:[{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.215,date:"2022-10-17T00:00:00.000Z"},{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.815,date:"2022-09-06T00:00:00.000Z"},{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api",formattedDate:"August 19, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.8,date:"2022-08-19T00:00:00.000Z"}],authorPosts:[{title:"A Definitive guide on JavaScript every() Method",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.685,date:"2022-11-02T00:00:00.000Z"},{title:"How to Use JavaScript Array some",permalink:"/blog/javascript-some-method",formattedDate:"October 25, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.015,date:"2022-10-25T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.26,date:"2022-09-16T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Variadic Partial Application",id:"variadic-partial-application",level:3},{value:"Using <code>Function.prototype</code> Methods",id:"using-functionprototype-methods",level:3},{value:"Variadic Currying with Termination",id:"variadic-currying-with-termination",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this post, we first look at the confusion around currying in JavaScript, especially with respect to polyadic partial application. We find out that we're not really doing currying in the real sense that it is implemented in Haskell, rather in a much limited capacity."),(0,r.kt)("p",null,"In the later part, we delve into variadic currying in a stricter sense with an example that returns unary accumulators."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#variadic-partial-application"},"Variadic Partial Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-functionprototype-methods"},"Using ",(0,r.kt)("inlineCode",{parentName:"a"},"Function.prototype")," Methods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#variadic-currying-with-termination"},"Variadic Currying with Termination"))),(0,r.kt)("p",null,"This post is about variadic currying in JavaScript. It is the fifth part of the series titled ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/anewman15/curry-functions-in-javascript-4jpa"},"Curry Functions in JavaScript"),"."),(0,r.kt)("h3",{id:"variadic-partial-application"},"Variadic Partial Application"),(0,r.kt)("p",null,"In the previous article titled ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/anewman15/auto-currying-in-javascript-17il"},"Auto-currying in JavaScript"),", we focused on the ",(0,r.kt)("strong",{parentName:"p"},"unarity")," of curried functions, because that's what a curried function ought to be."),(0,r.kt)("p",null,"We defined two versions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"curry()")," function. The first one maintains unarity of the accumulator function at every level of the recursive stack."),(0,r.kt)("p",null,"In the second definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"curry()")," though, with the spread ",(0,r.kt)("inlineCode",{parentName:"p"},"...args")," arguments, we are introducing polyadic partial application to the first call of the curried function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(a) {\n      return curried(...args, a);\n    };\n  };\n};\n")),(0,r.kt)("p",null,"This is a good starting point to deviate from actual currying. So, now we can take an arbitrary number of arguments for our first call to the curried function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function createMessage(greeting, name, message) {\n  return `${greeting}, ${name}! ${message}`;\n};\n\nconst curriedCreateMessage = curry(createMessage);\n\n// First accumulator is a variadic function\nconsole.log(curriedCreateMessage('Hi')('Haskell')('Whadup?')); // Hi, Haskell! Whadup?\nconsole.log(curriedCreateMessage('Hi', 'Haskell', 'Whadup?'));  // Hi, Haskell! Whadup?\nconsole.log(curriedCreateMessage('Hi', 'Haskell', 'Whadup?', 'Say something', `Let's talk.`));\n// Hi, Haskell! Whadup?\n\n// Subsequent accumulators are unary\nconsole.log(curriedCreateMessage('Hi')('Haskell', 'Whadup?', 'Say something', `Let's talk.`));\n// [Function: accumulator]\nconsole.log(curriedCreateMessage('Hi')('Haskell')('Whadup?', 'Say something', `Let's talk.`));\n// Hi, Haskell! Whadup?\n")),(0,r.kt)("p",null,"Notice, we have opened only the first accumulator to accept any number of arguments. Subsequent calls maintain unarity of the accumulator with ",(0,r.kt)("inlineCode",{parentName:"p"},"accumulator(a)")," accepting only one argument."),(0,r.kt)("p",null,"We can deviate more and allow the accumulator to be polyadic with ",(0,r.kt)("inlineCode",{parentName:"p"},"...a"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(...a) {\n      return curried(...args, ...a)\n    };\n  };\n};\n")),(0,r.kt)("p",null,"Doing so allows ",(0,r.kt)("inlineCode",{parentName:"p"},"accumulator(...a)")," to be variadic at every level of the recursive stack. So, now we can take multiple arguments in the subsequent calls as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(curriedCreateMessage('Hi')('Haskell', 'Whadup?', 'Say something', `Let's talk.`));\n// Hi, Haskell! Whadup?\nconsole.log(curriedCreateMessage('Hi', 'Haskell')('Whadup?', 'Say something', `Let's talk.`));\n// Hi, Haskell! Whadup?\n")),(0,r.kt)("p",null,"Notice, the additional arguments are gracefully ignored by JavaScript."),(0,r.kt)("p",null,"So basically, what we've done is allow the accumulator to take multiple arguments per call. It ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"can be"))," unary, as well as polyadic. We've lost the essence of currying."),(0,r.kt)("p",null,"But now our ",(0,r.kt)("inlineCode",{parentName:"p"},"curry()")," function is much more powerful. We can pass any number of arguments to an accumulator, as long as that is returned. And it is common to implement this with native JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype")," methods."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://github.com/refinedev/refine"},(0,r.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,r.kt)("h3",{id:"using-functionprototype-methods"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"Function.prototype")," Methods"),(0,r.kt)("p",null,"We can re-write the ",(0,r.kt)("inlineCode",{parentName:"p"},"curry()")," function with ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.apply"),", and with ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// with Function.protoype.apply\nfunction curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(...a) {\n      return curried.apply(this, [...args, ...a]);\n    };\n  };\n};\n\n// with Function.prototype.bind\nfunction curryBound(f) {\n  return function curried(...args) {\n    if (args.length < f.length) return curried.bind(null, ...args);\n    return f(...args);\n  };\n};\n")),(0,r.kt)("p",null,"Refactoring ",(0,r.kt)("inlineCode",{parentName:"p"},"curry()")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.apply")," is not radically different in terms of the logic. We're just passing in the arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," as part of an array instead of a list."),(0,r.kt)("p",null,"However, with ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind"),", we are returning a bound function that binds incoming arguments recursively to a copy of itself till we are able to receive all required arguments. So, inside ",(0,r.kt)("inlineCode",{parentName:"p"},"curryBound()"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"curried()")," function at a current execution context is a bound copy of the ",(0,r.kt)("inlineCode",{parentName:"p"},"curried()")," function called one level below it in the recursive stack with the arguments passed there."),(0,r.kt)("p",null,"To be semantically more accurate, we should rename ",(0,r.kt)("inlineCode",{parentName:"p"},"curryBound()")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"partialize()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"curried()")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"bound()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function partialize(f) {\n  return function bound(...args) {\n    if (args.length < f.length) return bound.bind(null, ...args);\n    return f(...args);\n  };\n};\n")),(0,r.kt)("p",null,"This is because, ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind")," applied here allows a variadic and more powerful partial application than unary currying. Really, this is nothing more than native JavaScript partial application with context binding and recursion."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Stunner"),"\nOk, so what about invoking our original function, ",(0,r.kt)("inlineCode",{parentName:"p"},"f()"),", when we have all arguments available ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"f(...args);\n")),(0,r.kt)("p",null,"We're just calling a polyadic function with all its required arguments. Is it currying ? To me, with ",(0,r.kt)("inlineCode",{parentName:"p"},"f(...args);")," we just embraced back what we wanted to avoid by accepting single arguments at a time. That is, we have not found a way around to call our original function, ",(0,r.kt)("inlineCode",{parentName:"p"},"f()"),", with single arguments sequentially."),(0,r.kt)("p",null,"In Haskell, currying does not involve calling the multary function with all arguments passed in collectively. In JavaScript, we are eventually calling it with all arguments together - and with the possibility of accepting additional ones. We're fooling around."),(0,r.kt)("p",null,"What we're actually doing is, generating a series of variadic accumulators returned in sequence - with good intentions, inspired by currying to begin with. This is probably what currying should idiomatically mean in the sphere of JavaScript."),(0,r.kt)("h2",{id:"variadic-currying-with-termination"},"Variadic Currying with Termination"),(0,r.kt)("p",null,"In a stricter sense, if we want to implement currying in JavaScript - at best - we can go as far as returning unary accumulators. Contrary to this, as we have seen above, variadic multary accumulators are also commonly returned."),(0,r.kt)("p",null,"However, we can go ahead and implement variadic currying by returning unary accumulators as well. This can be a case if our ",(0,r.kt)("inlineCode",{parentName:"p"},"f()")," is variadic itself. Below, we have modified our ",(0,r.kt)("inlineCode",{parentName:"p"},"createMessage()")," function to produce a message for a given arbitrary number of text strings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function createMessage(...texts) {\n  return texts.reduce((combinedText, currentText) => combinedText + currentText, '');\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Terminator"),"\nHere, we want to curry ",(0,r.kt)("inlineCode",{parentName:"p"},"createMessage()")," with unary accumulators. And we can keep receiving as many arguments we want, without stopping."),(0,r.kt)("p",null,"So, in order to produce a result from a curried variadic function, we have to decide on an arity for ",(0,r.kt)("inlineCode",{parentName:"p"},"f()")," at some point. After we fix an arity of our desire for ",(0,r.kt)("inlineCode",{parentName:"p"},"f()")," by passing in those arguments one at a time, we can terminate the accumulator."),(0,r.kt)("p",null,"The idea is to terminate the accumulator when we receive an empty (",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),") argument and invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"f()")," with the available arguments. So, the empty parens, ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," acts as the terminator in this case."),(0,r.kt)("p",null,"For a curried function, ",(0,r.kt)("inlineCode",{parentName:"p"},"vCurriedCreateMessage()"),", returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"vCurry()")," by passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"createMessage()"),", let's say we want to terminate the accumulator after 5 arguments. And we want to invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"f()")," after that. It will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const vCurriedCreateMessage = vCurry(createMessage);\nconst messageHaskell = vCurriedCreateMessage('Hi Haskell,')(`I hope you're doing good!`)(`We're discussing currying here. Do you wanna join in?`)('See you soon!')('Bye.');\n\nmessageHaskell();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Plan"),"\nImplementing ",(0,r.kt)("inlineCode",{parentName:"p"},"vCurry()")," follows a slightly different logic, mostly due to the fact that we have to terminate the accumulator on demand with an empty argument, i.e. having a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". And since sometimes a variadic function can potentially take infinite number of arguments, it can lead to infinite currying. We'll talk about infinite currying in an upcoming article, but for such cases ",(0,r.kt)("inlineCode",{parentName:"p"},"f.length")," doesn't play an important role in the currying logic. Instead, length of the incoming arguments is the main point of focus."),(0,r.kt)("p",null,"If we have an incoming argument, we keep accumulating. When we receive none, we terminate and invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"f()")," with accumulated arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function vCurry(f) {\n  function curried(args) {\n    return function accumulator(a) {\n      if (args.length === 0 || a) return curried([...args, a]);\n      return f(...args);\n    };\n  };\n\n  return curried([]);\n};\n")),(0,r.kt)("p",null,"So, now currying ",(0,r.kt)("inlineCode",{parentName:"p"},"createMessage()")," and invoking the curried function with 5 arguments and then invoking returned function with ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," (empty argument) will produce the message string;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const vCurriedCreateMessage = vCurry(createMessage);\nconst messageHaskellShorter = vCurriedCreateMessage('Hi Haskell,\\n', `You can't see this.`)(`I hope you're doing good!\\n`)(`We're discussing currying here. Do you wanna join in?`, 'Bye');\nconst messageHaskell = vCurriedCreateMessage('Hi Haskell,\\n')(`I hope you're doing good!\\n`)(`We're discussing currying here. Do you wanna join in?\\n`)('See you soon!\\n')('Bye.');\nconst messageHaskellLonger = messageHaskell('\\nAbdullah Numan');\n\n\nconsole.log(messageHaskellShorter()); // Additional arguments ignored: `You can't see this.`\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\n*/\n\nconsole.log(messageHaskell()); // Additional arguments ignored:  'Bye'\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\nSee you soon!\nBye.\n*/\n\nconsole.log(messageHaskellLonger()); // Extended from messageHaskell()\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\nSee you soon!\nBye.\nAbdullah Numan\n*/\n")),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"messageHaskellLonger")," function. The curried function can be extended basing on that of a smaller arity to any arbitrary arity, before it gets terminated."),(0,r.kt)("p",null,"Notice also that since we focused on unary implementation of variadic currying, the accumulators ignore the second arguments passed."),(0,r.kt)("p",null,"Currying a variadic function is quite different from currying functions with fixed arity in terms of the logic, especially with respect to how termination is achieved by passing an empty argument. Without termination, it can take infinite number of arguments. In the next article, we'll see an example of infinitely curried function that does not require termination at all."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this post, we found out that deviating from unary currying in leads to variadic partial application in JavaScript, which turns out to be more powerful. We also saw how currying an existing variadic function follows a different logic than those with fixed arity with a unary implementation."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,r.kt)("p",null,"Building CRUD applications involves many repetitive task consuming your precious development time. If you are starting from scratch, you also have to implement custom solutions for critical parts of your application like authentication, authorization, state management and networking. "),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine"),", if you are interested in a headless framework with robust architecture and full of industry best practices for your next CRUD project."),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://github.com/refinedev/refine"},(0,r.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," is an open-source React-based framework for building CRUD applications ",(0,r.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,r.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,r.kt)("strong",{parentName:"p"},"styling"),", ",(0,r.kt)("strong",{parentName:"p"},"customization")," and ",(0,r.kt)("strong",{parentName:"p"},"project workflow.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,r.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects."))}p.isMDXComponent=!0}}]);