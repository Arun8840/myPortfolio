"use server"

export async function sendMail(prevState: any, formData: FormData) {
  try {
    const name = formData?.get("name") as string | null
    const email = formData?.get("email") as string | null
    const message = formData?.get("message") as string | null
    formData.append("access_key", "474150b8-2e92-4813-9f88-f18fb8b6909c")

    const object = {
      name,
      email,
      message,
      access_key: "474150b8-2e92-4813-9f88-f18fb8b6909c",
    }
    const json = JSON.stringify(object)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      return res
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    throw new Error("Submission failed")
  }
}
