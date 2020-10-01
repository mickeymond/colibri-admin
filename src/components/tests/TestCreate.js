import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const TestCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="category" />
    </SimpleForm>
  </Create>
);
