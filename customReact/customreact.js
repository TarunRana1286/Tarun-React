function customRender(reactElement, container){
    // const newElement = document.createElement(reactElement.type)
    // newElement.innerHTML=reactElement.children;
    // newElement.setAttribute("href", reactElement.props.href);
    // newElement.setAttribute("target", reactElement.props.target);
    // container.appendChild(newElement); 

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);     
    }
    container.appendChild(domElement);
}


const reactElement = {
    type:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    children:"Click me to visit Google Link"
        
}

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
