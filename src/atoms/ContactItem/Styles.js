import { Cursor } from "@react95/core";
import styled from "styled-components";

const ContainerContact = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border:1px solid #000;
    border-style:dotted;
    padding:30px;

    button{
        margin:10px 0 0 0;
    }

    div{
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        margin:0 0 10px 0;
    }

    img{
        width: 100%;
    }
`;

export default ContainerContact;