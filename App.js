import { View, Text } from 'react-native';

const Exo1 = () => {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'green', flex:2}}></View>
      <View style={{backgroundColor:'red', flex:1}}></View>
      <View style={{backgroundColor:'blue', flex:3}}></View>
    </View>
  )
};

const Exo2 = () => {
  return (
    <View style={{flex:1, flexDirection:'row'}}>
      <View style={{backgroundColor:'green', flex:3}}></View>
      <View style={{backgroundColor:'red', flex:2}}></View>
      <View style={{backgroundColor:'blue', flex:1}}></View>
    </View>
  )
};

const Exo3 = () => {
  return (
    <View style={{flex:1}}>

      <View style={{flex:1, flexDirection:'row'}}>
        <View style={{backgroundColor:'green', flex:3}}></View>
        <View style={{backgroundColor:'red', flex:2}}></View>
        <View style={{backgroundColor:'blue', flex:1}}></View>
      </View>

        <View style={{flex:1}}>
          <View style={{backgroundColor:'purple', flex:3}}></View>
          <View style={{backgroundColor:'yellow', flex:2}}></View>
          <View style={{backgroundColor:'pink', flex:1}}></View>
        </View>

    </View>
  )
};

const Exo4 = () => {
  return (
    <View style={{flex:1}}>

        <View style={{flex:1, flexDirection:'row'}}>

          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{backgroundColor:'blue', flex:1}}></View>
            <View style={{backgroundColor:'red', flex:2}}></View>
          </View>

          <View style={{flex:1}}>
            <View style={{backgroundColor:'purple', flex:3}}></View>
            <View style={{backgroundColor:'yellow', flex:2}}></View>
            <View style={{backgroundColor:'pink', flex:1}}></View>
          </View>

      </View>  

      <View style={{backgroundColor:'gray', flex:1}}></View>

    </View>
  )
};

const Exo5 = () => {
  return (
    <View style={{flex:1}}>

        <View style={{flex:1, flexDirection:'row'}}>

          <View style={{flex:3}}>
            <View style={{backgroundColor:'purple', flex:3}}></View>
            <View style={{backgroundColor:'yellow', flex:2}}></View>
            <View style={{backgroundColor:'pink', flex:1}}></View>
          </View>

          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{backgroundColor:'red', flex:2}}></View>
            <View style={{backgroundColor:'blue', flex:1}}></View>
          </View>

          <View style={{flex:1}}>
            <View style={{backgroundColor:'cyan', flex:3}}></View>
            <View style={{backgroundColor:'magenta', flex:2}}></View>
          </View>

        </View>

        <View style={{backgroundColor:'gray', flex:1}}></View>

    </View>
  )
};

export default Exo1