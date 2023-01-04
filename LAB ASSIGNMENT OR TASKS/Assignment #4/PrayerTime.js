import axios from "axios";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";;

export default function PrayerTimes({ Latitude, Longitude }) {
  const [fulld, setfulld] = useState();
  const [faj, setfaj] = useState();
  const [zuhar, setzuhar] = useState();
  const [asr, setasr] = useState();
  const [mag, setmag] = useState();
  const [ish, setish] = useState();
  const [suns, setsuns] = useState();
  const [sunr, setsunr] = useState();
  let today = new Date();
  let day = today.getDate();
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let month = today.getMonth();
  let monthName = monthNames[month];
  let year = today.getFullYear();
  console.log(day, monthName, year);


  axios
    .get(
      `http://api.aladhan.com/v1/calendar?latitude=${Latitude}&longitude=${Longitude}&method=1&month=${monthName}&year=${year}`
    )
    .then((response) => {
      setfulld(response.data.data[day - 1].date.readable);
      setfaj(response.data.data[day - 1].timings.Fajr);
      setzuhar(response.data.data[day - 1].timings.Dhuhr);
      setasr(response.data.data[day - 1].timings.Asr);
      setmag(response.data.data[day - 1].timings.Maghrib);
      setish(response.data.data[day - 1].timings.Isha);
      setsunr(response.data.data[day - 1].timings.Sunrise);
      setsuns(response.data.data[day - 1].timings.Sunset);
    }).catch
    (error => {
      console.log(error);
    });
  return (

    <View style={styles.container}>
      <View style={styles.smallbox}>
        <View style={styles.smallbox2}>
          <Text style={{ color: "white" }}>Sunrise</Text>
          <Text>
            <Ionicons
              name="sunny-outline"
              color={"white"}
              size={15}
            ></Ionicons>
          </Text>
          <Text style={{ color: "white" }}>{sunr}</Text>
        </View>

        <View style={[styles.smallbox2, { marginLeft: 189 }]}>
          <Text style={{ color: "white" }}>Sunset</Text>
          <Text>
            <Ionicons
              name="moon-outline"
              color={"white"}
              size={15}
            ></Ionicons>
          </Text>
          <Text style={{ color: "white" }}>{suns}</Text>
        </View>
      </View>

      <Text style={styles.txt}>{fulld}</Text>

      <Text style={styles.txt2}>Fajr {faj}</Text>
      <Text style={styles.txt2}>Zuhar {zuhar}</Text>
      <Text style={styles.txt2}>Asr {asr}</Text>
      <Text style={styles.txt2}>Maghrib {mag}</Text>
      <Text style={styles.txt2}>Isha {ish}</Text>
    </View>
  );
}

var width = Dimensions.get("screen").width;
var height = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#3D8361",
  },
  txt: {
    fontSize: 40,
    color: "yellow",

    width: width,
    textAlign: "center",
  },
  txt2: {
    fontSize: 30,
    color: "#8ad3ff",
    marginVertical: 20,

    width: width,
    textAlign: "center",
    padding: 13,

    justifyContent: "center",
    shadowColor: "black",
  },
  smallbox: {
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 10,
  },
  smallbox2: {
    textAlign: "center",
    alignItems: "center",
  },
});