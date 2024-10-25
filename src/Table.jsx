import React, { useState } from 'react';
import busLinesData from './lines.json'

const [busLine, setBusLine] = useState(null);



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