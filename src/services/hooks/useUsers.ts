import { useQuery } from "react-query";
import { api } from "../api";


type User = {
    name: string;
    id: string;
    email: string;
    createdAt: string

}

 async function getUsers ()  {
      
    const {data} = await api.get('users')
   

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createAt).toLocaleDateString('pt-BR',{
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })

    return users

}

export function useUsers()  {
    return (
        useQuery<User[]>('users' ,getUsers , {
          staleTime: 1000 * 5
        })
    
    )
}