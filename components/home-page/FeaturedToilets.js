import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ToiletCardCarousel from './ToiletCardsCarousel';

export default function FeaturedToilets() {
	const [featuredStationsInSelectedCity, setFeaturedStationsInSelectedCity] = useState([
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

	return (
		<View>
			<Text style={styles.featuredToiletsHeading}>Featured Toilets</Text>
			<ToiletCardCarousel data={featuredStationsInSelectedCity} />
		</View>
	)
}

const styles = StyleSheet.create({
	featuredToiletsHeading: {
		fontSize: 22,
		fontWeight: 'bold',
	},
})