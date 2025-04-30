# node.js implementation examples.

This repository is created for implementing node.js features, as well as a guide for me in the future.

<pre>
How to run app?
- To run node, use node <filename>, ei. node app
</pre>

<pre>
node.js is a runtime enviroment from which you can run JS on a standalone machine.
 - You can build standalone applications.
 - Can we use node.js for building mobile apps? YES!
  - Android, iOS.
 - a JS engine which runs your JS on a physical machine.
 - HTTP Module?
   - Server side component.
 - JS doesn't have the concept of multiple threads, but how do we achieve handling multiple request?
    - Recommended for I/O intensive work.
    - Not recommeded for CPU intensive.
    - Single thread application.
        - Non-blocking I/O.
            - Thread passes the load to its workers.
        - Asynchronous.
            - Uses callbacks.
- libuv (Used by node.js)
 - build in C language.
  - uses system kernel.
  - has multiple threads.
- Uses modularity
 - Each file can be modularize and imported to other module.
</pre>

<pre>
JS
 - Website
 - Web Browser
 - Desktop
 - Mobile App
 - Server
</pre>

<pre>
Node.js
 - Backend app
</pre>

<pre>
Express.js
 - Framework for developing web applications.
</pre>

<pre>
npm
 - Node Package Manager
 - uses V8 engine.
 - syntax examples:
  - npm -v < package-name >
 - @DevDependecies
  - npm i -D nodemon
</pre>

<pre>
MERN
 - mongoDB
 - express.js
 - ReactJS
 - node.js
</pre>

<pre>
MEAN
 - mongoDB
 - express.js
 - Angular
 - node.js
 </pre>