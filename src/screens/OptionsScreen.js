import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import sanityClient from "../../sanity";

const OptionScreen = ({ route }) => {
  const { id } = route.params;
  const [selectedOptions, setSelectedOptions] = useState({});
  const [optionLists, setOptionLists] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "dish" && _id == $id][0] {
          ...,
          optionLists[]->{
            ...,
            options[]->{
              ...,
            },
          }
        }
        `,
        { id }
      )
      .then((data) => {
        setOptionLists(data?.optionLists || []);
      });
  }, [id]);

  return (
    <View>
      <Text>Available Options:</Text>
      {optionLists.map((list) => (
        <View key={list.title}>
          <Text>{list.title}</Text>
          <FlatList
            data={list.options}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: selectedOptions[item._id]
                    ? "green"
                    : "white",
                }}
                onPress={() => {
                  if (list.multipleChoice) {
                    setSelectedOptions((prevOptions) => {
                      if (prevOptions[item._id]) {
                        const newOptions = { ...prevOptions };
                        delete newOptions[item._id];
                        return newOptions;
                      } else {
                        return { ...prevOptions, [item._id]: true };
                      }
                    });
                  } else {
                    setSelectedOptions({
                      ...selectedOptions,
                      [list._id]: item._id,
                    });
                  }
                }}
              >
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
              </TouchableOpacity>
            )}
          />
          {list.multipleChoice && (
            <View>
              <Text>Selected options:</Text>
              {selectedOptions[list._id] &&
                selectedOptions[list._id].map((optionId) => (
                  <Text key={optionId}>
                    {
                      list.options.find((option) => option._id === optionId)
                        .title
                    }
                  </Text>
                ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default OptionScreen;
