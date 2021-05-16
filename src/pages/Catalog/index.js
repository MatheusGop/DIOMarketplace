import React, { useState } from 'react';
import { View } from 'react-native';

import {
    Container,
    ProductContainer,
    ProductImage,
    ProductList,
    Product,
    ProductTitle,
    PriceContainer,
    ProductPrice,
    ProductButton,
    ProductButtonText,
} from './styles';

export default function App() {
    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura Trimestral',
            image_url: '',
            price: 150,
        },
    ]);

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    listFooterComponent={<View />}
                    listFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({ item }) => {
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                        </Product>;
                    }}
                />
            </ProductContainer>
        </Container>
    );
}
