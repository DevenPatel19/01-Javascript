# Javascript v23.0 Notes

## Node

### Intro to Node

-Introduction to Node.js
Node.js is a powerful and flexible JavaScript interpreter, capable of letting us run JavaScript code free from our browser, using our computer's native hardware. Using Chrome's V8 engine, we can do everything from running JavaScript files directly from the terminal, to traversing local files, to even spinning up a web server!

-A note before we get started:
As you progress through the platform, you’ll be seeing snippets of code that will help you complete the assignments. However, you won’t get everything you need on the platform, and that’s intentional. A successful web developer must be able to solve problems with incomplete information. For early assignments, we’ll give you some hints as to what you might be missing. For the later challenges you’ll have to figure these unknowns out for yourself. Embrace this – it’s integral to the art of programming.

### Installation

-First, visit [http://nodejs.org/] and download the long term stable installation, or LTS. Once you’ve opened the file and completed the installation process, let’s check out our awesome new tool:

Using your terminal, check the version by typing:

`node -v`

This should print your current version, letting you know that node has installed correctly. It should also match the LTS version.

Let’s actually enter our own JavaScript environment and declare variables from the comfort of our own terminal.

`node`

You should have noticed your command prompt may have changed from $ to >. That means whatever we write will be interpreted as JavaScript. (To exit this environment you can just type ctrl C twice or .exit once.)

Let’s write some code:

`console.log('hello');`

Did you see the following output?

`hello`
`undefined`

Wahoo!

One additional note before we move ahead. We just typed node to enter a JavaScript environment, but what if we wanted the node to run a file full of code that we wrote in our text editor (which is a bit more efficient than writing directly in the console)? Just append your file name to the node command, like so: node your_file_name.js.

For macs: If the above commands didn’t work (especially which node), it’s probably your Mac trying to protect you. Use the following command to give yourself the ability to write files into usr/local/:

`sudo chown -R $(whoami) /usr/local/copy`

This will prompt you for your password. After you succeed, try reinstalling node!

To exit from node console, press Ctr+C or type .exit .

### Nodemon

`npm install nodeman -g`

-nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected. nodemon does not require any additional changes to your code or method of development.Jul 9, 2023

- To engage nodemon type the following:
  `nodemon filename.js`

'Ctrl-C' to exit

### Running JavaScript

#### Interpreted Language

-If you need to write and test just a few lines of JS without making a whole new file, then the browsers console is a good idea. This can be great for algorithm challenges! As there are multiple interpreters online, each will have its own interface, just make sure you have an area to write code and a console to read outputs.

#### Browser Console

-We can also run JS right out of the browser console. This can be useful for debugging, however it will only interpret JS one input at a time, rather than running an entire file.

#### Other Resources

[https://jsfiddle.net/]
[http://codepen.io/]
[http://pythontutor.com/visualize.html#mode=edit]

***

## Fundamentals

### Overview

-MERN technology stack, the language behind it all - JavaScript (also known as "The Language of the Web").

#### "By itself" You ask?

-JavaScript's evolution has consisted of far more than its usage in web pages. In fact, powerful complementary tools, such as the libraries and frameworks that comprise the MERN stack's acronym, have allowed JavaScript to be used in server-side programming, desktop and mobile applications, game development, and even machine learning and artificial intelligence!

As exciting as the possibilities sound, we must work towards such heights - starting at the beginning with the fundamentals of JavaScript.

#### Why JS?

-Many of the things we've seen on the web are powered by JavaScript.
(i.e. Google Auto-complete, animations, dynamic transitions, single-page web applications, in-browser chat apps, loading screens, and drop down menus)

-JavaScript. It's part of the big three client technologies

#### The Big Three

-HTML represents the content and the structure. We can think of this as the skeleton of a webpage. Elements are first placed into the Document Object Model, or the DOM, so that data can be represented on the browser.

-CSS represents the style and positioning of our HTML elements. We can think of this as the skin and clothes, the visual side of our website. Things like color, font, sizing, and positioning are all controlled in part by CSS.

-ipt is the action. We can think of it as the behavior of our website. You can build beautiful static websites with HTML & CSS, but they're not actually functional until we add logic. JS allows us to interact with our HTML & CSS by dynamically manipulating the DOM.

#### Features

-JavaScript is an interpreted language. At runtime, an interpreter parses the JavaScript we wrote and turns it into machine code for the computer. This is contrary to a compiled language, which compiles our code into a machine language prior to runtime. The most common of all JavaScript interpreters are built into web browsers, with Chrome using the V8 Engine, and Firefox using SpiderMonkey. These interpreters each have their own specific rules for how JavaScript should run and it should be noted that not all interpreters have identical behavior!

-JavaScript is an event-driven programming language. When we think of it as the layer of behavior between the UI and the back-end, this makes sense. Creating a `<button>` in HTML does not mean that button does anything! However, clicking that button is an event that JavaScript can listen for. JavaScript comes equipped with all manner of UI events, from hovering your mouse over a specific HTML element, to scrolling, to clicking, to submitting forms. Now consider that the HTTP request and response cycle is also based around user-driven events, you might notice how these technologies overlap and work together!

-JavaScript is run on a single thread. Putting it simply, JavaScript runs one command at a time, never performing operations concurrently. This raises some interesting questions. If JavaScript only ever runs one command at a time, how does it listen for events? The answer is the event loop, a specialized queue that allows JavaScript to dynamically add new operations when the events happen, even if it is already performing operations. This is why JavaScript is sometimes (and perhaps erroneously) referred to as 'non-blocking'.

***

### ECMAScript

***

### Debugging

***

### Scope

***

### Hoisting

***

### Destructuring

***

### Rest/Spread

***

### Arrow Fucntions

***

### Ternary Operator

***

### The Big O

***

### Quick start _ Introduction
