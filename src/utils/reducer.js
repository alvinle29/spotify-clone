import { reducerCases } from "./Constants"

export const initialState = {
  token: null,
  playlists: [],
  userData: null,
  selectedPlaylistId: "5qifJKSgRdQ9XK4GLsyAvF",
  selectedPlaylist: null,
  currentlyPlaying: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      }
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      }
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userData: action.userData,
      }
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist
      }
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying
      }
    }
    default:
      return state
  }
}

export default reducer