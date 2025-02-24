const loremVariable = `Lorem Ipsum is 1960s with the release of Letraset sheets containing Lorem Ipsum 
    passages, and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum`;
const holaButton = document.getElementById('hola');
const mundoButton = document.getElementById('mundo'); 

function moveOn()
{
    const response = confirm("Are you ready to move on?");
    if(response)
    {
        document.location = "https://www.biblegateway.com/passage/?search=Hebrews%206&version=NIV;NVI";
    }
}

function logDebug(msg)
{
    var debugLog = document.getElementById('debugLog');

    if(!debugLog)
    {
        debugLog = document.createElement('div');
        debugLog.id = "debugLog";
        debugLog.innerHTML = "<h1>Debug section</h1>";
        document.body.append(debugLog);

        const preTag = document.createElement("pre");
        const messageNode = document.createTextNode(msg);
        preTag.append(messageNode);
        debugLog.append(preTag);
    }else
    {
        const preTag = document.createElement("pre");
        const messageNode = document.createTextNode(msg);
        preTag.append(messageNode);
        debugLog.append(preTag);
    }
}

function hideORinvisibleElement(e, flag)
{
    if(flag)
    {
        const isNone = e.style.display;
        if(isNone==="" || isNone === "block" )
        {
            e.style.display = "none";
            return "none";
        }else
        {
            e.style.display = "block";
            return "block";
        }

    }else{
        e.style.visibility = "hidden";
    }
}

function hide2(e)
{
    e.target.style.visibility = "hidden";
}

function applyStylesToClasses(e)
{
/*si el elemento e no tiene ninguna classe definida (!e.className)
entonces asignale la clase gameButton (definida en el style.css) al 
elemento e.
en caso de que SI tenga una clase definida, agrega las classe gameButton
al final de esta*/
    if(!e.className) e.className = "gameButton";
    else e.className += " gameButton";
}

function addFunctionToImage()
{
    var images = document.getElementsByTagName('img'); 
    //no se porque no vale esta mierda
    for (var element of images) {
        element.addEventListener('click',(element)=>{hide2(element)}, false);
    }
}

holaButton.addEventListener('click',()=>
{
    //console.log(mundoButton);
    const logRec = hideORinvisibleElement(mundoButton,true);
    logDebug(`${logRec}`);
});

addFunctionToImage();
logDebug(loremVariable);