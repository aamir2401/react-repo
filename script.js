// const heading = document.createElement("h1")
// heading.innerHTML = "Hello from javaScript";
// const root = document.getElementById("root")
// root.appendChild(heading)4

// const heading = React.createElement("h1", {}, "Hello from React!");
// const root = ReactDom.createRoot(document.getElementById("root"));
// console.log(heading)
// ReactDom.render(heading,root)

{/* <div id="parent">
    <div id="child">
        <h1>hello</h1>
    </div>
</div> */}


const heading = React.createElement("div",{id:'parent'}, React.createElement("div", {id:'child'},React.createElement("h1", {}, "hello from React")))
console.log(heading)
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(heading)