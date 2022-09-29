import React from 'react'
import { Imc } from '../../types/Imc'
import { H2, H3 } from './Style';

type Props = Imc;

export const ImcState = ({ imc, state: {state, color} }: Props) => {
    return (
        <>
            <H2>
                {`Seu IMC é: ${imc}`}
            </H2>
            <H3 bg={color}>
                {state}
            </H3>
        </>

    )
}