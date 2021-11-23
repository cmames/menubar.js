# menubar.js

![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=cmames&repo=menubar.js&theme=aura)

[![GitHub license](https://img.shields.io/github/license/cmames/menubar.js)](https://github.com/cmames/menubar.js/blob/main/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/cmames/menubar.js)

![GitHub top language](https://img.shields.io/github/languages/top/cmames/menubar.js)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cmames/menubar.js)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/cmames/menubar.js)

![Code Grade](https://api.codiga.io/project/29861/score/svg)
![Code Grade](https://api.codiga.io/project/29861/status/svg)


:uk: a simple menu bar at top of a div in javascript
> :fr: une simple barre de menu en haut d'une div en javascript

<a href="https://github.com/cmames/menubar.js">https://github.com/cmames/menubar.js</a>

---
### Why? 

Just to have a menu bar at top of a DIV in your HTML pages

> ### Pourquoi?
>
> Juste pour avoir une barre de menu en haut d'une DIV dans vos pages HTML

---
### Installation

just copy the javascript file 

> ### Installation
>
> copiez juste le fichier javascript

---
### Usage

 just create a div with a class name "menubar" and an id of your choice
 
 example :
 ```
 <DIV class="menubar" id="first">
  .
  .
  </DIV>
  ```
  
 in a SCRIPT create a JSON for your menu. Its name must be your id choosen with two underscore before the name, like this :
 ```
 <SCRIPT>
 const __first = {
 .
 .
 }
 </SCRIPT>
 ```
 
 detail of the JSON (elements between [] are optionnal):
```
{ 
  [textColor,]
  [backgroundColor,]
  [fontFamily,]
  [iconFontFamily,]
  menu
 }
```
#### textColor
  select the color of the text in the menu. format like in CSS.

#### backgroundColor
  select the background color of the menu. format like in CSS.
  
#### fontFamily
  select the CSS font-family for the menu.
  
#### iconFontFamily
  select the font family for icons if you need it.
  
#### menu
  the description of the menu.
  it's an array of elements with these arguments :
  - name : optional, the text in the menu
  - icon : optional, the unicode of an icon (displayed defore the text)
  - img : optional, an link to an image (displayed before the text)
  - action : 
      - must be "link" for an URL when item is clicked. see dest
      - or "event" for generating an event when item is clicked. see dest
      - or "spacer" for insterting a spacer in the menu
  - dest : an URL if action is "link" or the name of an event generated.
  - sub : an array of elements acting as a sub-menu

example :
```
var __first =
{
  textColor: "blue",
  backgroundColor: "yellow",
  fontFamily : "Arial",
  iconFontFamily: "icon",
  menu:
    [
      {
        name: 'File', img: 'imgs/test.jpg', sub:
          [
            { img: 'imgs/test.jpg', action: 'link', dest: 'http://website.com' },
            { name: 'Open', img: 'imgs/test.jpg', action: 'link', dest: 'http://website.com' },
            { name: 'Save', img: 'imgs/test.jpg', action: 'event', dest: 'saveEvent' },
            { action: 'spacer' },
            { name: 'Close', action: 'event', dest: 'closeEvent' }
          ]
      },
      {
        name: 'Edit', sub:
          [
            { icon: '&#9757;', action: 'event', dest: 'doEvent' },
            { name: 'Copy', icon: '&#9757;', action: 'event', dest: 'copyEvent' },
            { name: 'Cut', icon: '&#9757;&#127999;', action: 'event', dest: 'cutEvent' },
            {
              name: 'Paste', icon: '&#9757;&#127998;', sub:
                [
                  { name: 'normal', icon: '&#9757;&#127997;', action: 'event', dest: 'pasteEvent' },
                  { name: 'special', icon: '&#9757;&#127996;', action: 'event', dest: 'spasteEvent' },
                  { name: 'yet another long menu entry' }
                ]
            },
            { name: 'A long menu entry', action: 'event', dest: 'longEvent' },
          ]
      },
      { name: 'Help', action: 'link', dest: 'https://fr.wikipedia.org/wiki/RTFM_(expression)', sub: null }
    ]
}
```
you can add a listener for each event generated.

you can use one menu per DIV with "id" and "__id" JSON

 import this script in your HTML (at the end of body)
 and let the magic happen

> ### Utilisation
>
> creez juste une DIV avec un nom de classe "menubar" et un id de votre choix
> exemple :
> ```
> <DIV class="menubar" id="first">
>  .
>  .
>  </DIV>
>  ```
>  
> dans un SCRIPT créez un JSON pour votre menu. Son nom doit être votre id choisi avec deux underscore avant le nom, comme ceci :
> ```
> <SCRIPT>
> const __first = {
> .
> .
> }
> </SCRIPT>
> ```
> 
> detail du JSON (les éléments entre [] sont optionnels):
> ```
> { 
>  [textColor,]
>  [backgroundColor,]
>  [fontFamily,]
>  [iconFontFamily,]
>  menu
> }
> ```
> #### textColor
>  sélectionne la couleur du texte dans le menu. format comme en CSS.
>
> #### backgroundColor
>  sélectionne la couleur du fond du menu format comme en CSS.
>  
> #### fontFamily
>  sélectionne la font-family CSS pour le menu.
>  
> #### iconFontFamily
>  sélectionne la font-family pour les icones si vous en avez une.
>  
> #### menu
>  la description du menu.
>  C'est un tableau d'éléments avec les arguments suivants :
>  - name : facultatif, le texte du menu
>  - icon : optionnel, l'unicode d'une icône (affiché avant le texte)
>  - img : optionnel, un lien vers une image (affiché avant le texte)
>  - action : 
>      - doit être "link" pour une URL lorsque l'élément est cliqué. voir dest
>      - ou "event" pour générer un événement lorsque l'élément est cliqué. voir dest
>      - ou "spacer" pour insérer un espaceur dans le menu.
>  - dest : une URL si l'action est "link" ou le nom d'un événement généré.
>  - sub : un tableau d'éléments agissant comme un sous-menu.
>
> exemple :
> ```
> var __first =
> {
>  textColor: "blue",
>  backgroundColor: "yellow",
>  fontFamily : "Arial",
>  iconFontFamily: "icon",
>  menu:
>    [
>      {
>        name: 'File', img: 'imgs/test.jpg', sub:
>          [
>            { img: 'imgs/test.jpg', action: 'link', dest: 'http://website.com' },
>            { name: 'Open', img: 'imgs/test.jpg', action: 'link', dest: 'http://website.com' },
>            { name: 'Save', img: 'imgs/test.jpg', action: 'event', dest: 'saveEvent' },
>            { action: 'spacer' },
>            { name: 'Close', action: 'event', dest: 'closeEvent' }
>          ]
>      },
>      {
>        name: 'Edit', sub:
>          [
>            { icon: '&#9757;', action: 'event', dest: 'doEvent' },
>            { name: 'Copy', icon: '&#9757;', action: 'event', dest: 'copyEvent' },
>            { name: 'Cut', icon: '&#9757;&#127999;', action: 'event', dest: 'cutEvent' },
>            {
>              name: 'Paste', icon: '&#9757;&#127998;', sub:
>                [
>                  { name: 'normal', icon: '&#9757;&#127997;', action: 'event', dest: 'pasteEvent' },
>                  { name: 'special', icon: '&#9757;&#127996;', action: 'event', dest: 'spasteEvent' },
>                  { name: 'yet another long menu entry' }
>                ]
>            },
>            { name: 'A long menu entry', action: 'event', dest: 'longEvent' },
>          ]
>      },
>      { name: 'Help', action: 'link', dest: 'https://fr.wikipedia.org/wiki/RTFM_(expression)', sub: null }
>    ]
> }
> ```
> vous pouvez ajouter un écouteur d'événement pour chaque événement généré.
>
> vous pouvez utiliser un menu par DIV avec "id" et le JSON "__id"
>
> importez ce script dans votre HTML (à la fin du corps)
> et laissez la magie opérer
