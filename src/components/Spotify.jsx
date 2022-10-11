import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import axios from "axios"

import SideBar from "./SideBar"
import NavBar from "./NavBar"
import Body from "./Body"
import Footer from "./Footer"
import { useStateProvider } from "../utils/StateProvider"
import { reducerCases } from "../utils/Constants"

export default function Spotify() {
	const [{ token }, dispatch] = useStateProvider()
	const bodyRef = useRef()
	const [navBackground, setNavBackground] = useState(false)
	const [headerBackground, setHeaderBackground] = useState(false)
	const bodyScrolled = () => {
		bodyRef.current.scrollTop >= 30
			? setNavBackground(true)
			: setNavBackground(false)
		bodyRef.current.scrollTop >= 268
			? setHeaderBackground(true)
			: setHeaderBackground(false)
	}

	useEffect(() => {
		const getUserData = async () => {
			const response = await axios.get("https://api.spotify.com/v1/me", {
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				}
			})
			const data = response.data
			const userData = {
				userId: data.id,
				userName: data.display_name,
			};
			dispatch({ type: reducerCases.SET_USER, userData })
		}
		getUserData();
	}, [dispatch, token])

	return (
		<Container>
			<div className="spotify__body">
				<SideBar />
				<div className="body" ref={bodyRef} onScroll={bodyScrolled}>
					<NavBar navBackground={navBackground} />
					<div className="body__content">
						<Body headerBackground={headerBackground} />
					</div>
				</div>
			</div>
			<div className="spotify__footer">
				<Footer />
			</div>
		</Container>
	)
}

const Container = styled.div`
	max-width: 100vw;
	max-height: 100vh;
	overflow: hidden;
	display: grid;
	grid-template-rows: 85vh 15vh;

	.spotify__body {
		display: grid;
		grid-template-columns: 15vw 85vw;
		height: 100%;
		width: 100%;
		background: linear-gradient(transparent, rgba(0,0,0,1));
		background-color: rgb(22, 87, 100);

		.body {
			height: 100%;
			width: 100%;
			overflow: auto;
		}
	}
`
