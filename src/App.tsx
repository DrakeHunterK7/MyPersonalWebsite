// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { Center, MantineProvider, createTheme, SegmentedControl, Stack, Image, Group, Text, Flex} from '@mantine/core';
import { useState } from 'react';
import myPhoto from "../src/assets/me.png";
import myCoolerPhoto from "../src/assets/mebutcooler.png";

export default function App() {

  const [value, setValue] = useState('anas');

  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'ocean-blue',
    colors: {
      'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
      'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      'pale-violet': [  "#f6eeff", "#e7daf7", "#cab1ea", "#ad86dd", "#9562d2", "#854bcb", "#7d3ec9", "#6b31b2", "#5f2aa0", "#52228d" ],
      'black': [  "#f5f5f5",  "#e7e7e7",  "#cdcdcd",  "#b2b2b2",  "#9a9a9a",  "#8b8b8b",  "#848484",  "#717171",  "#656565",  "#575757"],
    },
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <div style={{ 
        width: "100vw", 
        height: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "center", 
        backgroundColor: value==='anas' ? "#0f0f0f": "purple"}}>
        <Flex
          mih={50}
          bg={value==='anas' ? "black.9" : "pale-violet.9"}
          gap="xs"
          justify="center"
          align="center"
          direction="row"
          wrap="nowrap"
          p="2rem"
          w="100%"
          h="fit-content"
        >
          <Group gap="xl">
            <Center >
            <Stack>
              <Image
                radius="md"
                h="auto"
                w="25vw"
                miw="10rem"
                fit="contain"
                src={value==='anas' ? myPhoto : myCoolerPhoto}
              />

              <SegmentedControl
              value={value}
              onChange={setValue}
              color={value==='anas' ? "black.7" : "pale-violet.7"}
              data={[
                { label: 'Anas', value: 'anas' },
                { label: 'Cooler Anas', value: 'cooleranas' }
              ]}
              />
            </Stack>
          </Center>
          <Center w="25vw" ta="center">
            {
            value==='anas' 
            ? <Text fs="italic">My purpose in life is to make something better.</Text>
            : <Text
                fw={900}
                variant="gradient"
                gradient={{ from: "bright-pink.4", to: "bright-pink.2", deg: 180 }}
              >
                My purpose in life is to have fun and do nothing productive.
              </Text>
            }
          </Center>
          </Group>
        </Flex>
        
        </div>
    </MantineProvider>
  );
  
}