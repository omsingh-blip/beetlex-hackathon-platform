import { create } from "zustand";

interface RegistrationData {
  name: string;
  email: string;
  college: string;

  teamName: string;
  teamSize: number;
}

interface RegistrationStore extends RegistrationData {
  step: number;

  nextStep: () => void;
  previousStep: () => void;

  updateField: (
    field: keyof RegistrationData,
    value: string | number,
  ) => void;

  reset: () => void;
}

const initialState: RegistrationData = {
  name: "",
  email: "",
  college: "",

  teamName: "",
  teamSize: 1,
};

export const useRegistrationStore =
  create<RegistrationStore>((set) => ({
    ...initialState,

    step: 1,

    nextStep: () =>
      set((state) => ({
        step: Math.min(state.step + 1, 4),
      })),

    previousStep: () =>
      set((state) => ({
        step: Math.max(state.step - 1, 1),
      })),

    updateField: (field, value) =>
      set({
        [field]: value,
      }),

    reset: () =>
      set({
        ...initialState,
        step: 1,
      }),
  }));