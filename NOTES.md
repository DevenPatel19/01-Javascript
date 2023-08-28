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

#### ECMAScript & ES6

-This next section is a primer on the background of JavaScript.

#### What’s in a name?

-standing how the language came about will better your growth as a JS developer.After the first beta release, the name was changed to LiveScript. Not too long after, a certain browser vendor called Netscape decided to again rename the language to JavaScript, feeding off of the success of the popular language Java

-we’re going to need to understand how the language is standardized.

-JavaScript wasn’t always called JavaScript.Originally, it was called Mocha during development.

#### Enter ECMAScript

-JS is the de facto front end scripting language of the internet

-JavaScript needed a formal process to further the language without alienating browser vendors, users, or developers. The end result is a sort of ‘master reference’ that the JS interpreters should be understanding JavaScript as. This is our standardization

-ECMA, or European Computer Manufacturer’s Association. This standard is called ECMAScript

-Brendon Eich, the creator of JavaScript, has commented that “[it] was always an unwanted trade name that sounds like a skin disease.”

-ECMAScript is the standardization of JavaScript and JavaScript is the implementation of the ECMA StandardJavaScript you’ve been exposed to is a version of the standard called ES5, standardized in 2009 and sometimes called ECMAScript 5.

#### ES6 and Beyond

-ES2015, or ES6, is the newest standard. It is a superset of ES5, meaning it contains all the features of ES5, plus all the new additions of ES6. rarely deprecating features

#### Takeaways

-ES6 is a superset of ES5. Because ES6 is not a full language in itself, we must learn both.
-The vast majority of existing JavaScript is still ES5, including libraries, legacy code bases, and examples you encounter on the web.
-Many of ES6's most important features are syntactic sugar. Not necessarily needed, but they make the language sweeter to write.
-JavaScript is the language, ECMAScript is the standard.
-In the following chapters, we will be learning ES5 and ES6 in parallel, with the new ES6 features clearly marked.

***

### Debugging

#### Introduction

-Sooner or later, your code is going to break

-JavaScript has a lot of tools to make it easier for us to hunt down our bugs.

-JavaScript runs in two parts. First it gets parsed to make sure it's viable JavaScript, then the code is actually run. Typically, errors follow this same format. We have syntax errors and runtime errors.

#### Syntax Errors

-Consider the below code. What do we log to the console?

`let x = 1;`
`let y = 2;`
`let z == 3;`
`console.log(x + x);`
`console.log(y - z);`
`console.log(z * x);`

-Trick question! This is one of the most common types of syntax errors: Unexpected token.
If you look closely at z,
we have a double equal sign.
The parser threw an Unexpected token error because == is simply not expected after let z.

-Syntax Errors happen when the parser finds invalid JavaScript, without any code ever being run

-In the above example, the console.logs never fired because the syntax error killed our app before it even started!

-Syntax errors show the line the parser errored on. This means your issue happened somewhere before that line and not necessarily that specific line

#### Runtime Errors

-runtime error is what happens if your code successfully parses and the error happens while the program is running. we just call these bugs
Examples of runtime errors could be faulty logic or improperly written code

-When your code doesn't behave in the way you expected, there are many techniques to finding the root of the problem. Ask yourself, what was the most recent line of code you added before your program started to fail? How many lines of code did you write between tests? If it was anywhere above six or seven lines, you might be coding too much and running your code too little. Sometimes you need to go back to the very start and ask what seems like very basic questions, such as, "What are the steps needed to do what I want to do?"

At the end of the day, remember: 100% of all bugs you encounter were created by a developer. Creating bugs doesn't make you a bad developer, it makes you a developer!

#### Recap

-When debugging your JS, always confirm that you have no syntax errors first. Your code will not run until those syntax errors are fixed.
-When hunting syntax errors, typically the actual problem is before the line that errored. Work backwards from there.
-Console.log everything! Often times the biggest errors come from faulty assumptions. That variable you thought was a string was actually an array of strings, which can completely change your logic.
-Run your code early and often, especially at first. If you're writing 20 or 30 lines of JavaScript at a time before seeing if any of it works, you're coding too much! The stronger you get with JS, the more assumptions you can make, but at first assume nothing!

***

### Scope

-Scope is the visibility, or accessibility of information, such as variables and functions, to a particular section of code
JavaScript is function scoped and traditionally has two types of scope: global and local. New scopes are created by defining functions.

#### Global Scope

-Every JavaScript application has a global scope. By definition that makes it omnipresent, which means that any variables or functions defined within are always available to every aspect of your application

#### Local Scope

-Local scope, in contrast, has much narrower program visibility. It is localized to the particular function in which that information is defined.

#### Identifying Scope

-Consider the following, can you identify the different scopes in the provided sample

`var beatles = ['Paul', 'George', 'John', 'Ringo'];`
`function printNames(names) {`
`function actuallyPrintingNames() {`
`for (var index = 0; index < names.length; index++) {`
`var name = names[index];`
``
`console.log(name + ' was found at index ' + index);`
`}`
`console.log('name and index after loop is ' + name + ':' + index);`
`}`
`actuallyPrintingNames();`
`}`
`printNames(beatles);`

-How many scopes were you able to identify? Remember that we always have a global scope, and each function will create a new scope, so we have three scopes in our sample

![Identified Scopes](/assets/img/identify-scopes.png "identified scopes")

-If you have a background in Java or C++ you may have noticed a curiosity that our for loop does not create a scope, and variables that are exclusive to it, name and index, are still available after completion. That's because JavaScript is function scoped, so any variables, no matter where they are defined, are available throughout the entire scope.

#### const & let

-With the release of ES2015 (ES6) we have two new ways to declare variables: const and let.
These new declarations give us the ability to scope information more precisely to individual sections of code, called block scoping. This gives us greater control over information visibility and allows us to reuse variable names in the same function, but different code blocks, without conflict. A code block is defined by opening and closing curly braces, {}.

While both const and let are block scoped there are some differences we need to understand. let allows for reassignment of our declared variables content and does not require a value upon declaration. const, on the other hand, must assign a value at creation and that value may not change for the life of the variable. It is immutable.

With that knowledge let us refactor the previous example to use our new variable declarations. What should be constant? What information changes over time? I might posit that our names array should never assume a different array, so we should certainly use const.

`const beatles = ['Paul', 'George', 'John', 'Ringo'];`

-That was easy, but how about our loop? As with most answers concerning programming: it depends. Do we want name and index information available after our loop, or should it cease to exist? Let's consider both scenarios. Assume for the moment that we really like our final console.log we would refactor to this:

`function actuallyPrintingNames() {
  let index = 0;
  let name;
  for (; index < names.length; index++) {
    name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}
`

-Declaring name and index above our loop allows those variables to exist throughout the actuallyPrintingNames function, similar to if we had declared with var. If you find the latter console.log to be superfluous you might refactor as such:

`function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}
`

-Running our code will now result in an error: ReferenceError: name is not defined because name is only available inside our for loop. Removing it from the console.log and running again will result in the same error but referencing index. Even though it appears index is defined outside the loop block, {}, it is still part of the overall construct of our loop and included in its scope. Delete the console.log statement. One last modification before moving on: name doesn't change during iteration, so it needs to be a const.

`const name = names[index];`

-You might think this change doesn't make sense, because, while name doesn't change on one iteration, it will certainly change on the next. That's true, but the nature of block scoping creates an 'environment' for that iteration only and on the next a whole new environment will exist for the block. Our final refactored code should look like this:

`const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
`

-We are able to mix usage of var with const and let, but now that we have a better understanding of these newer declarations we should avoid using var whenever possible.

***

### Hoisting

#### Introduction to hoisting

-When we send JavaScript to the browser to run, the interpreter breaks that down into two steps.
  -First, it parses the code, and ensures it's all viable JavaScript friendly syntax.
  -Second, it runs the code

#### Variable Hoisting with Var

-What happens when we use a variable we haven't created?

`console.log(magicalUnicorns);`

-ReferenceError: magicalUnicorns is not defined. This is an example of a parsing error: Our code never ran, it stopped right there as soon as the parser noticed we were trying to use an uninitialized variable. Let's see how the var keyword affects this:

`console.log(magicalUnicorns);`
`var magicalUnicorns = "awesome";`

-If you ran the above code, you might have noticed something odd. There was no ReferenceError. Instead our console.log output undefined. Something else must be going on here. What's really happening is our var variable is being hoisted.

In JavaScript, variable declarations are hoisted to the top of their scope. Here's how the interpreter actually reads the previous example:-

`var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
console.log(magicalUnicorns); // we log it as undefined
magicalUnicorns = "awesome"; // the assignment stays exactly where it was`

-In the above example, let will produce ReferenceErrors if we try to call the variable this way.

#### Hoisting Functions

-We discuss earlier that function calls create their own scope. How do you think the next snippet will run?

`var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);
`

-When you run this code, what are your console logs and in what order? The answer might be a surprise. Let's break it down.

`var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of it's scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo
`

-There are two takeaways here: Functions act like a cage, preventing declarations from being hoisted out of them. Another thing to remember is that standalone functions also get hoisted. Let's see if you can predict the output of this next example without running it:

`magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");
`

-Which console log fires first? Neither! We get the error 'magicalUnicorns is not a function'. Why? The variable magicalUnicorns got hoisted to the top, and we tried to invoke it before we assigned the function to it.

#### Key Rules of Hoisting

• Variable declarations (var) rise to the top of their scope like hot air balloons.

• Functions create their own scope and act like cages, preventing declarations from rising out.

• Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

• Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

***

### Destructuring

#### What is Destructuring

-destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables

***

### Rest/Spread

***

### Arrow Functions

***

### Ternary Operator

***

### The Big O

***

### Quick start _ Introduction
