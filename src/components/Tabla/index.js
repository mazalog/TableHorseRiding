import React from 'react'
import { useLocation } from 'wouter'
import './style.css'

export default function Tabla({
    tabla, handleInputChange,
    handleInputChangeJugada, totalTabla1,
    totalTabla2, format, totalCaballosComprados, 
    totalCaballosenCasa, total, save, DetalleEnCarrera,
    utilidadTotal, handleInputChangeAcumulado, totalAcumulado, 
    sacoDetalle,parametro,
    }){

        const handleKey = (e) => {

            if (e.key === 'ArrowDown') {
                const removeInput = parseInt(e.target.id) + 1
                const inputs = document.getElementsByName(e.target.name)
                inputs.forEach(doc => {
                    if (parseInt(doc.id) === removeInput) {
                        doc.focus()
                    }
                })
            }
    
            if (e.key === 'ArrowUp') {
                const removeInput = parseInt(e.target.id) - 1
                const inputs = document.getElementsByName(e.target.name)
                inputs.forEach(doc => {
                    if (parseInt(doc.id) === removeInput) {
                        doc.focus()
                    }
                })
            }
    
            if (e.key === 'ArrowRight') {
    
                const removeInput = parseInt(e.target.id)
                const inputRight = e.target.name === 'ejemplar' ? 'jugada' : e.target.name === 'jugador' ? 'ejemplar' : 'jugador'
                const inputs = document.getElementsByName(inputRight)
    
                if (e.target.name === 'jugador') {
                    inputs.forEach(doc => {
                        if (parseInt(doc.id) === (removeInput + 1)) {
                            doc.focus()
                        }
                    })
                } else {
                    inputs.forEach(doc => {
                        if (parseInt(doc.id) === removeInput) {
                            doc.focus()
                        }
                    })
                }
            }
    
            if (e.key === 'ArrowLeft') {
                const removeInput = parseInt(e.target.id)
                const inputLeft = e.target.name === 'jugador' ? 'jugada' : 'ejemplar'
                const inputs = document.getElementsByName(inputLeft)
                inputs.forEach(doc => {
                    if (parseInt(doc.id) === removeInput) {
                        doc.focus()
                    }
                })
            }
    
        }
    

    const [,navigate]=useLocation()

    return(
        <>
        <div className="container">

        <div className="title">
            <h3>🏇 Centro Hipico Mesuca 🏇</h3>
        </div>
        <table className="bg-table-1">
            <th style={{ width: '25%' }}>Carrera 🏆</th>
            <th style={{ width: '25%' }}>Tabla 1</th>
            <th style={{ width: '25%' }}>Tabla 2</th>
            <th style={{ width: '12.5%' }}>Total 1+2</th>
            <th style={{ width: '12.5%' }}>Pagan</th>
        </table>
        <div style={{ display: 'flex', overflow: 'auto' }}>
            <table style={{ width: '87.5%' }}>
                <thead>
                    <tr className="bg-table-2">
                        <th style={{ width: '10%', }}>#</th>
                        <th style={{ width: '20%', }}>Ejemplar 🐴</th>
                        <th style={{ width: '10%', }}>Jugada 💲</th>
                        <th style={{ width: '20%', }}>Para 🙍‍♂️</th>
                        <th style={{ width: '10%', }}>Jugada 💲</th>
                        <th style={{ width: '20%', }}>Para 🙍‍♂️</th>
                        <th style={{ width: '10%', }}>Total 1+2 </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tabla.map((doc, index) =>
                        (<>{doc.id !== 16 ? <tr key={index}>
                            <td onClick={() => save(doc.id)}><input style={{ cursor: 'pointer' }} value={doc.id} /></td>
                            <td><input onKeyDown={(e) => handleKey(e)} id={doc.id} value={doc.ejemplar} name="ejemplar" data-id={doc.id} onChange={handleInputChange} /></td>
                            <td><input onKeyDown={(e) => handleKey(e)} id={doc.id} value={doc.jugada} name="jugada" data-id={doc.id} onChange={handleInputChangeJugada} /></td>
                            <td><input onKeyDown={(e) => handleKey(e)} id={doc.id} value={doc.jugador} name="jugador" style={{ textTransform: 'none' }} data-id={doc.id} onChange={handleInputChange} /></td>
                            <td className="td">{doc.jugada / 2}$</td>
                            <td className="td"> {doc.jugador === 'C' ? 'Casa 🏠' : doc.jugador}</td>
                            <td className="td">{doc.jugada + (doc.jugada / 2)}$</td>
                        </tr> : <></>}
                        </>))
                    }
                </tbody>
            </table>
            <div className="container-pagan">
                        <h4>Pagan 🤑</h4>
                        <div className="box-title" ></div>
                        <div className="box-pagan box-pagan-bg-1" ><h4>TABLA 1</h4></div>
                        <div className="box-pagan" ><h4 style={{ color: '#000' }}>{format(totalTabla1)}$</h4></div>
                        <div className="box-pagan box-pagan-bg-1" ><h4>TABLA 2</h4></div>
                        <div className="box-pagan" ><h4 style={{ color: '#000' }}>{format(totalTabla2)}$</h4></div>
                        <div className="box-pagan box-pagan-bg-2" >
                            <input onChange={handleInputChangeAcumulado} style={{ width: '100%' }} defaultValue={totalAcumulado()} />
                        </div>

                        <div className="box-pagan box-pagan-bg-1" ><h4>ACUMULADO</h4></div>
                        <div className="box-paganlg"><h4>  {totalAcumulado()}$</h4></div>

                        <div className="box-pagan box-pagan-bg-1" ><h4>TOTAL</h4></div>
                        <div className="box-paganlg"><h4> 💵 {format(totalTabla1 + totalTabla2 + totalAcumulado())}$</h4></div>
                    </div>
        </div >
        <div className="container-premio">
            <h1>💵 Premio: {format(totalTabla1 + totalTabla2)}$ {totalAcumulado() !== 0 ? '+ Acumulado de ' + totalAcumulado() + '$' + ' 😄 =' + format((totalTabla1 + totalTabla2) + totalAcumulado()) + '$ ' : <></>}</h1>
        </div>
    </div>
    <div className="pages">
        <button
            className={parametro === 'tabla1' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla1') ? '#09f' : '' }}
            onClick={() => navigate('/tabla1')}>1</button>
        <button
            className={parametro === 'tabla2' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla2') ? '#09f' : '' }}
            onClick={() => navigate('/tabla2')}>2</button>
        <button
            className={parametro === 'tabla3' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla3') ? '#09f' : '' }}
            onClick={() => navigate('/tabla3') }>3</button>
        <button
            className={parametro === 'tabla4' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla4') ? '#09f' : '' }}
            onClick={() => navigate('/tabla4') }>4</button>
        <button
            className={parametro === 'tabla5' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla5') ? '#09f' : '' }}
            onClick={() => navigate('/tabla5') }>5</button>
        <button
            className={parametro === 'tabla6' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla6') ? '#09f' : '' }}
            onClick={() => navigate('/tabla6') }>6</button>
        <button
            className={parametro === 'tabla7' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla7') ? '#09f' : '' }}
            onClick={() => navigate('/tabla7') }>7</button>
        <button
            className={parametro === 'tabla8' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla8') ? '#09f' : '' }}
            onClick={() => navigate('/tabla8') }>8</button>
        <button
            className={parametro === 'tabla9' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla9') ? '#09f' : '' }}
            onClick={() => navigate('/tabla9') }>9</button>
        <button
            className={parametro === 'tabla10' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla10') ? '#09f' : '' }}
            onClick={() => navigate('/tabla10') }>10</button>
        <button
            className={parametro === 'tabla11' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla11') ? '#09f' : '' }}
            onClick={() => navigate('/tabla11') }>11</button>
        <button
            className={parametro === 'tabla12' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla12') ? '#09f' : '' }}
            onClick={() => navigate('/tabla12') }>12</button>
        <button
            className={parametro === 'tabla13' ? 'active' : ''}
            style={{ color: sacoDetalle('tabla13') ? '#09f' : '' }}
            onClick={() => navigate('/tabla13') }>13</button>
    </div>
    <div className="section_detalles">
        <div className="container-detalles">
            <div className="detalles">
                <div>
                    <p>👀 Total jugado: {format(total)}$</p>
                    <p>🏠 La casa pago: {format(totalCaballosenCasa + totalAcumulado())}$</p>
                    <p>🖐️ Cobrar a los clientes: {format(totalCaballosComprados)}$</p>
                </div>
                <div style={{ marginLeft: '40px' }}>
                    <p>🏆 Ganador: {DetalleEnCarrera() ? DetalleEnCarrera().ganador : ''} </p>
                    <p>🥇 Premio:{format(totalTabla1 + totalTabla2)}$</p>
                    <p>🥈 Premio ganado por casa: {DetalleEnCarrera() ? DetalleEnCarrera().ganador === 'C' ? format(totalTabla1 + totalTabla2) : 0
                        : 0}$</p>
                    <p>{DetalleEnCarrera() ? DetalleEnCarrera().utilidad >= 0 ? '😃' : '😭'
                        : (totalCaballosComprados - (totalTabla1 + totalTabla2) - totalAcumulado()) === 0 ? '🤔' : totalCaballosComprados - (totalTabla1 + totalTabla2) - totalAcumulado() > 0 ? '😃' : '😭'
                    }
                    Utilidad: {format (DetalleEnCarrera() ? DetalleEnCarrera().utilidad : totalCaballosComprados - (totalTabla1 + totalTabla2) - totalAcumulado())}$</p>
                </div>
            </div>
        </div>
        <div className="container-detalles">
            <div className="detalles">
                <div>
                    <p>🤞 Utitilidad hasta ahora: {format (utilidadTotal())}$</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}