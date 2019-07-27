import React from "react";

interface AppProps {
  color?: string;
}

/* I realize I'm rambling a bit here, so let me just summarize:
 using the React.FC method will automate some of these checks to 
 make sure your component conforms to the rules of a component. 
Taking the method shown in the course is a more manual check of 
property by property to make sure our component is doing the
 right thing. */
const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};

export default App;
