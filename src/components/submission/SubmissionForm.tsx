import { useState } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import ProjectLinks from "./ProjectLinks";
import TechStackSelector from "./TechStackSelector";
import UploadSection from "./UploadSection";
import SubmissionSuccess from "./SubmissionSuccess";

export default function SubmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <SubmissionSuccess />;
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Project Title
          </label>

          <input
            type="text"
            placeholder="Enter project title"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Project Description
          </label>

          <textarea
            rows={5}
            placeholder="Describe your project..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />
        </div>

        <ProjectLinks />

        <TechStackSelector />

        <UploadSection />

        <Button
          className="w-full"
          onClick={() => setSubmitted(true)}
        >
          Submit Project
        </Button>
      </div>
    </Card>
  );
}