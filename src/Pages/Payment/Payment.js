import { Button, Box, Flex, Heading, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input, Radio, useToast } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaWallet } from "react-icons/fa";
import { SiMastercard, SiAmericanexpress, SiFlutter } from "react-icons/si";
import { AiTwotoneBank } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";
import { useParams } from "react-router";
import { showToast } from "../../Components/SignUp";
import { keyframes } from "@emotion/react"; // Use keyframes from Emotion

// Import DynamicSelect if it's a separate component
// import DynamicSelect from './DynamicSelect'; // Ensure this path is correct

export default function Payment({ isOpen, onOpen, onClose }) {
  const { id } = useParams();
  const courseId = id;
  const upiRef = useRef(null);
  const [input, setInput] = useState("");

  let baseURL = "http://localhost:8080";
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const [course, setCourse] = useState({});
  const vpiRef = useRef(null);
  const toast = useToast();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${baseURL}/courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourse(res.data.course);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, []);

  // Show UPI box
  function showUPI() {
    upiRef.current.style.display = "block";
  }

  // Hide UPI box
  function blockUPI() {
    upiRef.current.style.display = "none";
  }

  // Handle input
  function handleInput(e) {
    setInput(e.target.value);

    if (e.target.value.includes("@")) {
      vpiRef.current.style.background = "green";
    } else {
      vpiRef.current.style.background = "#90A4AE";
    }
  }

  // Handle payment
  function handlePayment() {
    axios
      .post(
        `${baseURL}/users/addCourse/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        showToast({
          toast,
          message: res?.data?.message || res?.data?.msg,
          color: "green",
        });
        onClose();
      })
      .catch((err) => {
        console.log(err);
        showToast({
          toast,
          message: err?.response.data.error || err?.message,
          color: "red",
        });
        onClose();
      });
    setInput("");
  }

  const openAnimation = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex justify="space-between">
                <Box>
                  <Heading size="sm">Billing Address</Heading>
                </Box>
                <Box>
                  <Heading size="sm">Total</Heading>
                  <Heading size="xs">₹{course?.price}</Heading>
                </Box>
              </Flex>

              <Flex>
                <Box mr="5px">
                  <Text>Module: {capitalizeFirstLetter(course?.title)}</Text>
                </Box>
                <Box m="0 7px">
                  <Text>Instructor: {capitalizeFirstLetter(course?.teacher)}</Text>
                </Box>
              </Flex>
              <Text fontSize="12px">{`Number of videos you are getting ${course?.videos?.length || 1}`}</Text>

              <Box>
                {/* Placeholder for DynamicSelect. Replace with actual implementation */}
                {/* <DynamicSelect /> */}
                <Text fontSize="12px">
                  SRM is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                </Text>
              </Box>

              <Box>
                <Flex mt="5px" bg="gray.100" justify="space-between" p="10px" onClick={showUPI}>
                  <Flex align="center">
                    <Box>
                      <Radio borderColor="black">
                        <Flex ml="5px">
                          <Box style={{ transform: "rotate(180deg)" }}>
                            <SiFlutter size="25px" color="#43A047" />
                          </Box>
                          <Heading size="xs" ml="7px">UPI</Heading>
                        </Flex>
                      </Radio>
                    </Box>
                  </Flex>
                </Flex>
                <Box ref={upiRef} display="none" animation={`${openAnimation} 0.2s ease`}>
                  <Box p="8px">
                    <Box border="1px solid" p="8px">
                      <Box>
                        <Text fontSize="12px" fontWeight="700">Make a selection on how you would like to use UPI</Text>
                      </Box>
                      <Box border="1px solid #0D47A1" borderRadius="5px" p="3px" m="5px 0" mt="10px">
                        <Button
                          disabled={true}
                          fontSize="10px"
                          color="#0D47A1"
                          background="#E1F5FE"
                          border="1px solid #0D47A1"
                        >
                          Virtual Payment Address
                        </Button>
                      </Box>
                      <Box m="10px 0" mb="25px">
                        <Text fontSize="12px" fontWeight="700">Virtual Payment Address</Text>
                        <Box mt="15px">
                          <Input
                            borderRadius="0px"
                            border="1px solid black"
                            w="100%"
                            _focus={{ outline: "1px solid" }}
                            focusBorderColor="transparent"
                            onChange={handleInput}
                            value={input}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Text fontWeight="500" fontSize="10px" onClick={blockUPI} _hover={{ cursor: "pointer" }}>
                      See Less
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              borderRadius="0px"
              background="#1565C0"
              color="white"
              _hover={{ background: "#1E88E5", color: "#CFD8DC" }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              onClick={handlePayment}
              isDisabled={!input.includes("@")}
              ref={vpiRef}
              borderRadius="0px"
              background="#90A4AE"
              color="white"
              _hover={{ color: "#004D40" }}
            >
              Pay Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
