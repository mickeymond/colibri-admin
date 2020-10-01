import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SimpleFormIterator,
  ArrayInput
} from "react-admin";

export const QuestionCreate = (props) => (
  <Create {...props}>
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
  </Create>
);
