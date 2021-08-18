import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// --------------------------------------------------------------------------------
// const rootDiv = document.getElementById('root');
// //rootDiv.innerHTML = `<p>Hellow</p>`;
// const p = document.createElement('p');
// p.innerHTML = 'Hello';
// rootDiv.appendChild(p);

// THis below equals the above
//const rootDiv = document.getElementById('root');
// ReactDOM.render(
//   <div>
//     <p>Hellow</p>
//   </div>,
//   rootDiv
// )
// --------------------------------------------------------------------------------

// const rootDiv = document.getElementById('root');
// const currentTime = new Date().toLocaleTimeString();

// const greeting = (
//   <div>
//   <p>Hello, world</p>
//   <p>{`hello ${prompt('What is your name')}`}</p>
//   <p>{currentTime}</p>
// </div>
// )
// ReactDOM.render(
//   greeting,
//   rootDiv
// )
// --------------------------------------------------------------------------------

// const rootDiv = document.getElementById('root');
// const currentTime = new Date().toLocaleTimeString();
// const greetingText = <p>Hello World</p>
// const time = <p>{new Date().toLocaleTimeString()}</p>

// const greeting = (
//   <div>
//   {greetingText}
//   {time}
//   </div>
// )
// ReactDOM.render(
//   greeting,
//   rootDiv
// )
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// 
// const greeting = (name) => (<p>Hellow, {name}</p>)
// ReactDOM.render(
//   <React.StrictMode>
//     {greeting('John')}
//     {greeting('Steph')}
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// --------------------------------------------------------------------------------
// 
// const Greeting = () => (<p>Hellow, me</p>)
// ReactDOM.render(
//   <React.StrictMode>
//     <Greeting />
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// --------------------------------------------------------------------------------
// 
// const Greeting = (props) => (<p>Hellow, {props.name}</p>)
// ReactDOM.render(
//   <React.StrictMode>
//     <Greeting name='Stephanie'/>
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// --------------------------------------------------------------------------------
//
// const Message = (props) => <p>Hellow, {props.name}</p>
// const Time = () => <p>{new Date().toLocaleTimeString()}</p>

// const Greeting = (props) => (
//   <div>
//     <Message name={props.name} />
//     <Time />
//   </div>
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Greeting name='Stephanie'/>
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// --------------------------------------------------------------------------------
//
// const Message = (props) => <p>Hellow, {props.name}</p>
// const Time = (props) => <p>{props.hours} : {props.mins} : {props.sec}</p>

// const Greeting = (props) => {
//     const time = props.time.split(':')
//   return (
//   <>
//     <Message name={props.name} />
//     <Time hours= {time[0]} mins={time[1]} secs={time[2]} />
//   </>
// )
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Greeting name='Stephanie' time='8:30:45'/>
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// --------------------------------------------------------------------------------
//
// const Message = (props) => <p style={{color: 'blue'}}>Hellow, {props.name}</p>
// const Time = (props) => <p style={{backgroundColor: 'red'}}>{props.hours} : {props.mins} : {props.sec}</p>
// const Message = (props) => <p style={{color: 'blue'}}>Hellow, {props.name}</p>
// const Time = (props) => <p style={{backgroundColor: 'red'}}>{props.hours} : {props.mins} : {props.sec}</p>

const messageStyle = {
  color: 'blue',
  backgroundColor: 'lightgray'
}
const timeStyle = {
  backgroundColor: 'lightcoral'
}

// added .limegreen to css 

const Message = (props) => <p style={messageStyle}>Hellow, {props.name}</p>
const Time = (props) => <p style={timeStyle}>{props.hours} : {props.mins} : {props.sec}</p>

// const Greeting = (props) => {
//     const time = props.time.split(':')
//   return (
//   <>
//     <Message name={props.name} />
//     <Time hours= {time[0]} mins={time[1]} secs={time[2]} />
//     {props.children}
//   </>
// )
// }

const Greeting = (props) => {
  const time = props.time.split(':')
return (
<div className='limegreen'>
  <Message name={props.name} />
  <Time hours= {time[0]} mins={time[1]} secs={time[2]} />
  {props.children}
</div>
)
}

ReactDOM.render(
  <React.StrictMode>
    <Greeting name='Stephanie' time='8:30:45'>
      <p>testing</p>
      </Greeting>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// --------------------------------------------------------------------------------
// original stuff
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
