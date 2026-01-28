function customRender(reactElement, container){
    // const newElement = document.createElement(reactElement.type)
    // newElement.innerHTML=reactElement.children;
    // newElement.setAttribute("href", reactElement.props.href);
    // newElement.setAttribute("target", reactElement.props.target);
    // container.appendChild(newElement); 
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
