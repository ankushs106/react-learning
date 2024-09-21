
// Used for creating an element {}is used for adding attributes to the element 
//javascript object
const heading = React.createElement("h1",{id:"heading", className:"h2-class"},"Hello Worldd from React");
console.log(heading);
// Used for creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
//putting the element which we created inside the root . Converting the heading object in html and putting it into root 
root.render(heading);

const parent = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id:"child"}, 
[React.createElement("h1",{id:"heading1", className:"h1-class"},"Hello Worldd from"),
React.createElement("h4",{id:"heading4", className:"h1-class"},"Hello Worldd ")]),
);

