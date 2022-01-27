# Starter for SCSS
sass scss/styles.scss:css/styles.css --watch 

## Visual Studio Code
Add Extension: **Live Sass Compiler** <br/>
Add new setting: File -> Preferences -> Settings -> Live Sass Compiler <br/>
*"liveSassCompile.settings.formats": [
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "/css"
    }
],
"liveSassCompile.settings.autoprefix": [
    "> 1%",
    "last 2 versions"
]*
