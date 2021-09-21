(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={mainTitle:"PhoneBook_mainTitle__xIEpA",title:"PhoneBook_title__2BEiw"}},17:function(t,e,n){t.exports={btn:"Button_btn__3-jHA"}},3:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3pPbp",inputLabel:"ContactForm_inputLabel__35F8V",input:"ContactForm_input__heqvu"}},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=n(2),l=n(11),s=n(16),u=n(18),m="contact/Add",b="contact/Delete",d="contact/Filter",h={contacts:[{name:"David",number:"3235-43-21",id:"12"},{name:"Rony",number:"3235-43-51",id:"13"},{name:"Bob",number:"3235-43-81",id:"14"},{name:"Ivan",number:"3235-43-91",id:"15"},{name:"Jhon",number:"3235-43-51",id:"16"},{name:"Clark",number:"3235-43-21",id:"17"}],filter:""},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:var n=t.contacts.some((function(t){return t.name.toLowerCase()===e.payload.name.toLowerCase()}));return n?(alert("".concat(e.payload.name," is already in contacts")),t):{contacts:[].concat(Object(u.a)(t.contacts),[e.payload])};case b:return{contacts:t.contacts.filter((function(t){return t.id!==e.payload.id}))};case d:return{contacts:t.contacts,filter:e.payload.name};default:return t}},p=Object(l.createStore)(j,Object(s.composeWithDevTools)()),f=n(14),v=n(17),O=n.n(v),_=n(1);function x(t){var e=t.type,n=t.name,a=t.clickOnBtn,c=t.id,r=t.children;return Object(_.jsxs)("button",{className:O.a.btn,type:e,onClick:a,id:c,children:[n,r]})}var y,g,w=n(3),N=n.n(w),C=n(30);function F(t){var e=Object(a.useState)(""),n=Object(f.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)(""),l=Object(f.a)(i,2),s=l[0],u=l[1],b=C.generate(),d=C.generate(),h=Object(o.b)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":u(a);break;default:return}},p=function(){r(""),u("")};return Object(_.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h(function(t){var e=t.name,n=t.number,a=t.id;return{type:m,payload:{name:e,number:n,id:a}}}({name:c,number:s,id:C.generate()})),p()},className:N.a.contactForm,children:[Object(_.jsxs)("label",{className:N.a.inputLabel,htmlFor:b,children:["Name",Object(_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:j,className:N.a.input,id:b})]}),Object(_.jsxs)("label",{className:N.a.inputLabel,htmlFor:d,children:["Number",Object(_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:j,className:N.a.input,id:d})]}),Object(_.jsx)(x,{name:"Add contact",type:"submit",id:b})]})}var k=["title","titleId"];function L(){return(L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function B(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function z(t,e){var n=t.title,c=t.titleId,r=B(t,k);return a.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":c},r),void 0===n?a.createElement("title",{id:c},"bin"):n?a.createElement("title",{id:c},n):null,y||(y=a.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"})),g||(g=a.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"})))}var A=a.forwardRef(z),E=(n.p,n(5)),P=n.n(E);function M(t){var e=t.nameBtn,n=Object(o.b)(),a=Object(o.c)((function(t){return t.contacts})),c=Object(o.c)((function(t){return t.filter})),r=function(t){n({type:b,payload:{id:t}})},i=c?a.filter((function(t){return t.name.toLowerCase().includes(c)})):a;return Object(_.jsx)("ul",{className:P.a.list,children:i.map((function(t){return Object(_.jsxs)("li",{className:P.a.item,children:[Object(_.jsxs)("span",{className:P.a.itemName,children:[t.name,":"]}),Object(_.jsxs)("span",{className:P.a.itemPhone,children:[" ",t.number]}),Object(_.jsx)(x,{name:e,clickOnBtn:function(t){t.preventDefault(),r(t.currentTarget.id)},id:t.id,children:Object(_.jsx)(A,{width:"20",height:"20",fill:"rgb(71, 71, 71)"})})]},t.id)}))})}var S=n(9),T=n.n(S);function q(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.filter})),n=function(e){t(function(t){return{type:d,payload:{name:t}}}(e.toLowerCase()))};return Object(_.jsx)("form",{className:T.a.contactForm,children:Object(_.jsxs)("label",{className:T.a.inputLabel,children:["Find contact by name",Object(_.jsx)("input",{className:T.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)},required:!0})]})})}var D=n(13),I=n.n(D);function J(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:I.a.mainTitle,children:"Phonebook"}),Object(_.jsx)(F,{nameBtn:"Add contact"}),Object(_.jsx)("h2",{className:I.a.title,children:"Contacts"}),Object(_.jsx)(q,{}),Object(_.jsx)(M,{nameBtn:"Delete"})]})}n(39);var W=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(J,{})})};n(40);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(o.a,{store:p,children:Object(_.jsx)(W,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={list:"ContactList_list__1j2T6",item:"ContactList_item__11nYB",itemName:"ContactList_itemName__3oQrq",itemPhone:"ContactList_itemPhone__2h_o9"}},9:function(t,e,n){t.exports={contactForm:"Filter_contactForm__3eiWW",inputLabel:"Filter_inputLabel__2qhTC",input:"Filter_input__EwK-J"}}},[[41,1,2]]]);
//# sourceMappingURL=main.f700c076.chunk.js.map