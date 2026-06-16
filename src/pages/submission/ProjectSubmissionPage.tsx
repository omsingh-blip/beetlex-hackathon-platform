import { DashboardShell } from "@/components/ui/DashboardShell";
import SubmissionForm from "@/components/submission/SubmissionForm";

export default function ProjectSubmissionPage() {
  return (
    <DashboardShell
      title="Project Submission"
      description="Submit your hackathon project for judging and evaluation."
    >
      <SubmissionForm />
    </DashboardShell>
  );
}