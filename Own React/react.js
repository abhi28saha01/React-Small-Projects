function customRender(reactElement , container){
    /*
     ------------ Process 1 ------------
    const domElm = document.createElement(reactElement.type);
    domElm.innerHTML = reactElement.children;

    domElm.setAttribute('href',reactElement.props.href);
    domElm.setAttribute('target',reactElement.props.target);

    container.appendChild(domElm);
    */

    const domElm = document.createElement(reactElement.type);
    domElm.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        domElm.setAttribute(prop , reactElement.props[prop]);
    }

    container.appendChild(domElm);
}

const reactElm = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : "Click here to visit Google"
}

const reactElm2 = {
    type : 'h1',
    props : {
        style : "background : red ; color : white ; text-align : center;"
    },
    children : "This is Abhishek React"
}

const container = document.getElementById('root');

customRender(reactElm2,container);
customRender(reactElm,container);