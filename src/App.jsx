import './App.css'
import {FormularioDeEvento} from './componentes/FormularioDeEvento'
import {Tema} from './componentes/Temas'

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

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo do TechBoard" />
      </header>
      <section>
        <img src="/banner.png" alt="Banner de tecnologia" />
      </section>
      <FormularioDeEvento />

      <section>
      <Tema tema={temas[0]} />
      </section>

      <section>
      <Tema tema={temas[1]} />
      </section>

      <section>
      <Tema tema={temas[2]} />
      </section>

      <section>
      <Tema tema={temas[3]} />
      </section>

      <section>
      <Tema tema={temas[4]} />
      </section>

      <section>
      <Tema tema={temas[5]} />
      </section>
    </main>
  )
}

export default App
