import { NextResponse } from "next/server"
import { sendConsultationNotification } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { firstName, lastName, email, company, role, interests, message } = body

    if (!firstName || !lastName || !email || !company || !role || !interests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    await sendConsultationNotification({
      firstName,
      lastName,
      email,
      company,
      role,
      interests,
      message,
    })

    return NextResponse.json({
      success: true,
      message: "Consultation request received successfully",
    })
  } catch (error) {
    console.error("Error processing consultation request:", error)
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 }
    )
  }
}
