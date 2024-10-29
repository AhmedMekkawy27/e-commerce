// ProfileManagement.tsx
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Stack,
  Divider,
  Container,
} from "@chakra-ui/react";
import { breakpoints } from "../data";

const ProfileManagement: React.FC = () => {
  return (
    <Container maxW={breakpoints} mx="auto" py="10">
      {/* Breadcrumb or page navigation */}
      <Text color="gray.500" mb="4">
        Home / My Account
      </Text>

      {/* Heading */}
      <Heading size="lg" mb="8">
        Edit Your Profile
      </Heading>

      <Stack direction="row" spacing="10">
        {/* Sidebar */}
        <Box minW="200px" borderRight="1px" borderColor="gray.200" pr="5">
          <Text fontWeight="bold" mb="4">
            Manage My Account
          </Text>
          <VStack align="start" spacing="3" mb="6">
            <Text color="red.500" fontWeight="medium">
              My Profile
            </Text>
            <Text>Address Book</Text>
            <Text>My Payment Options</Text>
          </VStack>
          <Text fontWeight="bold" mb="4">
            My Orders
          </Text>
          <VStack align="start" spacing="3" mb="6">
            <Text>My Returns</Text>
            <Text>My Cancellations</Text>
          </VStack>
          <Text fontWeight="bold" mb="4">
            My Wishlist
          </Text>
        </Box>

        {/* Form Section */}
        <Box flex="1">
          <form>
            <VStack spacing="6" align="stretch">
              {/* First and Last Name */}
              <Stack direction="row" spacing="4">
                <FormControl id="first-name" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="First Name" defaultValue="Md" />
                </FormControl>
                <FormControl id="last-name" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Last Name" defaultValue="Rimel" />
                </FormControl>
              </Stack>

              {/* Email and Address */}
              <Stack direction="row" spacing="4">
                <FormControl id="email" isReadOnly>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    defaultValue="rimel1111@gmail.com"
                  />
                </FormControl>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input
                    placeholder="Address"
                    defaultValue="Kingston, 5236, United State"
                  />
                </FormControl>
              </Stack>

              <Divider my="4" />

              {/* Password Section */}
              <Heading size="md" mb="4">
                Password Changes
              </Heading>
              <VStack spacing="4" align="stretch">
                <FormControl id="current-password">
                  <FormLabel>Current Password</FormLabel>
                  <Input type="password" placeholder="Current Password" />
                </FormControl>
                <FormControl id="new-password">
                  <FormLabel>New Password</FormLabel>
                  <Input type="password" placeholder="New Password" />
                </FormControl>
                <FormControl id="confirm-password">
                  <FormLabel>Confirm New Password</FormLabel>
                  <Input type="password" placeholder="Confirm New Password" />
                </FormControl>
              </VStack>

              {/* Buttons */}
              <Stack
                direction="row"
                justifyContent="flex-end"
                spacing="4"
                pt="4"
              >
                <Button variant="outline" colorScheme="gray">
                  Cancel
                </Button>
                <Button colorScheme="red">Save Changes</Button>
              </Stack>
            </VStack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProfileManagement;
