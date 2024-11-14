import React, { useEffect , useState } from 'react';
import busLinesData from './lines.json'

export function TablaDinamica() {

    console.log(busLinesData)

    const[busLine, setBusLine] = useState(null);

    const selectBusLine = () => {
        const selectedLine = busLinesData.busLines[Math.floor(Math.random() * busLinesData.busLines.length)];
        console.log("Línea seleccionada:", selectedLine);
        setBusLine(selectedLine);
    };
    
    useEffect(() => {
        selectBusLine();
    }, []);

    if (!busLine) return <p>Cargando...</p>;

    return (
        <table>
            <thead>
                <tr>
                    <td>Línea</td>
                    <td>Ruta</td>
                    <td>Operador</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{busLine.numberLine}</td>
                    <td>{busLine.route}</td>
                    <td>{busLine.operator}</td>
                </tr>
            </tbody> 
        </table>
    )
}