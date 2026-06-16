import { Stepper } from "@/components/ui/Stepper";

import { PersonalInfoStep } from "@/components/registration/PersonalInfoStep";
import { TeamInfoStep } from "@/components/registration/TeamInfoStep";
import { ReviewStep } from "@/components/registration/ReviewStep";
import { SuccessStep } from "@/components/registration/SuccessStep";

import { useRegistrationStore } from "@/store/registrationStore";

export default function RegistrationPage() {
  const {
    step,

    name,
    email,
    college,

    teamName,
    teamSize,

    nextStep,
    previousStep,
    updateField,
  } = useRegistrationStore();

  const steps = [
    "Personal",
    "Team",
    "Review",
    "Success",
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-center text-4xl font-bold">
          Hackathon Registration
        </h1>

        <p className="mb-10 text-center text-muted-foreground">
          Complete your registration in a few simple steps.
        </p>

        <Stepper
          currentStep={step}
          steps={steps}
        />

        <div className="mt-10">
          {step === 1 && (
            <PersonalInfoStep
              name={name}
              email={email}
              college={college}
              onChange={(field, value) =>
                updateField(field, value)
              }
              onNext={nextStep}
            />
          )}

          {step === 2 && (
            <TeamInfoStep
              teamName={teamName}
              teamSize={teamSize}
              onChange={(field, value) =>
                updateField(field, value)
              }
              onNext={nextStep}
              onBack={previousStep}
            />
          )}

          {step === 3 && (
            <ReviewStep
              name={name}
              email={email}
              college={college}
              teamName={teamName}
              teamSize={teamSize}
              onBack={previousStep}
              onSubmit={nextStep}
            />
          )}

          {step === 4 && <SuccessStep />}
        </div>
      </div>
    </div>
  );
}