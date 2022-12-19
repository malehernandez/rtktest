import { useAppSelector } from "../../app/hooks"

export default function UserView() {
  const userList = useAppSelector(state => state.users.userList)

  return (
    <>
      <ul>
        {userList.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  )
}
