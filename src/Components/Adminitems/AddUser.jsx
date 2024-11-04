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
import { addUser  } from "../../Redux/AdminReducer/action";
import { useNavigate } from "react-router-dom";

const AddUser  = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let obj = {
    name: "",
    email: "",
    password: "",
    city: "",
    age: "",
    job: "",
    image: "",
  };

  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    dispatch(addUser (detail));
    alert("User  Added Successfully");
    navigate("/admin/users");
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt="80px">
        <AdminNavTop />

        <Box border={"2px solid gray"} borderRadius={10} p={10} h="90%">
          <Box mb={4}>
            <label>Name</label>
            <Input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={detail.name}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Email</label>
            <Input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={detail.email}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Password</label>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={detail.password}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>City</label>
            <Input
              type="text"
              placeholder="Enter City"
              name="city"
              value={detail.city}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Age</label>
            <Input
              type="number"
              placeholder="Enter Age"
              name="age"
              value={detail.age}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Job</label>
            <Input
              type="text"
              placeholder="Enter Job"
              name="job"
              value={detail.job}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Image</label>
            <Input
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={detail.image}
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

export default AddUser;