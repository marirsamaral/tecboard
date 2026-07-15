import './formulario-de-evento.estilos.css';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";


export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
       Preencha para criar um evento
      </TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label
          htmlFor="nome">
          Qual o nome do evento?
          </Label>
        <CampoDeEntrada type="text" id="nome" 
          placeholder='Digite o nome do evento'
          name="nomeEvento"/>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label
           htmlFor="data-evento">
           Data do evento
          </Label>
        <CampoDeEntrada type="date" id="data-evento" 
          name="data-evento"/>
        </CampoDeFormulario> 
      </div>
      
    </form>
  )
}