import React from "react";
import { TouchableOpacityProps } from 'react-native';
import {
    Container,
    Icon,
    Title,
} from './styles'

const icons ={
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

interface TitleProps extends TouchableOpacityProps {
    type: 'up' | 'down';
    title:string;
    isActive: boolean;
}

export const TransactionTypeButton = ({
    title,
    type,
    isActive,
    ...rest
}:TitleProps) =>{
    return(
        <Container
        isActive={isActive}
         {...rest} 
         type={type}
         >
            <Icon 
            name={icons[type]}
            type={type}
            />
            <Title>
                {title}
            </Title>

        </Container>
    )
}