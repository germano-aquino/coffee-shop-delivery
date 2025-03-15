import { ErrorText } from "./styles"


interface Error {
  message?: string
}

export function DisplayError(error: Error | undefined) {
  if (error) {
    return <ErrorText>{error.message}</ErrorText>
  }
}