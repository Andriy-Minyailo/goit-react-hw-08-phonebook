// import { NavStatic } from 'components/NavStatic/NavStatic';

import { Box, Heading, Image } from '@chakra-ui/react';

export const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        minH="60vh"
      >
        <Heading as="h2" size="2xl" color="var(--chakra-colors-blue-500)">
          Welcome to your contact book
        </Heading>

        <Image
          src="https://img1.freepng.ru/20180314/kdw/kisspng-telephone-icon-vector-phone-book-5aa8c24dc80cc3.7014658315210092298194.jpg"
          alt="Dan Abramov"
        />
      </Box>
    </>
  );
};
