import { Test } from "./Test";

export interface Student {
  id: string;
  name: string;
  assignedTo: string[];
  grades: {
    test: Test;
    grade: number;
  }[];
}
