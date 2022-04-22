import { MusicTrigger } from '@/components/music-trigger';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { styled } from '@stitches/react';

export default function Home() {
  return (
    <main>
      <Flex
        direction="row"
        css={{ maxWidth: '$container', margin: 'auto', py: 16 }}
      >
        <Flex direction="column" css={{ flex: 1, marginRight: '$big' }}>
          <Text
            color="grey"
            size="headline"
            weight="bold"
            css={{ marginBottom: '$small' }}
          >
            About
          </Text>
          <Flex
            direction="column"
            css={{
              background: '$grey',
              borderRadius: '$1',
              height: 188,
              marginBottom: '$medium',
            }}
          ></Flex>
          <Grid2>
            <Flex
              direction="column"
              css={{ background: '$grey', borderRadius: '$1', height: 256 }}
            ></Flex>
            <Flex
              direction="column"
              css={{ background: '$grey', borderRadius: '$1', height: 256 }}
            ></Flex>
            <Flex
              direction="column"
              css={{ background: '$grey', borderRadius: '$1', height: 256 }}
            ></Flex>
            <Flex
              direction="column"
              css={{ background: '$grey', borderRadius: '$1', height: 256 }}
            ></Flex>
          </Grid2>
        </Flex>
        <Flex direction="column" css={{ flex: 1 }}>
          <Text
            color="grey"
            size="headline"
            weight="bold"
            css={{ marginBottom: '$small' }}
          >
            Playlist
          </Text>
          <Grid>
            <MusicTrigger />
            <MusicTrigger />
            <MusicTrigger />
            <MusicTrigger />
            <MusicTrigger />
            <MusicTrigger />
          </Grid>
          <Text
            color="grey"
            size="headline"
            weight="bold"
            css={{ marginBottom: '$small' }}
          >
            Team
          </Text>
          <Flex
            direction="column"
            css={{ background: '$grey', borderRadius: '$1', flex: 1 }}
          ></Flex>
        </Flex>
      </Flex>
    </main>
  );
}

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(176px, 1fr))',
  gridGap: '$medium',
  marginBottom: '$big',
});

const Grid2 = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
  gridGap: '$medium',
});
