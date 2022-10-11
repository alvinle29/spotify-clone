import React from "react"
import styled from "styled-components"

import { FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { useStateProvider } from "../utils/StateProvider"

export default function NavBar({ navBackground }) {
	const [{ userData }] = useStateProvider()

	return (
		<Container navBackground={navBackground}>
			<div className="search__bar">
				<FaSearch />
				<input type="text" placeholder="Artists, songs or podcasts" />
			</div>
			<div className="avatar">
				<a href="#">
					<CgProfile />
					<span>{userData?.userName}</span>
				</a>
			</div>
		</Container>
	)
}

const Container = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	height: 18vh;
	transition: 0.3s ease-in-out;
	background-color: ${({ navBackground }) => navBackground
		? "rgba(0,0,0,0.7)" : "none"};

	.search__bar{
		background-color: white;
		width: 30%;
		padding: 0.4rem 1rem;
		border-radius: 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		input {
			border: none;
			height: 5vh;
			&:focus{
				outline: none;
			}
		}
	}

	.avatar {
		background-color: black;
		padding: 0.5rem 0.3rem;
		border-radius: 2rem;
		padding-right: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		a {
			display: flex;
			justify-content: center;
			gap: 0.5rem;
			text-decoration: none;
			color: white;
			align-items: center;
			font-weight: bold;
			svg {
				font-size: 1rem;
			}
		}
	}
`

