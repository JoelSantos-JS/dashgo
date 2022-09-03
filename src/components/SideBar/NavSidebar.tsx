import { Stack } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboard2Line, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import NavLink from './NavLink'
import NavSection from './NavSection'

function NavSidebar() {
  return (
   <>

<Stack spacing='12' align='flex-start'>
               <NavSection title='GERAL'>
               <NavLink title='Dashboard' icons={RiDashboard2Line} href='/dashboard'/>
            <NavLink icons={RiContactsLine} title='Usuarios' href='/users'/>
            
           
            </NavSection>
           

           <NavSection title='AUTOMAÇAO'>
          <NavLink icons={RiInputMethodLine} title='Automaçao' href='/automation'/>
          <NavLink icons={RiGitMergeLine} title='Formularios' href='/forms'/>
           </NavSection>

           </Stack>
   </>
  )
}

export default NavSidebar