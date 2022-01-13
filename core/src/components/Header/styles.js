import styled from 'styled-components';

export const HeaderStyles = styled.header`
	width: 100%;
	height: var(--heading-height);
    background-color: var(--color-2);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    h1 {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: .01em;
        text-shadow: .022em .022em .022em #111;
        color: var(--border-color-input);
        margin: 30px 0 0 0;
    }

    @media(max-width: 600px){
        height: var(--heading-height-mobile);
    }

`;
