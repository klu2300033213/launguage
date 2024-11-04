import React from "react";
import { Box, Grid, Heading, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="#f5f5f5"
      p={5}
      paddingBottom={{
        sm: "60px",
        md: "60px",
        lg: "20px",
      }}
      fontFamily="Source Sans 3"
      pt="60px"
      direction="column"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // Smallest screen size (1 column)
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)", // Medium screen size (3 columns)
          lg: "repeat(4, 1fr)", // Large screen size (4 columns)
        }}
        gap={4}
      >
        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Learn Coding Languages
          </Heading>
          <br />
          <Link fontSize="13.5px">JavaScript</Link>
          <br />
          <Link fontSize="13.5px">Python</Link>
          <br />
          <Link fontSize="13.5px">Java</Link>
          <br />
          <Link fontSize="13.5px">C++</Link>
          <br />
          <Link fontSize="13.5px">Ruby</Link>
          <br />
          <Link fontSize="13.5px">Go</Link>
          <br />
          <Link fontSize="13.5px">PHP</Link>
          <br />
          <Link fontSize="13.5px">Swift</Link>
          <br />
          <Link fontSize="13.5px">Kotlin</Link>
          <br />
          <Link fontSize="13.5px">TypeScript</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Popular Topics
          </Heading>
          <br />
          <Link fontSize="13.5px">Web Development</Link>
          <br />
          <Link fontSize="13.5px">Mobile Development</Link>
          <br />
          <Link fontSize="13.5px">Game Development</Link>
          <br />
          <Link fontSize="13.5px">Data Science</Link>
          <br />
          <Link fontSize="13.5px">Machine Learning</Link>
          <br />
          <Link fontSize="13.5px">DevOps</Link>
          <br />
          <Link fontSize="13.5px">APIs</Link>
          <br />
          <Link fontSize="13.5px">Cloud Computing</Link>
          <br />
          <Link fontSize="13.5px">Cybersecurity</Link>
          <br />
          <Link fontSize="13.5px">Software Testing</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Popular Certificates
          </Heading>
          <br />
          <Link fontSize="13.5px">Full Stack Developer</Link>
          <br />
          <Link fontSize="13.5px">Data Science with Python</Link>
          <br />
          <Link fontSize="13.5px">Machine Learning with Java</Link>
          <br />
          <Link fontSize="13.5px">Front-End Web Development</Link>
          <br />
          <Link fontSize="13.5px">Back-End Development</Link>
          <br />
          <Link fontSize="13.5px">Mobile App Development</Link>
          <br />
          <Link fontSize="13.5px">Cybersecurity Essentials</Link>
          <br />
          <Link fontSize="13.5px">Cloud Developer</Link>
          <br />
          <Link fontSize="13.5px">Data Visualization</Link>
          <br />
          <Link fontSize="13.5px">Agile Project Management</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Featured Articles
          </Heading>
          <br />
          <Link fontSize="13.5px">
            Top Programming Languages to Learn in 2024
          </Link>
          <br />
          <Link fontSize="13.5px">
            How to Build a Web Application from Scratch
          </Link>
          <br />
          <Link fontSize="13.5px">
            Best Practices for Learning a New Language
          </Link>
          <br />
          <Link fontSize="13.5px">
            Getting Started with Data Science
          </Link>
          <br />
          <Link fontSize="13.5px">
            Tips for Effective Coding Interviews
          </Link>
          <br />
          <Link fontSize="13.5px">
            Understanding Algorithms and Data Structures
          </Link>
          <br />
          <Link fontSize="13.5px">
            The Importance of Version Control
          </Link>
          <br />
          <Link fontSize="13.5px">
            How to Contribute to Open Source Projects
          </Link>
          <br />
          <Link fontSize="13.5px">
            Building Your First Mobile Application
          </Link>
          <br />
          <Link fontSize="13.5px">
            Exploring the Basics of Cybersecurity
          </Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Community
          </Heading>
          <br />
          <Link fontSize="13.5px">Forums</Link>
          <br />
          <Link fontSize="13.5px">Events</Link>
          <br />
          <Link fontSize="13.5px">Meetups</Link>
          <br />
          <Link fontSize="13.5px">Hackathons</Link>
          <br />
          <Link fontSize="13.5px">Mentorship</Link>
          <br />
          <Link fontSize="13.5px">Blog</Link>
          <br />
          <Link fontSize="13.5px">Tech Blog</Link>
          <br />
          <Link fontSize="13.5px">Teaching Center</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            More
          </Heading>
          <br />
          <Link fontSize="13.5px">Press</Link>
          <br />
          <Link fontSize="13.5px">Investors</Link>
          <br />
          <Link fontSize="13.5px">Terms</Link>
          <br />
          <Link fontSize="13.5px">Privacy</Link>
          <br />
          <Link fontSize="13.5px">Help</Link>
          <br />
          <Link fontSize="13.5px">Accessibility</Link>
          <br />
          <Link fontSize="13.5px">Contact</Link>
          <br />
          <Link fontSize="13.5px">Articles</Link>
          <br />
          <Link fontSize="13.5px">Directory</Link>
          <br />
          <Link fontSize="13.5px">Affiliates</Link>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Footer;
