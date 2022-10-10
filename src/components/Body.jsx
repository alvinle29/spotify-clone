import React, { useEffect } from "react"
import styled from "styled-components"
import { AiFillClockCircle } from "react-icons/ai"
import { useStateProvider } from "../utils/StateProvider"
import axios from "axios"
import { reducerCases } from "../utils/Constants"

export default function Body() {
	const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider()
	useEffect(() => {
		const getInitialPlaylist = async () => {
			const response = await axios.get(
				`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "application/json",
					}
				}
			)
			const selectedPlaylist = {
				id: response.data.id,
				name: response.data.name,
				description: response.data.description.startsWith("<a")
					? ""
					: response.data.description,
				image: response.data.images[0].url,
				tracks: response.data.tracks.items.map(({ track }) => ({
					id: track.id,
					name: track.name,
					artists: track.artists.map((artist) => artist.name),
					image: track.album.images[2].url,
					duration: track.duration_ms,
					album: track.album.name,
					context_uri: track.album.uri,
					track_number: track.track_number,
				}))
			}
			dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist })
		}
		getInitialPlaylist()
	}, [token, dispatch, selectedPlaylistId])

	return (
		<Container>
			{selectedPlaylist && (
				<>
					<div className="playlist">
						<div className="image">
							<img src={selectedPlaylist.image} alt="selectedPlaylist" />
						</div>
						<div className="details">
							<span className="type">PLAYLIST</span>
							<h1 className="title">{selectedPlaylist.name}</h1>
							<p className="description">{selectedPlaylist.description}</p>
						</div>
					</div>
					<div className="list">
						<div className="header_row">
							<div className="col">
								<span>#</span>
							</div>
							<div className="col">
								<span>TITLE</span>
							</div>
							<div className="col">
								<span>ALBUM</span>
							</div>
							<div className="col">
								<span><AiFillClockCircle /></span>
							</div>
						</div>
						<div className="tracks">
							{selectedPlaylist.tracks.map((
								{
									id,
									name,
									artists,
									image,
									duration,
									album,
									context_uri,
									track,
								}, index) => {
								return (
									<div className="row" key={id}>
										<div className="col">
											<span>{index + 1}</span>
										</div>
										<div className="col detail">
											<img src={image} alt="track"></img>
											<div className="info">
												<span className="name">{name}</span>
												<span>{artists}</span>
											</div>
										</div>
										<div className="col">
											<span>{album}</span>
										</div>
										<div className="col">
											<span>{duration}</span>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</>
			)
			}
		</Container>
	)
}

const Container = styled.div`
	background: linear-gradient(transparent, rgba(0,0,0,1));
	background-color: rgb(22, 87, 100);

	.playlist {
		margin: 0 2 rem;
		display: flex;
		align-items: center;
		gap: 2rem;
		.image {
			img {
				height: 15rem;
				box-shadow: rgba(0,0,0,0.1) 0px 25px 50px -12px;
			}
		}
		.details {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			color: #e0dede;
			.title {
				color: white;
				font-size: 4rem;
			}
		}
	}
			`
