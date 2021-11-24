#### Give an example of a project where you used React.
##### Answer:

* Increased application performance via the Virtual DOM model
* Improved coding efficiency with JSX
* The ability to reuse components across multiple projects
* Flexibility and extensibility through add-on tools provided by React’s open source community

* Flexibility: it allows developers to build upon any desired technology stack. Therefore, unlike other frameworks, developers are free of restrictions to rigid architectures and workflows.
* Performance optimization: declarative programming enhances performance by creating a virtual DOM by allowing the developer to write HTML directly into JavaScript files. The virtual DOM is much easier to manipulate than the real DOM and so that improves efficiency. Answers to ReactJS coding interview questions such as this should explain how it enables building rich user interfaces for mobile and web applications.


####  Explain the differences between React Hooks and React classes.
##### Answer:
* When using setState() in class components, always the state variable is an object. Where as, the state variable in hooks can be of any type like number, string, boolean, object or array.

* When state variable is an object, setState() in class components automatically merges the new value to the state object. But in case of setter function in useState(), we need to explicitly merge the updated object property using spread operator.




#### How is a controlled component different from an uncontrolled one?
##### Answer:


* <b>Uncontrolled component:</b>
* An <b>Uncontrolled Component</b> is one that stores and maintains its own state internally. A ref is used to find its current value when you need it.

Similar to the traditional HTML form inputs, the uncontrolled component can be written using a ref to get form values from the DOM. Thus there is no need to write an event handler for every state update and the HTML elements maintain their own state that will be updated when the input value changes.

* <b>Controlled Component:</b> 

Unlike the uncontrolled component<, the input form element in the controlled component is handled by the component rather than the DOM. It takes its current value through props. The changes are notified through callbacks.

* A <b>controlled</b> input accepts its current value as a prop, as well as a callback to change that value. You could say it's a more “React way” of approaching this (which doesn't mean you should always use it). It takes in the new value of the input and sets it in the state.


#### CONTROLLED COMPONENT	
* Does not maintain its internal state.
* Data is controlled by the parent component.
* Accepts its current value as a prop.
* Allows validation control.
* Better control over the form elements and data.

#### A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.

* For example, to write all the names in uppercase letters, we use handleChange as below,
```
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()})
}
```


##### The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

* In the below UserProfile component, the name input is accessed using ref.
```
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.input = React.createRef()
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {'Name:'}
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

```
* In most cases, it's recommend to use controlled components to implement forms.

#### UNCONTROLLED COMPONENT
*	Maintains its internal state.
*	Data is controlled by the DOM itself.
*	Uses a ref for their current values.
*	Does not allow validation control.
*	Limited control over the form elements and data.


#### Briefly explain how this.setState works.
##### Answer:

##### The setState() Method
* setState – return a function to update a stateful value
* State can be updated in response to event handlers, server responses, or prop changes. This is done using the setState()method. 
* The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.

* Always use the setState() method to change the state object, since it will ensure that the component knows it’s been updated and calls the render() method.

* Now that we are familiar with the concept of a state in React, let’s have a look at how it is implemented in a React web application.

```
class Bike extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      make: "Yamaha",
      model: "R15",
      color: "blue"
    };
  }
  changeBikeColor = () => {
    this.setState({color: "black"});
  }
  render() {
    return (
      <div>
        <h2>My {this.state.make}</h2>
        <p>
          It is a {this.state.color}
          {this.state.model}.
        </p>
        <button
          type="button"
          onClick={this.changeBikeColor}
        >Change color</button>
        </div>
    );
  }
}
```


#### How do you convert a function to a class in React?
##### Answer:

* If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component.

* Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components.
* Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these both components differ.
* On the following basis let’s compare functional and class components:

* Decalaration:

Functional components are nothing but JavaScript functions and therefore can be declared using an arrow function or the function keyword:
```
function card(props){
 return(
   <div className="main-container">
     <h2>Title of the card</h2>
   </div>
 )
}

const card = (props) =>{
 return(
   <div className="main-container">
     <h2>Title of the card</h2>
   </div>
 )
}
```

### Class components on the other hand, are declared using the ES6 class:
```
class Card extends React.Component{
 constructor(props){
   super(props);
 }

 render(){
   return(
     <div className="main-container">
       <h2>Title of the card</h2>
     </div>
   )
 }
}
```
* Class components allows you to use additional features such as local state and lifecycle hooks. Also, to enable your component to have direct access to your store and thus holds state.

* When your component just receives props and renders them to the page, this is a ‘stateless component’, for which a pure function can be used. These are also called dumb components or presentational components.

#### What are the benefits of composition over inheritance in React?
##### Answer:


* **[Good resources to look](https://www.blog.duomly.com/composition-vs-inheritance-in-react/)**



#### What are your favorite React component libraries and why?
##### Answer:

#####  Material-UI
* Material-UI ranks among the most popular React UI component libraries.
*A wide range of helpful components are available, like app bars, auto complete, badges, buttons, cards, dialog boxes, icons, menus, sliders and more.

#### Semantic UI React
* Semantic UI uses human-friendly HTML for it’s development framework, and has integrations with React, Angular, Meteor, Ember and many other frameworks.
* It allows you to load any Semantic UI CSS theme on top of your Semantic UI React app.


#### React Bootstrap
* React Bootstrap is a UI kit that retains it’s Bootstrap core.
* In order to give you more control over the form and function of each component, it replaces Bootstrap’s JavaScript with React.
* Each component is built to be easily accessible, important for front-end framework building.

#### What's your approach to data fetching server-side?
##### Answer:

* **[Good resources to look](https://dev.to/fenok/client-and-server-side-data-fetching-in-react-4o7d)**



#### How do you test the apps you've built with React?
##### Answer:

* You can test React components similar to testing other JavaScript code.

* There are a few ways to test React components. Broadly, they divide into two categories:

* Rendering component trees in a simplified test environment and asserting on their output.
Running a complete app in a realistic browser environment (also known as “end-to-end” tests).

### Recommended Tools:

* Jest is a JavaScript test runner that lets you access the DOM via jsdom. While jsdom is only an approximation of how the browser works, it is often good enough for testing React components. Jest provides a great iteration speed combined with powerful features like mocking modules and timers so you can have more control over how the code executes.

* React Testing Library is a set of helpers that let you test React components without relying on their implementation details. This approach makes refactoring a breeze and also nudges you towards best practices for accessibility. Although it doesn’t provide a way to “shallowly” render a component without its children, a test runner like Jest lets you do this by mocking.






#### How do you use React without using JSX?
##### Answer:

* JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
* **[Good resources to look](https://reactjs.org/docs/react-without-jsx.html)**




#### What's wrong with copying props to state?
##### Answer:


* **[Good resources to look](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)**


* **[Good resources to look](https://stackoverflow.com/questions/40063468/react-component-initialize-state-from-propsl)**


#### When should you use React refs?
##### Answer:

* Refs are used to get reference to a DOM node or an instance of a component in React. Good examples of when to use refs are for managing focus/text selection, triggering imperative animations, or integrating with third-party DOM libraries. You should avoid using string refs and inline ref callbacks. Callback refs are advised by React.

* The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.



#### What is a higher-order component in React?
##### Answer:

* A higher-order component is a function that takes a component and returns a new component. HOC’s allow you to reuse code, logic and bootstrap abstraction. The most common is probably Redux’s connect function. Beyond simply sharing utility libraries and simple composition, HOCs are the best way to share behavior between React Components. If you find yourself writing a lot of code in different places that does the same thing, you may be able to refactor that code into a reusable HOC.

* Another one of the top React interview questions and answers, Higher-Order Components are used to add sophisticated functionalities to existing components. The purpose of the HOC technique, which is common in third-party React libraries, is to reuse component logic.

* Therefore, the use of every Higher-Order component function returns a new component. HOCs in React are related to higher-order functions in JavaScript. Higher-order components find implementation in Redux connect (which is a higher-order function), state abstraction, and so on.


