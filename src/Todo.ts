export const Todo = (
  title: string,
  description: string,
  dueDate: string,
  priority: string,
  notes: string,
  project: string
) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    project,
  };
};
