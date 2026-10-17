"use client"

import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import UpdateUserDialouge from "./UpdateUserDialouge"

export function UserCard({ user }) {
  const { _id } = user
  const router = useRouter()

  const hanldeDeleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })

    const afterDelete = await res.json()

    if (afterDelete.deletedCount > 0) {
      console.log("User deleted successfully")
      router.refresh()
    }
  }

  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardFooter className="flex-col gap-2">
        <h1 size="sm" className="w-full cursor-pointer">
          {user.name}
        </h1>
        <h1
          variant="outline"
          size="sm"
          className="w-full cursor-pointer rounded-2xl border bg-[##2F2F2F] p-1 px-4"
        >
          {user.email}
        </h1>

        <div className="flex items-center justify-between px-4">
          <Link href={`/users/${user._id}`}>
            <Button className="cursor-pointer">View Details</Button>
          </Link>
          <UpdateUserDialouge user={user}></UpdateUserDialouge>
          <Button
            onClick={() => hanldeDeleteUser(_id)}
            variant="destructive"
            className="cursor-pointer"
          >
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
