import { cookies } from "next/headers";

export async function getAuthToken() {
  const cookieStore = await cookies();
  const autoToken = cookieStore.get("jwt")?.value;
  return autoToken;
}
