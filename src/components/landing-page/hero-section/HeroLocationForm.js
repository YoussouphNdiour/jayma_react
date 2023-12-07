import React, { useEffect, useId, useState } from "react";
import {
  alpha,
  // Grid,
  // Stack,
  // Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
// import { StyledButton } from "./HeroSection.style";
import { useGeolocated } from "react-geolocated";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import useGetAutocompletePlace from "../../../api-manage/hooks/react-query/google-api/usePlaceAutoComplete";
import useGetGeoCode from "../../../api-manage/hooks/react-query/google-api/useGetGeoCode";
import useGetZoneId from "../../../api-manage/hooks/react-query/google-api/useGetZone";
import useGetPlaceDetails from "../../../api-manage/hooks/react-query/google-api/useGetPlaceDetails";

import { useDispatch, useSelector } from "react-redux";
import { setWishList } from "../../../redux/slices/wishList";
import { useWishListGet } from "../../../api-manage/hooks/react-query/wish-list/useWishListGet";
import { getToken } from "../../../helper-functions/getToken";

import { useRef } from "react";
import { getLanguage } from "../../../helper-functions/getLanguage";
const HeroLocationForm = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState({lat:14.7805196,lng:-16.9493865});
  const [geoLocationEnable, setGeoLocationEnable] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("Q3J2+2MF, Thies, Senegal");
  const [showCurrentLocation, setShowCurrentLocation] = useState(false);
  const [zoneIdEnabled, setZoneIdEnabled] = useState(false);
  const [placeId, setPlaceId] = useState("");
  const [placeDescription, setPlaceDescription] = useState(undefined);
  const [placeDetailsEnabled, setPlaceDetailsEnabled] = useState(false);
  const [openModuleSelection, setOpenModuleSelection] = useState(false);
  const [pickLocation, setPickLocation] = useState(false);
  const dispatch = useDispatch();




  //****getting current location/***/
  const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
      isGeolocationEnabled: true,
    });





  const { data: places, isLoading } = useGetAutocompletePlace(
    searchKey,
    enabled
  );

  useEffect(() => {
    if (places) {
      setPredictions(places?.predictions);
    }
  }, [places]);

  const { data: geoCodeResults, isLoading: isLoadingGeoCode } = useGetGeoCode(
    location,
    geoLocationEnable
  );

  useEffect(() => {
    if (geoCodeResults?.results && showCurrentLocation) {
      setCurrentLocation(geoCodeResults?.results[0]?.formatted_address);
    }
  }, [geoCodeResults, location]);

  const { data: zoneData } = useGetZoneId(location, zoneIdEnabled);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (zoneData) {
        // dispatch(setZoneData(zoneData?.data?.zone_data));
        localStorage.setItem("zoneid", zoneData?.zone_id);
      }
    }
  }, [zoneData]);
  //
  // //********************Pick Location */
  const { isLoading: isLoading2, data: placeDetails } = useGetPlaceDetails(
    placeId,
    placeDetailsEnabled
  );
  //
  useEffect(() => {
    if (placeDetails) {
      setLocation(placeDetails?.result?.geometry?.location);
    }
  }, [placeDetails]);

  // const orangeColor = theme.palette.primary.main;

  useEffect(() => {
    if (placeDescription) {
      setCurrentLocation(placeDescription);
    }
  }, [placeDescription]);

  // get module from localstorage
  let selectedModule = undefined;
  if (typeof window !== "undefined") {
    selectedModule = localStorage.getItem("module");
  }
  const onSuccessHandler = (response) => {
    dispatch(setWishList(response));
  };
  const { refetch: wishlistRefetch, isLoading: isLoadingWishlist } =
    useWishListGet(onSuccessHandler);
  const setLocationEnable = async () => {
    if (!currentLocation) {
      toast.error(t("Location is required."), {
        id: "id",
      });
    }
    setGeoLocationEnable(true);
    setZoneIdEnabled(true);

    if (currentLocation && location) {
      if (getToken()) {
        wishlistRefetch();
      }
      localStorage.setItem("location", currentLocation);
      localStorage.setItem("currentLatLng", JSON.stringify(location));
      //handleModalClose();
      console.log("localStorage",localStorage);
      toast.success(t("New location has been set."));
      setOpenModuleSelection(true);
      // if (!selectedModule) {
      //   setOpenModuleSelection(true);
      // } else {
      //   router.push("/home");
      // }
    } else {
      toast.error(t("Location is required."), {
        id: "id",
      });
    }
  };

  const excludedDivRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      // setLocationEnable();
      localStorage.setItem("module", 1);
		// setOpenModuleSelection?.(false);
		router.push("/home");
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    // Handle clicks outside of excludedDivRef
    const handleClickOutside = (event) => {
      if (
        excludedDivRef.current &&
        !excludedDivRef.current.contains(event.target)
      ) {
        setPickLocation(false);
        // setClickedOutside(true);
      }
    };
    // setLocationEnable();
    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [excludedDivRef]);


  const lanDirection = getLanguage() ? getLanguage() : "ltr";

  return (
    <>
    <div></div>
    </>
  );
};
export default HeroLocationForm;
