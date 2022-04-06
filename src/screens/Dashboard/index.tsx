import React from "react";
import { Card } from "../../components/Card";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  Cards,
  Transactions,
  Title,
  TransactionsList,
} 
from "./styles";

export interface DataListProps extends TransactionCardProps{
  id: string;
}

export const Dashboard = () =>{
  const data: DataListProps [] =[
  {
    id:'1',
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00" ,
    category :{
      name: 'Vendas', 
      icon: 'dollar-sign',
    },
    date: "13/04/2020"
  },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: "10/04/2020"
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: "13/04/2020"
    },
]; 
    return (
      <Container>
        <Header>
          <UserContainer>
            <UserInfo>
              <Photo 
                source={{ uri: 'https://avatars.githubusercontent.com/u/92161850?v=4'}}
              />
              <User>
                <UserGretting>Olá,</UserGretting>
                <UserName>Ag</UserName>
              </User>
            </UserInfo>
            <Icon name="power" />
          </UserContainer>
        </Header>
        <Cards>
          <Card title="Entradas" amount="R$ 17.400,00" lastTransaction="Ultima entrada dia 13 de abril" type="up"/>
          <Card title="Saidas" amount="R$ 1.259,00" lastTransaction="Ultima entrada dia 03 de abril" type="down"/>
          <Card title="Total" amount="R$ 16.141.00" lastTransaction="03 de abril até 13 de abril" type='total'/>
        </Cards>
        <Transactions>
          <Title>
            Listagem
          </Title>
          <TransactionsList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TransactionCard data={item} />}

          />
        </Transactions>
      </Container>
    );
}