import { useLocation } from 'wouter'
import useTabla from '../../hook/useTabla'
import './style.css'

export default function HomePage() {

    const limpiarTodo = () => {
        localStorage.removeItem('tabla1')
        localStorage.removeItem('tabla2')
        localStorage.removeItem('tabla3')
        localStorage.removeItem('tabla4')
        localStorage.removeItem('tabla5')
        localStorage.removeItem('tabla6')
        localStorage.removeItem('tabla7')
        localStorage.removeItem('tabla8')
        localStorage.removeItem('tabla9')
        localStorage.removeItem('tabla10')
        localStorage.removeItem('tabla11')
        localStorage.removeItem('tabla12')
        localStorage.removeItem('tabla13')
        localStorage.removeItem('detalles')
        localStorage.removeItem('acumulados')
        navigate('/tabla1')
    }

    const [, navigate] = useLocation()
    return (
        <div className="homepage">
            <div className="actions">
                <div>
                    <h1 className="horse-main">🐎</h1>
                    <div className="container_buttons">
                        <h3 onClick={() => navigate('/tabla1')} className="homebutton"><p>Continuar</p></h3>
                        <h3 onClick={limpiarTodo} className="homebutton"><p>Tabla nueva</p></h3>
                    </div>
                </div>

            </div>
        </div>
    )
}