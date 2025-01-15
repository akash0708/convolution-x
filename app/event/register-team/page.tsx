import Loading from "@/app/loading";
import EventRegistrationForm from "@/components/EventRegistrationForm";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="h-[100svh] bg-no-repeat bg-center bg-cover flex justify-center bg-black items-center "
      style={{ backgroundImage: `url('/RegisterBg.webp')` }}
      >
        <EventRegistrationForm />
      </div>
    </Suspense>
  );
};

export default page;
