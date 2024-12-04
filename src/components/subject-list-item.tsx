import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Subject } from "../../assets/types/subject";

export const SubjectListItem = ({ subject }: { subject: Subject }) => {
  return (
    <Link asChild href={`/product/${subject.slug}`}>
      <Pressable style={styles.item}>
        <Text style={styles.itemTitle}>{subject.title}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemTitle: {
    fontSize: 16,
    color: "#888",
  },
});
