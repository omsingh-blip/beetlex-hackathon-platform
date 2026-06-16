type StepperProps = {
  currentStep: number;
  steps: string[];
};

export function Stepper({
  currentStep,
  steps,
}: StepperProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      {steps.map((step, index) => {
        const active = index + 1 <= currentStep;

        return (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            <div className="flex flex-col items-center">
              <div
                className={`
                  flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold
                  ${
                    active
                      ? "border-primary bg-primary text-black"
                      : "border-white/20 bg-white/5"
                  }
                `}
              >
                {index + 1}
              </div>

              <span className="mt-2 text-xs">
                {step}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`
                  mx-2 h-[2px] flex-1
                  ${
                    index + 1 < currentStep
                      ? "bg-primary"
                      : "bg-white/10"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}