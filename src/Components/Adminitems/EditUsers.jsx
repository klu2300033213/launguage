import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./edit.css";
import AdminNavTop from "../AdminNavTop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { patchUser  } from "../../Redux/AdminReducer/action";

const EditUser  = () => {
  const backgroundImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-K0r9nPZU1CVVkRP6H-MB2LZEc0pFHmZLA&usqp=CAU";
  const { id } = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AdminReducer.users);
  const existedUser  = store.filter((el) => el._id == id);
  const navigate = useNavigate();

  let obj = {
    name: existedUser [0]?.name,
    email: existedUser [0]?.email,
    password: existedUser [0]?.password,
    city: existedUser [0]?.city,
    age: existedUser [0]?.age,
  };
  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    dispatch(patchUser (id, detail));
    alert("Data Updated Successfully");
    navigate("/admin/users");
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt='80px'>
        <AdminNavTop />
        <Flex
          align="center"
          justify="center"
          border={"2px solid white"}
          borderRadius={10}
          className="background"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "300px",
          }}
          color={"white"}
          fontWeight={"bold"}
        >
          <Box width={["100%", "80%", "60%", "40%"]} p={4}>
            <label>Name</label>
            <Input
              type="text"
              placeholder="Enter Name"
              name="name"
              border={"1px solid"}
              value={detail.name}
              onChange={handleChange}
            />
            <label style={{ marginTop: '16px' }}>Email</label>
            <Textarea
              type="email"
              border={"1px solid"}
              placeholder="Enter Email"
              name="email"
              value={detail.email}
              onChange={handleChange}
            />
            <label style={{ marginTop: '16px' }}>Password</label>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              border={"1px solid"}
              value={detail.password}
              onChange={handleChange}
            />
            <label style={{ marginTop: '16px' }}>City</label>
            <Input
              type="text"
              placeholder="Enter City"
              name="city"
              border={"1px solid"}
              value={detail.city}
              onChange={handleChange}
            />
            <label style={{ marginTop: '16px' }}>Age</label>
            <Input
              type="text"
              border={"1px solid"}
              name="age"
              value={detail.age}
              onChange={handleChange}
            />
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
        </Flex>
      </Box>
    </Grid>
  );
};

export default EditUser;