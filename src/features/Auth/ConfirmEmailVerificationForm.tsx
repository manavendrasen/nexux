"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// hooks
import { useAlert } from "@/components/AlertProvider/AlertProvider";
import useAppwrite from "@/store/AppwriteStore";

// ui
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert/Alert";
import { Button } from "@/components/Button/Button";

export const ConfirmVerificationEmailForm = () => {
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);
  const { confirmVerificationEmail, authLoading } = useAppwrite();
  const { errorAlert, successAlert } = useAlert();
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit = async () => {
    if (searchParams.get("userId") && searchParams.get("secret")) {
      try {
        await confirmVerificationEmail(
          searchParams.get("userId")!,
          searchParams.get("secret")!
        );
        successAlert("Email verified successfully!");
        setIsVerificationComplete(true);

        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      } catch (error) {
        errorAlert("Uh oh! Something went wrong.");
      }
    }
  };

  if (searchParams.get("userId") && searchParams.get("secret")) {
    return (
      <div className="grid gap-6">
        {isVerificationComplete ? (
          <Alert>
            <AlertTitle>
              <span className="text-accent font-medium">Success</span>
            </AlertTitle>
            <AlertDescription>
              Your email has been verified successfully! You will be redirected
              to the dashboard in 3 seconds.
            </AlertDescription>
          </Alert>
        ) : (
          <Button
            disabled={authLoading || isVerificationComplete}
            type="submit"
            onClick={onSubmit}
          >
            {authLoading ? <p>Loading ...</p> : <p>Verify</p>}
          </Button>
        )}
      </div>
    );
  }

  return <p className="text-center">Missing credentials, try again later.</p>;
};
