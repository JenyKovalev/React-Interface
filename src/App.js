// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit dd <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//        {/* <h1>dspo</h1> */}
//     </div>
//   );
// }

const Header = () => {
  return <h1> Heso world </h1>
}
const Field = () => {
  const rr = "Enter here"
  return <input type="" placeholder={rr}/>
}
const Btn = () => {
  const text = "log in"
  return <button>{text}</button>
}
const Apis = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}


export default Apis;
