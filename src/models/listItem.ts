export type ListItem = {
  id: number;
  title: string;
  description: string;
  priority: string;
  image: {
    format: "";
    data: any;
  };
};

export const dummyTodo: ListItem[] = [
  {
    id: 1,
    title: "Title 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    priority: "",
    image: {
      format: "",
      data: "any",
    },
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",

    priority: "",
    image: {
      format: "",
      data: "any",
    },
  },
];
export const dummyInProgress: ListItem[] = [
  {
    id: 3,
    title: "Title 3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    priority: "",
    image: {
      format: "",
      data: "any",
    },
  },
];
