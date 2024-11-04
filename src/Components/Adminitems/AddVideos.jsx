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
import { useNavigate, useLocation } from "react-router-dom";
import { addVideo } from "../../Redux/AdminReducer/action";

const AddVideo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id, title } = location.state;
  
  let obj = {
    title: title,
    description: "",
    link: "",
    views: "",
    img: "",
    courseId: id,
  };

  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    dispatch(addVideo(detail, detail.courseId));
    alert("Video Added Successfully");
    navigate("/admin/videos");
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
              placeholder="Enter Video Title"
              name="title"
              value={detail.title}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>CourseID</label>
            <Input
              type="text"
              placeholder="Enter The Course Id to add video"
              name="courseId"
              value={detail.courseId}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Description</label>
            <Textarea
              placeholder="Enter Description"
              name="description"
              value={detail.description}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Link</label>
            <Input
              type="text"
              placeholder="Enter video Link"
              name="link"
              value={detail.link}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Views</label>
            <Input
              type="number"
              placeholder="Enter Total Views"
              name="views"
              value={detail.views}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <label>Thumbnail</label>
            <Input
              type="text"
              placeholder="Enter Video Thumbnail"
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

export default AddVideo;