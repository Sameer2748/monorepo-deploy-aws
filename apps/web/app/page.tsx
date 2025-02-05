import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

const client = require("@repo/db/client");

type user = {
  id: string;
  username: string;
  email: string;
  password: string;
} | null;
export default async function Home() {
  const user: user = await client.user.findFirst();
  return <div>hello {user?.username} Sameer</div>;
}
