import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

import useFetch from "../../../hook/useFetch";

import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  //console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong !</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`near-by-${job?.job_id}`}
              handleNavigation={() =>
                router.push(`/job-details/${job?.job_id}`)
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
