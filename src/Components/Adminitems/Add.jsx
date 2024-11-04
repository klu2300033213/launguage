import {
  Box,
  Button,
  Grid,
  Select,
  Table,
  useBreakpointValue,
} from '@chakra-ui/react';

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import convertDateFormat, { getProduct } from "../../Redux/AdminReducer/action";
import Pagination from "./Pagination";
import AdminNavTop from "../AdminNavTop";
import Navbar from "../UserComponents/UserNavbar"; // Correct import path

// Custom components as fallback
const Tr = (props) => <Box as="tr" {...props} />;
const Th = (props) => <Box as="th" {...props} />;
const Td = (props) => <Box as="td" {...props} />;
const Tbody = (props) => <Box as="tbody" {...props} />; // Custom Tbody component

const Add = () => {
  const store = useSelector((store) => store.AdminReducer.data);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const limit = 4;
  const tableSize = useBreakpointValue({ base: "sm", sm: "md", md: "lg" });

  const handleSearch = (e) => setSearch(e.target.value);
  const handleSelect = (e) => setOrder(e.target.value);

  useEffect(() => {
      dispatch(getProduct(page, limit, search, order));
  }, [page, search, order]);

  const navigate = useNavigate();
  const handleVideos = (id, title) => navigate(`/admin/videos/add/${id}`, { state: { id, title } });
  
  const handlePageChange = (newPage) => setPage(newPage);
  const count = Math.ceil(store.length / limit); // Update to dynamic count

  return (
      <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
          <Box mt='90px'>
              <AdminNavTop handleSearch={handleSearch} />
              <Navbar /> {/* Include UserNavbar component */}
              <Box>
                  <Grid templateColumns="repeat(3, 1fr)" gap={7}>
                      <Box fontWeight={"bold"}>Welcome To Course</Box>
                      <Select w={"80%"} onChange={handleSelect}>
                          <option value="asc">Price Sort in Ascending Order</option>
                          <option value="desc">Price Sort in Descending Order</option>
                      </Select>
                      <Box fontWeight={"bold"}>
                          <Link to="/admin/addCourse">Create</Link>
                      </Box>
                  </Grid>
                 
                  <Box overflowX="auto">
                    <Table variant="striped" w="100%" size={tableSize}>
                      <Tbody>
                        <Tr>
                          <Th>Title</Th>
                          <Th>Date</Th>
                          <Th>Category</Th>
                          <Th>Description</Th>
                          <Th>Price</Th>
                          <Th>Teacher</Th>
                          <Th>Actions</Th> {/* Add actions column if needed */}
                        </Tr>
                        {store?.length > 0 && store.map((el, i) => (
                          <Tr key={i}>
                            <Td>{el.title}</Td>
                            <Td>{convertDateFormat(el.createdAt)}</Td>
                            <Td>{el.category}</Td>
                            <Td>{el.description}</Td>
                            <Td>{el.price}</Td>
                            <Td>{el.teacher}</Td>
                            <Td>
                              <Button onClick={() => handleVideos(el._id, el.title)}>Add Videos</Button>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>

                  <Box textAlign="right">
                      <Button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>Prev</Button>
                      <Pagination totalCount={count} current_page={page} handlePageChange={handlePageChange} />
                      <Button disabled={page >= count} onClick={() => setPage((prev) => prev + 1)}>Next</Button>
                  </Box>
              </Box>
          </Box>
      </Grid>
  );
}

export default Add;