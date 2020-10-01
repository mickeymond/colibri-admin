import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";

export const QuestionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="testId" />
      <TextInput source="question" />
      <ArrayInput source="options">
        <SimpleFormIterator>
          <TextInput source="label" />
          <TextInput source="value" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="correctOption" />
    </SimpleForm>
  </Edit>
);
