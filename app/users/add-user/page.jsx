"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

const AddUser = () => {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())

    const res = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })

    const afterSubmit = await res.json()
    if (afterSubmit.insertedId) {
      console.log("New user added successfully")
      redirect("/")
    }
  }
  return (
    <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center px-4">
      <div className="w-full">
        <Link
          href="/users"
          className="inline-block rounded-2xl bg-[#282828] px-4 py-2 text-white"
        >
          Back
        </Link>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-8 w-full max-w-md rounded-xl border p-6"
      >
        <h1 className="mb-6 text-2xl font-semibold">Add User</h1>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
          </Field>

          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              name="email"
              type="email"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>

          <Field orientation="horizontal" className="justify-end">
            <Button className="cursor-pointer" type="reset" variant="outline">
              Reset
            </Button>
            <Button className="cursor-pointer" type="submit">
              Add User
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default AddUser
