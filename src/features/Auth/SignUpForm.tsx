"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/Alert/Alert";
import { Button } from "@/components/Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/Form/Form";
import { Input } from "@/components/Input/Input";

import { useAlert } from "@/components/AlertProvider/AlertProvider";
import useAppwrite from "@/store/AppwriteStore";

export const SignUpForm = () => {
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const { signUp, login, sendVerificationEmail, authLoading } = useAppwrite();
  const { errorAlert } = useAlert();

  const formSchema = z.object({
    name: z.string().min(5).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      signUp(values, () => {
        login(values, () => {
          sendVerificationEmail();
          setIsSignUpComplete(true);
        });
      });
    } catch (error) {
      console.log(error);
      errorAlert("Uh oh! Something went wrong.");
    }
  };

  return (
    <>
      {isSignUpComplete ? (
        <>
          <div className="grid gap-6 x">
            <Alert>
              <AlertTitle>
                <span className="text-accent font-medium">Success</span>
              </AlertTitle>
              <AlertDescription>
                Please check your email to verify your account.
              </AlertDescription>
            </Alert>
          </div>
        </>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="john.doe@gmail.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-6">
                <Button disabled={authLoading} type="submit">
                  {authLoading ? <p>Loading ...</p> : <p>Sign Up</p>}
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
    </>
  );
};
