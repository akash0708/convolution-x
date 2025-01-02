import EventRegistrationForm from "@/components/EventRegistrationForm";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full h-screen flex items-center justify-center ">
        <EventRegistrationForm />
      </div>
    </Suspense>
  );
};

export default page;
