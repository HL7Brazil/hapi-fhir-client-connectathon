const GOInteropDotEnv = {
    NODE_ENV: process.env.REACT_APP_NODE_ENV,
    FHIR_BASE_URL: (process.env.REACT_APP_NODE_ENV === "production" ? process.env.REACT_APP_FHIR_BASE_URL_PROD : process.env.REACT_APP_FHIR_BASE_URL_TEST),
}
export default GOInteropDotEnv;