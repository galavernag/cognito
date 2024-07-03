export interface Test {
  id: string;
  title: string;
  assignedTo: string[];
  createdAt: string | Date;
  createdBy: {
    name: string;
    avatar: string;
  };
}
