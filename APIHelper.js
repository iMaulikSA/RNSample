// a library to wrap and simplify api calls
import apisauce from 'apisauce'
// import AsyncStorage from '@react-native-community/async-storage';

const BASE_URL = 'http://35.160.197.175:3006/api/v1/'  //live

// our "constructor"
const create = (baseURL = BASE_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 20 second timeout...
    timeout: 20000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const loginUser = (email, password) => api.post('login', { email, password })
  const registerUser = (firstName, surname, email, password) => api.post('Constants.ENDPOINT.register', { first_name: firstName, email, surname, password })
  // ------
  // STEP 3
  // ------
  // N7078YM09
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    loginUser,
    registerUser
  }
}

const createSecure = (baseURL = BASE_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'Connection': 'close'
    },
    // 30 second timeout...
    timeout: 30000
  })

  api.addAsyncRequestTransform(request => async () => {
    // const token = await AsyncStorage.getItem(Constants.KEY_TOKEN)
    console.log('token ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s')
    request.headers['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s'
  })


  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const getFoodFeed = () => api.get('recipe/feeds')
  const getVideo = () => api.get('Constants.ENDPOINT.video')
  const myProfile = (firstName, surname, email) => api.post('Constants.ENDPOINT.myProfile', { first_name: firstName, email, surname })

  // ------
  // STEP 3
  // ------
  // N7078YM09
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getFoodFeed,
    getVideo,
    myProfile,
  }
}

// let's return back our create method as the default.
export default {
  create,
  createSecure
}
