const http = require("http")

const app = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write(JSON.stringify({
            message: `This is the Home page. 2 routes have been created: page1 and page2. Please type '/page1' & '/page2' in the URL.`
        }))
        response.end();
    }
    else if(request.url === '/page1'){
        response.write(JSON.stringify({Question: "What is Node.js? Explain."}))
        response.end();
    }
    else if(request.url === '/page2'){
        response.write(JSON.stringify({
            Answer:
            `Node is a cross-platform, open-source JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. Node uses JavaScript on the server.`}))
        response.end();
    }
})

app.listen(5000, () => {
    console.log("Server is running")
})