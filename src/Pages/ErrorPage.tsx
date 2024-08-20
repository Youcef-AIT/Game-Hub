import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom"


const ErrorPage = () => {

  const error = useRouteError();

  return (
    <>
    <Heading>Oops</Heading>
    <Text>{isRouteErrorResponse(error) ? 'This Page Is Invalid' : "SomeThing Went Wrong²"}</Text>
    </>
  )
}

export default ErrorPage