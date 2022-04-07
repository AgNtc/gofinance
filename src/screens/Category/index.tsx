import React from "react";
import { FlatList } from "react-native";

import { Button } from "../../components/Forms/Button";
import { categories } from "../../utils/categories";

import {
    Container,
    Header,
    Title,
    CategoryItem,
    Icon,
    Name,
    Separator,
    Footer,
} from './styles'

interface Category{
    key:string;
    name:string;

}
interface CategoryProps{
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export const Category = ({
    category,
    setCategory,
    closeSelectCategory
}:CategoryProps) =>{

    const handleCategorySelect = (category: Category) =>{
        setCategory(category);
    }
    

    return(
        <Container>
            <Header>
                <Title>
                    Categoria
                </Title>
            </Header>
            <FlatList 
                data={categories}
                style={{flex:1, width: '100%'}}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                    <CategoryItem
                        onPress={()=> handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon}/>
                        <Name>{item.name}</Name>
                    </CategoryItem>
                )}
                ItemSeparatorComponent={() => <Separator/>}
            />
            <Footer>
                <Button title='Selecionar'
                onPress={closeSelectCategory}
                />
            </Footer>
            
        </Container>
    )
};