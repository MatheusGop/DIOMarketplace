import React from "react";
import { useNavigation } from "@react-navigation/native";

import FeatherIcon from "react-native-vector-icons/Feather";

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from "./styles";

export default function FloatingCart() {
  const navigation = useNavigation();

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate("Cart")}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtonText>2 itens</CartButtonText>

        <CartPricing>
          <CartTotalPrice>R$ 200</CartTotalPrice>
        </CartPricing>

        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
}
