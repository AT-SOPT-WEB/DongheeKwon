import { useState } from "react";

export const useStep = (initialStep = 1) => {
  const [step, setStep] = useState(initialStep);
  const next = () => setStep((s) => s + 1);
  return { step, next };
};
