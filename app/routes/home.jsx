import { useFetcher } from "react-router";

export default function Home() {
  let upperFetcher = useFetcher();
  let lowerFetcher = useFetcher();
  return (
      <div>
        <upperFetcher.Form method="post" action="/to-uppercase">
          <input type="text" name="content" />
          <button>To Uppercase...</button>
          {upperFetcher.state !== "idle" && <p>Fetching...</p>}
          {upperFetcher.data?.message && <p>{upperFetcher.data.message}</p>}
          {upperFetcher.data?.error && (
            <p style={{ color: "red" }}>{upperFetcher.data.error}</p>
          )}
        </upperFetcher.Form>
        <lowerFetcher.Form method="post" action="/to-lowercase">
            <input type="text" name="content" />
            <button>To Lowercase...</button>
            {lowerFetcher.state !== "idle" && <p>Fetching...</p>}
            {lowerFetcher.data?.message && <p>{lowerFetcher.data.message}</p>}
            {lowerFetcher.data?.error && (
                <p style={{ color: "red" }}>{lowerFetcher.data.error}</p>
            )}
        </lowerFetcher.Form>
    </div>
  );
}
