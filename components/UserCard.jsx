import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"

export function UserCard({ user }) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardFooter className="flex-col gap-2">
        <Button size="sm" className="w-full cursor-pointer">
          {user.name}
        </Button>
        <Button variant="outline" size="sm" className="w-full cursor-pointer">
          {user.email}
        </Button>
      </CardFooter>
    </Card>
  )
}
