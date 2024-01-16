import { IsLoggedIn } from "../_is-logged-in";

export default function Dashboard() {
  return (
    <div>
      Home
      <IsLoggedIn />
    </div>
  );
}
