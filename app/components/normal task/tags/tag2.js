import React from 'react';
import { View, Text } from 'react-native';

const WordCounter = ({ paragraph }) => {
  const countWords = (text) => {
    // Remove leading and trailing whitespaces
    const trimmedText = text.trim();
    
    // Split the text into words using regular expression
    const words = trimmedText.split(/\s+/);

    // Filter out empty strings (consecutive spaces)
    const filteredWords = words.filter(word => word !== '');

    // Return the count of words
    return filteredWords.length;
  };

  const wordCount = countWords(paragraph);

  return (
    <View>
      <Text>{`Word count: ${wordCount}`}</Text>
    </View>
  );
};

export default WordCounter;
