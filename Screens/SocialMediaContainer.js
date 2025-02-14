import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import DarkModeContext from '../Settings/DarkMode';
const SocialMediaContainer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  
  const facebookFollowers = 10000;
  const twitterFollowers = 15000;
  const instagramFollowers = 25000;

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : null]}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : null]}>Follow Us</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.icon} onPress={() => openSocialMediaProfile('facebook')}>
          <Image
            source={require('../assets/SocialMedia/facebook.png')}
            style={styles.iconImage}
          />
          <Text style={[styles.iconText, isDarkMode ? styles.darkIconText : null]}>{facebookFollowers} followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => openSocialMediaProfile('twitter')}>
          <Image
            source={require('../assets/SocialMedia/twitter.png')}
            style={styles.iconImage}
          />
          <Text style={[styles.iconText, isDarkMode ? styles.darkIconText : null]}>{twitterFollowers} followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => openSocialMediaProfile('instagram')}>
          <Image
            source={require('../assets/SocialMedia/instagram.png')}
            style={styles.iconImage}
          />
          <Text style={[styles.iconText, isDarkMode ? styles.darkIconText : null]}>{instagramFollowers} followers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  darkContainer: {
    backgroundColor: '#333',
    borderTopColor: '#555',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  darkTitle: {
    color: '#fff',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  },
  darkIconText: {
    color: '#bbb',
  },
});

export default SocialMediaContainer;
