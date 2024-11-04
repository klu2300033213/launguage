import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import sectionImage from "../../Asset/sectionImage.png";
import { useNavigate } from "react-router-dom";
const Section6 = () => {
  const navigate = useNavigate();
  return (
    <Flex
      bgColor={"#ebf3ff"}
      gap={{
        sm: "20px",
        md: "35px",
        lg: "45px",
      }}
      p={{
        base: "10px",
        sm: "0px 20px",
        md: "0px 40px",
        lg: "0px 60px",
      }}
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
      }}
    >
      <Flex minW={"40%"}>
        <Image src={sectionImage} objectFit="contain" />
      </Flex>
      <Flex
        direction={"column"}
        padding={{
          base: "40px 0px",
          sm: "20px 10px",
          md: "30px 15px",
          lg: "40px 20px",
        }}
        gap={{
          sm: "15px",
          md: "25px",
        }}
        justifyContent={{
          lg: "space-evenly",
        }}
       
      >
        <Text
          fontSize={{
            sm: "25px",
            md: "35px",
            lg: "45 px",
          }}
        >
          Learner outcomes on <b style={{ color: "#0056d2" }}> Language Learning Platform

</b>
        </Text>
        <Text
          fontFamily={"poppins"}
          fontSize={{
            sm: "12px",
            md: "14px",
            lg: "16px",
          }}
        >
          According to the latest findings from our 2024 report,{" "}
          <span>
            <b>an an impressive 87% of learners have reported significant career benefits from our language learning programs.</b>
          </span> These benefits include improved communication skills, enhanced job performance, successful career advancements, increased employability, and valuable skill development in a global marketplace. Our comprehensive curriculum and internationally recognized certifications have played a pivotal role in facilitating the professional growth of learners, empowering them to excel in diverse career paths in today’s competitive job landscape.
        </Text>
        <Flex mt='15px' >
          <Button
            bgColor={"#0056d2"}
            _hover={{ backgroundColor: "#03357b" }}
            color={"white"}
            p={{
              sm: "10px 20px",
              md: "15px 30px",
              lg: "25px 45px",
            }}
            onClick={() => navigate("/signup")}
          >
            Join for Free
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section6;