import React from 'react'
import { ScrollView, View } from "react-native";
import styled from 'styled-components/native';

const AppWrapper = styled.View`
    background-color: ${props => props.theme.applicationBackground};
    color: ${props => props.theme.applicationColor};
    /* padding: 0.3rem; */
    flex: 1;
`
export default AppWrapper;