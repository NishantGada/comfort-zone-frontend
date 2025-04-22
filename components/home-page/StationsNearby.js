import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions } from 'react-native';
import ToiletCardCarousel from './ToiletCardsCarousel';

const screenWidth = Dimensions.get('window').width;

const StationsNearby = () => {
	const cities = ['Thane', 'Mulund', 'Ghatkopar', 'Parel', 'Bandra'];
	const [selectedCity, setSelectedCity] = useState(cities[0]);
	const [stationsInSelectedCity, setStationsInSelectedCity] = useState([
		{
			"id": 1,
			"toilet_name": "alpha",
			"toilet_rating": "★★★★",
			"toilet_reviews": {
				"reviews_list": [],
				"count": 123
			},
			"toilet_image_url": require("../../assets/images/toilet_1.png"),
		},
		{
			"id": 2,
			"toilet_name": "beta",
			"toilet_rating": "★★★★★",
			"toilet_reviews": {
				"reviews_list": [],
				"count": 411
			},
			"toilet_image_url": require("../../assets/images/toilet_2.png"),
		},
		{
			"id": 3,
			"toilet_name": "gamma",
			"toilet_rating": "★★★",
			"toilet_reviews": {
				"reviews_list": [],
				"count": 96
			},
			"toilet_image_url": require("../../assets/images/toilet_3.png"),
		},
	]);

	const handleSelect = (city) => {
		setSelectedCity(city);
	};

	return (
		<View style={styles.stationsCloseToYouContainer}>
			<Text style={styles.stationsCloseToYouHeading}>Stations close to you</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.scrollContent}
			>
				{cities.map((city, index) => (
					<Pressable
						key={index}
						onPress={() => handleSelect(city)}
						style={[
							styles.nearbyCity,
							selectedCity === city && styles.selectedCity,
						]}
					>
						<Text style={selectedCity === city ? styles.selectedText : styles.unselectedText}>
							{city}
						</Text>
					</Pressable>
				))}
			</ScrollView>
			<ToiletCardCarousel data={stationsInSelectedCity} />
		</View>
	);
};

const styles = StyleSheet.create({
	stationsCloseToYouHeading: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	scrollContent: {
		gap: 12,
		paddingRight: 16,
	},
	nearbyCity: {
		backgroundColor: 'white',
		paddingVertical: 10,
		paddingHorizontal: 16,
		borderRadius: 16,
	},
	selectedCity: {
		backgroundColor: 'black',
	},
	unselectedText: {
		color: 'black',
	},
	selectedText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	toiletCard: {
		borderColor: "black",
		borderWidth: 2,
		width: screenWidth * 0.8,
		height: 300
	},
});

export default StationsNearby;
