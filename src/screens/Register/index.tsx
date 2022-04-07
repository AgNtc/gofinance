import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

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
    } = useForm();

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
        const data={
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data);
    }

    return (
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
                    />
                    <InputForm 
                        placeholder='Preço'
                        name='amount'
                        control={control}
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
    );
}