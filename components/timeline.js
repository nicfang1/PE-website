import React from "react";
import {
	Box,
	chakra,
	Container,
	Link,
	Text,
	HStack,
	VStack,
	Flex,
	Icon,
	useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaRunning } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const milestones = [
	{
		id: 1,
		categories: ["Article"],
		title: "Founding of the Project",
		icon: AiFillStar,
		description: `Founding of Project Empower and recognition as a NUS Medical Society project.`,
		date: "January, 2022",
	},
	{
		id: 2,
		categories: ["Awareness Raising Event"],
		title: "Run to Empower",
		icon: FaRunning,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
		date: "May-June, 2022",
	},
];

const Milestones = () => {
	return (
		<Container maxWidth="4xl" p={0} mt={8}>
			<chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="left">
				Timeline
			</chakra.h3>
			{milestones.map((milestone, index) => (
				<Flex key={index} mb="10px">
					<LineWithDot />
					<Card {...milestone} />
				</Flex>
			))}
		</Container>
	);
};

const Card = ({ title, categories, description, icon, date }) => {
	return (
		<HStack
			p={{ base: 3, sm: 6 }}
			bg={useColorModeValue("gray.100", "gray.800")}
			spacing={5}
			rounded="lg"
			alignItems="center"
			pos="relative"
			_before={{
				content: `""`,
				w: "0",
				h: "0",
				borderColor: `transparent ${useColorModeValue(
					"#edf2f6",
					"#1a202c"
				)} transparent`,
				borderStyle: "solid",
				borderWidth: "15px 15px 15px 0",
				position: "absolute",
				left: "-15px",
				display: "block",
			}}
		>
			<Icon as={icon} w={12} h={12} color="teal.400" />
			<Box>
				<HStack spacing={2} mb={1}>
					{categories.map((cat) => (
						<Text fontSize="sm" key={cat}>
							{cat}
						</Text>
					))}
				</HStack>
				<VStack spacing={2} mb={3} textAlign="left">
					<chakra.h1
						as={Link}
						_hover={{ color: "teal.400" }}
						fontSize="2xl"
						lineHeight={1.2}
						fontWeight="bold"
						w="100%"
					>
						{title}
					</chakra.h1>
					<Text fontSize="md" noOfLines={2}>
						{description}
					</Text>
				</VStack>
				<Text fontSize="sm">{date}</Text>
			</Box>
		</HStack>
	);
};

const LineWithDot = () => {
	return (
		<Flex pos="relative" alignItems="center" mr="40px">
			<chakra.span
				position="absolute"
				left="50%"
				height="calc(100% + 10px)"
				border="1px solid"
				top="0px"
			></chakra.span>
			<Box pos="relative" p="10px">
				<Box
					pos="absolute"
					width="100%"
					height="100%"
					bottom="0"
					right="0"
					top="0"
					left="0"
					backgroundSize="cover"
					backgroundRepeat="no-repeat"
					backgroundPosition="center center"
					backgroundColor="rgb(255, 255, 255)"
					borderRadius="100px"
					border="3px solid rgb(4, 180, 180)"
					backgroundImage="none"
					opacity={1}
				></Box>
			</Box>
		</Flex>
	);
};

export default Milestones;
