import { Navigation } from 'react-native-navigation'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'



export const goToHome = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'EXPLORE',
                        icon: require('../images/heart.png')
                      }
                    }
                  },
                },
                {
                  component: {
                    name: 'Saved',
                    options: {
                      bottomTab: {
                        text: 'SAVED',
                        fontSize: 12,
                        icon: require('../images/heart.png')
                      }
                    }
                  },
                },
                {
                  component: {
                    name: 'Trips',
                    options: {
                      bottomTab: {
                        text: 'TRIPS',
                        fontSize: 12, 
                        icon: require('../images/airbnb.png')
                      }
                    }
                  },
                },
                {
                  component: {
                    name: 'Inbox',
                    options: {
                      bottomTab: {
                        text: 'INBOX',
                        fontSize: 12, 
                        icon: require('../images/inbox.png')
                      }
                    }
                  },
                },
                {
                  component: {
                    name: 'Profile',
                    options: {
                      bottomTab: {
                        text: 'PROFILE',
                        fontSize: 12, 
                        icon: require('../images/user.png')
                      }
                    }
                  },
                },
              ],
              options: {
                bottomTab: {
                  iconColor: 'white',
                  selectedIconColor: 'pink',
                  textColor: 'white',
                  selectedTextColor: 'pink'
                }
              }
        }
    }
})
export const goLogin = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
              name: 'Password'
          }
        },
        {
          component: {
              name: 'Email'
          }
        },
        {
          component: {
            name: 'SignUp',
          }
        },
        {
            component: {
                name: 'Login'
            }
        }
    ],
    options: {
      topBar: {
        visible: false
      }
    }
    }
  }
})