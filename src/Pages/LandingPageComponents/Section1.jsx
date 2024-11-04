import { Flex, Text, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import image from '../../Asset/image.jpg'; // Ensure this path is correct

const Section1 = () => {
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh" // Full viewport height
      width="100%" // Full width of the viewport
    >
      <Box
        display="flex"
        flexDirection="column" // Arrange children vertically
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
        height="100%" // Full height of the parent Flex
        width="100%" // Full width of the parent Flex
        position="relative" // For positioning the button absolutely
        backgroundImage={`url(${image})`} // Use the imported image
        backgroundSize="cover" // Cover the entire Box
        backgroundPosition="center" // Center the background image
      >
        <Text
          fontSize={{
            base: "70px",
            sm: "40px",
            md: "60px",
            lg: "80px",
          }}
          fontWeight="bold"
          fontFamily="poppins"
          color="white" // Adjust text color for visibility
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Add a shadow for better visibility
          textAlign="center" // Center align the text
          mt="20px" // Add margin on top for spacing
        >
          Learn Without Limits
        </Text>

        <Text
          fontSize={{
            lg: "18px",
            md: "16px",
            sm: "14px",
            base: "20px",
          }}
          fontWeight="semibold"
          color="white" // Adjust text color for visibility
          textAlign="center" // Center align the text
          mt="10px" // Margin on top to space from heading
          px="10px" // Padding on sides for better readability
        >
          Welcome to our Language Learning Platform, where you can explore a variety of languages at your own pace. Our interactive courses and personalized learning paths empower you to achieve fluency and confidence in speaking a new language. Join us today and start your journey towards mastering a new language!
        </Text>

        <Button
          position="absolute" // Position the button absolutely within the Box
          bottom="20px" // Adjust position from the bottom
          left="50%" // Center horizontally
          transform="translateX(-50%)" // Correct centering of the button
          bg="#0056d2"
          color="white"
          size="lg"
          p={{
            lg: "30px 60px",
            md: "25px 50px",
            sm: "20px 40px",
          }}
          border="3px solid #0056d2"
          _hover={{ background: "#42A5F5", color: "#0D47A1" }}
          onClick={() => navigate("/signup")}
        >
          Get Started
        </Button>
      </Box>
    </Flex>
  );
};

export default Section1;
