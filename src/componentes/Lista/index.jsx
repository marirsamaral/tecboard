import './lista.estilos.css'

export function Lista ({itens, ...rest}){
    return(
        <select {...rest} className='lista-form' defaultValue="" >
            <option value=""> Selecione uma opção </option>
            {itens.map(function (item){
                return <option key={item.id} value={item.id}>{item.nome}</option>
            })}
        </select>
    )
}