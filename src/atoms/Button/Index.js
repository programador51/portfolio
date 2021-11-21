
import React from 'react';

import { Cursor, Button } from '@react95/core';
import styled from 'styled-components';

const CustomBtn = styled(Button)`

    ${({ type }) => Cursor[type]};

`;

export default function Index({ message = 'OK', type = 'Pointer', onClick = () => { } }) {
    return (
        <CustomBtn type={type} onClick={onClick}>
            {message}
        </CustomBtn>
    )
}
