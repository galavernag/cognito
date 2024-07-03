export interface Test {
  id: string;
  title: string;
  assignedto: string[];
  createdAt: string | Date;
  createdBy: {
    name: string;
    avatar: string;
  };
}
