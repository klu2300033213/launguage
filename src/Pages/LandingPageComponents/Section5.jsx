import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FaBookOpen } from 'react-icons/fa'; // Importing an icon

const Section5 = () => {
  return (
    <Flex
      direction={"column"}
      p={{
        base: "20px",
        sm: "30px",
        md: "40px",
        lg: "60px",
        xl: "80px",
      }}
      gap={10}
      bgColor="gray.50" // Light background color
      borderRadius="md"
    >
      <Flex>
        <Text
          fontSize={{
            sm: "3xl",
            md: "3xl",
            lg: "4xl",
            xl: "4xl",
          }}
          fontWeight={"bold"}
          color="teal.600" // Changed color for emphasis
          textAlign="center"
        >
          Explore Courses
        </Text>
      </Flex>
      <Flex>
        <Grid
          w={"100%"}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={{
            base: "5",
            sm: "3",
            md: "4",
            lg: "5",
            xl: "6",
          }}
        >
          {[
            { title: "Data Science", courses: 425, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png", color: "blue.200" },
            { title: "Business", courses: 1395, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/business.png", color: "green.200" },
            { title: "Computer Science", courses: 668, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png", color: "yellow.200" },
            { title: "Health", courses: 471, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/social_sciences.png", color: "red.200" },
            { title: "Social Sciences", courses: 300, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png", color: "purple.200" },
            { title: "Personal Development", courses: 666, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png", color: "pink.200" },
            { title: "Arts and Humanities", courses: 338, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/arts_and_humanities.png", color: "orange.200" },
            { title: "Language Learning", courses: 150, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png", color: "teal.200" },
            { title: "Information Technology", courses: 145, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png", color: "cyan.200" },
            { title: "Math and Logic", courses: 70, image: "https://s3.amazonaws.com/coursera_assets/browse/domains/math_and_logic.png", color: "gray.200" },
          ].map((course, index) => (
            <Flex
              key={index}
              w="100%"
              h="20"
              gap={2}
              boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              borderRadius="lg" // Rounded corners for cards
              bg={course.color} // Unique background color for each card
              transition="0.3s"
              _hover={{
                boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
                transform: "scale(1.05)", // Hover effect for scaling
                cursor: "pointer",
              }}
            >
              <Flex width={"25%"}>
                <Image
                  src={course.image}
                  alt={course.title}
                  objectFit="contain"
                  borderRadius="md" // Rounded image corners
                />
              </Flex>
              <Flex justifyContent="center" direction="column">
                <Flex alignItems="center">
                  <FaBookOpen style={{ marginRight: '8px', color: '#4A5568' }} />
                  <Text fontSize="14px" fontFamily="poppins" fontWeight="bold">
                    {course.title}
                  </Text>
                </Flex>
                <Text
                  fontSize="12px"
                  color="#4A5568" // Darker text color for better contrast
                  fontFamily="poppins"
                  fontWeight="semibold"
                >
                  {course.courses} Courses
                </Text>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Section5;
