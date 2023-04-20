import { useInput } from "./useInput";

export function useHandleSubmit() {
  const name = useInput("");
  const surname = useInput("");
  const email = useInput("");
  console.log(
    "name",
    name.value,
    "surname",
    surname.value,
    "email",
    email.value
  );

  const handleSubmit = async (event) => {
    console.log(
      "name",
      event.target.name.value,
      "surname",
      event.target.surname.value,
      "email",
      event.target.email.value
    );
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      email: event.target.email.value,
    };

    console.log(data);
    const endpoint = "/api/hello";
    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    alert(`Thank you ${result.data} for joining us!`);
    console.log(typeof result.data);
  };
  return { handleSubmit };
}
