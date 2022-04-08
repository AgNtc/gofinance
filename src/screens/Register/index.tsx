import React, { useState } from 'react';
import { 
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelect } from '../../components/Forms/CategorySelect';

import { Category } from '../Category';
import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType,
} from './styles';

interface FormData{
    name: string;
    amount: number;
}
const schema = Yup.object().shape({
    name: Yup
    .string()
    .required('Nome é obrigatório'),
    amount: Yup
    .number()
    .typeError('Informe um valor válido')
    .positive('O valor deve ser positivo')
});

export const Register = () =>{
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setcategoryModalOpen] = useState(false);
    
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    const {
       control,
       handleSubmit,
       formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const handleTransactionType = (type: 'up' | 'down') =>{
        setTransactionType(type);
    };

    const handleOpenModal = () => {
        setcategoryModalOpen(true);
    };

    const handleCloseModal = () =>{
        setcategoryModalOpen(false);
    };

    const handleRegister = (form: FormData) =>{
        if(!transactionType)
            return Alert.alert('Selecione o tipo da transação');
        
        if(category.key === 'category')
            return Alert.alert('Selecione uma categoria');
        
        const data={
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data);
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
            <Form>
                <Fields>
                    <InputForm 
                        placeholder='Nome'
                        name='name'
                        control={control}
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error = {errors.name && errors.name.message}
                    />
                    <InputForm 
                        placeholder='Preço'
                        name='amount'
                        control={control}
                        keyboardType='numeric'
                        error={errors.amount && errors.amount.message}
                    />
                    <TransactionsType>
                    <TransactionTypeButton 
                        type={'up'}
                        title={'Income'}
                        onPress={() => handleTransactionType ('up')}
                        isActive={transactionType === 'up'}
                    />   
                    <TransactionTypeButton 
                        type={'down'}
                        title={'Outcome'}
                        onPress={() => handleTransactionType('down')}
                        isActive={transactionType === 'down'}
                    />   
                    </TransactionsType>
                    <CategorySelect
                     title={category.name}
                     onPress={handleOpenModal}
                    />
                </Fields>
                <Button 
                    title='Enviar'
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>
            <Modal visible={categoryModalOpen}>
                <Category 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseModal}
                />
            </Modal>
        </Container>
    </TouchableWithoutFeedback>
    );
}