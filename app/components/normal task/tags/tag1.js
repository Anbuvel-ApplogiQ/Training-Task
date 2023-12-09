import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tags = ({ tags }) => {
  return (
    <View style={styles.tagsContainer}>
      {tags.map((tag, index) => (
        <Text key={index} style={styles.tag}>
          {tag}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
});

export default Tags;
