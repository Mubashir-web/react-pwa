import React from "react";
import Axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const fetchWeather = async (query) => {
  const { data } = await Axios.get(URL, {
    params: {
      q: query,
      units: "metrics",
      APPID: API_KEY,
    },
  });

  return data;
};
