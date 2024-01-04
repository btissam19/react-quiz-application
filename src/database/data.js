const Data = [
  {
    id: 1,
    question: "In React, what is JSX?",
    options: ['JavaScript XML', 'Java XML', 'JavaScript Extensible', 'JavaScript Syntax Extension'],
  },
  {
    id: 2,
    question: "What is the purpose of state in React?",
    options: ['To handle styling in components','To store and manage component Data', 'To define props for components', 'To manage routing in the application'],
  },
  {
    id: 3,
    question: "What lifecycle method is called after a component is rendered for the first time?",
    options: [ 'componentWillUnmount()', 'componentDidUpdate()', 'componentWillUpdate()','componentDidMount()'],
  },
  {
    id: 4,
    question: "What is the purpose of React Router?",
    options: ['To enable navigation in a React application', 'To manage state in a React application', 'To handle HTTP requests in a React application', 'To create animations in a React application'],
    correctAnswerIndex: 3,
  },
  {
    id: 5,
    question: "What is the significance of keys in React lists?",
    options: ['They help React identify which items have changed','They define the layout of the list items', 'They control the visibility of list items', 'They are used to apply styles to list items'],
  },
  {
    id: 6,
    question: "What is the purpose of the useEffect hook in React?",
    options: ['To perform side effects in function components', 'To handle asynchronous actions in class components', 'To define custom hooks in React', 'To manage component state'],
  },
  {
    id: 7,
    question: "What does the term 'controlled component' mean in React?",
    options: ['A component that is controlled by external libraries', 'A component that is not re-rendered during updates','A component that takes user input and manages it through state' ,'A component that is used for styling purposes only'],
  },
  {
    id: 8,
    question: "How can you pass data from a parent component to a child component in React?",
    options: ['Using the Redux state management', 'By directly modifying the child component state', 'Through local storage','Through props'],
  },
  {
    id: 9,
    question: "What is the purpose of the Context API in React?",
    options: ['To share state between components without passing props', 'To manage component lifecycle methods', 'To define global styles for the application', 'To handle routing in React applications'],
 
  },
  {
    id: 10,
    question: "What is React.memo used for?",
    options: ['To memoize functional components and prevent unnecessary re-renders', 'To create higher-order components', 'To handle asynchronous actions in React', 'To optimize the rendering performance of class components'],
  },
];
export default Data;

export const answers = [0, 1, 3, 0, 0, 0, 2, 0, 0, 0];





  