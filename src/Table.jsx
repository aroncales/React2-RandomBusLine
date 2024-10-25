import React from 'react';
import busLinesData from './lines.json'

const numberLine = busLinesData.busLines[0].numberLine
const route = busLinesData.busLines[0].route
const operator = busLinesData.busLines[0].operator
export function TablaDinamica() {


    return (
        <table>
            <tr>
                <td>Línea</td>
                <td>Ruta</td>
                <td>Operador</td>
            </tr>
            <tr>
                <td>{numberLine}</td>
                <td>{route}</td>
                <td>{operator}</td>
            </tr>
        </table>
    )
}