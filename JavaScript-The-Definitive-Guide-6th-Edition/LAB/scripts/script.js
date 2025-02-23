// function moveOn()
// {
//     const response = confirm("Are you ready to move on?");
//     if(response)
//     {
//         document.location = "https://www.biblegateway.com/passage/?search=Hebrews%206&version=NIV;NVI";
//     }
// }

// moveOn();

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

logDebug(`Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of 
type and scrambled it to make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
passages, and more recently with desktop publishing software like Aldus PageMaker including 
versions of Lorem Ipsum`);

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

/*si el elemento e no tiene ninguna classe definida (!e.className)
entonces asignale la clase gameButton (definida en el style.css) al 
elemento e.
en caso de que SI tenga una clase definida, agrega las classe gameButton
al final de esta*/
function applyStylesToClasses(e)
{
    if(!e.className) e.className = "gameButton";
    else e.className += " gameButton";
}

const holaButton = document.getElementById('hola');
const mundoButton = document.getElementById('mundo'); 
 
holaButton.addEventListener('click',()=>
{
    //console.log(mundoButton);
    const logRec = hideORinvisibleElement(mundoButton,true);
    logDebug(`${logRec}`);
});

// hideORinvisibleElement(holaButton);

//applyStylesToClasses(mundoButton);