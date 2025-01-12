import { cookies } from "next/headers";

export async function getAutoToken() {
  const cookieStore = await cookies();
  const autoToken = cookieStore.get("jwt")?.value;
  return autoToken;
}
