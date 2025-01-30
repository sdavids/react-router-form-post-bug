import { useFetcher } from "react-router";

export default function Home() {
  let fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action="/to-uppercase">
      <input type="text" name="content" />
      <button>To Uppercase...</button>
      {fetcher.state !== "idle" && <p>Fetching...</p>}
      {fetcher.data?.message && <p>{fetcher.data.message}</p>}
      {fetcher.data?.error && (
        <p style={{ color: "red" }}>{fetcher.data.error}</p>
      )}
    </fetcher.Form>
  );
}
