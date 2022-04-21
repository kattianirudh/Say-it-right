import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import UserProfile from '../assets/images/UserProfile.svg'
import searchIcon from '../assets/images/searchIcon.svg'
import rightChevron from '../assets/images/rightChevron.svg'
import SpeakerIcon from '../assets/images/SpeakerIcon.svg'
import plusIcon from '../assets/images/plusIcon.svg'

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

const GroupList = () => {
    return (
      <View>
        <View style={styles.backButton}>
          <Pressable style={styles.homeButton} onPress={() => this.props.navigation.navigate('Home')}>
              <Image style={styles.backIcon} source={require('../assets/images/leftChevron.svg')} />
              <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
        </View>
        <View style={styles.header}>
            <View style={styles.headerText}>
                <Text style={styles.header}>Groups Name</Text>
                <Text style={styles.subtitle}>Groups Description</Text>
            </View>
            <Pressable>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Class Schedule</Text>
                </View>
            </Pressable>
        </View>
        <View style={styles.scrollParent}>
          {
            arr.map((item, index) => {
                return (
                <Pressable onPress={() => props.navigation.navigate('Group')} key={index} >
                    <View style={styles.group} key={index}>
                    <Image style={[styles.icon, styles.groupImage]} source={UserProfile} />
                    <View style={styles.groupInfo}>
                        <View style={styles.groupNameContainer}>
                        <Text style={styles.groupNameText}>Member Name</Text>
                        <Text style={styles.admin}>See More</Text>
                        </View>
                    </View>
                    <View style={styles.fullWidth}>
                        <Image style={[styles.icon ,styles.groupIcon]} source={SpeakerIcon} />
                    </View>
                    </View>
                </Pressable>
                )
            })
          }
        </View>
        <View style={styles.floatingButtonContainer}>
          <Pressable style={styles.floatingButton} onPress={() => this.props.navigation.navigate('Group')}>
              <Text style={styles.plusButton}>+</Text>
              {/* <Image style={styles.floatingButtonIcon} source={plusIcon} /> */}
              <Text style={styles.floatingButtonText}>Add Group</Text>
          </Pressable>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    backButton: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
    },
    backIcon: {
        width: 20,
        height: 16,
    },
    homeButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 20,
        color: '#47525E',
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 5,
    },
    header:{
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtitle:{
        fontSize: 12,
        color: '#47525E',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 5,
        marginRight: 25,
        height: 32  ,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        border: '1px solid #8492A6',
    },
    headerText:{
        marginLeft: 20,
    }, buttonText: {
        color: '#47525E',
    },
    scrollParent: {
        flex: 1,
        height: '50%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    group: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
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
    },
      groupImage: {
        marginTop: 10,
        width: 35,
        height: 35,
    },
      groupIcon: {
        marginTop: 10,
        marginRight: 10,
    }, admin: {
        textDecorationLine: 'underline',
    },
    icon: {
        width: 25,
        height: 25,
    },
    groupIcon: {
        marginTop: 10,
        marginRight: 10,
    },
    fullWidth: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    floatingButtonContainer: {
        position: 'fixed',
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    floatingButton: {
        borderRadius: 5,
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
    },
    floatingButtonText: {
        color: '#FFFFFF',
    },
    floatingButtonIcon: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
    },
    plusButton : {
        fontSize: 15,
        color: '#FFFFFF',
        marginRight: 5,
    },
});

export default GroupList;