import { useLocation } from 'wouter'
import './style.css'

export default function HomePage() {
    const [, navigate] = useLocation()
    const limpiarTodo = () => {
        localStorage.clear()
        navigate('/tabla1')
    }
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