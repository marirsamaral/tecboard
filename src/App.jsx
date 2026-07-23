import './App.css'
import { useState } from 'react';
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

  const [eventos, setEventos] = useState ( [
  {
    capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front-end',
  }
  ])

function adicionarEvento (evento) {
  setEventos([...eventos, evento])
}


  return (

    <main>
      <header>
        <img src="/logo.png" alt="Logo do TechBoard" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}/>

      <section className="container">
        {temas.map(function (tema){
          if (!eventos.some(function(evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }
        return (
        <section key={tema.id}>
          <Tema tema={tema} />

            <div className="eventos">
            {eventos.filter(function (evento) {
              return evento.tema.id == tema.id
            })
            
            .map(function (evento, index) {
            return (
            <CardEvento evento={evento} key={index} />  
            );
            })}
            </div>

          
        </section>
        
        )
      })}

      </section>
    
    </main>
  )
}

export default App
