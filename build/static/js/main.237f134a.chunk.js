(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),i=a.n(s),l=(a(15),a(6)),c=a(3),o=a(4),m=a(7),u=a(5),g=a(8),d=(a(17),function(e){var t=e.children;return r.a.createElement("div",{className:"row"},t)}),p=function(e){var t=e.isAnimating;return r.a.createElement("svg",{className:t?"appear":"img",width:"86px",height:"88px",viewBox:"0 0 86 88",version:"1.1"},r.a.createElement("g",{id:"Page-1",stroke:"none",fill:"none"},r.a.createElement("g",{id:"Artboard-21",transform:"translate(0.000000, -26.000000)"},r.a.createElement("g",{id:"Oval-5"},r.a.createElement("use",{fill:"black",filter:"url(#filter-2)"}),r.a.createElement("circle",{className:"svg-img ".concat(t?"draw":""),stroke:"#79CADC",cx:"41",cy:"71",r:"27"})))))},E=function(e){var t=e.isAnimating;return r.a.createElement("svg",{className:t?"appear":"img",width:"66px",height:"66px",viewBox:"0 0 66 66",version:"1.1"},r.a.createElement("defs",null),r.a.createElement("g",{id:"Page-1",stroke:"none",fill:"none"},r.a.createElement("g",{id:"Artboard-23",transform:"translate(-16.000000, -21.000000)",stroke:"#3A98D4"},r.a.createElement("g",{id:"Group",className:"svg-img",transform:"translate(24.000000, 29.000000)"},r.a.createElement("path",{d:"M0.497425847,0.497425847 L49.0583794,49.0583794",id:"Line",className:t?"draw":""}),r.a.createElement("path",{className:t?"draw1":"",d:"M0.497425847,0.497425847 L49.0583794,49.0583794",id:"Line",transform:"translate(25.000000, 25.000000) scale(-1, 1) translate(-25.000000, -25.000000) "})))))},h=function(e){var t=e.action;return"O"===t?r.a.createElement(p,{isAnimating:t===k}):r.a.createElement(E,{isAnimating:t===O})},f=function(e){var t=e.value,a=e.onClick;return r.a.createElement("button",{className:"square",onClick:a},r.a.createElement(h,{action:t}))},v=function(e){var t=e.boxes,a=e.onClick,n=function(e){return e.reduce(function(e,t,a,n){return a%3?e:e.concat([n.slice(a,a+3)])},[])},s=function(e){return e.map(function(e,t){return r.a.createElement(d,{key:t},e.map(function(e,n){return r.a.createElement(f,{key:n,value:e,onClick:function(){a(3*t+n)}})}))})};return r.a.createElement("div",{className:"game-board"},function(){var e=n(t);return s(e)}())},y=function(e){var t=e.step,a=e.goTo;return r.a.createElement("button",{title:"undo movement",disabled:t<=0&&"disabled",className:"".concat(t<=0?"disabled":""," settings-buttons undo"),onClick:function(){return a(t-1)}},r.a.createElement("img",{alt:"Undo movement",src:"https://img.icons8.com/ios-glyphs/24/B7E5EE/undo.png"}))},w=function(e){var t=e.isPlayerOne;return r.a.createElement("header",{className:"turn-header"},r.a.createElement("div",{className:t?"play-turn-1":"player-turn"},"Player X"),r.a.createElement("div",{className:t?"player-turn":"play-turn-2"},"Player O"))},N=function(e){var t=e.goTo,a=e.isEndGame;return r.a.createElement("button",{title:"Reset Game",className:a?"restart-game":"settings-buttons reset-game",onClick:function(){return t(0)}},a?"Restart":r.a.createElement("img",{alt:"Reset game",src:"https://img.icons8.com/ios/24/000000/synchronize-filled.png"}))},b=function(e){var t=e.gameResult,a=e.isPlayerOne,n=e.goTo;return r.a.createElement("div",{className:"modal ".concat(null!==t?"win":"")},r.a.createElement("img",{className:"win-img",src:"http://yi-nie.com/tic-tac-toe/img/win-img.png",alt:"the winner is"}),"win"===t?r.a.createElement("span",{className:"win-msg"},"Player",r.a.createElement("i",{className:"symbol-feedback ".concat(a?"x-symbol":"o-symbol")},a?O:k),"Wins!"):r.a.createElement("span",{className:"win-msg draw"},"It's a Draw!"),r.a.createElement(N,{goTo:n,isEndGame:!0}))},O="X",k="O",x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={history:[{boxes:Array(t.BOARD_ARRAY_LENGTH).fill(null)}],step:0,playerOneIsNext:!0},a.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(l.a)(t[a],3),r=n[0],s=n[1],i=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return!0}return!1},a.handleClick=function(e){var t=a.state.history.slice(0,a.state.step+1),n=t[t.length-1].boxes.slice();a.calculateWinner(n)||n[e]||(n[e]=a.state.playerOneIsNext?O:k,a.setState({history:t.concat([{boxes:n}]),step:t.length,playerOneIsNext:!a.state.playerOneIsNext}))},a.goTo=function(e){a.setState({step:e,playerOneIsNext:e%2===0})},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.history[this.state.step].boxes,t=this.calculateWinner(e)?"win":e.some(function(e){return null===e})?null:"draw";return r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"game-title"},"Let's play the tic-tac-toe game!"),r.a.createElement("div",{className:"container"},r.a.createElement(b,{goTo:this.goTo,isPlayerOne:!this.state.playerOneIsNext,gameResult:t}),r.a.createElement(w,{isPlayerOne:this.state.playerOneIsNext}),r.a.createElement(v,{boxes:e,onClick:this.handleClick}),r.a.createElement(y,{step:this.state.step,goTo:this.goTo}),r.a.createElement(N,{goTo:this.goTo})))}}]),t}(n.Component);x.BOARD_ARRAY_LENGTH=9;var A=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.237f134a.chunk.js.map