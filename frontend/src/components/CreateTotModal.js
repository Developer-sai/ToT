import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

function CreateTotModal({ isOpen, onClose, onSubmit }) {
  const [thisText, setThisText] = useState('');
  const [thatText, setThatText] = useState('');
  const [thisMedia, setThisMedia] = useState('');
  const [thatMedia, setThatMedia] = useState('');

  const handleSubmit = () => {
    onSubmit({
      content: {
        this: { text: thisText, media: thisMedia },
        that: { text: thatText, media: thatMedia },
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a New TOT</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>This Option</FormLabel>
              <Input value={thisText} onChange={(e) => setThisText(e.target.value)} placeholder="Enter text for 'This'" />
              <Input value={thisMedia} onChange={(e) => setThisMedia(e.target.value)} placeholder="Enter media URL for 'This'" />
            </FormControl>
            <FormControl>
              <FormLabel>That Option</FormLabel>
              <Input value={thatText} onChange={(e) => setThatText(e.target.value)} placeholder="Enter text for 'That'" />
              <Input value={thatMedia} onChange={(e) => setThatMedia(e.target.value)} placeholder="Enter media URL for 'That'" />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Create TOT
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateTotModal;

