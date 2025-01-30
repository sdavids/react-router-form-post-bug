export async function action({ request }) {
  let content = (await request.formData()).get("content") ?? "";
  let response =
    content.trim() === ""
      ? { error: "content cannot be empty" }
      : { message: `${content.toUpperCase()}` };
  console.log(response);
  return response;
}
