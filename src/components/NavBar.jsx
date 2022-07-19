import React from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { useStateProvider } from "../utils/StateProvider"

export default function NavBar() {
	const [{ userData }] = useStateProvider()
	console.log(userData)
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
  display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	height: 18vh;
	transition: 0.3s ease-in-out;
	background-color: none;

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
		display: flex;
		justify-content: center;
		align-items: center;
		a{
			display: flex;
			justify-content: center;
		}
	}
`

