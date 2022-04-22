import { View, Text, Pressable, Image, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import UserProfile from '../assets/images/UserProfile.svg'
import searchIcon from '../assets/images/searchIcon.svg'



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
        <Text style={styles.header}>Add Members</Text>
        <Pressable onPress={() => props.navigation.navigate('UserProfile')}>
          <Image style={styles.image} source={UserProfile} />
        </Pressable>
      </View>
      <View>
        <TextInput style={styles.search} placeholder="Search Members" />
        <Image style={[styles.icon, styles.searchIcon]} source={searchIcon} />
      </View>
      <View style={styles.scrollParent}>
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
                      <Text style={styles.buttonText}>Add/Invite</Text>
                    </Pressable>
                  </View>
                </View>
              </View>

            )
          })
        }
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button1} onPress={() => props.navigation.navigate('Add')}>
          <Text style={styles.buttonText}>Finish</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  body: {
    padding: 20,
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
  searchIcon: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 7,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 5,
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
  }, group: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',

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
    fontSize: 15,
    // fontWeight: 'bold',
  },
  fullWidth: {
    flex: 1,
    flexDirection: 'row-reverse',
  }, admin: {
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 1,
    paddingBottom: 1,
    // borderWidth: 1,
    // borderColor: '#8492A6',
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
    // width: '15%',
    backgroundColor: '#000000',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: 'flex-end',
    // marginLeft: 600,
    height: 50,
    alignSelf: 'end',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

  },
  scrollParent: {
    flex: 1,
    height: '50%',
  }
})
