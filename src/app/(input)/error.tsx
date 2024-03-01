"use client";
import Image from "next/image";
import { Button } from "@/components/common/button/button";
import { useRouter } from "next/navigation";
import ErrorImage from "@/app/(main)/_assets/error.png";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.replace("/");
  };

  return (
    <div className="flex size-full flex-col items-center justify-center gap-6">
      <Image src={ErrorImage} alt="Error Occurred" width={160} height={160} />
      <div className="flex flex-col items-center">
        <h2 className=" text-h5 text-grey-900">Something went wrong!</h2>
        <h2 className=" text-h5 text-grey-900">Please Try Again</h2>
      </div>
      <Button className="rounded-lg" variant={"primary"} size={"fit"} onClick={handleButtonClick}>
        Go To Home
      </Button>
    </div>
  );
}
