import Link from "next/link";
import { useContext } from "react";
import { RoleContext } from "./LoginContext";

export default function Mypage() {
  const { role, setRole } = useContext(RoleContext);
  return (
    <div>
      {role === "COUNSELOR" ? (<><Link href="/consultantsMypage">Mypage</Link></>) : (<></>)}
    </div>
  );
}