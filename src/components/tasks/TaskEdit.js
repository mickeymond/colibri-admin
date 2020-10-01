import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  SimpleFormIterator,
  ArrayInput
} from "react-admin";

export const TaskEdit = (props) => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("https://colibriafrica.herokuapp.com/categories")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const data = result.map((each) => ({
          id: each.name,
          name: each.name
        }));
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
        setCategories([]);
      });
  }, []);

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <SelectInput source="category" choices={categories} />
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
    </Edit>
  );
};
