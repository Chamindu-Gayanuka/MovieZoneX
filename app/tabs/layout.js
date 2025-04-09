import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="movies" options={{ title: "Movies" }} />
        <Tabs.Screen name="tvshows" options={{ title: "TvShows" }} />
        <Tabs.Screen name="user" options={{ title: "Profile" }} />
        <Tabs.Screen name="details" options={{ title: "Details" }} />
    </Tabs>
  );
}