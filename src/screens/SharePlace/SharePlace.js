import React, { Component } from "react";
import { Text, View } from "react-native";
import {connect} from 'react-redux';
import PlaceInput from "../../components/PlaceInput/PlaceInput";

class SharePlaceScreen extends Component {
  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{

  return {

  }
}
export default connect()(SharePlaceScreen);
