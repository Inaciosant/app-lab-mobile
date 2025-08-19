import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, Text, Image, Button, ScrollView, Card, H2, H4 } from 'tamagui';
import { Cog } from 'lucide-react-native';
import BottomMenu from '../widgets/BottomMenu'; 

const cardsData = [
  {
    id: 1,
    title: 'Gerenciar Treinos',
    description: 'Planeje e visualize treinos',
    imageUrl: 'https://placehold.co/600x400/a3b899/ffffff?text=Treino',
    screen: 'Workouts',
  },
  {
    id: 2,
    title: 'Gerenciar Atletas',
    description: 'Gerencie seus atletas',
    imageUrl: 'https://placehold.co/600x400/6b8e6b/ffffff?text=Atletas',
    screen: 'Athletes',
  },
  {
    id: 3,
    title: 'Ver Estatísticas',
    description: 'Visualize painéis de performance',
    imageUrl: 'https://placehold.co/600x400/f0e3c4/ffffff?text=Stats',
    screen: 'Stats',
  },
  {
    id: 4,
    title: 'Configurações',
    description: 'Configurações do app e perfil',
    imageUrl: 'https://placehold.co/600x400/d1e7dd/ffffff?text=UI',
    screen: 'Settings',
  },
];

const rankingData = [
  { id: 1, name: 'Ethan Carter', role: 'Atleta', avatarUrl: 'https://placehold.co/100x100/e0e0e0/000000?text=EC' },
  { id: 2, name: 'Olivia Bennett', role: 'Atleta', avatarUrl: 'https://placehold.co/100x100/d1d1d1/000000?text=OB' },
  { id: 3, name: 'Noah Thompson', role: 'Atleta', avatarUrl: 'https://placehold.co/100x100/c2c2c2/000000?text=NT' },
  { id: 4, name: 'Ava Harper', role: 'Atleta', avatarUrl: 'https://placehold.co/100x100/b3b3b3/000000?text=AH' },
  { id: 5, name: 'Liam Foster', role: 'Atleta', avatarUrl: 'https://placehold.co/100x100/a4a4a4/000000?text=LF' },
];

// --- Reusable Components (Refactored) ---

const InfoCard = ({ title, description, imageUrl, onPress }) => (
  <Card elevated size="$4" bordered marginBottom="$6" overflow="hidden">
    <Card.Header padding={0}>
      <Image
        source={{ uri: imageUrl }}
        width="100%"
        height={160}
        resizeMode="cover"
      />
    </Card.Header>
    <Card.Footer padding="$4" alignItems="center" justifyContent="space-between">
      <YStack>
        <H4>{title}</H4>
        <Text theme="alt2">{description}</Text>
      </YStack>
      <Button theme="blue" onPress={onPress}>Ir</Button>
    </Card.Footer>
  </Card>
);

const RankingItem = ({ avatarUrl, name, role }) => (
  <XStack alignItems="center" marginBottom="$4">
    <Image
      source={{ uri: avatarUrl }}
      width={48}
      height={48}
      borderRadius={24}
      marginRight="$4"
    />
    <YStack>
      <Text fontSize="$6" fontWeight="600">{name}</Text>
      <Text theme="alt2">{role}</Text>
    </YStack>
  </XStack>
);


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f4f6' }}>
      <YStack flex={1} backgroundColor="$background">
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <XStack justifyContent="space-between" alignItems="center" padding="$4" paddingTop="$6" paddingHorizontal="$5">
            <H2>Athletica</H2>
            <Button icon={Cog} chromeless />
          </XStack>

          <YStack paddingHorizontal="$4" marginTop="$4">
            {cardsData.map((card) => (
              <InfoCard
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                onPress={() => navigation.navigate(card.screen)}
              />
            ))}
          </YStack>

          <YStack paddingHorizontal="$4" marginTop="$4">
            <H4 marginBottom="$4">Performance Ranking</H4>
            <YStack backgroundColor="$background" borderRadius="$6" padding="$4" elevation="$2">
              {rankingData.map((item) => (
                <RankingItem
                  key={item.id}
                  name={item.name}
                  role={item.role}
                  avatarUrl={item.avatarUrl}
                />
              ))}
            </YStack>
          </YStack>
        </ScrollView>
        <BottomMenu />
      </YStack>
    </SafeAreaView>
  );
};

export default HomeScreen;