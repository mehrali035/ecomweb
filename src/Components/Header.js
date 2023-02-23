import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Nav from "./Nav"


const Header = () => {
    return (
        <>
            <MainHeader>
                <NavLink to="/">
                    <img src="./images/lo.png" alt="" />
                </NavLink>
                <Nav />
            </MainHeader>
        </>
    )
}

const MainHeader = styled.header`

padding: 0 1.8rem;
height: 4rem;
background-color:${({ theme }) => theme.colors.bg};
display:flex;
justify-content: space-between;
align-items:center;
position: relative;

.logo {
    height: 10rem;
    
}
`

export default Header
