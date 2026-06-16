export interface ProjectLinks {
  githubUrl: string;
  demoUrl: string;
}

export interface SubmissionFormData {
  projectTitle: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  techStack: string[];
  files: string[];
}

export interface SubmissionStatus {
  submitted: boolean;
  submittedAt?: string;
}

export interface TechStackOption {
  id: string;
  label: string;
}

export interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
}