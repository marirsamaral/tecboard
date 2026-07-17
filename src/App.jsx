import './App.css'
import { Banner } from './componentes/Banner'
import {FormularioDeEvento} from './componentes/FormularioDeEvento'
import {Tema} from './componentes/Temas'
import {CardEvento} from './componentes/CardEvento'


function App() {

const temas = [
  {
    id: 1,
    nome: 'Front-end'
  },

   {
    id: 2,
    nome: 'Back-end'
  },

   {
    id: 3,
    nome: 'Devops'
  },

   {
    id: 4,
    nome: 'Inteligencia Artificial'
  },

   {
    id: 5,
    nome: 'Data Science'
  },

   {
    id: 6,
    nome: 'Cloud'
  },
]

const eventos = [
  {
    capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front-end',
  }
]

  return (

    <main>
      <header>
        <img src="/logo.png" alt="Logo do TechBoard" />
      </header>
      <Banner />
      <FormularioDeEvento />
      {temas.map(function (item){
        return (
        <section key={item.id}>
          <Tema tema={item} />
          <CardEvento evento={eventos[0]} />
        </section>
        )
      })}
    
    </main>
  )
}

export default App
