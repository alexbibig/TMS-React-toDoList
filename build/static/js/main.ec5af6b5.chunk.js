(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports=n(24)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(12);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),i=n(6),l=n(7),u=n(5),s=n(1),d=n(2),m=n(4),f=n(3),h=(n(17),function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={searchText:""},t.onSearchChange=function(e){t.setState({searchText:e.target.value}),t.props.onSearchChange(e.target.value)},t}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"SearchBlock"},o.a.createElement("input",{onChange:this.onSearchChange,className:"form-control",placeholder:"Search",value:this.state.searchText}))}}]),n}(o.a.Component)),p=(n(18),function(t){var e=t.done,n=t.todo;return o.a.createElement("div",{className:"Header"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("p",null,o.a.createElement("span",null,"done: ",e),o.a.createElement("span",null,"todo: ",n)))}),g=n(10),b=(n(19),function(t){var e=t.text,n=t.onDelete,a=t.done,r=t.important,c=t.onToggleDone,i=t.onToggleImportant,l="TodoListItem";return a&&(l+=" done"),r&&(l+=" important"),o.a.createElement("div",{className:l},o.a.createElement("span",{onClick:c},e),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-outline-danger remove-btn",onClick:n},o.a.createElement("i",{className:"fa fa-trash"})),o.a.createElement("button",{className:"btn btn-outline-primary",onClick:i},o.a.createElement("i",{className:"fa fa-exclamation"}))))}),v=(n(20),function(t){var e=t.todos,n=t.onDelete,a=t.onToggleDone,r=t.onToggleImportant,c=e.map((function(t){var e=t.id,c=Object(g.a)(t,["id"]);return o.a.createElement("li",{className:"list-group-item",key:e},o.a.createElement(b,Object.assign({},c,{onDelete:function(){return n(e)},onToggleDone:function(){return a(e)},onToggleImportant:function(){return r(e)}})))}));return o.a.createElement("ul",{className:"list-group"},c)}),E=(n(21),n(22),function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).buttonsArr=[{name:"all"},{name:"active"},{name:"done"}],t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.buttonsArr.map((function(t){var a=e===t.name?"btn btn-primary":"btn btn-outline-secondary";return o.a.createElement("button",{className:a,key:t.name,onClick:function(){return n(t.name)}},t.name)}));return o.a.createElement("div",{className:"Filter"},a)}}]),n}(o.a.Component)),D=(n(23),function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={inputText:""},t.onTextChange=function(e){t.setState({inputText:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state.inputText),t.setState({inputText:""})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.inputText;return o.a.createElement("div",{className:"ItemAddForm"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{className:"form-control",placeholder:"Add new todos",onChange:this.onTextChange,value:t}),o.a.createElement("button",{className:"btn btn-primary"},"Add item")))}}]),n}(o.a.Component)),j=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).cId=100,t.state={todoData:[{text:"Learn HTML",important:!1,done:!1,id:1},{text:"Learn CSS",important:!0,done:!1,id:2},{text:"Learn JS",important:!1,done:!1,id:3}],filter:"all"},t.filter=function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}},t.onDelete=function(e){t.setState((function(t){var n=t.todoData.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(u.a)(t.todoData.slice(0,n)),Object(u.a)(t.todoData.slice(n+1)))}}))},t.search=function(t,e){return e?t.filter((function(t){return t.text.toUpperCase().includes(e.toUpperCase())})):t},t.onAdd=function(e){var n={text:e,important:!1,id:t.cId++};t.setState((function(t){return{todoData:[n].concat(Object(u.a)(t.todoData))}}))},t.getNewArrAccordingProp=function(t,e,n){var a=e.todoData.findIndex((function(t){return t.id===n})),o=Object(l.a)(Object(l.a)({},e.todoData[a]),{},Object(i.a)({},t,!e.todoData[a][t]));return[].concat(Object(u.a)(e.todoData.slice(0,a)),[o],Object(u.a)(e.todoData.slice(a+1)))},t.onToggleDone=function(e){t.setState((function(n){return{todoData:t.getNewArrAccordingProp("done",n,e)}}))},t.onToggleImportant=function(e){t.setState((function(n){return{todoData:t.getNewArrAccordingProp("important",n,e)}}))},t.onFilterChange=function(e){t.setState({filter:e})},t.onSearchChange=function(e){t.setState({search:e})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.filter,a=t.search,r=this.state.todoData.filter((function(t){return t.done})).length,c=this.state.todoData.length-r,i=this.search(this.filter(e,n),a);return o.a.createElement("div",{className:"App"},o.a.createElement(p,{done:r,todo:c}),o.a.createElement("div",{className:"line"},o.a.createElement(h,{onSearchChange:this.onSearchChange}),o.a.createElement(E,{onFilterChange:this.onFilterChange,filter:n})),o.a.createElement(D,{onAdd:this.onAdd}),o.a.createElement(v,{todos:i,onDelete:this.onDelete,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant}))}}]),n}(o.a.Component);c.a.render(o.a.createElement(j,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ec5af6b5.chunk.js.map