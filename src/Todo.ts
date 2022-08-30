export const Todo = (
  title: string,
  description: string,
  dueDate: string,
  priority: string,
  notes: string,
  project: string
) => {
  if (notes === "") {
    notes = "No notes";
  }

  if (description === "") {
    description = "No description.";
  }

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    project,
  };
};
