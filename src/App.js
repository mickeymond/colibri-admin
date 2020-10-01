import React from "react";
import UserIcon from "@material-ui/icons/People";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ClassIcon from "@material-ui/icons/Class";
import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";

import { QuestionCreate, QuestionEdit } from "./components/questions";
import { TaskCreate, TaskEdit } from "./components/tasks";
import { CategoryCreate, CategoryEdit } from "./components/categories";

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
        name="categories"
        icon={ClassIcon}
        list={ListGuesser}
        create={CategoryCreate}
        edit={CategoryEdit}
      />
    </Admin>
  );
};
