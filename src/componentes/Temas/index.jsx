import './temas.estilos.css'

export function Tema ({ tema }) {
    return (
        <h2 className="titulo-tema">{tema.nome}</h2>
    )
}