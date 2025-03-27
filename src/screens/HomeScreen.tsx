import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, Switch, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  CreateAppointment: undefined;
  Profile: undefined;
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);

  const MeuSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
      <SwitchContainer>
        <Icon 
          name={isDarkMode ? "moon-o" : "sun-o"} 
          size={20} 
          color={isDarkMode ? "white" : "#173D6EFF"} 
        />
        <StyledSwitch 
          value={isDarkMode} 
          onValueChange={() => setIsDarkMode(!isDarkMode)} 
          thumbColor={isDarkMode ? theme.colors.primary : "#fff"}
          trackColor={{ false: "#ccc", true: theme.colors.primary }}
        />
      </SwitchContainer>
    );
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Minhas Consultas</HeaderTitle>
        <MeuSwitch />
      </HeaderContainer>

      <Content>
        <Button 
          title="Agendar Nova Consulta"
          icon={{
            name: 'calendar-plus-o',
            type: 'font-awesome',
            size: 20,
            color: 'white'
          }}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12
          }}
          onPress={() => navigation.navigate('CreateAppointment')}
        />

        <AppointmentList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AppointmentCard>
              <DoctorImage source={{ uri: item.doctor.image }} />
              <InfoContainer>
                <DoctorName>{item.doctor.name}</DoctorName>
                <Specialty>{item.doctor.specialty}</Specialty>
                <DateTime>{item.date} - {item.time}</DateTime>
              </InfoContainer>
            </AppointmentCard>
          )}
          ListEmptyComponent={
            <EmptyText>Nenhuma consulta agendada</EmptyText>
          }
        />
      </Content>
    </Container>
  );
};

const StyledSwitch = styled(Switch)`
  transform: scale(0.7);
`;

const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.View`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

const AppointmentList = styled(FlatList)`
  margin-top: ${theme.spacing.medium}px;
`;

const AppointmentCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
  flex-direction: row;
  align-items: center;
`;

const DoctorImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: ${theme.spacing.medium}px;
`;

const InfoContainer = styled.View`
  flex: 1;
`;

const DoctorName = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
`;

const Specialty = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.8;
`;

const DateTime = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
  margin-top: 4px;
`;

const EmptyText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  opacity: 0.6;
  margin-top: ${theme.spacing.large}px;
`;

export default HomeScreen;
