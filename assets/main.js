document.getElementById("menu").addEventListener("click", function (){
    var body = document.body || document.getElementsByTagName('body')[0]
    var style = body.getAttribute('style')
    style.length > 0 ? body.setAttribute('style','overflow-x:hidden;') : body.setAttribute('style','')
    var menuClass = document.getElementById("header-m-drop").getAttribute('class')
    menuClass = menuClass == 'css-d0n7q' ? 'css-1k32rax' : 'css-d0n7q'
    document.getElementById("header-m-drop").setAttribute('class',menuClass)
});

