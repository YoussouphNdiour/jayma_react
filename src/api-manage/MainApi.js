import axios from "axios";
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const MainApi = axios.create({
  baseURL: baseUrl,
});
MainApi.interceptors.request.use(function (config) {
  let zoneid = "[1}";
  let token = undefined;
  let language = undefined;
  let currentLocation = {lat:14.7805196,lng:-16.9493865};
  let software_id = 33571750;
  let hostname = process.env.NEXT_CLIENT_HOST_URL;
  let moduleid = {id:"1"};

  if (typeof window !== "undefined") {
    zoneid = localStorage.getItem("zoneid");
    token = localStorage.getItem("token");
    language = JSON.parse(localStorage.getItem("language-setting"));
    currentLocation = {lat:14.7805196,lng:-16.9493865};
    moduleid = JSON.parse(localStorage.getItem("module"))?.id;
    // currentLocation= {lat:"14.7788532", lng: "-16.9476776"};
    // language = "en";
    // location= "Senegal";
    // moduleid= {id:1};z
    // zoneid= "[1]";
    // token = localStorage.getItem("token");
  }
  console.log('localStorage',localStorage);
  if (currentLocation) config.headers.latitude = currentLocation.lat;
  if (currentLocation) config.headers.longitude = currentLocation.lng;
  if (zoneid) config.headers.zoneid = zoneid;
  if (moduleid) config.headers.moduleId = moduleid;
  if (token) config.headers.authorization = `Bearer ${token}`;
  if (language) config.headers["X-localization"] = language;
  if (hostname) config.headers["origin"] = hostname;
  config.headers["X-software-id"] = software_id;
  config.headers["Accept"] = 'application/json'
  return config;
});
// MainApi.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response.status === 401) {
//             toast.error(t('Your token has been expired.please sign in again'), {
//                 id: 'error',
//             })
//             localStorage.removeItem('token')
//             store.dispatch(removeToken())
//         }
//         return Promise.reject(error)
//     }
// )

export default MainApi;
