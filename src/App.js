import React from "react";
import UserIcon from "@material-ui/icons/People";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ReplayIcon from "@material-ui/icons/Replay";
import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";

import { QuestionCreate, QuestionEdit } from "./components/questions";
import { TaskCreate, TaskEdit } from "./components/tasks";
import { TestCreate, TestEdit } from "./components/tests";

const dataProvider = lb4Provider("https://colibriafrica.herokuapp.com");

export default () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="profiles" icon={UserIcon} list={ListGuesser} />
      <Resource
        name="questions"
        icon={QuestionAnswerIcon}
        list={ListGuesser}
        create={QuestionCreate}
        edit={QuestionEdit}
      />
      <Resource
        name="tasks"
        icon={AssignmentIcon}
        list={ListGuesser}
        create={TaskCreate}
        edit={TaskEdit}
      />
      <Resource
        name="tests"
        icon={ReplayIcon}
        list={ListGuesser}
        create={TestCreate}
        edit={TestEdit}
      />
    </Admin>
  );
};
