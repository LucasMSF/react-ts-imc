import React, { useState } from 'react'
import { Button, Container, Input } from './Style'

type Props = {
    handleClick: Function
}

export const ImcForm = ({ handleClick }: Props) => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    return (
        <Container>
            <Input placeholder='Altura' onChange={(e) => setAltura(parseFloat(e.target.value))}/>
            <Input placeholder='Peso' onChange={(e) => setPeso(parseFloat(e.target.value))}/>
            <Button onClick={() => handleClick(peso, altura)}>Calcular</Button>
        </Container>
    )
}