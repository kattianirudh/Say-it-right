import { View, Text, StyleSheet, Button, Pressable, Image } from 'react-native'
import React from 'react'
import UserProfile from '../assets/images/UserProfile.svg'
import house from '../assets/images/house.svg'
import Mic from '../assets/images/Mic.svg'

let arr = [
    {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }, {
      id: 1,
      name: 'Random',
      description: 'Random description',
    }
]

export default function Home(props) {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.header}>UserName</Text> 
          <Pressable onPress={() => props.navigation.navigate('Home')}>
            <Image style={styles.image} source={house} />
          </Pressable>
        </View>
        <View><TextInput style={styles.desc} placeholder="Username Description" />
        <Image source={Mic} style={[styles.icon, styles.image]} />
        </View>
        <View style={styles.scrollParent}>
        {/* <ScrollView style={styles.scroll} stickyHeaderIndices={[1]} contentContainerStyle={{ flex: 1 }}> */}
        {
          arr.map((item, index) => {
            return (
              <Pressable onPress={() => props.navigation.navigate('Group')}>
                <View style={styles.group}>
                  <Image style={[styles.icon, styles.groupImage]} source={UserProfile} />
                  <View style={styles.groupInfo}>
                    <View style={styles.groupNameContainer}>
                      <Text style={styles.groupNameText}>Group Name</Text>
                    </View>
                    <Text style={styles.groupDescription}>Group Description</Text>
                  </View>
                  <View style={styles.fullWidth}>
                    <Image style={[styles.icon ,styles.groupIcon]} source={rightChevron} />
                  </View>
                </View>
              </Pressable>
            )
        }
          )}
          )
     </View>
      </View>
    )
    } 
    const styles = StyleSheet.create({
        body: {
          padding: 30,
          position: 'relative',
        },
        image: {
          width: 50,
          height: 50,
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
        },
        header: {
          fontSize: 30,
          color: '#000000',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        icon: {
          width: 25,
          height: 25,
        }, 
        group: {
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          paddingBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#969FAA',
        },
         groupName: {
          fontSize: 20,
          fontWeight: 'bold',
        }, 
        groupInfo: {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 10,
        }, 
        groupNameText: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        groupImage: {
          marginTop: 10,
          width: 35,
          height: 35,
        },
        groupIcon: {
          flexDirection: 'flex-end',
          marginTop: 10,
          marginRight: 10,
        },
        fullWidth: {
          flex: 1,
          flexDirection: 'row-reverse',
        }, 
         groupNameContainer: {
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
        }, 
        scrollParent: {
          flex: 1,
          height: '50%',
        }
      })    
