import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const TestEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="category" />
    </SimpleForm>
  </Edit>
);
