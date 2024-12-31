import React from 'react';
import { Box, Image, Text, Button, VStack, HStack, Progress } from '@chakra-ui/react';

function TotCard({ tot }) {
  const totalVotes = tot.votes.this.length + tot.votes.that.length;
  const thisPercentage = totalVotes > 0 ? (tot.votes.this.length / totalVotes) * 100 : 0;
  const thatPercentage = totalVotes > 0 ? (tot.votes.that.length / totalVotes) * 100 : 0;

  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
      <VStack spacing={4}>
        <Text fontWeight="bold">{tot.creator.username}'s TOT</Text>
        <HStack spacing={4} width="100%">
          <VStack flex={1}>
            <Image src={tot.content.this.media} alt="This option" />
            <Text>{tot.content.this.text}</Text>
            <Button colorScheme="blue" onClick={() => {}}>This</Button>
          </VStack>
          <VStack flex={1}>
            <Image src={tot.content.that.media} alt="That option" />
            <Text>{tot.content.that.text}</Text>
            <Button colorScheme="green" onClick={() => {}}>That</Button>
          </VStack>
        </HStack>
        <Box width="100%">
          <Progress value={thisPercentage} colorScheme="blue" />
          <HStack justifyContent="space-between">
            <Text>{thisPercentage.toFixed(1)}%</Text>
            <Text>{thatPercentage.toFixed(1)}%</Text>
          </HStack>
        </Box>
        <Text>Total Votes: {totalVotes}</Text>
      </VStack>
    </Box>
  );
}

export default TotCard;

