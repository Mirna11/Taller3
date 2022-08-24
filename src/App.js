import './App.css';
import Perfil from './Components/Perfil';
import Imagen from './Components/Foto';
import Carrera from './Components/Carrera';
import Skills from './Components/Skill';


function App() {
  return (
    <div className="App">
      <Perfil></Perfil>
      <Imagen></Imagen>
      <Carrera></Carrera>
      <Skills></Skills>
    </div>
  );
}

export default App;
