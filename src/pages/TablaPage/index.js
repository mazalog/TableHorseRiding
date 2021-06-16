import Tabla from '../../components/Tabla'
import useTabla from '../../hook/useTabla'

export default function TablaPage({ params }) {
    return (
        <div style={{width:'100%',overflow:'hidden'}}>
            <Tabla parametro={params.tabla} {...useTabla(params.tabla)}/>
        </div>
    )
}