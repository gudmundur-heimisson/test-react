import Clock from './clock.jsx'
import NameForm from './nameform.jsx'
import ReactDOM from 'react-dom';

function App() {
  return (
   <div>
      <Clock name="Gummi" />
      <NameForm />
   </div>
  );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

