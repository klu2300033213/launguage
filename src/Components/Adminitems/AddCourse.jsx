import {
  Box,
  Button,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

import AdminNavTop from "../AdminNavTop";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/AdminReducer/action";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let obj = {
    title: "",
    description: "",
    category: "",
    price: "",
    img: ""
  };

  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    dispatch(addProduct(detail));
    alert("Course Added Successfully");
    navigate("/admin/courses");
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt='80px'>
        <AdminNavTop />

        <Box border={"2px solid gray"} borderRadius={10} p={10} h="90%">
          <Box mb={4}>
            <label>Title</label>
            <Input
              type="text"
              placeholder="Enter Course Title"
              name="title"
              value={detail.title}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Description</label>
            <Textarea
              placeholder="Enter Course description"
              name="description"
              value={detail.description}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Category</label>
            <Input
              type="text"
              placeholder="Enter Course Category"
              name="category"
              value={detail.category}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Price</label>
            <Input
              type="number"
              placeholder="Enter Course price"
              name="price"
              value={Number(detail.price)}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Thumbnail</label>
            <Input
              type="text"
              placeholder="Enter Course thumbnail Link"
              name="img"
              value={detail.img}
              onChange={handleChange}
            />
          </Box>
          <Button
            mt={4}
            colorScheme="blue"
            size="md"
            isFullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddCourse;