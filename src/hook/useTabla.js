import { useState, useEffect } from "react"

export default function useTabla(nTabla) {

    const rows = [
        {
            id: 1,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 2,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 3,

            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 4,

            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 5,

            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 6,

            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 7,

            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 8,

            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 9,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 10,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 11,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 12,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 13,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 14,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 15,
            ejemplar: '',
            jugada: 0,
            jugador: '',
            total: 0
        },
        {
            id: 16,
            ejemplar: '',
            jugada: 0,
            jugador: 'C',
            total: 0
        },
    ]

    const arracumu = [
        {
            id: 1,
            name: 'tabla1',
             total: 0
        },
        {
            id: 2,
            name: 'tabla2', 
            total: 0
        },
        {
            id: 3,
            name: 'tabla3', 
            total: 0
        },
        {
            id: 4,
            name: 'tabla4', 
            total: 0
        },
        {
            id: 5,
            name: 'tabla5', 
            total: 0
        },
        {
            id: 6,

            name: 'tabla6',
             total: 0
        },
        {
            id: 7,
            name: 'tabla7', 
            total: 0
        },
        {
            id: 8,
            name: 'tabla8', 
            total: 0
        },
        {
            id: 9,
            name: 'tabla9', 
            total: 0
        },
        {
            id: 10,
            name: 'tabla10',
            total: 0
        },
        {
            id: 12,
            name: 'tabla11',
            total: 0
        },
        {
            id: 13,
            name: 'tabla12',
            total: 0
        },
        {
            id: 14,
            name: 'tabla13',
            total: 0
        },
        {
            id: 15,
            name: 'tabla14',
            total: 0
        },
        {
            id: 16,
            name: 'tabla15',
            total: 0
        },
    ]

    const [tabla, setTabla] = useState(rows)
    const [detalles, setDetalles] = useState([])
    const [acumulados, setaAcumulados] = useState(arracumu)

    useEffect(() => {

        const tablaEnStorage = localStorage.getItem(nTabla)
        const detallesEnStorage = localStorage.getItem('detalles')
        const acumuladosEnStorage = localStorage.getItem('acumulados')

        if (tablaEnStorage) {
            setTabla(JSON.parse(tablaEnStorage))
        }else{
            setTabla(rows)
        }
        if (detallesEnStorage) {
            setDetalles(JSON.parse(detallesEnStorage))
        }else{
            setDetalles([])
        }
        if (acumuladosEnStorage) {
            setaAcumulados(JSON.parse(acumuladosEnStorage))
        }else{
            setaAcumulados(arracumu)
        }

    }, [nTabla])

    const format = (num) => {
        return `${parseFloat(num.toFixed(2))}`
    }
    const sacoDetalle=(ta)=>{
        if(detalles.length>0){
            const detalle=detalles.some(doc=>doc.carrera===ta)
            return detalle
        }else{
            return false
        }
    }

    const total = Object.values(tabla).reduce(
        (acc, { total }) => acc + total,
        0
    )

    const totalJugada = parseFloat(Object.values(tabla).reduce(
        (acc, { jugada }) => acc + jugada,
        0
    ))

    const caballosenCasa = tabla.filter(doc => doc.jugador === 'C')

    const totalCaballosenCasa = Object.values(caballosenCasa).reduce(
        (acc, { total }) => acc + total,
        0
    )

    const caballosComprados = tabla.filter(doc => doc.jugador !== 'C')

    const totalCaballosComprados = Object.values(caballosComprados).reduce(
        (acc, { total }) => acc + total,
        0
    )

    const totalTabla1 = totalJugada - (totalJugada * 0.30)

    const totalTabla2 = (totalJugada / 2) - ((totalJugada / 2) * 0.30)

    const handleInputChangeJugada = (e) => {
        if (e.target.value === '') { e.target.value = 0 }
        setTabla(tabla.map(doc => doc.id === parseFloat(e.target.dataset.id) ? { ...doc, total: parseFloat(e.target.value) + (parseFloat(e.target.value) / 2), [e.target.name]: parseFloat(e.target.value) } : doc))
        localStorage.setItem(nTabla, JSON.stringify(tabla.map(doc => doc.id === parseFloat(e.target.dataset.id) ? { ...doc, total: parseFloat(e.target.value) + (parseFloat(e.target.value) / 2), [e.target.name]: parseFloat(e.target.value) } : doc)))
    }
    const handleInputChange = (e) => {
        setTabla(tabla.map(doc => doc.id === parseFloat(e.target.dataset.id) ? { ...doc, [e.target.name]: e.target.value } : doc))
        localStorage.setItem(nTabla, JSON.stringify(tabla.map(doc => doc.id === parseFloat(e.target.dataset.id) ? { ...doc, [e.target.name]: e.target.value } : doc)))
    }
    const handleInputChangeAcumulado = (e) => {
        if (e.target.value === '') { e.target.value = 0 }
        setaAcumulados(acumulados.map(doc => doc.name === nTabla ? { ...doc, total: parseFloat(e.target.value)}: doc))
        localStorage.setItem('acumulados', JSON.stringify(acumulados.map(doc => doc.name === nTabla ? { ...doc, total: parseFloat(e.target.value)}: doc)))
    }

    const totalAcumulado = () => {
        const acu = acumulados.find(doc => doc.name === nTabla)
        return acu.total
    }

    const save = (id) => {
        const jugada = tabla.find(doc => doc.id === id)

        const salvar = {
            carrera: nTabla,
            ganador: jugada.jugador,
            premio: parseFloat(format(totalTabla1 + totalTabla2)),
            utilidad: parseFloat(jugada.jugador === "C" ? format(totalCaballosComprados - (totalTabla1 + totalTabla2) + (totalTabla1 + totalTabla2)-totalAcumulado())
                :
                format(totalCaballosComprados - (totalTabla1 + totalTabla2)-totalAcumulado()))
        }

        if (detalles.length > 0) {
            if (detalles.some(doc => doc.carrera === nTabla)) {
                const editarDetalle = detalles.map(doc => doc.carrera === nTabla ? salvar : doc)
                setDetalles(editarDetalle)
                localStorage.setItem('detalles', JSON.stringify(editarDetalle))
            } else {
                const arrActutalizado = [...detalles, salvar]
                setDetalles(arrActutalizado)
                localStorage.setItem('detalles', JSON.stringify(arrActutalizado))
            }
        } else {
            setDetalles([salvar])
            localStorage.setItem('detalles', JSON.stringify([salvar]))
        }

    }

    const DetalleEnCarrera = () => {
        if (detalles.length > 0) {
            if (detalles.some(doc => doc.carrera === nTabla)) {
                const detalleActual = detalles.find(doc => doc.carrera === nTabla)
                return detalleActual
            } else {
                return false
            }
        } else {
            return false
        }
    }
    const utilidadTotal = () => {

        if (detalles.length > 0) {
            const totaldeUtilidad = Object.values(detalles).reduce(
                (acc, { utilidad }) => acc + utilidad,
                0
            )
            return totaldeUtilidad
        } else {
            return 0
        }
    }

    return {
        tabla,
        format,
        total,
        totalCaballosComprados,
        totalCaballosenCasa,
        totalTabla1,
        totalTabla2,
        handleInputChange,
        handleInputChangeJugada,
        save,
        DetalleEnCarrera,
        utilidadTotal,
        handleInputChangeAcumulado,
        totalAcumulado,
        sacoDetalle,
    }
}