import useTabla from '../../hook/useTabla'

export default function Tabla({ params }) {

    const { tabla, handleInputChange,
        handleInputChangeJugada, totalTabla1,
        totalTabla2, format, totalCaballosComprados, totalCaballosenCasa, total, save, DetalleEnCarrera,
        utilidadTotal, handleInputChangeAcumulado, totalAcumulado, sacoDetalle } = useTabla(params.tabla)

    return (
        <div className="container_page">
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
                                    <td><input value={doc.ejemplar} name="ejemplar" id={doc.id} onChange={handleInputChange} /></td>
                                    <td><input value={doc.jugada} name="jugada" id={doc.id} onChange={handleInputChangeJugada} /></td>
                                    <td><input value={doc.jugador} name="jugador" style={{ textTransform: 'none' }} id={doc.id} onChange={handleInputChange} /></td>
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
                            <input value={totalAcumulado()} onChange={handleInputChangeAcumulado} style={{ width: '100%' }} />
                        </div>
                        <div className="box-pagan box-pagan-bg-1" ><h4>TOTAL</h4></div>
                        <div className="box-paganlg"><h4> 💵 {format(totalTabla1 + totalTabla2)}$</h4></div>
                    </div>
                </div >
                <div className="container-premio">
                    <h1>💵 Premio: {format(totalTabla1 + totalTabla2)}$ {totalAcumulado() !== 0 ? '+ Acumulado de ' + totalAcumulado() + '$' + ' 😄 =' + format((totalTabla1 + totalTabla2) + totalAcumulado()) + '$ ' : <></>}</h1>
                </div>
            </div>
            <div className="pages">
                <button
                    className={params.tabla === 'tabla1' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla1') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla1'}>1</button>
                <button
                    className={params.tabla === 'tabla2' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla2') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla2'}>2</button>
                <button
                    className={params.tabla === 'tabla3' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla3') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla3'}>3</button>
                <button
                    className={params.tabla === 'tabla4' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla4') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla4'}>4</button>
                <button
                    className={params.tabla === 'tabla5' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla5') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla5'}>5</button>
                <button
                    className={params.tabla === 'tabla6' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla6') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla6'}>6</button>
                <button
                    className={params.tabla === 'tabla7' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla7') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla7'}>7</button>
                <button
                    className={params.tabla === 'tabla8' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla8') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla8'}>8</button>
                <button
                    className={params.tabla === 'tabla9' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla9') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla9'}>9</button>
                <button
                    className={params.tabla === 'tabla10' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla10') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla10'}>10</button>
                <button
                    className={params.tabla === 'tabla11' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla11') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla11'}>11</button>
                <button
                    className={params.tabla === 'tabla12' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla12') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla12'}>12</button>
                <button
                    className={params.tabla === 'tabla13' ? 'active' : ''}
                    style={{ color: sacoDetalle('tabla13') ? '#09f' : '' }}
                    onClick={() => window.location = '/tabla13'}>13</button>
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
                            Utilidad: {DetalleEnCarrera() ? DetalleEnCarrera().utilidad : totalCaballosComprados - (totalTabla1 + totalTabla2) - totalAcumulado()}$</p>
                        </div>
                    </div>
                </div>
                <div className="container-detalles">
                    <div className="detalles">
                        <div>
                            <p>🤞 Utitilidad hasta ahora: {utilidadTotal()}$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}