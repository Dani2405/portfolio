(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8301:function(e,t,a){Promise.resolve().then(a.bind(a,4898))},4898:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(7437),n=a(2265),c=a(5587);let i=e=>{let t=new Date;return t.setHours(t.getUTCHours()+e/3600,t.getUTCMinutes(),t.getUTCSeconds()),t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")},r=e=>{let t=new Date;return t.setHours(t.getUTCHours()+e/3600,t.getUTCMinutes(),t.getUTCSeconds()),t.getHours()},l=e=>{let t=new Date;return t.setHours(t.getUTCHours()+e/3600,t.getUTCMinutes(),t.getUTCSeconds()),t.getHours()>=24&&t.setDate(t.getDate()-1),t.toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric"})},h=e=>{let t=[],a=new Date;a.setHours(a.getUTCHours()+e/3600,a.getUTCMinutes(),a.getUTCSeconds());let s=a.getHours()>=24,n={weekday:"long"};s&&a.setDate(a.getDate()-1);for(let e=0;e<4;e++){let s=new Date;s.setDate(a.getDate()+e+1),t[e]=s.toLocaleString("en-US",n)}return t},d=[["#0e244c","#021527"],["#677bb5","#13469c"],["#A0D3FF","#edcf9c"],["#a3defb","#aee7ff"],["#70CEFF","#28bdf3"],["#B2D7FF","#FFC0CB"],["#F2CA88","#FFB3BB"],["#ffb3c5","#8d68ea"],["#715cb5","#4845cc"],["#051923","#2C7BC2"],["#0c1835","#184777"]],o=[["#242429","#000000"],["#B5DFF5","#759ABB"],["#7eaec5","#5484a8"],["#5c99b3","#29597e"],["#265063","#173a5a"],["#979797","#4c4c4c"],["#4e4e55","#11171c"]],u=(e,t)=>{let a;return e<800?(t<5?a=0:t<13?a=1:t<15?a=2:t<17?a=3:t<19?a=4:t<21?a=5:t<=23&&(a=6),o[a]):(t<5?a=0:t<6?a=1:t<7?a=2:t<8?a=3:t<17?a=4:t<18?a=5:t<19?a=6:t<20?a=7:t<21?a=8:t<22?a=9:t<=23&&(a=10),d[a])};var x=e=>{let t=u(e.weatherData.weather[0].id,r(e.weatherData.timezone));return(0,s.jsx)("button",{className:"cityCard",onClick:()=>e.handleCityChange(e.weatherData.name),style:{backgroundImage:"linear-gradient(".concat(t[0],", ").concat(t[1],")")},children:(0,s.jsxs)("div",{className:"cityCardContainer",children:[(0,s.jsx)("h1",{children:e.weatherData.name}),(0,s.jsx)("div",{className:"cityWeatherIcon",style:{backgroundImage:"url(/icons/".concat(e.weatherData.weather[0].icon,".svg)")}}),(0,s.jsx)("h3",{children:i(e.weatherData.timezone)}),(0,s.jsx)("h2",{children:"".concat(Math.round(e.weatherData.main.temp),"\xb0C")})]})})},m=a(9),f=e=>{let[t,a]=(0,n.useState)(!1),[i,r]=(0,n.useState)(""),[l,h]=(0,n.useState)([]),d=async()=>{a(!1),i.trim()&&(e.handleCityChange(i),r(""),o())};async function o(){let t=[];for(let s of e.cities)try{let e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&appid=7e36427cc8407261650051f0098f071e&units=metric"));var a={weatherData:await e.json()};t.push(a)}catch(e){console.error("Error fetching weather data:",e)}h(t)}return(0,n.useEffect)(()=>{o()},[e.cities]),(0,s.jsxs)(c.E.div,{className:"sidebar fixed h-full flex-row",variants:{visible:{x:0,transition:{duration:.15,ease:"easeOut"}},hidden:{x:"-150%",transition:{duration:.15,ease:"easeIn"}}},animate:e.isVisible?"visible":"hidden",children:[(0,s.jsxs)("div",{className:"sidebar-header w-full flex",children:[(0,s.jsx)("button",{className:"p-2",onClick:e.hideSidebar,children:(0,s.jsx)(m.q5L,{className:"w-12 h-12"})}),(0,s.jsx)("h1",{className:"sidebarLogo content-center p-5",children:"WeatherApp"})]}),(0,s.jsxs)("div",{className:"sidebar-content flex flex-col items-center",children:[l.map((t,a)=>(0,s.jsx)(x,{weatherData:t.weatherData,handleCityChange:e.handleCityChange},a)),t?(0,s.jsxs)("div",{className:"addCity h-16 w-full rounded-full flex p-4 content-center justify-center items-center",children:[(0,s.jsx)("input",{autoFocus:!0,className:"w-full focus:outline-none rounded-full p-2",type:"text",placeholder:"Add city",value:i,onChange:e=>{r(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&d()}}),(0,s.jsx)("button",{onClick:d,children:(0,s.jsx)(m.UgA,{className:"w-8 h-8"})})]}):(0,s.jsx)("div",{className:"addCity h-16 w-16 rounded-full flex justify-center items-center p-4",children:(0,s.jsx)("button",{onClick:()=>a(!0),children:(0,s.jsx)(m.OvN,{className:"w-8 h-8"})})})]}),(0,s.jsx)("div",{className:"sidebar-footer w-full content-center text-center",children:(0,s.jsxs)("p",{children:["Daniel Fischer",(0,s.jsx)("br",{}),"\xa9 2024"]})})]})},w=e=>{let[t,a]=(0,n.useState)(null),[c,d]=(0,n.useState)([""]),o=u(e.weatherData.weather[0].id,r(e.weatherData.timezone)),x=async()=>{let t=await fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e.weatherData.name,"&appid=7e36427cc8407261650051f0098f071e&units=metric"));if(!t.ok)throw Error("Failed to fetch weather data");a(await t.json())};return(0,n.useEffect)(()=>{x(),d(h(e.weatherData.timezone))},[e.setWeatherData,e.handleCityChange]),(0,s.jsxs)("div",{className:"city h-lvh",style:{backgroundColor:"".concat(o[0])},children:[(0,s.jsxs)("div",{className:"cityContainer h-4/6",style:{backgroundImage:"linear-gradient(".concat(o[0],", ").concat(o[1],")")},children:[(0,s.jsx)("h1",{className:"cityName",children:e.weatherData.name}),(0,s.jsx)("h2",{className:"cityTemp",children:"".concat(Math.round(e.weatherData.main.temp),"\xb0C")}),(0,s.jsx)("h2",{className:"capitalize w-full text-center h-12 text-2xl",children:e.weatherData.weather[0].description}),(0,s.jsxs)("div",{className:"cityTempDetails flex flex-row justify-center m-auto",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h5",{children:"Feels like"}),(0,s.jsx)("h4",{children:"".concat(Math.round(e.weatherData.main.feels_like),"\xb0C")})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h5",{children:"Max"}),(0,s.jsx)("h4",{children:"".concat(Math.round(e.weatherData.main.temp_max),"\xb0C")})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h5",{children:"Min"}),(0,s.jsx)("h4",{children:"".concat(Math.round(e.weatherData.main.temp_min),"\xb0C")})]})]}),(0,s.jsx)("img",{className:"cityWeather",src:"./icons/".concat(e.weatherData.weather[0].icon,".svg")}),(0,s.jsxs)("div",{className:"cityTime",children:[(0,s.jsx)("h2",{children:l(e.weatherData.timezone)}),(0,s.jsx)("h3",{children:i(e.weatherData.timezone)})]})]}),(0,s.jsxs)("div",{className:"weatherDetails h-2/6 w-full flex",style:{backgroundColor:"".concat(o[1])},children:[(0,s.jsx)("div",{className:"weatherDetailsLeft h-full w-2/3 flex flex-wrap text-center",style:{backgroundImage:"linear-gradient(".concat(o[0],", ").concat(o[1],")")},children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("h2",{children:c[0]}),(0,s.jsx)("h3",{children:t.list[4].weather[0].description}),(0,s.jsx)("img",{className:"",src:"./icons/".concat(t.list[4].weather[0].icon,".svg")})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("h2",{children:c[1]}),(0,s.jsx)("h3",{children:t.list[12].weather[0].description}),(0,s.jsx)("img",{className:"",src:"./icons/".concat(t.list[12].weather[0].icon,".svg")})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("h2",{children:c[2]}),(0,s.jsx)("h3",{children:t.list[20].weather[0].description}),(0,s.jsx)("img",{className:"",src:"./icons/".concat(t.list[20].weather[0].icon,".svg")})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("h2",{children:c[3]}),(0,s.jsx)("h3",{children:t.list[28].weather[0].description}),(0,s.jsx)("img",{className:"",src:"./icons/".concat(t.list[28].weather[0].icon,".svg")})]})]}):(0,s.jsx)("div",{className:"h-full w-full text-center content-center",children:"Loading..."})}),(0,s.jsxs)("div",{className:"weatherDetailsRight text-center flex flex-col justify-evenly w-1/3 text-3xl",children:[(0,s.jsxs)("div",{className:"h-1/3",children:[(0,s.jsx)("h5",{children:"Humidity"}),(0,s.jsx)("h4",{className:"text-3xl",children:"".concat(Math.round(e.weatherData.main.humidity),"%")})]}),(0,s.jsxs)("div",{className:"h-1/3",children:[(0,s.jsx)("h5",{children:"Pressure (hPa)"}),(0,s.jsx)("h4",{className:"",children:"".concat(Math.round(e.weatherData.main.pressure)," ")})]}),(0,s.jsxs)("div",{className:"h-1/3",children:[(0,s.jsx)("h5",{children:"Wind"}),(0,s.jsx)("h4",{className:"text-2xl",children:"".concat(Math.round(e.weatherData.wind.speed)," m/s")})]})]})]})]})},j=()=>{let[e,t]=(0,n.useState)(null),[a,c]=(0,n.useState)([]),[i,r]=(0,n.useState)(""),[l,h]=(0,n.useState)(!1),d=()=>{h(!1)},o=async()=>{if(""===i||void 0===i)return;let e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=7e36427cc8407261650051f0098f071e&units=metric"));if(e.ok)(function(e){if(null===localStorage.getItem("cities"))return localStorage.setItem("cities",JSON.stringify([e]));let t=JSON.parse(localStorage.getItem("cities")||"[]");t.includes(e)||t.push(e),c(t),localStorage.setItem("cities",JSON.stringify(t))})(i),t(await e.json());else throw Error("Failed to fetch weather data")},u=e=>{r(e),d()};return(0,n.useEffect)(()=>{o()},[i]),(0,n.useEffect)(()=>{c(JSON.parse(localStorage.getItem("cities")||"[]")),r(JSON.parse(localStorage.getItem("cities")||"[]")[0])},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{isVisible:l,hideSidebar:d,handleCityChange:u,cities:a}),(0,s.jsx)("button",{className:"showSideBar p-2",onClick:()=>{h(!0)},children:(0,s.jsx)(m.cur,{className:"w-12 h-12"})}),e?(0,s.jsx)(w,{weatherData:e,setWeatherData:t,handleCityChange:u}):(0,s.jsxs)("div",{className:"fixed w-full h-full flex justify-center content-center items-center flex-col",children:[(0,s.jsx)("h1",{className:"font-bold",children:"No data"}),(0,s.jsx)("h2",{children:"Add a city in the menu"})]})]})}}},function(e){e.O(0,[940,971,69,744],function(){return e(e.s=8301)}),_N_E=e.O()}]);