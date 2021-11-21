import React from "react";
import { Frame, Cursor } from "@react95/core";
import styled from "styled-components";

const CursorItem = styled(Frame)`
  ${({ type }) => Cursor[type]}
`;

export default function Index({ type = "Auto", children }) {
  return <CursorItem type={type}>{children}</CursorItem>;
}
