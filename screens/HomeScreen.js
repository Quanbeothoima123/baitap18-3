import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { items } from "../data/data";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderComponent = ({ title }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
    }}
  >
    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
    <TouchableOpacity>
      <Text style={{ color: "orange" }}>View all</Text>
    </TouchableOpacity>
  </View>
);

const ItemCard = ({ item }) => (
  <View style={{ margin: 10 }}>
    <Image
      source={item.image}
      style={{ width: 100, height: 100, borderRadius: 10 }}
    />
    <Text>{item.name}</Text>
    {item.price && <Text>${item.price}</Text>}
  </View>
);

const HomeScreen = () => {
  const categories = items.filter((item) => item.type === "category");
  const popularItems = items.filter((item) => item.type === "product");
  const saleItems = items.filter(
    (item) => item.type === "product" && item.isSale
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#D3D3D3",
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Explorer
        </Text>
      </View>
      {/* Thêm SafeAreaView vào đây */}
      <View style={{ flex: 1, padding: 10 }}>
        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f0f0f0",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Ionicons name="location-outline" size={20} color="gray" />
          <TextInput
            placeholder="Search for meals or area"
            style={{ flex: 1, marginLeft: 10 }}
          />
          <Ionicons name="search" size={20} color="gray" />
        </View>

        {/* Top Categories */}
        <HeaderComponent title="Top Categories" />
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemCard item={item} />}
        />

        {/* Popular Items */}
        <HeaderComponent title="Popular Items" />
        <FlatList
          horizontal
          data={popularItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemCard item={item} />}
        />

        {/* Sale-off Items */}
        <HeaderComponent title="Sale-off Items" />
        <FlatList
          horizontal
          data={saleItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
