import { Task } from "@redux-saga/types";
import { cancel } from "redux-saga/effects";

export function* cancelSaga(task: Task) {
  yield cancel(task);
}
