import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SimpleFormIterator,
  ArrayInput
} from "react-admin";

export const TaskCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="category" />
      <TextInput source="description" />
      <ArrayInput source="attachments">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="submissions">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
