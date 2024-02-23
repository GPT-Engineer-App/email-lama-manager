import React from "react";
import { Box, Flex, Heading, Text, Input, Button, VStack, HStack, Icon, Divider, useColorModeValue, useColorMode, Switch, FormControl, FormLabel, Image, Stack, Badge, Menu, MenuButton, MenuList, MenuItem, IconButton, Tooltip } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInbox, FaPaperPlane, FaExclamationCircle, FaArchive, FaTrash, FaFilter, FaSearch, FaBell, FaRegClock, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.800");
  const secondaryText = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={bg} minH="100vh">
      <Flex alignItems="center" justifyContent="space-between" p={4} bg={useColorModeValue("white", "gray.900")} boxShadow="sm">
        <Heading size="md">EmaiLama</Heading>
        <HStack spacing={4}>
          <Tooltip label="Toggle color mode">
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
          </Tooltip>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaFilter />}>
              Filters
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FaInbox />}>Inbox</MenuItem>
              <MenuItem icon={<FaPaperPlane />}>Sent</MenuItem>
              <MenuItem icon={<FaExclamationCircle />}>Important</MenuItem>
              <MenuItem icon={<FaArchive />}>Archived</MenuItem>
              <MenuItem icon={<FaTrash />}>Trash</MenuItem>
            </MenuList>
          </Menu>
          <Button leftIcon={<FaBell />}>Notifications</Button>
          <Button leftIcon={<FaSignOutAlt />}>Logout</Button>
        </HStack>
      </Flex>

      <Flex direction={["column", "row"]} p={4}>
        <VStack w={["full", "xs"]} p={4} spacing={4} alignItems="flex-start" borderRightWidth={[0, "1px"]} borderRightColor={useColorModeValue("gray.200", "gray.700")}>
          <HStack w="full">
            <Input placeholder="Search emails" />
            <IconButton aria-label="Search emails" icon={<FaSearch />} />
          </HStack>
          <Button w="full" leftIcon={<FaInbox />}>
            Inbox
          </Button>
          <Button w="full" leftIcon={<FaPaperPlane />}>
            Sent
          </Button>
          <Button w="full" leftIcon={<FaRegClock />}>
            Snoozed
          </Button>
          <Button w="full" leftIcon={<FaArchive />}>
            Archive
          </Button>
          <Button w="full" leftIcon={<FaTrash />}>
            Trash
          </Button>
        </VStack>
        <Stack p={4} spacing={4} w="full">
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Enable email alerts
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
          <Divider />
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold" fontSize="lg">
              Today
            </Text>
            <Box p={4} boxShadow="sm" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
              <Flex justifyContent="space-between" mb={2}>
                <Heading size="sm">Meeting with Team</Heading>
                <Badge colorScheme="green">New</Badge>
              </Flex>
              <Text fontSize="sm" color={secondaryText}>
                You have a scheduled meeting with the project team at 3 PM.
              </Text>
            </Box>
            <Box p={4} boxShadow="sm" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
              <Flex justifyContent="space-between" mb={2}>
                <Heading size="sm">Client Follow-up</Heading>
                <Badge colorScheme="blue">Reply</Badge>
              </Flex>
              <Text fontSize="sm" color={secondaryText}>
                Don't forget to send the updated proposal to the client.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
