import styled from "styled-components";

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

export const Input = styled.input({
    width: '360px',
    height: '15px',
    borderRadius: '5px',
    marginBottom: '12px',
    fontSize: '18px',
    padding: '8px'
    
});

export const Button = styled.button({
    height: '45px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: 'none',
    background: '#0066ff',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '24px',
    cursor: 'pointer',
    transition: '0.2s',
    ":hover": {
        cursor: 'pointer',
        background: '#6699ff'
    }
});