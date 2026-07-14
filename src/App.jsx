import './App.css'

function TituloFormulario({ children }) {
  return (
  <h2>
    {children}
  </h2>
  )
}


function CampoDeFormulario({ children }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({children, htmlFor}){
  return (
    <label htmlFor={htmlFor}> 
      {children}
    </label>
  )
}

function CampoDeEntrada ({props}){
  return (
    <input {...props} />
  )
}


function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
       Preencha para criar um eventO
      </TituloFormulario>
      <CampoDeFormulario>
        <Label
         htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id="nome" 
        placeholder='Digite o nome do evento'
        name="nomeEvento"/>
      </CampoDeFormulario>
    </form>
  )
}


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
    </main>
  )
}

export default App
