import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SUBJECTS } from "../../../assets/subjects";
import { SubjectListItem } from "../../components/subject-list-item";
import { ListHeader } from "../../components/ListHeader";

const Home = () => {
  return (
    <View>
      <FlatList
        data={SUBJECTS}
        renderItem={({ item }) => <SubjectListItem subject={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContent}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
});
