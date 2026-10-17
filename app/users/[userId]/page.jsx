import { Card, CardFooter } from "@/components/ui/card"
import Link from "next/link"

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const user = await res.json()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Link href={"/users"}>
        <span className="rounded-2xl bg-gray-300 px-4 py-1 text-black">
          Back
        </span>
      </Link>
      <Card size="sm" className="mx-auto w-full max-w-xs">
        <CardFooter className="flex-col gap-2">
          <h1 size="sm" className="w-full">
            {user.name}
          </h1>
          <h1
            variant="outline"
            size="sm"
            className="w-full rounded-2xl border bg-[##2F2F2F] p-1 px-4"
          >
            {user.email}
          </h1>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserDetailsPage
