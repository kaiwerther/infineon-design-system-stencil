(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/button/button.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Button",args:{label:"Button",variant:"solid",color:"primary",size:"m",disabled:!1,icon:!1,position:"left"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}}}};var Default=function DefaultTemplate(args){return'<ifx-button label="'+args.label+'" variant="'+args.variant+'" color="'+args.color+'" size="'+args.size+'" disabled="'+args.disabled+'" icon="'+args.icon+'" position="'+args.position+'">\n</ifx-button>'}.bind({});Default.parameters=Object.assign({storySource:{source:'(args) => \n`<ifx-button label="${args.label}" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}" position="${args.position}">\n</ifx-button>`'}},Default.parameters)}}]);