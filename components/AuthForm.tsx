"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  //   FormControl,
  //   FormDescription,
  //   FormField,
  //   FormItem,
  //   FormLabel,
  //   FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { email } from "zod/v4-mini";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFromSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(5),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {

     const router = useRouter();

  const formSchema = authFromSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
          toast.success("Account created successfully, plz SignIn")
        console.log(`SignUp -: ${values}`);
        router.push("/sign-in");
      } else {
        toast.success("SignIn successfully")
        console.log(`SignIn -: ${values}`);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(`There was an error -: ${err}`);
    }
    console.log(values);
  }

  const isSignedIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flow-row gap-2 justify-center">
          <Image src={"/logo.svg"} alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Lets Prepare</h2>
        </div>
        <h3 className="text-center">Practice Job Interviews with Ai</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6  w-full mt-4 form"
          >
            {!isSignedIn && (
              <FormField
                control={form.control}
                name={"name"}
                label="Name"
                placeholder="Your Name *"
                type="text"
              />
            )}
            <FormField
                control={form.control}
                name={"email"}
                label="Email"
                placeholder="Your Email Address *"
                type="email"
              />
            <FormField
                control={form.control}
                name={"password"}
                label="Password"
                placeholder="Your Password *"
                type="password"
              />
            <Button type="submit" className="btn">
              {isSignedIn ? "Sign-In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {!isSignedIn ? "Already have an account" : "No account yet"}
          <Link
            href={!isSignedIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignedIn ? "Sign-In" : "Sign-Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
