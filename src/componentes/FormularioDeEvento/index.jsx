import './formulario-de-evento.estilos.css';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { Lista } from '../Lista';

export function FormularioDeEvento({temas}) {
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
          htmlFor="capa">
          Qual o endereço da imagem de capa?
          </Label>
        <CampoDeEntrada type="text" id="capa" 
          placeholder='https://...'
          name="capa"/>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label
           htmlFor="data-evento">
           Data do evento
          </Label>
        <CampoDeEntrada type="date" id="data-evento" 
          name="data-evento"/>
        </CampoDeFormulario> 

        <CampoDeFormulario>
          <Label
          htmlFor="tema">
          Tema do evento
          </Label>
          <Lista id="tema" name="tema" itens={temas}/>
        </CampoDeFormulario>

        


      </div>

      <div className='acoes'> 
        <Botao>
          Criar evento
        </Botao>
      </div>
      
      


    </form>
  )
}