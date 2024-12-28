import React from "react";

export default async function Page() {
  await new Promise((r)=>setTimeout(r, 2000));
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src="/Soumya_s_Resume_TCS.pdf"
        title="Resume"
      />
    </div>
  );
}
