// menubar.js by C. Mames is licensed under the GNU General Public License v3.0 
// https://github.com/cmames/menubar.js 

var col={};
var bgcol="";
var font,fonti;
var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = `
.menubarnav {
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1000;
}
.menubarnav li {
  cursor: pointer;
  padding: 0.25em 0.5em 0.25em 0.5em;
  display: inline-block;
  background-color: inherit;
}
.menubarnav ul li {
  width: auto;
  display: inherit;
}
.menubarnav hr {
  display: inherit;
}
.menubarnav img {
  height: 1em;
}
.menubarnav ul {
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  left: -999em;
  text-align: left;
}
.menubarnav li:hover>ul {
  left: auto;
  margin-left: -0.4em;
  margin-top: 0.1em;
}
.menubarnav li ul li:hover ul {
  margin-top: -1.4em;
  margin-left: 3em;
}
`;

function menuElement(panel) {
  panel.style.zIndex=1000;
  panel.style.position="relative";
  let mymenubar=document.createElement("div");
  panel.insertBefore(mymenubar, panel.firstChild);
  mymenubar.innerHTML="<ul class='menubarnav'></ul>";
  Object.assign(mymenubar.style, {
    position:"absolute", 
    width:"100%",
    top:0,
    left:0,
    zIndex: 1000
  });
  panel.addEventListener("scroll",()=>{
    mymenubar.style.top=panel.scrollTop+"px";
    mymenubar.style.left=panel.scrollLeft+"px";
  });
  var menuJSON=window["__"+panel.id];
  if (typeof menuJSON.textColor !== "undefined") col.t=menuJSON.textColor; else col.t="black";
  if (typeof menuJSON.backgroundColor !== "undefined") bgcol=menuJSON.backgroundColor; else bgcol="white";
  if (typeof menuJSON.fontFamily !== "undefined") font=menuJSON.fontFamily; else font="system-ui";
  if (typeof menuJSON.iconFontFamily !== "undefined") fonti=menuJSON.iconFontFamily; else fonti="monospace";
  let tmp=document.createElement("span");
  tmp.style.color=col.t;
  tmp.style.backgroundColor=bgcol.t;
  tmp.textContent="CMames";
  document.body.appendChild(tmp);
  bgcol.t=""+window.getComputedStyle(tmp).getPropertyValue("background-color");
  col.t=""+window.getComputedStyle(tmp).getPropertyValue("color");
  document.body.removeChild(tmp);
  tmp=col.t.split(",");
  col.r=(tmp[0].split("(")[1]);
  col.g=tmp[1];
  col.b=tmp[2].split(")")[0];
  styleElem.innerHTML=styleElem.innerHTML+`
  #`+panel.id+` > div {
    background-color: `+bgcol+`;
    font-family:`+font+`;
  }
  #`+panel.id+` .menubarnav a{
    text-decoration: none;
    display: block;
    color:`+col.t+`;
  }
  #`+panel.id+` .menubarnav li:hover {
    background-color: rgba(`+col.r+","+col.g+","+col.b+`,0.25);
  }
  #`+panel.id+` .menubarnav ul {
    border: solid 1px `+col.t+`;
    box-shadow: 3px 3px rgba(`+col.r+","+col.g+","+col.b+`,0.25);
    background-color: `+bgcol+`;
  }
  `;
  if(typeof menuJSON !== "undefined") parseMenu(panel, mymenubar.querySelector("ul"),menuJSON.menu)
  else console.warn("JSON menu __"+panel.id+" "+menuJSON);
  let pt=window.getComputedStyle(panel,null).getPropertyValue("padding-top");
  panel.style.paddingTop=parseInt(pt)+mymenubar.offsetHeight+"px";
}

function parseMenu(panel, ul, menu) {
  ul.style.backgroundColor=bgcol;
  ul.style.color=col.t;
  var image;
  for (var i=0;i<menu.length;i++) {
    image="";
    if (typeof(menu[i].name)==="undefined") menu[i].name="";
    var li=document.createElement("li");
    if (typeof (menu[i].icon) !== "undefined") {
      image='<span style="font-family:'+fonti+';">'+menu[i].icon+'</span> '
    }
    if (typeof (menu[i].img) !== "undefined") {
      image=image+'<img src="'+menu[i].img+'"/> '
    }
    if (typeof (menu[i].action) === "undefined") {
      li.innerHTML="<a href='#'>"+image+menu[i].name+"</a>";
    }
    if (menu[i].action==="link") {
      li.innerHTML="<a href='"+menu[i].dest+"'>"+image+menu[i].name+"</a>";
    }
    else if (menu[i].action==="event") {
      li.innerHTML=image+menu[i].name;
      li.dest=menu[i].dest;
      li.addEventListener("click",(e)=>{
        panel.dispatchEvent(new CustomEvent(li.dest, e));
      });
    }
    else if (menu[i].action==="spacer") {
      li=document.createElement("hr");
    }
    ul.appendChild(li);
    if (menu[i].sub!=null) {
      li.innerHTML=li.innerHTML+'<ul></ul>';
      parseMenu(panel, li.querySelector("ul"), menu[i].sub);
    }
  }
}

document.querySelectorAll(".menubar").forEach(item => {menuElement(item)});
