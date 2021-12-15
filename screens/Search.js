import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Search = () => {
  const cuisinsArr = [
    "Indian",
    "Vegetarian Friendly",
    "Italian",
    "Mexican",
    "Chinese",
    "Southwestern",
    "Mediterranean",
    "European",
    "Northern-Italian",
    "Barbecue",
    "Asian",
    "Pub",
    "Fast Food",
    "Japanese",
    "Thai",
    "French",
    "American",
    "Gujrati",
    "punjabi",
    "south indian",
  ];
  const [newData, setNewData] = useState([]);
  const [filterObj, setFilterObj] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      location_id: "5907760",
      name: "Pind Balluchi",
      latitude: "28.63172",
      longitude: "77.36684",
      num_reviews: "19",
      timezone: "Asia/Kolkata",
      location_string: "Noida, Gautam Buddha Nagar District, Uttar Pradesh",
      awards: [],

      ranking: "#245 of 1,116 Restaurants in Noida",
      distance: "0.45517602256036366",
      distance_string: "0.5 km",
      rating: "3.5",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g644043-d5907760-Reviews-Pind_Balluchi-Noida_Gautam_Buddha_Nagar_District_Uttar_Pradesh.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g644043-d5907760-Pind_Balluchi-Noida_Gautam_Buddha_Nagar_District_Uttar_Pradesh.html",
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      phone: "+91 120 456 5000",
      website: "http://www.pindballuchi.com/",
      email: "feedback@pindballuchi.com",
      address_obj: {
        street1: "34 - 40 Shipra Mall Shop No",
        street2: null,
        city: "Noida",
        state: "Uttar Pradesh",
        country: "India",
        postalcode: "201303",
      },
      cuisine: [
        {
          key: "10346",
          name: "Indian",
        },
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
      ],
    },
    {
      name: "Pn",
      cuisine: [
        {
          key: "10666",
          name: "Indian",
        },
      ],
    },
    {
      name: "Tn",
      cuisine: [],
    },
  ]);

  useEffect(() => {
    let temp = data.filter((d) => {
      if (d.cuisine.length != 0) {
        for (let i = 0; i < d.cuisine.length; i++) {
          if (d.cuisine[i].name.includes("Indian")) {
            return d;
          }
        }
      }
    },[]);
    setNewData(temp);
    setLoading(false);
    // console.log("Data is : " + JSON.stringify(temp));
  }, []);

  return (
    <>
      <View style={styles.container}>
        {loading == true ? (
          <Text>Loading....</Text>
        ) : (
          newData.map((item, idx) => <Text key={idx}>{item.name}</Text>)
        )}
      </View>
    </>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
