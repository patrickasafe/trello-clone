//this is an alternative to using type.
export type Action = AddListAction | AddTaskAction;

interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});
