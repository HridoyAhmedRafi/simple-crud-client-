import Link from "next/link"
import { UserCard } from "../../components/UserCard"

const UsersPage = async () => {
  const res = await fetch(`http://localhost:5000/users`)
  const users = await res.json()

  return (
    <div className="mx-auto my-10 max-w-7xl px-4">
      <h1 className="mb-3 text-center text-4xl">{users.length} Users</h1>
      <Link href={"/"}>
        <span className="rounded-2xl bg-gray-300 px-4 py-1 text-black">
          Home
        </span>
      </Link>

      <Link href={"/users/add-user"}>
        <span className="ml-2 cursor-pointer rounded-2xl bg-[#282828] px-4 py-1">
          Add a user
        </span>
      </Link>
      <div className="mt-5 grid grid-cols-3 items-center justify-between gap-4">
        {users.map((user) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
