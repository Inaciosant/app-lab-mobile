// screens/HomeScreen.js
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { Cog, ChevronRight } from 'lucide-react-native';
import BottomMenu from '../widgets/BottomMenu';


const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);


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

const InfoCard = ({ title, description, imageUrl, onPress }) => (
  <StyledView className="bg-white rounded-2xl overflow-hidden shadow-md mb-6">
    <StyledImage source={{ uri: imageUrl }} className="w-full h-40" resizeMode="cover" />
    <StyledView className="p-4 flex-row items-center justify-between">
      <StyledView>
        <StyledText className="text-lg font-bold text-gray-800">{title}</StyledText>
        <StyledText className="text-sm text-gray-500">{description}</StyledText>
      </StyledView>
      <StyledTouchableOpacity 
        onPress={onPress}
        className="bg-blue-500 rounded-full py-2 px-6"
      >
        <StyledText className="text-white font-semibold">Ir</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  </StyledView>
);

const RankingItem = ({ avatarUrl, name, role }) => (
    <StyledView className="flex-row items-center mb-4">
        <StyledImage source={{ uri: avatarUrl }} className="w-12 h-12 rounded-full mr-4" />
        <StyledView>
            <StyledText className="text-base font-semibold text-gray-800">{name}</StyledText>
            <StyledText className="text-sm text-gray-500">{role}</StyledText>
        </StyledView>
    </StyledView>
);


const HomeScreen = ({ navigation }) => {
  return (
    <StyledSafeAreaView className="flex-1 bg-gray-100">
      <StyledScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <StyledView className="flex-row justify-between items-center p-4 pt-6 px-5">
          <StyledText className="text-2xl font-bold text-gray-800">Athletica</StyledText>
          <StyledTouchableOpacity>
            <Cog size={24} color="#374151" />
          </StyledTouchableOpacity>
        </StyledView>

        <StyledView className="px-4 mt-4">
          {cardsData.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              onPress={() => navigation.navigate(card.screen)}
            />
          ))}
        </StyledView>

        <StyledView className="px-4 mt-4">
            <StyledText className="text-xl font-bold text-gray-800 mb-4">Performance Ranking</StyledText>
            <StyledView className="bg-white rounded-2xl p-4 shadow-md">
                {rankingData.map((item) => (
                    <RankingItem 
                        key={item.id}
                        name={item.name}
                        role={item.role}
                        avatarUrl={item.avatarUrl}
                    />
                ))}
            </StyledView>
        </StyledView>

      </StyledScrollView>
        <BottomMenu />
    </StyledSafeAreaView>
  );
};

export default HomeScreen;
