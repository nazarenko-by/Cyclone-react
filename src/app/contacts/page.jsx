"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setBaseState } from "@/store/baseSlice"

import Contacts from "@/features/contacts/components/Contacts"

export default function ContactsPage() {
	const dispatch = useDispatch()

	useEffect(() => {
		setTimeout(() => {
			dispatch(setBaseState({ key: "preloader", value: false }))
		}, 500)
	}, [])
	return <Contacts />
}
