import React from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { useStateProvider } from "../utils/StateProvider"

export default function NavBar() {
	const [{ userData }] = useStateProvider()

	return (
		<Container>
			<div className="search__bar">
				<FaSearch />
				<input type="text" placeholder="Artists, songs or podcasts" />
			</div>
			<div className="avatar">
				<a href="#">
					<CgProfile />
					<span>{userData?.name}</span>
				</a>
			</div>
		</Container>
	)
}

const Container = styled.div`
  background-color: black;
`

