import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Button,
  ButtonGroup,
  IconButton,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import convertDateFormat, { deleteProduct, getvideo } from "../../Redux/AdminReducer/action";
import Pagination from "./Pagination";
import AdminNavTop from "../AdminNavTop";

const GetVideos = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.AdminReducer.videos);
  const [page, setPage] = useState(1);
  const limit = 4;
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        await dispatch(getvideo(page, limit, user));
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };

    fetchVideos();
  }, [page, limit, dispatch, user]);

  const handleDelete = (id, title) => {
    dispatch(deleteProduct(id));
    alert(`${title} has been deleted.`);
  };

  const count = Math.ceil(store.length / limit);

  const handlePageButton = (increment) => {
    setPage((prev) => Math.max(1, prev + increment));
  };

  return (
    <Grid className="Nav" h="99vh" w="94%" gap={10}>
      <Box mt="80px">
        <AdminNavTop />
        <Box>
          <Text fontWeight="bold" m={5}>
            Courses Video
          </Text>

          <Box maxWidth="100%" overflowX="auto">
            <Table variant="striped" borderRadius="md" w="100%">
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Uploaded</Th>
                  <Th>Description</Th>
                  <Th>Views</Th>
                  <Th>Link</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {store.length > 0 ? (
                  store.map((el, i) => (
                    <Tr key={i}>
                      <Td>{el.title}</Td>
                      <Td>{convertDateFormat(el.createdAt)}</Td>
                      <Td>{el.description}</Td>
                      <Td>{el.views}</Td>
                      <Td>{el.link}</Td>
                      <Td>
                        <Link to={`/admin/videos/add/${el.courseId}`}>
                          <ButtonGroup size="sm" isAttached variant="outline">
                            <Button>Add</Button>
                            <IconButton aria-label="Add to friends" icon={<AddIcon />} />
                          </ButtonGroup>
                        </Link>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan={6} textAlign="center">
                      No videos available.
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </Box>
          <Box textAlign={{ xl: "right", lg: "right", base: "left" }} mt={4}>
            <Button disabled={page <= 1} onClick={() => handlePageButton(-1)}>
              Prev
            </Button>
            <Pagination totalCount={count} currentPage={page} handlePageChange={setPage} />
            <Button disabled={page >= count} onClick={() => handlePageButton(1)}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default GetVideos;