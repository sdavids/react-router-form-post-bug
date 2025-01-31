import { data } from "react-router";

export async function action({ request }) {
  let content = (await request.formData()).get("content") ?? "";
  let response =
    content.trim() === ""
      ? { error: "content cannot be empty" }
      : { message: `${content.toLowerCase()}` };
  console.log(response);
  return data(response, { status: 201 });
}
