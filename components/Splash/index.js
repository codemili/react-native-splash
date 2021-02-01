import React, { Component } from 'react'
import AnimatedSplash from 'react-native-animated-splash-screen';

export default class Splash extends Component {
  
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('home');
    }, 2000);
  }

  render() {
    return (
      <>
        <AnimatedSplash
          translucent={true}
          isLoaded={false}
          logoImage={require('../../assets/launch_screen.png')}
          backgroundColor={'#262626'}
          logoHeight={150}
          logoWidth={150}></AnimatedSplash>
      </>
    );
  }
}
