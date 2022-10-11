import React, {useEffect} from 'react'
import styled from "styled-components"
import axios from "axios"

import { useStateProvider } from "../utils/StateProvider"
import { reducerCases } from "../utils/Constants";

export default function CurrentTrack() {
  const [{ token, playlists }, dispatch] = useStateProvider()

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          }
        }
      )
      console.log(response)
      //dispatch({ type: reducerCases.SET_USER, playlists })
    }

    getCurrentTrack();
  }, [token, dispatch])

  return (
    <Container>CurrentTrack</Container>
  )
}

const Container = styled.div ``
