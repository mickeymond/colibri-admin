import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";

export const QuestionEdit = (props) => {
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
        <SelectInput source="category" choices={categories} />
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
};
