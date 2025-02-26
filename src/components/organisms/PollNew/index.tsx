import React, { useState } from "react";
import { categories } from "../../../mocks/categories";
import { users } from "../../../mocks/users";
import { polls } from "../../../mocks/polls";

import {
  Overlay,
  ModalContainer,
  CloseButton,
  Form,
  Input,
  TextArea,
  OptionsContainer,
  Button,
} from "./styles";

interface CreatePoll {
  onClose: () => void;
}

const CreatePoll: React.FC<CreatePoll> = ({  onClose }) => {
  console.log('entrou')
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([""]);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);


  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleChangeOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {

    const newPoll = {
      guid: String(polls.length + 1),
      createDt: new Date().toISOString(),
      updateDt: new Date().toISOString(),
      image: image,
      content,
      categories: polls[0].categories,
      author: users[0],
      slug: content.toLowerCase().replace(/\s+/g, "-"),
      options: options.map((label, index) => ({
        guid: String(polls.length * 10 + index + 1),
        createDt: new Date().toISOString(),
        updateDt: new Date().toISOString(),
        label,
      })),
      comments: [],
    };

    polls.push(newPoll);
    console.log('foi!!!!!!!!!!!!!!')
    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h1>Create a New Poll</h1>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <Input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
          <TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="text" placeholder="Categories" value={categories} onChange={(e) => setCategories(e.target.value)} />
          <OptionsContainer>
            <h3>Options</h3>
            {options.map((option, index) => (
              <Input
                key={index}
                type="text"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleChangeOption(index, e.target.value)}
                required
              />
            ))}
            <Button type="button" onClick={handleAddOption}>Add Option</Button>
          </OptionsContainer>
          <Button type="submit">Create Poll</Button>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};
export default CreatePoll;
