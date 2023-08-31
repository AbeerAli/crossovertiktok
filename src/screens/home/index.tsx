import { View, Text, Image, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedNavigation from '../../navigation/feednavigation';
import ProfileSettings from '../profile';


const BottomTab = createBottomTabNavigator()
const EmptyScreen = () =>
{
    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}><Text>A blank screen</Text></View>
    )
}
export default function HomeScreen() {
	const theme = useColorScheme();
	const isDarkTheme = theme === 'dark';
	return (
		<BottomTab.Navigator
				screenOptions={{
					tabBarStyle: { backgroundColor: "black", borderWidth: 0 },
					headerShown: false,
					tabBarActiveTintColor: "white",
				}}
			>
				<BottomTab.Screen
					name="Home"
					component={FeedNavigation}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={require("./home.png")}
								style={[
									styles.bottomTabIcon,
									focused && styles.bottomTabIconFocused,
								]}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="Discover"
					component={EmptyScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={require("./search.png")}
								style={[
									styles.bottomTabIcon,
									focused && styles.bottomTabIconFocused,
								]}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="NewVideo"
					component={EmptyScreen}
					options={{
						tabBarLabel: () => null,
						tabBarIcon: ({ focused }) => (
							<Image
								source={require("./new-video.png")}
								style={[
									styles.newVideoButton,
									focused && styles.bottomTabIconFocused,
								]}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="Inbox"
					component={EmptyScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={require("./message.png")}
								style={[
									styles.bottomTabIcon,
									focused && styles.bottomTabIconFocused,
								]}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="Profile"
					component={ProfileSettings}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={require("./user.png")}
								style={[
									styles.bottomTabIcon,
									focused && styles.bottomTabIconFocused,
								]}
							/>
						),
					}}
				/>
			</BottomTab.Navigator>
	)
}

const styles = StyleSheet.create({
	bottomTabIcon: {
		width: 20,
		height: 20,
		tintColor: "grey",
	},
	bottomTabIconFocused: {
		tintColor: "white",
	},
	newVideoButton: {
		width: 50,
		height: 25,
	},
});
