import { Form, redirect, useActionData } from "react-router-dom";
const Contact = () => {
  const Errordata = useActionData();
  return (
    <>
      <h3>Contact Us</h3>
      <Form method="post" action="/contact">
        <label>
          <span>Your Email: </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your Message: </span>
          <input name="message" required />
        </label>
        <button>Submit</button>
        {Errordata && Errordata.error}
      </Form>
    </>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  console.log(data);
  const submission = {
    email: data.get("email"),
    message: data.get("message")
  };

  console.log(submission);
  if (submission.message.length < 5) {
    return { error: "Message must be 5 charecter long" };
  }
  return redirect("/");
};
