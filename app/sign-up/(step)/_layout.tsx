import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="step1" options={{ title: 'Step 123' }}/>
      <Stack.Screen name="step2" />
    </Stack>
  );
}