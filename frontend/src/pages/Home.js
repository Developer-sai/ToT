import React, { useState, useEffect } from 'react';
import { Box, VStack, Heading, Text, Button, useToast } from '@chakra-ui/react';
import TotCard from '../components/TotCard';
import CreateTotModal from '../components/CreateTotModal';
import { fetchTots, createTot } from '../services/api';

function Home() {
  const [tots, setTots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    loadTots();
  }, []);

  const loadTots = async () => {
    try {
      const fetchedTots = await fetchTots();
      setTots(fetchedTots);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load TOTs',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCreateTot = async (totData) => {
    try {
      await createTot(totData);
      setIsModalOpen(false);
      loadTots();
      toast({
        title: 'Success',
        description: 'TOT created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create TOT',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>This or That</Heading>
        <Button colorScheme="brand" onClick={() => setIsModalOpen(true)}>
          Create TOT
        </Button>
        {tots.map((tot) => (
          <TotCard key={tot._id} tot={tot} />
        ))}
      </VStack>
      <CreateTotModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateTot}
      />
    </Box>
  );
}

export default Home;

