import { View, Text, Pressable, Image, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import UserProfile from '../assets/images/UserProfile.svg'
import searchIcon from '../assets/images/searchIcon.svg'

let arr = [
    {
      id: 1,
      name: 'Random',
      description: 'Random description',
    },
    {
        id: 1,
        name: 'Random',
        description: 'Random description',
      },
      {
        id: 1,
        name: 'Random',
        description: 'Random description',
      },
      {
        id: 1,
        name: 'Random',
        description: 'Random description',
      }
]

export default function Home(props) {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.header}>Create Group</Text>
          <Pressable onPress={() => props.navigation.navigate('UserProfile')}>
            <Image style={styles.image} source={UserProfile} />
          </Pressable>
        </View>
        <View>
          <TextInput style={styles.search} placeholder="Enter Group Name" />
          </View>
          <View><TextInput style={styles.desc} placeholder="Group Description" /></View>
          
          
          <View style={styles.buttonContainerSc}>
          <Pressable style={styles.button} onPress={() => props.navigation.navigate('UploadSc')}>
            <Text style={styles.buttonText}>Upload Schedule</Text>
          </Pressable>
          
          </View>
          <View style={styles.buttonContainerIg}>
          <Pressable style={styles.button} onPress={() => props.navigation.navigate('UploadImg')}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </Pressable>

          </View>
          
          <View><TextInput style={styles.search} placeholder="Search Members" />
          <Image style={[styles.icon ,styles.searchIcon]} source={searchIcon} />
            </View>
                  
            <View style={styles.scrollParent}>
          {/* <ScrollView style={styles.scroll} stickyHeaderIndices={[1]} contentContainerStyle={{ flex: 1 }}> */}
          {
            arr.map((item, index) => {
              return (
                
                  <View style={styles.group}>
                      
                    <View style={styles.groupInfo}>
                      <View style={styles.groupNameContainer}>
                        <Text style={styles.groupNameText}>Member Name</Text>
                        
                      </View>
                      
                    </View>
                    <View style={styles.fullWidth}>
                    <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => props.navigation.navigate('Add')}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          </View>
                    </View>
                  </View>
                
              )
            })
        }
        </View>
        <View style={styles.buttonContainer_fs}>
          <Pressable style={styles.button1} onPress={() => props.navigation.navigate('Save')}>
            <Text style={styles.buttonText}>Finish</Text>
          </Pressable>
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
    button1: {
        width: '100%',
        backgroundColor: '#000000',
        borderRadius: 10,
        marginTop: 50,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        
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
    search: {
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 10,
      padding: 10,
      paddingLeft: 35,
      marginTop: 20,
    },
    desc: {
        marginTop:10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        padding:5,
        height: 100,
      },
    searchIcon: {
      position: 'absolute',
      marginTop: 25,
      marginLeft: 7,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 1,
        marginBottom: 5,
      },
      buttonContainerIg: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 1,
        marginBottom: 10,
      },
      buttonContainer_fs: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 150,
        marginBottom: 10,
      },
      buttonContainerSc: {
        
        flex:1,
        marginTop: 5,
        marginBottom: 1,
      }, 
    icon: {
      width: 25,
      height: 25,
    }, group: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#969FAA',
    }, groupName: {
      fontSize: 20,
      fontWeight: 'bold',
    }, 
    groupInfo: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 10,
    }, groupNameText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    
    
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    fullWidth: {
      flex: 1,
      flexDirection: 'row-reverse',
    }, admin: {
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 1,
      paddingBottom: 1,
      borderWidth: 1,
      borderColor: '#8492A6',
      borderRadius: 4,
      marginLeft: 10,
      color: '#47525E',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }, groupNameContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
    },
    button: {
        width: '15%',
        backgroundColor: '#000000',
        borderRadius: 10,
        
        marginLeft: 600,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        
    },
    scrollParent: {
      flex: 1,
      height: '50%',
    }
  })
  