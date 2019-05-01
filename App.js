
import React, {Component} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const beginStates = {
    optionPlayer: "remove",
    optionPc: "remove",
    scorePlayer: 0,
    scorePc: 0
}

export default class App extends Component {
  constructor () {
    super()
    this.state = beginStates
  }
  changeOptionPc = () => {
    var options = ["hand-grab-o", "hand-paper-o", "hand-scissors-o"]
    var optionRandom = Math.floor(Math.random() * 3)
    return options [optionRandom]
  };
  reseStates = () => {
    this.setState(beginStates)
  }
  changeOption = (optionPlayer) => {
    var optionPc = this.changeOptionPc()
    this.setState({ optionPlayer: optionPlayer, optionPc: optionPc})
    if (optionPlayer == "hand-stone-o" && optionPc == "hand-scissors-o"){
      this.setState({ scorePlayer: this.state.scorePlayer + 1 })
    }
    else if (optionPlayer == "hand-grab-o" && optionPc == "hand-paper-o") {
      this.setState({ scorePc: this.state.scorePc + 1 })
    }
    else if (optionPlayer == "hand-paper-o" && optionPc == "hand-grab-o") {
      this.setState({ scorePlayer: this.state.scorePlayer + 1 })
  }
    else if (optionPlayer == "hand-paper-o" && optionPc == "hand-scissors-o") {
      this.setState({ scorePc: this.state.scorePc + 1 })
  }
    else if (optionPlayer == "hand-scissors-o" && optionPc == "hand-paper-o") {
        this.setState({ scorePlayer: this.state.scorePlayer + 1 })
    }
    else if (optionPlayer == "hand-scissors-o" && optionPc == "hand-grab-o") {
      this.setState ({ scorePc: this.state.scorePc + 1 })
  }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.viewTitle}>
          <Text style={styles.textTitle}>JoKenPo</Text>
        </View>
        <View style={styles.scoreBoard}>
          <Text style={styles.textScoreBoard}> Score </Text>
          <Text style={styles.textScoreBoard}> {this.scorePlayer} </Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScoreBoard}> You </Text>
          <Text style={styles.textScoreBoard}> 
          <Icon name={this.state.optionPlayer} size={50} color="#FFF"/> 
          </Text>
        </View>
        <View style={ styles.score}>
          <Text style={styles.textScoreBoard}> CPU </Text>
          <Text style={styles.scoreBoard}>
          <Icon name={this.state.optionPc} size={50} color="#FFF" />
          </Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScoreBoard}> Score </Text>
          <Text style={styles.textScoreBoard}>
            {this.state.scorePc}
          </Text>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.text}> Escolha uma Opção</Text>
        </View>
        <View style={styles.viewOption}>
          <Icon style={styles.option} name="hand-grab-o" size={50} color="#000" onPress={() =>{
            this.changeOption("hand-grab-o")
          }} />
          <Icon style={styles.option} name="hand-scissors-o" size={50} color="#000" onPress={() =>{
            this.changeOption("hand-scissors")
          }} />
          <Icon style={styles.option} name="hand-paper-o" size={50} color="#000" onPress={() =>{
            this.changeOption("hand-paper")
          }} />
        </View>
        <View style={styles.viewBtnResetStates}>
          <Button color="#654eb8" title={'Reiniciar'} onPress={() => {
            this.reseStates()
          }} />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  textTitle: {
    color: '#000',
    fontSize: 45,
    marginBottom: 50,
  },
  viewTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreBoard: {
    backgroundColor: '#654eb8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 150,
    margin: 5,
  },
  textScoreBoard: {
    color: 'white',
    fontSize: 30,
  },
  score: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  viewOption: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    marginHorizontal: 10,
  },
  viewBtnResetStates: {
    marginHorizontal: 150,
    marginVertical: 100,
    borderRadius: 100,
  },
});
