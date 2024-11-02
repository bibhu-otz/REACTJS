# Chapter 1: Introduction to React and JSX

**01** What is React? Why do we use it over other libraries or frameworks? 

**02** Explain the concept of Virtual DOM and how it enhances performance in React.

**03** What are the advantages of using JSX in React? Can React work without JSX?

**05** Find the output:
``` jsx
const element = <h1>{10 + 20}</h1>;
console.log(element);
```
**06** How does React differentiate between JSX and HTML elements in the code?

**07** What is the purpose of "React.createElement()"? Explain the output of this function.

**08** How are comments written in JSX?

**09** Write a simple "Hello World" React component using both function and class components.

**10** Can JSX elements have more than one root element? How can we solve this issue?

**11** What does the "key" prop do in JSX?

**12** Can you embed JavaScript expressions in JSX? Provide an example.

**13** What is the difference between Babel and React?

**14** What does the following JSX expression output? Explain why:
``` jsx
const greeting = <h1>Good {new Date().getHours() > 12 ? 'Afternoon' : 'Morning'}</h1>;
```
**15** Can you directly apply styles in JSX? Demonstrate it.

**16** What happens if you omit the className attribute on an element in JSX?

**17** Explain how JSX is converted to JavaScript under the hood.

**18** Is JSX type-safe? How does it handle incorrect element properties?

**19** Write a React component that renders a list of items using JSX and map().

**20** How are attributes written in JSX? Show how JSX attributes map to HTML.

**21** Explain the purpose of using self-closing tags in JSX.

# Chapter 2: Components and Props

**01** What are React components? Differentiate between functional and class components.

**02** How do you pass props to a child component? Write a code example.

**03** Scenario: If a component’s state needs to be shared between two sibling components, how would you achieve that?

**04** What is destructuring in props? Provide an example where it's useful.

**05** Write a React component that conditionally renders different content based on props.

**06** Can a React component return multiple elements? How?

**07** Find the output:
``` jsx
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
<Greeting name={null} />
```
**08** How do you define default props for a component? Provide an example.

**09** Explain the PropTypes utility and how it can be used to enforce prop types.

**10** What is the difference between props and state in React?

**11** Scenario: How would you handle props when a deeply nested component needs them?

**12** Write a component that updates dynamically based on props and re-renders when they change.

**13** How would you handle multiple children passed as props in a component?

**14** Can you pass functions as props? Demonstrate with an example.

**15** Explain the concept of "lifting state up" in React. Provide an example.

**16** Find the output:

```jsx
const Button = ({ label }) => <button>{label || "Click me"}</button>;
```
**17** Can props be mutated inside a child component? Why or why not?

**18** What happens when you pass an object as a prop to a component?

**19** Can you pass JSX elements as props? Demonstrate this with a component example.

**20** Explain how children props work and how they differ from regular props.

# Chapter 3: State and Lifecycle

**01** What is state in React? How is it different from props?

**02** How do you initialize the state in a class component?

**03** Write an example to show how to useState in functional components.

**04** What are React lifecycle methods? Name the key lifecycle methods in class components.

**05** Scenario: If a component needs to fetch data after it’s mounted, which lifecycle method would you use?

**06** Find the output:

```jsx
    class Counter extends React.Component {
    state = { count: 1 };
    increment = () => this.setState({ count: this.state.count + 1 });
    render() {
        return <button onClick={this.increment}>{this.state.count}</button>;
    }
    }
```

**07** How would you implement the useEffect hook to mimic componentDidMount and componentWillUnmount behavior?

**08** Can state changes be batched in React? Explain with an example.

**09** Scenario: What happens when you update the state twice in a row with the same value?

**10** Find the output:
``` jsx
    const [state, setState] = useState(0);
    useEffect(() => {
    setState(state + 1);
    }, [state]);
```
**11** How does useEffect handle dependencies? What happens if you provide an empty array?

**12** What’s the difference between useLayoutEffect and useEffect?

**13** Scenario: How would you update state based on a previous value?

**14** How would you implement componentDidCatch to handle errors?

**15** Can you manage multiple state variables in a single functional component? Provide an example.
**16** How does setState work in class components? Is it synchronous or asynchronous?

**17** Scenario: What happens if you don’t clean up after an effect? Demonstrate with a code example.

**18** How can you optimize re-renders when state changes in a React component?

**19** Find the output:
``` jsx
    const [name, setName] = useState("John");
    setTimeout(() => setName("Doe"), 2000);
```
**20** What is the React Hooks rule regarding the order of useState and useEffect calls?