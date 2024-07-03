import { Student } from "@/types/Student";
import { Test } from "@/types/Test";
import { title } from "process";

export const schools = [
  {
    name: "Escola 1",
    slug: "escola-1",
    amountOfStudents: 100,
    amountOfTeacher: 100,
    lastActivity: {
      by: {
        name: "Guilherme Galaverna",
        avatar: "https://github.com/galavernag.png",
      },
      action: "Criou uma nova avaliação",
    },
  },
  {
    name: "Escola 2",
    slug: "escola-2",
    amountOfStudents: 100,
    amountOfTeacher: 100,
    lastActivity: {
      by: {
        name: "Diego Fernandes",
        avatar: "https://github.com/diego3g.png",
      },
      action: "Criou uma nova avaliação",
    },
  },
  {
    name: "Escola 3",
    slug: "escola-3",
    amountOfStudents: 100,
    amountOfTeacher: 100,
    lastActivity: {
      by: {
        name: "Mayk Brito",
        avatar: "https://github.com/maykbrito.png",
      },
      action: "Criou uma nova avaliação",
    },
  },
  {
    name: "Escola 4",
    slug: "escola-4",
    amountOfStudents: 100,
    amountOfTeacher: 100,
    lastActivity: {
      by: {
        name: "Fábio Akita",
        avatar: "https://github.com/akitaonrails.png",
      },
      action: "Criou uma nova avaliação",
    },
  },
];

export const tests: Test[] = [
  {
    id: "TST001",
    title: "Avaliação 1",
    assignedTo: [
      "3°A EM",
      "3°B EM",
      "3°C EM",
      "2°A EM",
      "2°B EM",
      "2°C EM",
      "1°A EM",
      "1°B EM",
      "1°C EM",
    ],
    createdAt: "2023",
    createdBy: {
      name: "Guilherme Galaverna",
      avatar: "https://github.com/galavernag.png",
    },
  },

  {
    id: "TST002",
    title: "Avaliação 2",
    assignedTo: [
      "3°A EM",
      "3°B EM",
      "3°C EM",
      "2°A EM",
      "2°B EM",
      "2°C EM",
      "1°A EM",
      "1°B EM",
      "1°C EM",
    ],
    createdAt: "2023",
    createdBy: {
      name: "Guilherme Galaverna",
      avatar: "https://github.com/galavernag.png",
    },
  },

  {
    id: "TST003",
    title: "Avaliação 3",
    assignedTo: [
      "3°A EM",
      "3°B EM",
      "3°C EM",
      "2°A EM",
      "2°B EM",
      "2°C EM",
      "1°A EM",
      "1°B EM",
      "1°C EM",
    ],
    createdAt: "2023",
    createdBy: {
      name: "Guilherme Galaverna",
      avatar: "https://github.com/galavernag.png",
    },
  },

  {
    id: "TST004",
    title: "Avaliação 4",
    assignedTo: [
      "3°A EM",
      "3°B EM",
      "3°C EM",
      "2°A EM",
      "2°B EM",
      "2°C EM",
      "1°A EM",
      "1°B EM",
      "1°C EM",
    ],
    createdAt: "2023",
    createdBy: {
      name: "Guilherme Galaverna",
      avatar: "https://github.com/galavernag.png",
    },
  },
];

export const students: Student[] = [
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
  {
    id: "STD001",
    name: "Guilherme Galaverna",
    assignedTo: ["3°A EM", "3°B EM", "3°C EM"],
    grades: [
      {
        test: {
          id: "TST001",
          title: "Avaliação 1",
          assignedTo: [
            "3°A EM",
            "3°B EM",
            "3°C EM",
            "2°A EM",
            "2°B EM",
            "2°C EM",
            "1°A EM",
            "1°B EM",
            "1°C EM",
          ],
          createdAt: "2023",
          createdBy: {
            name: "Guilherme Galaverna",
            avatar: "https://github.com/galavernag.png",
          },
        },
        grade: 10,
      },
    ],
  },
];
