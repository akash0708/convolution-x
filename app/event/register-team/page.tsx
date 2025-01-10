import EventRegistrationForm from "@/components/EventRegistrationForm";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-[100svh] bg-no-repeat bg-center bg-cover flex justify-center bg-black items-center "
      style={{ backgroundImage: `url('/RegisterBg.png')` }}
      >
        <EventRegistrationForm />
      </div>
    </Suspense>
  );
};

export default page;
