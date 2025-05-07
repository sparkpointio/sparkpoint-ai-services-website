import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { buttonVariants } from '@/components/variants/button-variants';
import Image from 'next/image'
import { rocket } from '@/lib/assets';
import { FormEvent, useState } from "react";

export function Waitlist({ children }: { children: React.ReactNode }) {
  const [statusMessage, setStatusMessage] = useState("");
  const [email, setEmail] = useState(""); // State to store email input

  function handleJoinWaitlist(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatusMessage("Please provide a valid email address.");
      return;
    }

    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        setStatusMessage("Thank you for joining our waitlist!");
        setEmail(''); // Clear the email field after successful submission
      } else {
        setStatusMessage(data.error || "An error occurred.");
      }
    })
    .catch(() => {
      setStatusMessage("Failed to connect to the server. Please try again.");
    });
  }

  const handleDialogClose = () => {
    setStatusMessage(""); // Clear status message when dialog is closed
    setEmail(''); // Clear the email field when dialog is closed
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-[90%] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-1 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg sm:rounded-lg sm:p-6 p-4">
          <Dialog.Close
              onClick={handleDialogClose} // Reset email and status message when dialog closes
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: 'absolute top-4 right-4 w-16 active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-white hover:shadow-[0.25rem_0.25rem_#000] hover:bg-red-500 active:translate-x-0 active:translate-y-0 active:shadow-none button-2',
              })}
          >
            Close
          </Dialog.Close>
          <div className="max-w-md text-center flex flex-col items-center">
            <Image
              src={rocket}
              alt="Dialog Image"
              width={100}
              height={100}
              className="mb-4"
            />
            <Dialog.Title className="text-lg font-bold mb-2 text-custom-1">Join our waitlist and receive<br/> a sparking gift from us</Dialog.Title>
            <Dialog.Description className="text-center w-full p-0 text-custom-1">
              Sign up today and get the latest inside scoop
            </Dialog.Description>
            <Form.Root className="w-full flex flex-col items-center" onSubmit={handleJoinWaitlist}>
              <Form.Field className="w-full mb-4" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    width: "100%"
                  }}
                >
                </div>
                <Form.Control asChild>
                  <input
                      className="w-full h-12 rounded-3xl text-lg border-black border text-center mt-2 sm:mt-4"
                      type="email"
                      name="email" // Make sure to specify the 'name' to bind with Form
                      value={email} // Controlled input
                      onChange={(e) => setEmail(e.target.value)} // Handle email change
                      required
                      placeholder='Enter Your Email Here'
                  />
                </Form.Control>
                <Form.Message className="text-sm text-red-500" match="valueMissing">
                  Please enter your email
                </Form.Message>
                <Form.Message className="text-sm text-red-500" match="typeMismatch">
                  Please provide a valid email
                </Form.Message>
              </Form.Field>
              <Form.Submit className={buttonVariants({ variant: "outline", size: "md", className: 'bg-white border w-full border-black active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] active:translate-x-0 active:translate-y-0 active:shadow-none shrink-0 button-1' })}>
                Confirm
              </Form.Submit>
            </Form.Root>
            {statusMessage && (
                <p
                    className={`mt-4 ${
                        statusMessage.includes("error") || statusMessage.includes("Failed")
                            ? "text-red-500"
                            : "text-green-600"
                    }`}
                >
                  {statusMessage}
                </p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}