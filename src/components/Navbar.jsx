import { NavLink, Outlet } from 'react-router-dom'
import { RiUser3Fill } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";
import { RiStarFill } from 'react-icons/ri';
import { colors } from '../styles/colors';

export const Navbar = () => {
  return (
    <>
      <Outlet />
      <nav style={{
        width: '360px',
        padding: '0.5rem 1rem',
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        boxShadow: '0px -2px rgba(0,0,0,0.25)'
      }}>
        <NavLink style={({ isActive }) => {
          return {
            color: isActive ? colors.gray.medium : colors.gray.light
          }
        }} to={'/profile'}>
          <RiUser3Fill size={50} />
        </NavLink>
        <NavLink style={({ isActive }) => {
          return {
            color: isActive ? colors.gray.medium : colors.gray.light
          }
        }} to={'/'}>
          <RiSearchFill size={50} />
        </NavLink>
        <NavLink style={({ isActive }) => {
          return {
            color: isActive ? colors.gray.medium : colors.gray.light
          }
        }} to={'/favorites'}>
          <RiStarFill size={50} />
        </NavLink>
      </nav>
    </>
  )
}
