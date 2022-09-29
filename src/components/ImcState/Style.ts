import styled from "styled-components";

const Text = {
    margin: 0,
}

export const H2 = styled.h2(Text);

export const H3 = styled.h3<{ bg: string }>((props) => ({
    ...Text,
    color: props.bg
}));