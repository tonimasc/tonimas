import { motion } from 'framer-motion';
import { styled } from '@/config/stitches.config';
import { Text } from './ui/text';
import { Flex } from './ui/flex';

export function MusicTrigger() {
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        css={{ flexGrow: 1 }}
      >
        <Circle
          whileHover={{
            rotate: 90,
            transition: { duration: 0.2 },
          }}
        >
          <Pill />
        </Circle>
      </Flex>
      <Text>Fav song</Text>
    </Box>
  );
}

export const Box = styled(motion.div, {
  background: '$grey',
  height: 176,
  borderRadius: '$1',
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
});

export const Circle = styled(motion.div, {
  background: '#78E25D',
  height: 70,
  width: 70,
  borderRadius: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
});

export const Pill = styled(motion.div, {
  background: '#6CCB54',
  height: 50,
  width: 20,
  borderRadius: 20,
});
