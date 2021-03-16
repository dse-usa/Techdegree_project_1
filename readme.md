Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By David Evans 3/15/2021

This project is the first assignment in the Treehoues FSJS Techdegree. The goal is to javaScript code to randomly get a quote and its properties from an array of quotes and display the information in index.html. The CSS files and index.html where provided by Treehouse as was the JavaScript code for the listener for the "Show another quote button".  

---
## Requirements
My biggest challenge as a new developer was understanding that in the course workspace Treehouse is providing the webserver. On my laptop I did not have a webserver so I kept getting a "document not defined error" in the console when trying to execute the code (document.getElementById("quote-box").innerHTML = `${html}`;) to insert the JavaScript string into the Index.html file. After a week or so I reached out to the Slack community and @Dodders responded with "The document object is how you interact with the HTML that is loaded in the browser. It sounds like you have no browser open and are trying to run your app only in the terminal?
I suggest you add this plugin to vs code: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer".   I used YouTube to get a starter on the extension and it work like a charm. 

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

    $node --version
    v14.16.0

---


## Running the project

    Right-click index.html and select Open in Live Server



